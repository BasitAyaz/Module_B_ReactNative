import { TouchableOpacity, Text } from 'react-native'
import styles from '../styling'

export default function SMButton({ label }) {

    return <TouchableOpacity style={styles.btn}>
        <Text>{label}</Text>
    </TouchableOpacity>
}