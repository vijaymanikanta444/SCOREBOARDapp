import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Component } from 'react';
import Constants from 'expo-constants';
const Separator = () => <View style={styles.separator} />;

export default class App extends Component {
  state = {
    teams: ['CSK', 'MI'],
    wickets: 0,
    score: 0,
    overs: {},
    currentOver: 0,
    currentBall: 0,
    // keyword: e.target.id,
  };
  increment = (count) => {
    this.setState({
      score: this.state.score + count,
      currentBall: this.state.currentBall < 5 ? this.state.currentBall + 1 : 0,
      currentOver:
        this.state.currentBall < 5
          ? this.state.currentOver
          : this.state.currentOver + 1,
    });
  };
  extras = () => {
    this.setState({ score: this.state.score + 1 });
  };

  out = () => {
    this.setState({
      wickets: this.state.wickets + 1,
      currentBall: this.state.currentBall < 5 ? this.state.currentBall + 1 : 0,
      currentOver:
        this.state.currentBall < 5
          ? this.state.currentOver
          : this.state.currentOver + 1,
    });
  };
  reset = () =>
    Alert.alert(
      'RESET',
      'Do You Want to Clear the Score Board ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            this.setState({
              wickets: 0,
              score: 0,
              currentOver: 0,
              currentBall: 0,
            }),
        },
      ],
      { cancelable: false }
    );
  render() {
    return (
      <View style={styles.container1}>
        <SafeAreaView style={styles.container}>
          {/* <View style={styles.container}> */}
          <View>
            <Text style={styles.title}>SCORE BOARD</Text>
          </View>
          <Text style={styles.teams}>
            <Text style={styles.team1}> {this.state.teams[0]} </Text>
            <Text>Vs</Text>
            <Text style={styles.team2}> {this.state.teams[1]} </Text>
          </Text>
          <Separator />

          <Text style={styles.sub}>SCORE</Text>
          <Text style={styles.scores}>
            <Text style={styles.score}>{this.state.score}</Text>
            <Text style={styles.score}>/</Text>
            <Text style={styles.score}>{this.state.wickets}</Text>
          </Text>
          <Separator />
          <Text style={styles.sub}>OVERS</Text>
          <Text style={styles.overs}>
            {/* <Text style={styles.sub}>:</Text> */}
            <Text style={styles.over}>{this.state.currentOver}</Text>
            <Text style={styles.over}>.</Text>
            <Text style={styles.over}>{this.state.currentBall}</Text>
          </Text>
          <Separator />
          {/* <Button
          onPress={() => {
            this.onClick();
          }}
          title="Click me"
          color="#4169E1"
        ></Button> */}
          <View style={styles.fixToText}>
            <TouchableOpacity
              style={styles.round}
              onPress={() => {
                this.increment(0);
              }}
              ss
            >
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.round}
              onPress={() => {
                this.increment(1);
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.round}
              onPress={() => {
                this.increment(2);
              }}
            >
              <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.round}
              onPress={() => {
                this.increment(3);
              }}
            >
              <Text>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.round}
              onPress={() => {
                this.increment(4);
              }}
            >
              <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.round}
              onPress={() => {
                this.increment(6);
              }}
            >
              <Text>6</Text>
            </TouchableOpacity>
          </View>
          <Separator />
          <View style={styles.fixToText}>
            {/* <Button
              onPress={() => {
                this.extras();
              }}
              title="WIDE"
              id="1"
            ></Button>
            <Button
              onPress={() => {
                this.extras();
              }}
              title="NO BALL"
              id="1"
            ></Button> */}
            <TouchableOpacity
              style={styles.extra}
              onPress={() => {
                this.extras(1);
              }}
            >
              <Text>WIDE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.extra}
              onPress={() => {
                this.extras(1);
              }}
            >
              <Text>NO BALL</Text>
            </TouchableOpacity>
          </View>
          <Separator />
          <View>
            <TouchableOpacity style={styles.out} onPress={this.out}>
              <Text>WICKET</Text>
            </TouchableOpacity>
          </View>
          <Separator />
          {/* <View> */}
          <TouchableOpacity style={styles.reset} onPress={this.reset}>
            <Text>RESET</Text>
          </TouchableOpacity>
          {/* </View> */}
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 20,
  },
  scrollView: {
    // backgroundColor: '#ABB2B9',
    // marginHorizontal: 20,
  },
  container1: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    backgroundColor: '#566573',
    color: '#FDFEFE',
    // justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
    padding: 10,
    marginTop: 50,
  },
  team1: {
    color: '#f7dc6f',
    fontSize: 50,
  },
  team2: {
    color: '#5dade2',
    fontSize: 50,
  },
  teams: {
    // display: 'flex',
    textAlign: 'center',
    padding: 10,
  },
  scores: {
    // display: 'flex',
    textAlign: 'center',
    padding: 0,
  },
  overs: {
    // display: 'flex',
    textAlign: 'center',
    padding: 0,
  },

  sub: {
    fontSize: 20,
    textAlign: 'center',
  },
  score: {
    fontSize: 75,
  },
  over: {
    fontSize: 75,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  // extras: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  extra: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#85C1E9',
    borderRadius: 50,
  },
  // out: {
  //   // padding: 20,
  //   backgroundColor: '#C0392B',
  //   margin: 10,
  //   alignItems: 'center',
  //   padding: 5,
  //   borderRadius: 20,
  // },
  out: {
    alignItems: 'center',
    backgroundColor: '#C0392B',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  reset: {
    alignItems: 'center',
    backgroundColor: '#ABB2B9',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  round: {
    alignItems: 'center',
    backgroundColor: '#85C1E9',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    // margin: 20,
    borderRadius: 20,
    shadowColor: '#3498DB',
  },
});
