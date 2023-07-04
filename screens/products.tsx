import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, ActivityIndicator, Button } from "react-native";
import styles from "../config/styling";
import { useEffect, useState } from "react";
import axios from "axios";
import back from '../assets/back.jpg'
import SMIcon from "../config/components/SMIcon";

export default function Products({ navigation }) {
    const [list, setList] = useState([])
    const [loader, setLoader] = useState(false)

    const getProducts = () => {
        setLoader(true)
        axios.get('https://fakestoreapi.com/products').then(res => {
            setLoader(false)
            setList(res.data)
        }).catch(err => {
            setLoader(false)
            console.log(err.message)
        })
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <SMIcon name='person' />
                </TouchableOpacity>
            ),
        });
        const unsubscribe = navigation.addListener('focus', () => {
            // Screen was focused
            getProducts()
            // Do something
        });

        return unsubscribe;
    }, [navigation])


    return <>
        <View>
            <ImageBackground style={styles.p2} source={back}>
                <Text style={[styles.fs1, styles.textWhite]}>Products</Text>
            </ImageBackground>
            <ScrollView >
                {loader && <ActivityIndicator size={30} color={styles._dark} />}
                {!loader && <View style={[styles.flexRow, styles.flexWrap]}>
                    {list && list.map((x: any, i: number) => <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', x)} style={{ width: '50%' }} key={i}>
                        <Text>{x.category}</Text>
                        {/* <Text>{x.description}</Text> */}
                        <Text>{x.title}</Text>
                        <Text>{x.price}</Text>
                        <Text>{x.category}</Text>
                        <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={{ uri: x.image }} />
                    </TouchableOpacity>)}
                </View>}
            </ScrollView>
        </View>
    </>
}