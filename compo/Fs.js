import React, { useState, useEffect } from 'react';
// import CircleButton from 'react-native-circle-button';
// import all the components we are going to use
import { Text, View, StyleSheet, Image } from 'react-native';

const FirstScreen = () => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value+1);
    }, 1500);
    
    return () => clearInterval(interval);
  }, [value]);


  return (
    <View style={styles.container1}>
      <Text style={styles.paragraphStyle}>
        Content Loaded from First Screen
      </Text>
      <Text style={styles.paragraphStyle}>
        {'Timer: '+value}
      </Text>
      <Image
        style={styles.logoStyle}
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 50,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoStyle: {
    height: 100,
    width: 100,
    borderRadius:50
  },
});

export default FirstScreen;