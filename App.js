import React, { Component } from 'react';
import { Text, View } from 'react-native';
import  {NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigation";

export default class App extends Component {
render(){
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}


}










