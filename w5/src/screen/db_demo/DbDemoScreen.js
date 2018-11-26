import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text, TouchableOpacity, TextInput
} from 'react-native';
import UserDao from "../../db/dao/UserDao";

export default class DbDemoScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            count: 0,
            users: []
        };
        this.userDao = new UserDao();
    }

    componentDidMount() {
        this.getCount();
        this.userDao.listen(() => {
            this.getCount();
        });
    }

    getCount = () => {
        const users = this.userDao.getAll();
        this.setState({users, count: users.length});
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <TextInput
                        placeholder={'Input first name'}
                        style={{
                            width: '100%',
                            height: 70,
                            fontSize: 20,
                            paddingLeft: 50
                        }}
                        onChangeText={this.onFirstNameChange}
                    />

                    <TextInput
                        placeholder={'Input last name'}
                        style={{
                            width: '100%',
                            height: 70,
                            fontSize: 20,
                            paddingLeft: 50
                        }}
                        onChangeText={this.onLastNameChange}
                    />
                    <Text style={{
                        fontSize: 30,
                        marginBottom: 100
                    }}>
                        List user: {this.state.count}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'green',
                            padding: 20,
                            marginBottom: 50
                        }}
                        onPress={this.createUser}
                    >
                        <Text style={{fontSize: 20}}>Create User</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, backgroundColor: '#cccccc', width: '100%'}}>
                    {this.renderList(this.state.users)}
                </View>
            </View>
        );
    }

    renderList = (users) => {
        return users.map((user, index) => {
            return (
                <Text
                    style={{fontSize: 20, height: 40}}
                    key={index.toString()}
                >
                    Name: {user.name} {user.email}
                </Text>
            )
        })
    };

    createUser = () => {
        const {firstName, lastName} = this.state;
        let user = {
            // lastName,
            // firstName,
            name: `${firstName} ${lastName}`,
            email: `${firstName}@${lastName}.com`,
            age: 18
        };
        this.userDao.save(user);
    };

    onFirstNameChange = (firstName) => {
        this.setState({firstName});
    };

    onLastNameChange = (lastName) => {
        this.setState({lastName});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

