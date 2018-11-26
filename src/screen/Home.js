import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ListItem from '../component/ListItem';
import HeaderCoin from '../component/HeaderCoin';
import Input from '../component/Input';
import { connect } from 'react-redux'
import { actionGetCoins } from '../redux/actions/coinAction'


const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      row: ['#', 'Name', 'Market Cap', 'Price', 'Volumn (24)']
    };
  }

  componentDidMount() {
    const data = Promise.resolve(this.props.data);
    data.then(value => {
      this.setState({
        data: value
      });
      // console.log(this.state.data);
    });
    this.props.actionGetCoins()
  }

  _keyExtractor = (item, index) => {
    return item.id;
  };

  render() {
    const { isFetching } = this.props
    console.log(isFetching)
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>

        </View>
        <View style={styles.listCoin}>
          <FlatList
            data={this.props.data}
            renderItem={({ item, index }) => {
              return <ListItem item={item} index={index} />;
            }}
            keyExtractor={this._keyExtractor}
            refreshing={isFetching}
            onRefresh={this.props.actionGetCoins}
          />
        </View>
      </View>
    );
  }
}


const mapState2Props = (state) => {

  return {
    data: state.data,
    isFetching: state.isFetching
  }
};
const mapAction2Props = {
  actionGetCoins,

};

export default connect(mapState2Props, mapAction2Props)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  listCoin: {
    flex: 5,
  },
  header: {
    flex: 1,
  }
});
actionGetCoins