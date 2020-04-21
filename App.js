// @flow
import React from 'react';
import { StatusBar, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { Stories, Stories2 } from './components';

const stories = [
  {
    id: '2',
    source: require('./assets/stories/2.jpg'),
    user: 'Neymar Junior',
    avatar: require('./assets/avatars/neymarJunior.jpg'),
  },
  {
    id: '4',
    source: require('./assets/stories/4.jpg'),
    user: 'Zlatan Ibrahimovic',
    avatar: require('./assets/avatars/zlatanIbrahimovic.jpg'),
  },
  {
    id: '5',
    source: require('./assets/stories/5.jpg'),
    user: 'Mohamed Salah',
    avatar: require('./assets/avatars/mohamedSalah.jpg'),
  },
  {
    id: '3',
    source: require('./assets/stories/3.jpg'),
    user: 'Son Heung Min',
    avatar: require('./assets/avatars/sonHeungMin.jpg'),
  },
  {
    id: '1',
    source: require('./assets/stories/1.jpg'),
    user: 'Luis Suarez',
    avatar: require('./assets/avatars/luisSuarez.jpg'),
  },
];

type AppState = {
  ready: boolean,
};

export default class App extends React.Component<{}, AppState> {
  state = {
    ready: false,
  };

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Stories2 {...{ stories }} />
      </View>
    );
  }

  async componentDidMount() {
    await Promise.all(stories.map(story => Promise.all([
      Asset.loadAsync(story.source),
      Asset.loadAsync(story.avatar),
    ])));
    this.setState({ ready: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
});

