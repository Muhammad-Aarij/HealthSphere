import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    slider: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor:"red",
        // paddingHorizontal:5,
        paddingTop:15,
    },
    sliderWrapper: {
        paddingHorizontal:10,
        width: '100%',
        height: "100%",
        // borderWidth: 2,
        // borderColor:"red",
    },
    flatListContent: {
        gap: 10,
    },
    sliderItem: {
        // borderWidth: 2,
        // borderColor:"red",
        width: width * 0.937,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sliderTile: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        objectFit: "cover",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 15,
    },
    sliderText: {
        position: "absolute",
        bottom: 15,
        fontFamily: "sans-serif-regular",
        fontSize: 14,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: "white",
        paddingVertical: 3,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    btnContainer: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
        // marginBottom: 5,
        paddingBottom:15,
    },
    custombtnContainer: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
        // marginBottom: 5,
        paddingBottom:15,
    },
    arrowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 7,
        paddingRight: 10,
        position: "absolute",
        top: "37%",
    },
    arrowBtnLeft: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 3,
    },
    arrowBtnRight: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 3,
    },
});
