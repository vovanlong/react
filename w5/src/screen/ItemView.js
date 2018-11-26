import React, {PureComponent} from 'react';
import {
    StyleSheet, Text, TouchableOpacity, Image
} from 'react-native';
import {connect} from 'react-redux';
import {DARK, LIGHT} from "../res/colors";
import icon_check from '../res/img/ic_check.png';
import icon_check_gray from '../res/img/ic_check_gray.png';
import {actionLike} from "../redux/coin/CoinAction";
import {pushScreen} from "../router/NavigationAction";

class ItemView extends PureComponent {

    render() {
        const {item, theme, index, like, onItemPress} = this.props;
        const color = theme === 'light' ? LIGHT : DARK;
        const name = item && item.name || '';
        const price_usd = item && item.price_usd || 0;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.pushScreen('Detail')
                    // this.props.pushScreen('Detail', {item})
                    // onItemPress && onItemPress(item);
                }}
                style={styles.item_container}
            >
                <Text style={[styles.item_text, {color}]}>{name}</Text>
                <Text style={[styles.item_text, {color}]}>{price_usd}</Text>
                {this.renderCheckBox(item)}
            </TouchableOpacity>
        );
    }

    renderCheckBox = (item) => {
        // const icon = isCheck ? icon_check : icon_check_gray;
        const icon = icon_check;
        return (
            <TouchableOpacity
                style={styles.bt_check}
                onPress={() => {
                    // this.props.actionLike(index, !isCheck);
                    this.props.onItemPress(item);
                }}
            >
                <Image
                    style={styles.icon_check}
                    resizeMode={'contain'}
                    source={icon}
                />
            </TouchableOpacity>
        )
    }
}

const mapState2Props = (state) => {
    return {
        theme: state.theme.theme
    }
};

const mapAction2Props = {
    actionLike,
    pushScreen
};
export default connect(mapState2Props, mapAction2Props)(ItemView);

const styles = StyleSheet.create({
    item_container: {
        width: '100%',
        height: 70,
        justifyContent: 'center'
    },
    item_text: {
        fontSize: 20,
        marginLeft: 20,
    },
    icon_check: {
        width: 40,
        height: 40
    },
    bt_check: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 10
    }
});

