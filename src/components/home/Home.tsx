import { View, Text } from "react-native";
import { currentWeather, currentUnits, WeatherTheme } from "../../types/types";
import { HomeStyles } from "./HomeStyles";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

type props = {
    currentWeather: {current: currentWeather, current_units: currentUnits} | undefined,
    theme: WeatherTheme
}

export default function Home({currentWeather, theme}: props){

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
        </View>
    );
}