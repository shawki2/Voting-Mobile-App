import React, { Component } from 'react';
import Team from './Team';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class VoteCounter extends Component {
    render() {
        return (
            <View >
                <View style={styles3.votes}>
                    <Text style={styles3.text}> {'\n'}{this.props.votes}</Text>
                </View>
                <Button onPress={() => this.props.onPress()}
                    title="Please Vote"
                />
            </View>
        );
    }
}
const styles3 = StyleSheet.create({
    votes: {
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
