import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Platform,} from 'react-native';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';

const fileviewer = () => {
  const selectOneFile = async () => {
    // To Select File
    try {
      const res = await DocumentPicker.pick({
       
        type: [DocumentPicker.types.allFiles],
        
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      if (res) {
        let uri = res.uri;
        if (Platform.OS === 'ios') {
          // Remove 'file://' from file path for FileViewer
          uri = res.uri.replace('file://', '');
        }
        console.log('URI : ' + uri);
        FileViewer.open(uri)
          .then(() => {
            // Do whatever you want
            console.log('Success');
          })
          .catch(_err => {
            // Do whatever you want
            console.log(_err);
          });
      }
    } catch (err) {
      // Handling Exception
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('You r not pick anyone so,Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={styles.mainBody}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center'
          }}>
          Native file viewer for React Native
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            textAlign: 'center'
          }}>
          Preview any type of file supported by the mobile device
        </Text>
        
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectOneFile}>
        <Text style={styles.buttonTextStyle}>
          Select File to View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default fileviewer;