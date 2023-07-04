import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import database from '@react-native-firebase/database';
import styles from '../config/styling';


export default function Task({ navigation }) {
    const [list, setList] = useState<any>([])
    const getTask = () => {
        database().ref().child('todos/').on('value', (data) => {
            let arr = Object.values(data.val())
            console.log(arr)
            setList([...arr])
        })
    }
    useEffect(() => {
        getTask()
    }, [])
    return <>
        <View style={[styles.p2, styles.h100, styles.bgLight]}>
            <Text>Tasks</Text>

            {list.map((x: any) => <View style={[styles.bgWhite, styles.p2, styles.mb2]} key={x.id}><Text>{x.task}</Text></View>)}
        </View>
    </>
}
