import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import signbg from '../../assets/images/signbg.jpg'
import CustomButton from '../../components/CustomButton';

export default function SignIn({ navigation }) {
    // const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // const handleSignIn =async () => {
    //     if (username && password) {
    //         const user = { username, password };
    //         console.log("User")
    //         await AsyncStorage.setItem('userState', JSON.stringify(user));
    //         dispatch(signIn(user));
    //     } else {
    //         alert("Please enter username and password");
    //     }
    // };


    return (
        <ImageBackground source={signbg} style={styles.container}>
            <View style={{ ...styles.innercontainer, }}>
                <View style={styles.line}></View>
                <Text style={styles.heading}>Sign In</Text>
                <CustomTextInput
                    label="Enter Email"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                    placeholder="Email"
                />
                <CustomTextInput
                    label="Enter Password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    placeholder="Password"
                />
                {/* <TouchableOpacity style={styles.btn} >
                    <Text >Sign In</Text>
                </TouchableOpacity> */}

                <CustomButton
                    title={"SignIn"} />
                <View style={{ marginTop: 10, flexDirection: "row", gap: 5 }}>
                    <Text style={styles.txt}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('signUp');
                    }}>
                        <Text style={{ ...styles.txt, fontWeight: 900 }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

