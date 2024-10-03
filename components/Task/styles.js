import { StyleSheet } from "react-native";

export default StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1e1e1e',
        padding: 15,
        marginVertical: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        borderLeftWidth: 5,
        borderColor: '#4cd964'
    },
    leftContainer: {
        flex: 3,
    },
    headingText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    statusText: {
        color: '#999999',
        fontSize: 14,
        marginTop: 4,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteIcon: {
        marginTop: 10,
    }
});
