import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

class NewComponent extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect(null)(NewComponent);

