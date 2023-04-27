import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    LayoutAnimation, Text, View, Image, Dimensions, StatusBar, ImageBackground, ScrollView, TouchableOpacity
} from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';
import MenuIcon from 'react-native-vector-icons/Entypo';
import ExpandIcon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('screen');

const Details = (props) => {
    const { item } = props.route.params;
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(true);


    const changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };


    return (
        <View style={{ flex: 1,}}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground source={{ uri: item.url }}
                style={{ height: height, paddingBottom: 0, paddingTop: height / 18, justifyContent: 'space-between' }}>
                <View style={{ paddingLeft: '5%', marginBottom: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <BackIcon name='arrow-left' size={30} color={'#000'} onPress={() => navigation.goBack()} />
                </View>
                <View style={{
                    alignItems: 'flex-end',
                    // paddingHorizontal: 5,
                    width: width,
                    alignSelf: 'center',
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                    paddingTop: Platform.OS === 'ios' ? 20 : 0,
                }}>
                    <View style={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        justifyContent: 'flex-end',
                        backgroundColor: '#fff'
                    }}>
                        <View
                         style={{
                            paddingBottom: height / 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        {expanded ? (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => changeLayout()}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <View style={{ height: 8, backgroundColor: 'red', borderColor: '#fc9fc4', width: 40, borderRadius: 10, marginVertical: '3%' }} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', width: width / 1.2 }}>
                                    <View style={{ width: '80%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>

                                        <Text style={{ fontSize: 24, color: '#333', fontWeight: '800' }}>{item.title}</Text>
                                    </View>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                        <MenuIcon name='heart-outlined' size={30} color={'#000'} />
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => changeLayout()}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <View style={{ height: 8, backgroundColor: 'red', borderColor: '#fc9fc4', width: 40, borderRadius: 10, marginVertical: '3%' }} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', width: width / 1.2 }}>
                                    <View style={{ width: '80%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>

                                        <Text style={{ fontSize: 24, color: '#333', fontWeight: '800' }}>{item.title}</Text>
                                    </View>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                        <MenuIcon name='heart-outlined' size={30} color={'#000'} />
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>

                    <View
                        style={{
                            height: expanded ? null : 0,
                            backgroundColor: "#fff",
                            overflow: 'hidden',
                            width: width,
                            minWidth: width,
                            maxHeight: height / 1.8,
                            minHeight: height / 15
                        }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View
                                style={{
                                    width:width/1.1,
                                    alignSelf:'center',
                                    paddingBottom: height / 20,
                                }}>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>

                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text><Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#333', fontWeight: '400' }}>{item.title}</Text>

                            </View>
                        </ScrollView>
                    </View>
                </View>
        </View>
            </ImageBackground >
    {/* <Image source={{uri: item.url}} style={{width:width/1.05, alignSelf:'center', borderRadius:10, elevation:5, height:height/4.5}} /> */ }
{/* <View style={{ width: width / 1.05, alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'flex-start', marginVertical: '2%' }}>
                <Text style={{ fontSize: 15, color: '#333', fontWeight: '400' }}>{item.title}</Text>
            </View> */}
        </View >
    );
}
export default Details;