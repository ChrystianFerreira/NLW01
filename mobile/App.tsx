import React from 'react';
import { StatusBar, View,  } from 'react-native';

import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/>  
    </>
  );
}