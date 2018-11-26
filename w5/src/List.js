import React, {PureComponent, Component} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';

class MyListItem extends Component {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity
                style={{width: '100%', height: 70, justifyContent: 'center'}}
                onPress={this._onPress}
            >
                <View>
                    <Text style={{color: textColor, fontSize: 20}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class List extends PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item) => item.id.toString();

    _onPressItem = (id: string) => {
        const {selected} = this.state;
        selected.set(id, !selected.get(id));
        this.setState({selected});

        // this.setState((state) => {
        //     const selected = new Map(state.selected);
        //     selected.set(id, !selected.get(id));
        //     return {selected};
        // });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.id + "-" + item.name}
        />
    );

    render() {
        return (
            <View style={{flex: 1, marginTop: 40}}>
                <TouchableOpacity
                    onPress={() => {
                        this.list.scrollToIndex({index: 3});
                    }}
                >
                    <Text>Scroll</Text>
                </TouchableOpacity>

                <FlatList
                    ref={r => this.list = r}
                    style={{marginTop: 40}}
                    data={this.props.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>

        );
    }
}