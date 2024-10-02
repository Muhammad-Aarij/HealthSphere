import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import RoleButton from '../../components/RoleButton';
import CustomButton from '../../components/CustomButton';

export default function SignUp({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async () => {
        if (password == confirmPassword) {
            if (username && password) {
                const user = { username, password };
                console.log("User")
                await AsyncStorage.setItem('userState', JSON.stringify(user));
                dispatch(signIn(user));
            } else {
                alert("Please enter username and password");
            }
        }
        else {
            alert("Passwords do not match");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Sign Up</Text>
            </View>
            <View style={styles.inputContainer}>
                <RoleButton />
                <CustomTextInput
                    label="Enter name"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                    placeholder="Email"
                />
                <CustomTextInput
                    label="Enter password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    placeholder="Password"
                />
                <CustomTextInput
                    label="Enter confirm password"
                    value={confirmPassword}
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    placeholder="Confirm Password"
                />

                <CustomButton
                    title={"Sign Up"}
                />

                <View style={{ marginTop: 5, flexDirection: "row", gap: 5 }}>
                    <Text style={styles.txt}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('signIn');
                    }}>
                        <Text style={{ ...styles.txt, fontWeight: 900 }}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


