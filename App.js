import React from 'react';
import {
    Text, View, SafeAreaView
} from 'react-native';
import MainStack from './src/navigation/MainStack';

const App = () => {
  return(
    <SafeAreaView style={{flex:1}}>
      <MainStack />
    </SafeAreaView>
  )
}
export default App;