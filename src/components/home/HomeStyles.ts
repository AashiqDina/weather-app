import { StyleSheet } from 'react-native';
import { WeatherTheme } from '../../types/types';

export const HomeStyles = (theme: WeatherTheme) => StyleSheet.create({

    TemperatureContainer: {
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        height: 200,
        marginLeft: 30,
        marginTop: 30
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
    }
})