import { Text, TouchableOpacity, View } from "react-native";
import styles from "../config/styling";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function TestingScreen() {
    return <>
        <View style={[styles.h100, styles.p2]}>
            <Text style={[styles.fs1, styles.textPrimary]}>Testing <Icon size={30} color={styles._dark} name='settings' /> </Text>
            <Text style={[styles.fs2, styles.p2, styles.border4, styles.borderPrimary]}>Testing</Text>
            <Text style={styles.fs3}>Testing</Text>
            <Text style={styles.fs4}>Testing</Text>
            <Text style={styles.fs5}>Testing</Text>
            <View style={[styles.p2, styles.my2, styles.bgPrimary, styles.rounded, styles.shadow5]}>
                <Text style={[styles.textWhite, styles.fs2, styles.textBold, styles.textCenter]}>Card
                    <Icon name='search' size={32} color='white' />
                </Text>
                <Text style={[styles.py2, styles.textWhite, styles.fs4]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque ratione voluptatum veniam, eligendi perspiciatis magnam, modi esse, optio assumenda dolor mollitia? Necessitatibus, a? Sunt omnis animi tenetur consequuntur ut?</Text>
            </View>
            <View style={[styles.p2, styles.my2, styles.bgWarning, styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, styles.rounded, styles.shadow4]}>
                <Text style={[styles.textBlack, styles.fs2]}>Total Price</Text>
                <Text style={[styles.textBlack, styles.fs2]}>500/-</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Icon name='add' color='white' size={20} />
            </TouchableOpacity>
        </View>
    </>
}