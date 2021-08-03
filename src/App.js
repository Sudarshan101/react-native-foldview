import React from 'react';

import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Row from './Row';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4A637D',
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default () => (
  <>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />
      <ScrollView
        style={styles.scrollView}
      >
        <Row zIndex={100} />
        <Row zIndex={90} />
        <Row zIndex={80} />
        <Row zIndex={70} />
      </ScrollView>
    </SafeAreaView>
  </>
);