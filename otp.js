import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
export default class otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: 'oops',
    };
  }



  async SingleFilePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],

      });

      this.setState({ singleFileOBJ: res });

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri:
              this.state.singleFileOBJ.image,
          }}
        />


        <Text style={styles.text}>
          File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
        </Text>
        <Text style={styles.text}>
          File date: {this.state.singleFileOBJ.taken_on ? this.state.singleFileOBJ.date : 'NAN'}
        </Text>

        <Text style={styles.text}>
          file Type: {this.state.singleFileOBJ.type ? this.state.singleFileOBJ.type : ''}
        </Text>

        <Text style={styles.text}>
          File Size: {this.state.singleFileOBJ.size ? (this.state.singleFileOBJ.size / 1000).toFixed(.2) + " kb" : ''}
        </Text>

        <Text style={styles.text}>
          File URI: {this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : ''}
        </Text>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={this.SingleFilePicker.bind(this)}>
          <Text style={styles.buttonText}>
            Click Here To Pick File Details
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },

  button: {
    width: '100%',
    backgroundColor: '#0091EA',
    borderRadius: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  },

  text: {
    color: 'green',
    fontSize: 16,
    padding: 10,
    textAlign: 'left'
  },
});
// import React, { useState } from 'react';
// import { View, Button, Text } from 'react-native';
// import App1 from './App1';

// const otp = () => {
//     const [OTP, setOTP] = useState('1234');
//     const generateOTP = (length) => {
//         const characters = '0123456789ABCDEFGHLJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//         const characterCount = characters.length;
//         let OTPvalue = '1';
//         let i;
//         for (let i = 0; i < length; i++) {
//             OTPvalue += characters[Math.floor(Math.random() * characterCount)];
//         }
//         setOTP(OTPvalue);
//         if (i != '1') {
//             alert("OTP verified")
//         }
//         return (
//             <View>
//                 <App1/>
//             </View>
//         );

//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Button
//                 onPress={() => generateOTP(4)}
//                 title="Generate OTP"
//                 color="#841584"
//             />
//             <Text style={{ fontSize: 20, marginTop: 20 }}>{OTP}</Text>
//         </View>
//     );
// };

// export default otp;