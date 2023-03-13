import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlashList} from '@shopify/flash-list';
import {useQuery} from '@tanstack/react-query';
import {Weather, getWeatherByCity} from '../../api';
import {CurrentWeather} from './components/CurrentWeather/CurrentWeather';
import {HoursWeather} from './components/HoursWeather/HoursWeather';
import {WeatherItem} from './components/WeatherItem/WeatherItem';

function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const styles = createStylesheet();

  const {data, refetch} = useQuery<Weather>({
    queryKey: ['getCurrentWeatherByCity'],
    queryFn: () => getWeatherByCity('Angers'),
  });

  const onRefresh = React.useCallback(() => {
    refetch();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [refetch]);

  const renderHeader = () => {
    return (
      <>
        <CurrentWeather
          conditionIcon={data?.current.condition.icon}
          degrees={data?.current.temp_c}
          conditionText={data?.current.condition.text}
          locationName={data?.location.name}
        />
        <HoursWeather hours={data?.forecast.forecastday[0].hour} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={data?.forecast.forecastday}
        ListHeaderComponent={renderHeader}
        renderItem={({item}) => (
          <WeatherItem
            conditionIcon={item.day.condition.icon}
            minDegrees={item.day.mintemp_c}
            maxDegrees={item.day.maxtemp_c}
            date={item.date}
          />
        )}
        onRefresh={onRefresh}
        refreshing={refreshing}
        estimatedItemSize={15}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const createStylesheet = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E213A',
    },
  });
};

export default HomeScreen;
