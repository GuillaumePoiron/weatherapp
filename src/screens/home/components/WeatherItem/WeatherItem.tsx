import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {formatDate} from '../../../../utils/date.utils';

interface WeatherItemProps {
  conditionIcon?: string;
  minDegrees?: number;
  maxDegrees?: number;
  date: string;
}

export const WeatherItem: React.FC<WeatherItemProps> = ({
  conditionIcon,
  minDegrees,
  maxDegrees,
  date,
}) => {
  const styles = createStylesheet();
  return (
    <View style={styles.container}>
      <View style={styles.containerDate}>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <Image
        style={styles.conditionIcon}
        source={{uri: `https:${conditionIcon}`}}
      />
      <View style={styles.containerDegrees}>
        <Text style={styles.degreesText}>
          <Text style={styles.maxDegrees}>{maxDegrees}°</Text>
          <Text> / </Text>
          <Text style={styles.minDegrees}>{minDegrees}°C</Text>
        </Text>
      </View>
    </View>
  );
};

const createStylesheet = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 0.5,
      borderColor: '#dfe6e9',
      paddingVertical: 8,
      justifyContent: 'space-between',
    },
    containerDate: {
      paddingHorizontal: 24,
    },
    date: {
      textAlign: 'center',
      width: 40,
      color: '#dfe6e9',
      fontSize: 16,
    },
    conditionIcon: {
      width: 60,
      height: 60,
    },
    containerDegrees: {
      paddingRight: 24,
    },
    degreesText: {
      color: '#dfe6e9',
      marginTop: 6,
      fontSize: 14,
      fontWeight: 'bold',
    },
    minDegrees: {
      color: '#2e86de',
    },
    maxDegrees: {
      color: '#ee5253',
    },
  });
};
