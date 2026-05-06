import { View, Text } from "react-native";
import { currentWeather, currentUnits } from "../../types/types";
import HomeStyles from "./HomeStyles";

type props = {
    currentWeather: {current: currentWeather, current_units: currentUnits} | undefined
}

export default function Home({currentWeather}: props){

    return (
        <View>
            <Text style={HomeStyles.Temperature}>{`${currentWeather?.current.temperature_2m}${currentWeather?.current_units.apparent_temperature}`}</Text>
        </View>
    )
}