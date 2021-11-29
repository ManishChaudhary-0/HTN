import React from 'react';
import { StyleSheet} from 'react-native';
import SetupNavigation from './navigation/SetupNavigation';


export default function App() {
  return (
    <SetupNavigation />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }

});
