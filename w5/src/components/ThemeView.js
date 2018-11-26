import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ThemeView extends Component {

    render() {
        let darkColor = this.props.darkColor || '#000000';
        let lightColor = this.props.lightColor || '#ffffff';
        const theme = this.props.theme || 'light';
        const {style, children} = this.props;
        const backgroundColor = theme === 'light' ? lightColor : darkColor;
        return (
            <View
                style={[
                    styles.default,
                    style,
                    {backgroundColor}
                ]}
            >
                {children}
            </View>
        );
    }
}

ThemeView.propTypes = {
    darkColor: PropTypes.any,
    lightColor: PropTypes.any,
    theme: PropTypes.string
};


const styles = StyleSheet.create({
    default: {
        width: 200,
        height: 50
    }
});

