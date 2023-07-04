import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import SMIcon from '../config/components/SMIcon';
import styles from '../config/styling';


export default function Profile({ navigation }) {
    const [imgUri, setImgUri] = useState<any>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyUW4SBni8aG-yrhj471NhuedjBoklkLNXsBwQBo7tQ&s')

    const openCamera = async () => {
        const result = await launchCamera({
            mediaType: 'photo',
            includeBase64: true
        });
        setImgUri(result.assets[0].uri)
        console.log(result.assets[0].uri)
    }
    const openGallery = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo'
        });
        setImgUri(result.assets[0].uri)
        console.log(result.assets[0].uri)
    }
    return <>
        <View>
            <Text>Profile</Text>
            <View style={[styles.flexCenter, styles.flexRow]}>
                <TouchableOpacity onPress={openCamera} style={[styles.p2, styles.m1, styles.bgWhite, styles.rounded]}>
                    <SMIcon size={35} name='photo-camera' />
                </TouchableOpacity>
                <TouchableOpacity onPress={openGallery} style={[styles.p2, styles.m1, styles.bgWhite, styles.rounded]}>
                    <SMIcon size={35} name='image' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')} style={[styles.p2, styles.m1, styles.bgWhite, styles.rounded]}>
                    <SMIcon size={35} name='location-on' />
                </TouchableOpacity>
            </View>
            <Image style={{ width: 200, height: 200 }} source={{ uri: imgUri }} />
        </View>
    </>
}