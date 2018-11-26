import React, {Component} from 'react';
import {
    View,
    StyleSheet, ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';

class LoadingView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    animating={this.props.loading}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const mapState2Props = (state) => {
    return {
        loading: state.coin.loading
    }
};
export default connect(mapState2Props)(LoadingView);

