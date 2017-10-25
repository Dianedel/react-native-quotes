import {
    StyleSheet
} from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    button : {
        width : responsiveWidth(20),
        height : responsiveWidth(20),
        borderRadius : responsiveWidth(10),
        backgroundColor : "#00BCD4",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 2,
        shadowOpacity: 0.5
    },
    icon : {
        fontSize : responsiveFontSize(4),
        color : "#ffffff",
        textAlign : "center",
    }
});