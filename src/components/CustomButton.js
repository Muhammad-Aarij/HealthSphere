import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../theme/index';

const CustomButton = ({ onPress, title, theme }) => {
    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor: Colors.blue }} onPress={onPress} >
            <Text style={{ color: Colors.white, fontSize: 15, fontFamily: "sans-serif-medium" }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 340,
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
});

export default CustomButton;