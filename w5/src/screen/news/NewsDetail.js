import React, {Component} from 'react';
import {
    View,
    StyleSheet, WebView
} from 'react-native';

const URL = 'https://cointelegraph.com/news/wsj-sec-opened-probe-into-erik-voorhees-crypto-loans-firm-over-2017-50-mln-token-sale';
export default class NewsDetail extends Component {


    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{flex: 1}}
                    url={URL}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

