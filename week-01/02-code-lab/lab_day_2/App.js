import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch, TouchableOpacity, ScrollView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            name: 'React'
        }
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        return {...nextProps, ...{name: 'genbacoder'}}
    }

    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <View style={styles.view_1}>
                    <Text>{this.state.name}</Text>
                </View>
                <View style={styles.view_3}>
                    <View style={styles.child_1}/>
                    <View style={styles.child_2}/>
                    <View style={styles.child_3}/>
                </View>

            </View>
        );
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        // marginTop: 40,
        backgroundColor: '#000000',
        justifyContent: 'center'
    },
    view_1: {
        height: '20%',
        backgroundColor: '#ff0000',
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2
    },
    view_3: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3447ff'
    },
    child_1: {
        flex: 1,
        backgroundColor: '#3447ff'
    },
    child_2: {
        flex: 1,
        backgroundColor: '#a0ffec'
    },
    child_3: {
        flex: 1,
        backgroundColor: '#ff9041'
    },
    image: {
        position: 'absolute',
        width: 200,
        height: 200,
        // bottom: 0,
        top: 0,
        alignSelf: 'center'
    },
    image_1: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: 800,
        alignSelf: 'center'
    }
});