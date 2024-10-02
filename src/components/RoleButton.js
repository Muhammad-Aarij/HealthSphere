import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../theme/index';

const RoleButton = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (

        <View style={styles.buttonRow}>
            <TouchableOpacity
                style={[styles.button, selectedButton === 0 && styles.selectedButton]}
                onPress={() => handleButtonClick(0)}
            >
                <Text style={styles.txt}>Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, selectedButton === 1 && styles.selectedButton]}
                onPress={() => handleButtonClick(1)}
            >
                <Text style={styles.txt}>Doctor</Text>
            </TouchableOpacity>
        </View>

    );
};

export default RoleButton;

const styles = StyleSheet.create({
    container: {

    },
    buttonRow: {
        backgroundColor: Colors.lightBlue,
        flexDirection: 'row',
        padding: 1,
        paddingHorizontal: 10,
        width: 340,
        borderRadius: 22,
        alignItems: "center",
        marginBottom:20,
    },
    button: {

        width: "50%",
        height: 50,
        borderRadius: 15,
        marginVertical: 10,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',

    },
    txt: {
        color: Colors.white,
    },
    selectedButton: {
        backgroundColor: Colors.darkBlue,
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    normalButton: {
        backgroundColor: 'white',
    },
});