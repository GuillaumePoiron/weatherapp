import Constants from 'expo-constants';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, useColorScheme, AppState} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SettingsScreen() {
  let colorScheme = useColorScheme();
  const currentState = useRef(AppState.currentState);
  const [state, setState] = useState(currentState.current);

  useEffect(() => {
    const handleChange = AppState.addEventListener('change', changedState => {
      console.log(changedState);
      currentState.current = changedState;
      setState(currentState.current);
    });
    return () => {
      handleChange.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Settings</Text>
        <Text style={{color: 'black'}}>
          Nom du téléphone : {Constants.deviceName}
        </Text>
        <Text>{colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
        <Text>App is in {state} mode</Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
