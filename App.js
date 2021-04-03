import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App1 from './App1';
import imgpic from './imgpic';
import cb from './cb';
import vc from './vc';
import slider from './slider';
import App2 from './App2';
import otp from './otp';
import dwld from './dwld';
import fileviewer from'./fileviewer';
import add from './add';
import scrollh from './scrollh';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App2">
      <Stack.Screen name="App2" component={App2} />
        <Stack.Screen name="App1" component={App1} options={{title:"multiview"}} />
        <Stack.Screen name="imgpic" component={imgpic} />
        <Stack.Screen name="cb" component={cb} />
        <Stack.Screen name="vc" component={vc} />
        <Stack.Screen name="slider" component={slider} options={{ headerShown: false }} />
        <Stack.Screen name="otp" component={otp} />
        <Stack.Screen name="dwld" component={dwld} />
        <Stack.Screen name="fileviewer" component={fileviewer} />
        <Stack.Screen name="add" component={add} />
        <Stack.Screen name="scrollh" component={scrollh} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}
///child to parent props
// import React,{useState}from 'react';
// import {View,Text} from 'react-native';
// import Chid from './Chid';
// export default function Parents(){
//   const[word,setWord]=useState('Parents');
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>{word}</Text>
//       <Chid
//       move={word=>{setWord(word)}}
//       />
//     </View>
//   )

// }