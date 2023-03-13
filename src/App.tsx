import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MaterialIcons} from '@expo/vector-icons';
import HomeScreen from './screens/home/Home';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#1E213A'},
              headerTitle: '',
              headerShadowVisible: false,
              // eslint-disable-next-line react/no-unstable-nested-components
              headerLeft: () => (
                <MaterialIcons name="my-location" size={24} color="#dfe6e9" />
              ),
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <MaterialIcons name="search" size={24} color="#dfe6e9" />
              ),
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
