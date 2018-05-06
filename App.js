import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
  // 1: TextInputとButtonとKeyboardAvoidingViewを追加
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [], // 2: TODOリストを空に
      currentIndex: 0,
      inputText: "", // 3: テキスト入力用の箱を用意
    }
  }

  // 3: TODOリストへの追加処理
  onAddItem = () => {
    const title = this.state.inputText
    if (title == "") {
      return
    }
    const index = this.state.currentIndex + 1
    const newTodo = {index: index, title: title, done: false}
    const todo = [...this.state.todo, newTodo]
    this.setState({
      todo: todo,
      currentIndex: index,
      inputText: ""
    })
  }

  render() {
    // 4: View を KeyboardAvoidingView へ変更、振る舞いをpaddingに
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.filter}>
          <Text>Filterがここに配置されます</Text>
        </View>
        <ScrollView style={styles.todolist}>
          <FlatList data={this.state.todo}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + item.index}
          />
        </ScrollView>
        <View style={styles.input}>
          { /* 5: テキスト入力とボタンを追加 */ }
          <TextInput
            onChangeText={(text) => this.setState({inputText: text})}
            value={this.state.inputText}
            style={styles.inputText}
          />
          <Button
            onPress={this.onAddItem}
            title="Add"
            color="#841584"
            style={styles.inputButton}
            />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1
  },
  input: {
    height: 30,
    flexDirection: 'row', // 6: 下にある要素を横に並べる
  },
  // 7: テキスト入力とボタンのスタイル
  inputText: {
    flex: 1,
  },
  inputButton: {
    width: 100,
  }
});
