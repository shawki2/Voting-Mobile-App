import React, { Component } from "react";
import VoteCounter from "./VoteCounter";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Team extends Component {
  render() {
    return (
      <View style={{ marginTop: 90 }}>
        <View>
          <Image
            style={[{ width: 150, height: 150 }]}
            source={this.props.logo}
          />
        </View>
        <VoteCounter
          style={{ textAlign: "auto" }}
          votes={this.props.votes}
          onPress={() => this.props.onPress()}
        />
      </View>
    );
  }
}
