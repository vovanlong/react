import React, {Component} from 'react';
import {FlatList, Switch, View} from 'react-native';
import ItemView from "./ItemView";
import {getListCoin} from "../api/api";
import {connect} from 'react-redux';
import {actionStart, actionError, actionSuccess, actionGetCoins} from "../redux/coin/CoinAction";
import {changeTheme} from "../redux/theme/ThemeAction";
import {fetchNews} from "../api/news";
import {realm} from '../db/Realm'
import UserDao from "../db/dao/UserDao";

class ReduxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: false
        };
        this.userDao = new UserDao();
    }

    componentDidMount() {
        // let now = moment();
        // console.log('moment now:', now);
        this.onRefreshWithThunk();
        fetchNews().then(news => {
            console.log(news);
        }).catch(error => {
            console.log('error', error)
        });
    }

    _keyExtractor = (item) => item.id.toString();

    _onPressItem = (item) => {
        this.userDao.save(item);
    };

    _renderItem = ({item, index}) => (
        <ItemView
            onItemPress={this._onPressItem}
            item={item}
            index={index}
            like={item.like}
            // onItemPress={this.onItemPress}
        />
    );

    // onItemPress = (item) => {
    //     this.props.navigation.navigate('Detail', {item});
    // };

    onRefresh = () => {
        // this.setState({loading: true});
        this.props.actionStart();
        getListCoin().then(data => {
            // this.setState({data, loading: false});
            this.props.actionSuccess(data);
        }).catch(error => {
            // this.setState({loading: false});
            this.props.actionError(error);
            alert(JSON.stringify(error));
        })
    };

    onRefreshWithThunk = () => {
        this.props.actionGetCoins();
    };

    render() {
        return (
            <View style={{flex: 1, marginTop: 40}}>
                <Switch
                    onValueChange={this.onSwitch}
                    value={this.state.mode}
                />
                <FlatList
                    ref={r => this.list = r}
                    style={{marginTop: 40}}
                    data={this.props.data}
                    refreshing={this.props.loading}
                    onRefresh={this.onRefreshWithThunk}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>

        );
    }

    onSwitch = (mode) => {
        this.setState({mode});
        this.props.changeTheme(mode ? 'dark' : 'light');
    }
}

const mapState2Props = (state) => {
    return {
        loading: state.coin.loading,
        data: state.coin.data,
        error: state.coin.error
    };
};

const mapAction2Props = {
    actionGetCoins,
    actionError,
    actionSuccess,
    actionStart,
    changeTheme
};

export default connect(mapState2Props, mapAction2Props)(ReduxDemo)