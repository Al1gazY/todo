import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#121212',
        padding: 10,
        paddingBottom: 30,
        flex: 1
    },
    inputStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderColor: '#333',
        borderWidth: 1
    },
    switchStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    basicTextStyle: {
        paddingRight: 10,
        color: '#ffffff',
        fontSize: 16,
    },
    errorStyle: {
        backgroundColor: '#292929',
        borderColor: 'red',
        borderWidth: 2,
        padding: 10,
        borderRadius: 5
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 14,
    },
    boldText: {
        fontWeight: 'bold'
    }
});
