/**
 * Created by hadar.m on 27/04/2017.
 */
import React, { Component  } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Button from "react-native-button";

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' } ;
    }

    onPress = () => {
        alert(this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native!
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
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