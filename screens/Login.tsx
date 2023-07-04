import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ToastAndroid } from "react-native";
import styles from "../config/styling";
import SMInput from "../config/components/SMInput";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export default function Login({ navigation }) {

    const signUp = () => {
        auth()
            .createUserWithEmailAndPassword('abcxyz@gmail.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const login = () => {
        auth()
            .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then((res) => {
                console.log('signed in successfully!', res.user.uid);
                navigation.navigate('Products')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT);
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT)
                    console.log('That email address is invalid!');
                }

                ToastAndroid.show(error.message, ToastAndroid.LONG)
                console.error(error);
            });
    }

    const sendData = () => {
        // let id = database().ref('todos/').push().key
        // database().ref(`todos/${id}`).set({
        //     task: 'ABC',
        //     id: id,
        //     time: JSON.stringify(new Date())
        // });

        navigation.navigate('Task')
    }
    return <>
        <View style={[styles.bgLight, styles.p2, styles.h100]}>
            <View style={[styles.flexCenter, styles.p3]}>
                <Image style={[{ width: 100, height: 100 }, styles.rounded]} source={{ uri: 'https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg' }} />
            </View>
            <View style={styles.py2}>
                <SMInput icon='mail' label='Email' />

            </View>
            <View style={styles.py2}>
                <SMInput icon='lock' label='Password' />
            </View>
            <View style={styles.py2}>
                <TouchableOpacity onPress={login} style={styles.btn}>
                    <Text style={[styles.textWhite, styles.fs5, styles.textCenter]}>Login</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.py2}>
                <TouchableOpacity onPress={signUp} style={styles.btn}>
                    <Text style={[styles.textWhite, styles.fs5, styles.textCenter]}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.py2}>
                <TouchableOpacity onPress={sendData} style={styles.btn}>
                    <Text style={[styles.textWhite, styles.fs5, styles.textCenter]}>Add task</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.py2}>
                <Text style={[styles.textCenter, styles.textBlack]}>Are You New to the App?</Text>
                <TouchableOpacity>
                    <Text style={[styles.fs3, styles.textPrimary, styles.textCenter]}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    </>
}