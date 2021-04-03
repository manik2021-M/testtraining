import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {Text, View, StyleSheet, Image} from 'react-native';

const ThirdScreen = () => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [value]);;

  return (
    <View style={styles.container3}>
      <Text style={styles.paragraphStyle}>
        Content Loaded from Third Screen
      </Text>
     

      <Text style={styles.paragraphStyle}>
        {'Timer: ' + value}
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
  container3: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoStyle: {
    height: 50,
    width: 50,
    borderRadius:50
  },
});

export default ThirdScreen;