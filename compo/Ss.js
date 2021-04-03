import React, { useState, useEffect } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

const SecondScreen = () => {
  const [deviceId, setDeviceId] = 
    useState('');

  const getdeviceId = () => {
    var uniqueId = DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
  };
  const [value, setValue] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value );
    }, 100);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <View style={styles.container2}>
      
      
      <View style={{height:400,marginTop:500}}>
      
        <TouchableOpacity
          onPress={getdeviceId}
          activeOpacity={0.5}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            SHOW ME THE UNIQUE ID OF DEVICE
          </Text>
          <Text style={styles.textStyle}>
          {deviceId}
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex:3,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#646464',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    color: 'red',
  },
  logoStyle: {
    height: 50,
    width: 50,
    borderRadius:50
  },
});

export default SecondScreen;