import React, { useState } from 'react';
import {
  SafeAreaView, View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Tooltip, Text } from 'react-native-elements';
import Fs from './compo/Fs';
import Ss from './compo/Ss';
import Ts from './compo/Ts';


//LogBox.ignoreAllLogs(); //Ignore all log notifications

const App1 = ({ props }) => {
  const [index, setIndex] = useState(1);

  const RenderElement = () => {
    //You can add N number of Views here in if-else condition
    if (index == 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <Fs />;
    } else if (index == 2) {
      //Return the SecondScreen as a child to set in Parent View
      return <Ss />;
    } else {
      //Return the ThirdScreen as a child to set in Parent View
      return <Ts />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {/*To set the FirstScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}>
            <Text style={{ color: 'blue' }}>1st View</Text>
          </TouchableOpacity>
          {/*To set the SecondScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(2)}>
            <Text style={{ color: '#ffffff' }}>2nd View</Text>
          </TouchableOpacity>
          {/*To set the ThirdScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(3)}>
            <Text style={{ color: '#ffffff' }}>3rd View</Text>
          </TouchableOpacity>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50' onPress={() => { props.navigation.navigate('vc') }}
          />
        </View>

        {/*Text From Parent Screen*/}
        <Text style={styles.paragraphStyle} onPress={() => { navigation.navigate("imgpic") }}>
          fragment view in React Native
        </Text>

        {/*View to hold the child screens 
        which can be changed on the click of a button*/}
        <View style={{ backgroundColor: 'green', height: 100 }}>
          <RenderElement />

        </View>
        <Tooltip popover={<Text>Info here</Text>}>
          <Text>Press me</Text>
        </Tooltip>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraphStyle: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    margin: 2,
  },
});

export default App1;