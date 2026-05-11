import { View, Text } from "react-native";
import { currentWeather, currentUnits, WeatherTheme, DailyWeatherData } from "../../types/types";
import { HomeStyles } from "./HomeStyles";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { weatherLabels } from "../../weather/weatherLabels";

type props = {
    currentWeather: {current: currentWeather, current_units: currentUnits} | undefined,
    dailyWeather: DailyWeatherData | undefined
    theme: WeatherTheme
}

export default function Home({currentWeather, dailyWeather, theme}: props){

    const styles = HomeStyles(theme)

    return (
        <View style={styles.TemperatureContainer}>
            <MaskedView
                style={styles.fillContainer}
                maskElement={
                    <View style={styles.fillContainer}>
                        <Text style={styles.maskedTempText}>{currentWeather?.current.temperature_2m ?? 0}°</Text>
                    </View>
                }>
                <LinearGradient
                    colors={[theme.textColor, theme.secondaryTextColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.fillContainer}
                >
                    <Text style={styles.tempText}>{currentWeather?.current.temperature_2m ?? 0}°</Text>
                </LinearGradient>
            </MaskedView>
            <View>
                <Text style={styles.WeatherLabel}>{weatherLabels[currentWeather?.current.weather_code ?? 0]}</Text>
            </View>
            <View>
                <Text style={styles.WeatherHL}>H: {dailyWeather?.daily.temperature_2m_max}   L: {dailyWeather?.daily.temperature_2m_min}</Text>
            </View>
        </View>
    );
}