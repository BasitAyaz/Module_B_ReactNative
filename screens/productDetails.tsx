import { Text, View, Image } from "react-native";
import styles from "../config/styling";

export default function ProductDetails({ navigation, route }) {
    let obj = route.params
    console.log(obj)
    return <>
        <View style={styles.p2}>
            <Text style={styles.fs2}>{obj.title}</Text>
            <Image resizeMode="contain" style={{ width: 200, height: 200 }} source={{ uri: obj.image }} />
        </View>
    </>
}