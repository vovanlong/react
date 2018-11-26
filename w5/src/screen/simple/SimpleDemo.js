import React, {Component} from 'react';
import {
    View,
    StyleSheet, Switch
} from 'react-native';
import {connect} from 'react-redux';
import DisplayView from "./view/DisplayView";
import InputView from "./view/InputView";
import Button from "./view/Button";
import ThemeView from "../../components/ThemeView";
import {changeTheme} from "../../redux/theme/ThemeAction";
import {getMode, saveMode} from "../../store";

const data = [
    {name: 'react-native'},
    {name: 'node'},
    {name: 'android'},
    {name: 'ios'},
    {name: 'react-native'},
    {name: 'react-native'},
];

class SimpleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: false
        }
    }

    componentDidMount() {
        getMode().then(theme => {
            this.props.actionChangeTheme(theme);
            let mode = theme === 'dark';
            this.setState({mode});
        });


    }

    /**
     * search by name
     * @param name
     */
    search = (name) => {
        let displayArr = data.filter(element => {
            if (element.name.indexOf(name) !== -1) {
                return element;
            }
        })
    };

    render() {

        const {theme} = this.props;

        return (
            <ThemeView
                theme={theme}
                darkColor={'#ffffff'}
                lightColor={'#8ba4cc'}
                style={styles.container}
            >
                <DisplayView/>
                <InputView/>
                <Button/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ThemeView
                        style={{height: 70, justifyContent: 'center', alignItems: 'center'}}
                        darkColor={'#ff0000'}
                        lightColor={'#cccccc'}
                        theme={theme}
                    >
                        <Switch
                            onValueChange={this.onSwitch}
                            value={this.state.mode}
                        />
                    </ThemeView>
                </View>
            </ThemeView>
        );
    }

    onSwitch = async (mode) => {
        this.setState({mode});
        //Save mode to local
        const theme = mode ? 'dark' : 'light';
        await saveMode(theme);
        // Call action
        this.props.actionChangeTheme(theme);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    }
};

const mapAction2Props = {
    actionChangeTheme: changeTheme
};

export default connect(mapStateToProps, mapAction2Props)(SimpleDemo);


