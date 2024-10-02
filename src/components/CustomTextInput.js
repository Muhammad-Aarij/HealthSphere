import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useTheme } from 'react-native-paper';
import Colors from '../theme/index';

const CustomTextInput = ({ value, onChangeText, placeholder, label }) => {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            {/* {label && <Text style={{ ...styles.label }}>{label}</Text>} */}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                label={placeholder}
                activeOutlineColor={Colors.darkBlue}
                outlineColor={Colors.blue}
                mode='outlined'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: Colors.blue,
    },
    input: {
        height: 55,
        width: 340,
        // borderColor: '#ccc',
        // borderWidth: 1,
        // borderRadius: 5,
        // paddingHorizontal: 10,
        backgroundColor: "white",
    },
});

export default CustomTextInput;
