import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        gap: 20,
        padding: 0,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#292929',
    },

    HeaderLeft: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 2,
        margin: 0,
        padding: 0,
        flex: 1,
    },

    LocationSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        flexGrow: 0,
        gap: 5,
        paddingLeft: 10,
    },

    HeaderRight: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingRight: 10,
    },

    LocationText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 600
    },

    DateSection: {
        display: "flex",
        paddingLeft: 10,
        margin: 0,
    },

    DateText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 400,
    },

    SearchInput: {
        padding: 10,
        backgroundColor: '#ffffff',
        color: '#111111',
        borderRadius: 100,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
    },

    SuggestionContainer: {
        position: "absolute",
        top: 105,
        width: '100%',
        marginTop: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },

    Suggestion: {
        padding: 10,
    },

    SuggestionText: {
        color: '#000000'
    },

});