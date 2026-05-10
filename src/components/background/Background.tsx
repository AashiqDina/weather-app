import { View, ImageBackground } from "react-native"
import { WeatherTheme } from "../../types/types"
import BackgroundStyle from "./BackgroundStyle"

type props = {
    theme: WeatherTheme
}

export default function Background({ theme }: props){

    const BackgroundAsset = theme.background
    const isImage = typeof BackgroundAsset === "number"

    return (
        <View style={BackgroundStyle.container}>

            {
                isImage ? (
                    <ImageBackground
                        source={BackgroundAsset}
                        resizeMode="cover"
                        style={BackgroundStyle.image}
                    />
                ) : (
                    <BackgroundAsset
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    />
                )
            }

        </View>
    )
}