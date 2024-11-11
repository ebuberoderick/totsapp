import "../global.css";
import { Slot, Stack } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler } from "react-native";
import { Provider } from "react-redux";
import reduxStore from "../Store/index";
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from "../components/organisms/SplashScreen";

export default function Layout() {
  const { store, persistor } = reduxStore()
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <Stack screenOptions={{headerShown:false}} />
      </PersistGate>
    </Provider>
  )
}
