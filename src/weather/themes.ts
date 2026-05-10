import ClearDay from "../../assets/weather-background/ClearDay.svg"
import ClearNight from "../../assets/weather-background/ClearNight.svg"
import CloudyDay from "../../assets/weather-background/CloudyDay.svg"
import CloudyNight from "../../assets/weather-background/CloudyNight.svg"
import FoggyDay from "../../assets/weather-background/FoggyDay.svg"
import FoggyNight from "../../assets/weather-background/FoggyNight.svg"
import RainyDay from "../../assets/weather-background/RainDay.png" // used pngs due to possible rendering issues
import RainyNight from "../../assets/weather-background/RainNight.png"
import SnowyDay from "../../assets/weather-background/SnowyDay.png"
import SnowyNight from "../../assets/weather-background/SnowyNight.png"
import ThunderstormDay from "../../assets/weather-background/ThunderstormDay.png"
import ThunderstormNight from "../../assets/weather-background/ThunderstormNight.png"
import { WeatherTheme } from "../types/types"

const weatherThemes = {
    clearDay: {
        background: ClearDay,
        textColor: "#ffffff",
        secondaryTextColor: "#ffffff00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#000000",
        statusBarStyle: "light" as const,
    },
    clearNight: {
        background: ClearNight,
        textColor: "#ffffff",
        secondaryTextColor: "#ffffff00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#120929",
        statusBarStyle: "light" as const,
    },
    cloudyDay: {
        background: CloudyDay,
        textColor: "#ffffff",
        secondaryTextColor: "#ffffff00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#000000",
        statusBarStyle: "light" as const,
    },
    cloudyNight: {
        background: CloudyNight,
        textColor: "#ffffff",
        secondaryTextColor: "#ffffff00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#120929",
        statusBarStyle: "light" as const,
    },
    foggyDay: {
        background: FoggyDay,
        textColor: "#ffffff",
        secondaryTextColor: "#dab25d00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#111111",
        statusBarStyle: "light" as const,
    },
    foggyNight: {
        background: FoggyNight,
        textColor: "#ffffff",
        secondaryTextColor: "#ffffff00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#120929",
        statusBarStyle: "light" as const,
    },
    rainyDay: {
        background: RainyDay,
        textColor: "#ffffff",
        secondaryTextColor: "#bdbdbd00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#111111",
        statusBarStyle: "light" as const,
    },
    rainyNight: {
        background: RainyNight,
        textColor: "#ffffff",
        secondaryTextColor: "#ffffff00",
        inputBackground: "#FFFFFF",
        inputTextColor: "#120929",
        statusBarStyle: "light" as const,
    },
    snowyDay: {
        background: SnowyDay,
        textColor: "#0b4368",
        secondaryTextColor: "#66666600",
        inputBackground: "#0b4368cf",
        inputTextColor: "#ffffff",
        statusBarStyle: "light" as const,
    },
    snowyNight: {
        background: SnowyNight,
        textColor: "#120929",
        secondaryTextColor: "#12092900",
        inputBackground: "#FFFFFF",
        inputTextColor: "#120929",
        statusBarStyle: "light" as const,
    },
    thunderstormDay: {
        background: ThunderstormDay,
        textColor: "#ffffff",
        secondaryTextColor: "#00fff725",
        inputBackground: "#FFFFFF",
        inputTextColor: "#111111",
        statusBarStyle: "light" as const,
    },
    thunderstormNight: {
        background: ThunderstormNight,
        textColor: "#ffffff",
        secondaryTextColor: "#120929",
        inputBackground: "#FFFFFF",
        inputTextColor: "#120929",
        statusBarStyle: "light" as const,
    },
}

// Original Idea but would make the code less readable down the line
// const codeToTheme : Record<string, WeatherTheme> = {
//     "0-1" : weatherThemes.clearDay,
//     "0-0" : weatherThemes.clearNight,
// }

const weatherGroups = {
    clear: [0],
    cloudy: [1, 2, 3],
    foggy: [45, 48],
    rainy: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    snowy: [71, 73, 75, 77, 85, 86],
    thunderstorm: [95, 96, 99],
}

export const getWeatherTheme = ( weatherCode: number, isDay: number): WeatherTheme => {

    const time = isDay ? "Day" : "Night"

    if(weatherGroups.clear.includes(weatherCode)) return weatherThemes[`clear${time}`]
    if(weatherGroups.cloudy.includes(weatherCode)) return weatherThemes[`cloudy${time}`]
    if(weatherGroups.foggy.includes(weatherCode)) return weatherThemes[`foggy${time}`]
    if(weatherGroups.rainy.includes(weatherCode)) return weatherThemes[`rainy${time}`]
    if(weatherGroups.snowy.includes(weatherCode)) return weatherThemes[`snowy${time}`]
    if(weatherGroups.thunderstorm.includes(weatherCode)) return weatherThemes[`thunderstorm${time}`]
    
    return weatherThemes[`clearDay`]

}