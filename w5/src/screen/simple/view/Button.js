import React, {Component} from 'react';
import {
    StyleSheet, TouchableOpacity, Text, View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {decrease, increase} from "../../../redux/theme/ThemeAction";
import ThemeView from "../../../components/ThemeView";

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {theme} = this.props;
        return (
            <ThemeView
                theme={theme}
                darkColor={'#515854'}
                lightColor={'#b5ffc2'}
                style={styles.container}
            >
                <TouchableOpacity
                    style={[styles.button, styles.button_increase]}
                    onPress={this.onIncreasePress}
                >
                    <Text style={styles.text_button}>INCREASE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.button_decrease]}
                    onPress={this.onDecreasePress}
                >
                    <Text style={styles.text_button}>DECREASE</Text>
                </TouchableOpacity>
            </ThemeView>
        );
    }

    onIncreasePress = () => {
        this.props.actionIncrease();
    };

    onDecreasePress = () => {
        this.props.actionDecrease();
    };
}

const mapAction2Props = {
    actionIncrease: increase,
    actionDecrease: decrease
};


const mapState2Props = (state) => {
    return {
        theme: state.theme
    }
};

export default connect(mapState2Props, mapAction2Props)(Button);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    button: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_increase: {
        backgroundColor: '#2c3b79',
        marginRight: 20
    },
    button_decrease: {
        backgroundColor: '#2c3b79',
        marginLeft: 20
    },
    text_button: {
        fontSize: 15,
        color: '#ffffff'
    }
});



