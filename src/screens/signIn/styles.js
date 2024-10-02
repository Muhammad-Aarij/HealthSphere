import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import Colors from '../../theme/index';
const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    innercontainer: {
        flexDirection: 'column',
        width: "100%",
        height: "55%",
        paddingTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    heading: {
        fontSize: 34,
        fontFamily: "Nunito-Bold",
        // fontFamily: "sans-serif-medium",
        color: Colors.blue,
        marginBottom: 10,
    },
    txt: {
        fontSize: 14,
        color: Colors.blue,
    },
    btn: {
        width: 150,
        backgroundColor: Colors.blue,
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    line:{
        borderRadius:4,
        width: 70,
        height: 5,
        backgroundColor: Colors.darkBlue,
        marginBottom: 25,
    }
});