import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from '../home/Home'
import Header from '../header/Header';
import { useWeatherData } from '../../hooks/useWeatherData';
import Background from '../background/Background';
import Loading from '../../../assets/animations/Loading';

export default function App() {

  const {locationData, currentWeather, dailyWeather, theme, loading, error, handleLocationSelection, resetError} = useWeatherData()

  if(loading) return <Loading/> 

  return (
    <View style={styles.container}>

      <Background
        theme={theme}
      />

      <Header 
        theme={theme}
        location={locationData?.name}
        handleLocationSelection={handleLocationSelection}
      />
      <Home
        theme={theme}
        currentWeather={currentWeather}
        dailyWeather={dailyWeather}
      />
      <StatusBar style={theme?.statusBarStyle} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: 'black'
  },
});
