import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity,ScrollView, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
// import { useNavigate } from 'react-router-native';
import { router } from 'expo-router';

export default function Page() {
  // const navigate = useNavigate();

  const handlePress = () => {
    // navigate('/signup');
    router.replace('/signup');

  };
  return (
    <ScrollView>
      <LinearGradient
        colors={["#000000", "#250762"]} // Define your gradient colors
        style={styles.container}
      >
        <View style={styles.nav}>
          <Image source={require("./images/logo.png")} style={styles.logo} />
          <Ionicons name="md-menu" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.heading}>
            Empower Your Potential by keeping Track of your Time
          </Text>
          <Text style={styles.subheading}>
            Keeping track of time has never been easier.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
 
          <TouchableOpacity onPress={() => alert("Development in Progress")}>
            <View style={styles.contactbutton}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </View>
          </TouchableOpacity>
          <Image
            source={require("./images/graph-3.png")}
            style={styles.graphs}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 180,
    // height: "90%",
    // width: "40%",
  },
  heading: {
    marginTop: 40,
    // marginTop: "5%",
    textAlign: "auto",
    fontWeight: "bold",
    fontSize: 60,
    // fontSize: 60,
    color: "white",
  },
  subheading: {
    marginTop: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#DACCE8",
  },
  button: {
    backgroundColor: "#0020FF",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  contactbutton: {
    backgroundColor: "#362A50",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  graphs: {
    marginTop: 30,
    height: 240,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
