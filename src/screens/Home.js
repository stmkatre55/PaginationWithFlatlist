import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    Text, TouchableOpacity, View
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


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
            <TouchableOpacity onPress={() => navigation.navigate("Details",{item : item})}
            style={{ padding: '2%', width: Dimensions.get('screen').width / 1.05, borderRadius: 10, borderWidth: 1, alignSelf: 'center', marginVertical: '1%', flexDirection: 'row' }}>
                <View style={{ width: '25%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Image source={{ uri: item.thumbnailUrl }} style={{ width: 60, height: 60, borderRadius: 10 }} />
                </View>
                <View style={{ width: '75%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 15, color: '#333', fontWeight: '400' }}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderFooter = () => {
        if (enddata.length > 0){
            return (
                <ActivityIndicator color={'red'} size={'large'} />
            )
        }else {
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
        <View style={{ flex: 1, backgroundColor:'#fff',}}>
            <View style={{padding:'3%', elevation:5, backgroundColor:'#fff', marginBottom:'3%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontSize: 20, color: '#333', fontWeight: '800', marginLeft:'2%' }}>Welcome!</Text>
            </View>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => renderFooter()}
                onEndReachedThreshold={0.1}
                onEndReached={() => handleLoadMore()}
            />
        </View>
    );
}
export default Home;