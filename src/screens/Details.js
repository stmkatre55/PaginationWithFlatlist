import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Text, View, Image, Dimensions
} from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const Details = (props) => {
    const {item} = props.route.params;
    const navigation = useNavigation();


    return(
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{padding:'3%', elevation:5, backgroundColor:'#fff', marginBottom:'3%', flexDirection:'row', alignItems:'center'}}>
                <BackIcon name='keyboard-arrow-left' size={30} color={'#000'} onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 20, color: '#333', fontWeight: '800', marginLeft:'2%' }}>Details</Text>
            </View>
            <Image source={{uri: item.url}} style={{width:width/1.05, alignSelf:'center', borderRadius:10, elevation:5, height:height/4.5}} />
            <View style={{width:width/1.05, alignSelf:'center', justifyContent: 'flex-start', alignItems: 'flex-start', marginVertical:'2%' }}>
                    <Text style={{ fontSize: 15, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                </View>
        </View>
    );
}
export default Details;