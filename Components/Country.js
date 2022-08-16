import { View, Text, Image } from "react-native";
import React from "react";

export default function Country({ country }) {
  const { name, population, nativeName, currencies } = country;
  return (
    <View>
      <Image
        source={{
          uri: country.flags.png,
        }}
        style={{ width: 200, height: 200 }}
      ></Image>
      <Text>Country Name: {name.common}</Text>
      <Text>Population: {population}</Text>
    </View>
  );
}
