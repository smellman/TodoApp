import React from 'react';
// 1: StatusBarとPlatformをimport対象に追加
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

// 2: 高さの判断をして値を設定
const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // 3 : paddingTop にステータスバーの高さを指定して下にずらす
    paddingTop: STATUSBAR_HEIGHT,
    // 4 : 使わないスタイルを削除する
//    alignItems: 'center',
//    justifyContent: 'center',
  },
});
