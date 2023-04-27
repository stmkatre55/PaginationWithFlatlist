import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    Text, TouchableOpacity, View
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Feather';
import MenuIcon from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('screen');
const Home = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(1);
    const [enddata, setEndData] = useState([]);
    const navigation = useNavigation();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${count}`)
            .then((response) => {
                setLoading(false)
                setEndData(response.data)
                console.log("Response==>", response.data)
                setData(response.data);
            })
            .catch(error => console.log(error))
    }, [])

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Details", { item: item })}
                style={{ padding: '2%', width: Dimensions.get('screen').width / 1.1, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', flexDirection: 'row' }}>
                <View style={{ width: '22%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Image source={{ uri: item.thumbnailUrl }} style={{ width: 60, height: 60, borderRadius: 15 }} />
                </View>
                <View style={{ width: '60%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <View style={{borderTopWidth:3, borderColor:'#fc9fc4', width:20}} />
                    <Text style={{ fontSize: 15, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                </View>
                <View style={{ width: '18%', justifyContent: 'center', alignItems: 'center' }}>
                    <MenuIcon name='heart-outlined' size={30} color={'#000'} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderFooter = () => {
        if (enddata.length > 0) {
            return (
                <ActivityIndicator color={'red'} size={'large'} />
            )
        } else {
            return null;
        }
    }

    const handleLoadMore = () => {
        if (!loading) {
            var paginationCount = count + 1; // increase page by 1
            setCount(paginationCount)
            fetchDataForPagination(paginationCount); // method for API call
        }
    }

    const fetchDataForPagination = (paginationCount) => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${paginationCount}`)
            .then((response) => {
                setLoading(false)
                setEndData(response.data)
                console.log("Response==>", response.data)
                let latestData = data.concat(response.data)
                setData(latestData);
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fce8f0', }}>
            <StatusBar backgroundColor={'#fce8f0'} barStyle={'dark-content'} />
            <View style={{ padding: '3%', paddingHorizontal: '5%', marginBottom: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <BackIcon name='arrow-left' size={30} color={'#000'} onPress={() => navigation.goBack()} />
                <MenuIcon name='dots-three-horizontal' size={30} color={'#000'} />
            </View>
            <View style={{ flexDirection: 'row', width: width / 1.15, alignSelf: 'center', justifyContent: 'space-between', marginVertical: '2%' }}>
                <View style={{ width: '60%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#333', fontWeight: '400', opacity: 0.5 }}>Today</Text>
                    <Text style={{ fontSize: 14, color: '#333', fontWeight: '400' }}>11 February</Text>
                </View>
                <View style={{ borderLeftWidth: 1, marginHorizontal: '5%', marginVertical: '2%' }} />
                <View style={{ width: '35%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, color: '#333', fontWeight: '400', opacity: 0.5 }}>Select activity</Text>
                    <Text style={{ fontSize: 12, color: '#333', fontWeight: '400' }}>gym</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => renderFooter()}
                onEndReachedThreshold={0.1}
                onEndReached={() => handleLoadMore()}
                contentContainerStyle={{ width: width, marginTop: '5%', borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#fff', padding: '3%', elevation: 5 }}
            />
        </View>
    );
}
export default Home;