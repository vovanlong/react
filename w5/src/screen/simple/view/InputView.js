import React, {Component} from 'react';
import {
    View,
    StyleSheet, TextInput, TouchableOpacity, Text
} from 'react-native';


import {connect} from "react-redux";
import {setValue} from "../../../redux/theme/ThemeAction";
import ThemeView from "../../../components/ThemeView";
import {DARK, LIGHT} from "../../../res/colors";

class InputView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {

        const {mode} = this.props;
        return (
            <ThemeView
                theme={mode}
                style={styles.container}
                darkColor={DARK}
                lightColor={LIGHT}
            >
                <TextInput
                    ref={r => this.input = r}
                    style={styles.input_style}
                    placeholder={'Input value'}
                    onChangeText={this.onValueChange}
                />
                <TouchableOpacity
                    style={styles.button_style}
                    onPress={this.onPress}
                >
                    <Text style={styles.text_button}>SET VALUE</Text>
                </TouchableOpacity>
            </ThemeView>
        );
    }

    onPress = () => {
        if (this.state.value) {
            this.props.actionSet(this.state.value);
            this.input.clear();
        }
    };
    onValueChange = (text) => {
        try {
            let value = parseInt(text);
            this.setState({value});
        } catch (e) {
            console.log(e);
        }
    };
}

const mapState2Props = (state) => {
    return {
        mode: state.theme
    }
};

export default connect(mapState2Props, {actionSet: setValue})(InputView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20
    },
    button_style: {
        width: '60%',
        height: 50,
        backgroundColor: '#797739',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_style: {
        width: '60%',
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#ffffff',
        color: '#797739'
    },
    text_button: {
        fontSize: 20,
        color: '#ffffff'
    }
});



