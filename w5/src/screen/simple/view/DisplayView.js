import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text
} from 'react-native';


import {connect} from "react-redux";
import ThemeView from "../../../components/ThemeView";
import {DARK, LIGHT} from "../../../res/colors";

class DisplayView extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Use store value: this.props.index
     * @returns {*}
     */
    render() {
        const {theme} = this.props;
        return (
            <ThemeView
                style={styles.container}
                darkColor={'#2c3b79'}
                lightColor={'#637978'}
                theme={theme}
            >
                <Text style={styles.text}>Value: {this.props.index}</Text>
            </ThemeView>
        );
    }
}

/**
 * Chuyen gia tri tu store sang props cua component
 * @param state ~ store
 * @returns {{index: *}} ~ this.props.index
 */
const mapState2Props = (state) => {
    return {
        index: state.value,
        theme: state.theme
    }
};
/**
 * Chuyen gia tri action vao props
 * @type {{}}
 */
const mapAction2Props = {};

/**
 * connect(mapState, mapAction)(NameOfComponent)
 */
export default connect(mapState2Props, mapAction2Props)(DisplayView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    text: {
        fontSize: 40,
        color: '#ffffff'
    }
});
