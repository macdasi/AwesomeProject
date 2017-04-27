/**
 * Created by hadar.m on 27/04/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Button from "react-native-button";

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {

    onPress = () => {
        alert("It's working fine");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native!
                </Text>
                <Button onPress={this.onPress}>
                    Hi there!
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as React.ViewStyle,

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    } as React.TextStyle,
});