import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

// import Voice
import Voice from 'react-native-voice';

const App = () => {
  //const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
//   const [end, setEnd] = useState('');
//   const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
    // Voice.onSpeechStart = onSpeechStart;
    // Voice.onSpeechEnd = onSpeechEnd;
    // Voice.onSpeechError = onSpeechError;
    // Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechPartialResults = onSpeechPartialResults;
    // Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

//   const onSpeechStart = (e) => {
//     //Invoked when .start() is called without error
//     console.log('onSpeechStart: ', e);
//     //setStarted('@');
//   };

//   const onSpeechEnd = (e) => {
//     //Invoked when SpeechRecognizer stops recognition
//     console.log('onSpeechEnd: ', e);
//    // setEnd('√');
//   };

//   const onSpeechError = (e) => {
//     //Invoked when an error occurs.
//     console.log('onSpeechError: ', e);
//     setError(JSON.stringify(e.error));
//   };

//   const onSpeechResults = (e) => {
//     //Invoked when SpeechRecognizer is finished recognizing
//     console.log('onSpeechResults: ', e);
//     setResults(e.value);
//   };

//   const onSpeechPartialResults = (e) => {
//     //Invoked when any results are computed
//     console.log('onSpeechPartialResults: ', e);
//     setPartialResults(e.value);
//   };

//   const onSpeechVolumeChanged = (e) => {
//     //Invoked when pitch that is recognized changed
//    // console.log('onSpeechVolumeChanged: ', e);
//     //setPitch(e.value);
//   };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('en-US');
      //setPitch('');
      setError('');
      //setStarted('');
      setResults([]);
      setPartialResults([]);
      //setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

//   const stopRecognizing = async () => {
//     //Stops listening for speech
//     try {
//       await Voice.stop();
//     } catch (e) {
//       //eslint-disable-next-line
//       console.error(e);
//     }
//   };

//   const cancelRecognizing = async () => {
//     //Cancels the speech recognition
//     try {
//       await Voice.cancel();
//     } catch (e) {
//       //eslint-disable-next-line
//       console.error(e);
//     }
//   };

//   const destroyRecognizer = async () => {
//     //Destroys the current SpeechRecognizer instance
//     try {
//       await Voice.destroy();
//       //setPitch('');
//       setError('');
//       //setStarted('');
//       setResults([]);
//       setPartialResults([]);
//       //setEnd('');
//     } catch (e) {
//       //eslint-disable-next-line
//       console.error(e);
//     }
//   };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Speech to Text Conversion in React Native |
          Voice Recognition
        </Text>
        <Text style={styles.textStyle}>
          Press mike to start Recognition
        </Text>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Started: ${started}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`End: ${end}`}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Pitch: \n ${pitch}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`Error: \n ${error}`}
          </Text>
        </View> */}
        <TouchableHighlight onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
            }}
          />
        </TouchableHighlight>
        <Text style={styles.textStyle}>
          Partial Results
        </Text>
        <ScrollView>
          {partialResults.map((result, index) => {
            return (
              <Text
                key={`partial-result-${index}`}
                style={styles.textStyle}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        <Text style={styles.textStyle}>
          Results
        </Text>
        <ScrollView style={{marginBottom: 42}}>
          {results.map((result, index) => {
            return (
              <Text
                key={`result-${index}`}
                style={styles.textStyle}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        {/* <View style={styles.horizontalView}>
          <TouchableHighlight
            onPress={stopRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Stop
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={cancelRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Destroy
            </Text>
          </TouchableHighlight>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
});


///filepicker
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
export default class otp extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: '',
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
 
        <Text style={styles.text}>
          File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
        </Text>
 
        <Text style={styles.text}>
          file Type: {this.state.singleFileOBJ.type ? this.state.singleFileOBJ.type : ''}
        </Text>
 
        <Text style={styles.text}>
          File Size: {this.state.singleFileOBJ.size ? this.state.singleFileOBJ.size : ''}
        </Text>
 
        <Text style={styles.text}>
          File URI: {this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : ''}
        </Text>
 
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={this.SingleFilePicker.bind(this)}>
          <Text style={styles.buttonText}>
            Click Here To Pick File
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
    borderRadius:9,
  },
 
  buttonText: {
    color: '#fff',
    fontSize: 21,
    padding: 10,
    textAlign: 'center'
  },
 
  text: {
    color: '#000',
    fontSize: 16,
    padding: 10,
    textAlign: 'left'
  },
});