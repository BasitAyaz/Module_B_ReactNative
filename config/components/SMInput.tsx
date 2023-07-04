import { TextInput, View } from 'react-native'
import styles from '../styling'
import SMIcon from './SMIcon'

export default function SMInput(props: any) {
    const { disabled, onChangeText, icon, value, label } = props
    return <>
        <View style={[styles.w100, { position: 'relative' }]}>
            {icon && <View style={{ position: 'absolute', left: 15, top: 13, zIndex: 1 }}>
                <SMIcon name={icon} size={25} />
            </View>}
            <TextInput style={[styles.input, icon && { paddingLeft: 50 }]} placeholder={label} onChangeText={onChangeText} editable={!disabled} />
        </View>
    </>
}
