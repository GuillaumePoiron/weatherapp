import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CurrentWeatherProps {
  conditionIcon?: string;
  conditionText?: string;
  degrees?: number;
  locationName?: string;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  conditionIcon,
  conditionText,
  degrees,
  locationName,
}) => {
  const styles = createStylesheet();
  return (
    <View style={styles.container}>
      <Image
        style={styles.conditionIcon}
        source={{uri: `https:${conditionIcon}`}}
      />
      <Text style={styles.degreesText}>{degrees}°C</Text>
      <Text style={styles.conditionText}>{conditionText}</Text>
      <View style={styles.location}>
        <Ionicons name="location-sharp" size={25} color="#dfe6e9" />
        <Text style={styles.locationText}>{locationName}</Text>
      </View>
    </View>
  );
};

const createStylesheet = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    conditionIcon: {
      width: 100,
      height: 100,
    },
    degreesText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#dfe6e9',
    },
    conditionText: {
      color: '#dfe6e9',
    },
    location: {
      flexDirection: 'row',
      paddingVertical: 12,
    },
    locationText: {
      fontSize: 20,
      paddingHorizontal: 4,
      color: '#dfe6e9',
    },
  });
};
