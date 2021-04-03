import React from 'react';
import {View,Text,Button} from 'react-native';

export default function Chid(props) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>child</Text>
            <Button onPress={()=>props.move('GreatParents')} title="changer"/>
        </View>
    )
}
