import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView, // 1: スクロールビューのインポート
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { /* 2: フィルタの部分 */ }
        <View style={styles.filter}>
          <Text>Filterがここに配置されます</Text>
        </View>
        { /* 3: TODOリスト */ }
        <ScrollView style={styles.todolist}>
          <Text>Todoリストがここに配置されます</Text>
        </ScrollView>
        { /* 4: 入力スペース */ }
        <View style={styles.input}>
          <Text>テキスト入力がここに配置されます</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },
  // 5: 追加したUIのスタイル
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1
  },
  input: {
    height: 30
  },
});
