import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from '../home/Home'
import Header from '../header/Header';
import { useWeatherData } from '../../hooks/useWeatherActions';

export default function App() {

  const {locationData, currentWeather, loading, handleLocationSelection} = useWeatherData()

  return (
    <View style={styles.container}>
      <Header 
        location={locationData?.name}
        handleLocationSelection={handleLocationSelection}
      />
      <Home
        currentWeather={currentWeather}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: '100%',
    backgroundColor: '#292929'
  },
});
