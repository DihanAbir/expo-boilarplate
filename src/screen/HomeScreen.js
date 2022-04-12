import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  FlatList,
  Button,
  View,
  ScrollView,
} from "native-base";

import { Dimensions, StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      {" "}
      {/* <Box flex="1" safeArea>  **for safe area*/}
      <Text>Dihan's planet dadd</Text>
    </AppScreen>
  );
};

export default HomeScreen;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
});
