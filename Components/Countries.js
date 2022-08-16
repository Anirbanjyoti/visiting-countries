import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearched(data);
        setCountries(data);
      });
  }, []);
  const handlesearch = text=>{
    const filtered = countries.filter(country => country.name.common.includes(text));
    setSearched(filtered)
  }
  return (
    <View>
      <Text style={styles.header}>Countries : {searched.length}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handlesearch}
        // value={number}
        placeholder="Search Country"
        // keyboardType="numeric"
      />
      <ScrollView>
        {searched.map((country) => (
          <Country key={country.ccn3} country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    color: "red",
    fontSize: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
