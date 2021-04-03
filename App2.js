import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, FlatList, LogBox, Button, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';
LogBox.ignoreAllLogs();

const rightButtons = [
    <TouchableOpacity><Text style={{ marginTop: 15 }}>Ok</Text></TouchableOpacity>,
    <TouchableOpacity><Text style={{ marginTop: 15 }}>continue</Text></TouchableOpacity>,
    <TouchableOpacity><Text style={{ marginTop: 15 }}>cancel</Text></TouchableOpacity>,
];
const App2 = ({ navigation }) => {

    const [data, setData] = useState([
        '1', '2', '3', '4', '5', '6', '2', '2', '8', '10',
    ]);

    const check = () => {
        const newData = data.filter((item) => {
            return item === '2'
        });
        setData(newData);
    };
    
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList data={data} renderItem={({ item }) => <View key={item.key} style={{ margin: 10 }}><Text>{item}</Text>
                </View>}
                    keyExtractor={(item, index) => index.toString()} />
                <Button onPress={check} title=" filowter" color="violet" />

                <Button title="DOWNLOAD image" onPress={() => navigation.navigate("dwld")}></Button>
                <View style={{ display: 'flex', height: 50, width: 400, backgroundColor: 'grey' }}>
                    <Swipeable style={{ marginTop: 1 }} rightButtons={rightButtons}>
                        <Text style={{ textAlign: 'center', marginTop: 15 }}>--------(My swipeable content)--------</Text>
                    </Swipeable>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('fileviewer') }}>
                    <Text style={{ color: 'green' }}>file viewer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('add') }}>
                    <Text style={{ marginTop: 20, color: 'red' }}>Add items</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={()=>{navigation.navigate('App1')}}>
        <Text style={{marginTop:20,color:'orange'}}>Fragment</Text>
    </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { navigation.navigate('scrollh') }}>
                    <Text style={{ marginTop: 20, color: 'blue' }}>scroll</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default App2;

// import React, { Component } from "react";
// import { View, Text, Button, Alert, Platform } from "react-native";
// import NetInfo from "@react-native-community/netinfo";

// export default function App2() {


//  const  CheckConnectivity = () => {
//     // For Android devices
//     if (Platform.OS === "android") {
//         NetInfo.fetch().then(state => {
//             console.log("Connection type", state.type);
//             alert( state.isConnected,"connect");
//           });
//       }
//      else {
//       // For iOS devices
//       NetInfo.isConnected.addEventListener(
//         "connectionChange",
//         this.handleFirstConnectivityChange
//       );
//     }
//   };




//     return (
//       <View>
//         <Button
//           onPress={() => CheckConnectivity()}
//           title="Check Internet Connectivity"
//           color="green"

//           //accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//     );
//   }
