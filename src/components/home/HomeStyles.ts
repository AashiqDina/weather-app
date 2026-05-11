import { StyleSheet } from 'react-native';
import { WeatherTheme } from '../../types/types';

export const HomeStyles = (theme: WeatherTheme) => StyleSheet.create({

    TemperatureContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "100%",
        height: 125,
        marginLeft: 30,
        marginTop: 30,
    },

    fillContainer: {
        height: "100%",
        width: "100%",
    },

    maskedTempText: {
        fontSize: 120,
        fontWeight: 500,
        color: theme.textColor,
    },

    tempText: {
        opacity: 0,
        fontSize: 120,
        fontWeight: 100
    },

    WeatherLabel: {
        color: theme.textColor + 80,
        fontSize: 25,
        fontWeight: 400
    },

    WeatherHL: {
        color: theme.textColor + 80,
        fontSize: 18,
        fontWeight: 300
    }
})