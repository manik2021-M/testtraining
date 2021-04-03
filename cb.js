import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,useNativeDriver
} from 'react-native';
import CircleButton from 'react-native-circle-button';

const cb = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Expandable Circular Button in React Native
          using react-native-circle-button
        </Text>
        <CircleButton
          size={100}
          primaryColor="blue"
          secondaryColor="steelblue"
          onPressButtonTop={
            () => alert('Top Button Clicked')
          }
          onPressButtonRight={
            () => alert('Right Button Clicked')
          }
          onPressButtonBottom={
            () => alert('Bottom Button Clicked')
          }
          onPressButtonLeft={
            () => alert('Left Button Clicked')
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default cb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});