import React,{useState} from 'react';
import { ScrollView } from 'react-native';
import {View,StyleSheet,Text,Button,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// add iems one by one
const add=()=>{
    const [getValue, setGetValue] = useState('');
    const[prod,setProd]=useState([{pno:1,pname:"App"},{pno:2,pname:"App1"},{pno:3,pname:"App2"}]);
    const addprod=()=>{
        let nobj={pno:4,pname:"app"};//newobject
        let arr=prod.concat(nobj);
        setProd(arr);
       // setProd([...prod,{id:prod.length,value:Math.floor(Math.random()*10)+1}]);

    }
    //allround js map()
    const orders=[{uno:1,zmt:10},{uno:1,zmt:20},{uno:2,zmt:30},{uno:2,zmt:40}];
    const sum=orders.filter(order=>order.uno ===1)
    .map(order=>order.zmt)
    .reduce((a,b)=>a+b)
    console.log(sum);

    //js/>
    const getValueFunction = () => {
        // Function to get the value from AsyncStorage
        AsyncStorage.getItem('sav').then(
          (value) =>
            // AsyncStorage returns a promise
            // Adding a callback to get the value
            setGetValue(value),
            //setGetValue(''),
          // Setting the value in Text
        );
      };


    return(
        <ScrollView style={{flex:1}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         
{
    prod.map((item,index)=>{
        return(
            
        <View key={index} style={{backgroundColor:"red",width:50,margin:5}}>
       
        <Text style={{textAlign:'center',margin:5,color:'white'}}>{item.pname}</Text>
        </View>);
    })
}

<Button  onPress={addprod} title="Add"/>
<TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET VALUE
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
         ________{getValue}_________
        </Text>
        </View>
        </ScrollView>
    )
}
export default add;
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
  