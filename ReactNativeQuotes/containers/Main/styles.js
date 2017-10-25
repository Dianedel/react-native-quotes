import {
    StyleSheet
} from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        width : responsiveWidth(100),
        height : responsiveHeight(100),
        paddingVertical : responsiveHeight(2),
        paddingHorizontal : responsiveWidth(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#673AB7', // because I like purple
    },
    quote : {
        color : "#ffffff",
        fontSize : responsiveFontSize(3),
        textAlign : "center",
    },
    author : {
        marginVertical : responsiveHeight(5),
        color : "#ffffff",
        fontSize : responsiveFontSize(2.5),
        textAlign : "center",
    }
});