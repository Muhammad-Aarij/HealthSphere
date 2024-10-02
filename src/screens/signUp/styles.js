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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white,
        
    },
    headingContainer: {
        paddingVertical: 50,
        backgroundColor: Colors.blue,
        width: "100%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"center",
        alignItems: 'center',
    },
    innercontainer: {
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    inputContainer: {
        flex: 1,
        // borderWidth:2,   
        // width: width - 40,
        marginBottom: 15,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 5,
        padding: 10,
        paddingTop:40,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    txt: {

        fontSize: 14,
        color: Colors.blue,
    },
    heading: {
        fontSize: 34,
        fontFamily: "sans-serif-medium",
        color: Colors.white,
        marginBottom: 10,
    },
    btn: {
        width: 150,
        backgroundColor: Colors.blue,
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    }
});