import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Team from "./Components/Team";
import VoteCounter from "./Components/VoteCounter";
import crotiaLog from "./images/crotiaLog.png";
import franceLogo from "./images/franceLogo.png";
import Trophy2018 from "./images/Trophy2018.png";

export default class App extends React.Component {
  // initialise state for voting
  state = {
    crotiaVote: 0,
    franceVote: 0
  };
  // click function
  voteClick = team => {
    if (team == "Croatia") {
      this.setState({
        crotiaVote: this.state.crotiaVote + 1
      });
    }
    if (team == "France") {
      this.setState({
        franceVote: this.state.franceVote + 1
      });
    }
  };
  render() {
    return (
      // The main container
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Russia World Cup 2018!</Text>
        <View style={styles2.box}>
          <Team
            votes={this.state.crotiaVote}
            logo={crotiaLog}
            onPress={() => this.voteClick("Croatia")}
          />

          <Image style={[{ width: 70, height: 200 }]} source={Trophy2018} />
          <Team
            votes={this.state.franceVote}
            logo={franceLogo}
            onPress={() => this.voteClick("France")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
const styles2 = StyleSheet.create({
  box: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
