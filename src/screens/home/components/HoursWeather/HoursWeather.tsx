import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Hours} from '../../../../api';

interface HoursWeatherProps {
  hours?: Hours[];
}

export const HoursWeather: React.FC<HoursWeatherProps> = ({hours}) => {
  const styles = createStylesheet();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {hours?.map((it, index) => {
        return (
          <View style={styles.item} key={index}>
            <Image
              style={styles.conditionIcon}
              source={{uri: `https:${it.condition.icon}`}}
            />
            <Text style={styles.degreesText}>{`${it.temp_c}°C`}</Text>
            <Text style={styles.date}>
              {it.time.substring(11, it.time.length)}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const createStylesheet = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginBottom: 42,
      marginTop: 24,
    },
    item: {
      alignItems: 'center',
      paddingRight: 24,
    },
    conditionIcon: {
      width: 60,
      height: 60,
    },
    degreesText: {
      color: '#dfe6e9',
      fontSize: 18,
      fontWeight: 'bold',
    },
    date: {
      color: '#dfe6e9',
      marginTop: 6,
    },
  });
};
