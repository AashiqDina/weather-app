import { StyleSheet } from 'react-native';
import { WeatherTheme } from '../../types/types';

export const headerStyles = (theme: WeatherTheme) =>  StyleSheet.create({
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
    },

    HeaderLeft: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // marginLeft: 10,
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
        color: theme.textColor,
        fontSize: 25,
        fontWeight: 600
    },

    DateSection: {
        display: "flex",
        paddingLeft: 10,
        margin: 0,
    },

    DateText: {
        color: theme.textColor,
        fontSize: 15,
        fontWeight: 400,
    },

    SearchInput: {
        padding: 10,
        backgroundColor: theme.inputBackground,
        color: theme.inputTextColor,
        borderRadius: 100,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },

    SuggestionContainer: {
        position: "absolute",
        top: 105,
        width: '95%',
        marginTop: 5,
        backgroundColor: theme.inputBackground,
        borderRadius: 10,
        zIndex: 1,
        borderWidth: 0,
        paddingTop: 2,
        paddingBottom: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    Suggestion: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: theme.inputBackground,
        margin: 3,
        marginTop: 1,
        marginBottom: 2,
    },

    SuggestionText: {
        color: theme.inputTextColor,
        fontSize: 15
    },
        
    SuggestionText2: {
        color: theme.inputTextColor,
        fontSize: 12
    },

});