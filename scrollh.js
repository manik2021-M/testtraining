import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Share,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const scrollh = () => {
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');
  useEffect(()=>{
    const interval = setInterval(() => {
      setTextInputValue(textInputValue)
  },1000);
  return () => clearInterval(interval);
  }, [textInputValue]);



  const shareMessage = () => {

    Share.share({
      message: textInputValue.toString(),
    })
      //after successful share return result
      .then((result) => console.log(result))
      //If any thing goes wrong it comes here
      .catch((errorMsg) => console.log(errorMsg));
  };

  const saveValueFunction = () => {
    
    if (textInputValue) {
      // To check the input not empty
      AsyncStorage.setItem('sav',textInputValue);
      // Setting a data to a AsyncStorage with respect to a key
      setTextInputValue('');
      // Resetting the TextInput
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction = () => {
    // Function to get the value from AsyncStorage
    AsyncStorage.getItem('sav').then(
      (value) =>
        // AsyncStorage returns a promise
        // Adding a callback to get the value
        setGetValue(value),
      // Setting the value in Text
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          AsyncStorage in React Native to Store Data in Session
        </Text>
        <TextInput
          placeholder="Enter Some Text here"
          value={textInputValue}
          //onChangeText={setTextInputValue(textInputValue)}
          onChangeText={(textInputValue) => setTextInputValue(textInputValue)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            SAVE VALUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET VALUE
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
         ________/{getValue}\_________
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={shareMessage}>
          <Text style={styles.buttonTextStyle}>Share Input Text</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
    color:'green'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,

  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'left',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default scrollh;


// import React, { Component } from "react";
// import { ScrollView, StyleSheet, Text, View } from "react-native";
// class scrollh extends Component {
// state = {
// products: [
// { product: "Rice", id: 1 },
// { product: "Sweets", id: 2 },
// { product: "Fruits", id: 3 },
// { product: "Animals", id: 4 },
// { product: "humans", id: 5 },
// { product: "sport", id: 6 },
// { product: "kitchen", id: 7 },
// { product: "childrens", id: 8 },
// { product: "men", id: 9 },
// { product: "old people", id: 10 },
// { product: "shafty", id: 11 },
// { product: "transport", id: 12 }
// ] };
// render() {
// return (
// <View>
// <ScrollView
// showsHorizontalScrollIndicator={false}
// style={styles.contentContainerStyle}
// horizontal={true}
// //showsVerticalScrollIndicator={false}
// >
// {this.state.products.map((item, index) => (
// <View key={item.id} style={styles.item}>
// <Text>{item.product}</Text>
// </View>
// ))}
// </ScrollView>
// </View>
// );
// }
// }
// const styles = StyleSheet.create({
// item: {
// alignItems: "center",
// justifyContent: "space-between",
// flexDirection: "row",
// padding: 20,
// backgroundColor: "yellow",
// margin: 2,
// borderWidth: 3,
// borderColor: "pink"
// },
// contentContainerStyle: {
// backgroundColor: "green",
// paddingVertical: 10,
// marginTop: 40
// }
// });
// export default scrollh;