import { Text, View, TouchableOpacity } from "react-native";
import styles from "../config/styling";
import SMButton from "../config/components/SMButton";

export default function Home({ navigation }) {
    return <>
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.btn}>
                <Text style={styles.textWhite}>Products</Text>
            </TouchableOpacity>
        </View>
    </>
}