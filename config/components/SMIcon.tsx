import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styling';


export default function SMIcon(props: any) {
    const { name, size, color, sx } = props
    return <Icon name={name} size={size ?? 20} color={color ?? styles._dark} />
}