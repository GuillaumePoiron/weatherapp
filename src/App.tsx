import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import {StatusBar} from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#1E213A', paddingHorizontal: 16}}>
        <StatusBar style={'light'} />
        <View
          style={{
            backgroundColor: '#636e72',
            alignItems: 'center',
            paddingVertical: 18,
            borderRadius: 12,
          }}>
          <Ionicons name="add-circle" size={30} color='black' />
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            Weather App
          </Text>
          <Text style={{color: 'black'}}>
            Nom du téléphone : {Constants.deviceName}
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
