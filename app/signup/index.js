import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView, TextInput } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import the icon library

const Page = () => {
  const handleSignin = () => {
    router.replace('/signin');
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../images/signup-top.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.greetingText}>Hello There,</Text>
        <Text style={styles.gladText}>Glad you could make it.</Text>
      </ImageBackground>
      <Text style={styles.loginText}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TouchableOpacity onPress={() => alert("Development in Progress")}>
          <View style={styles.loginbutton}>
            <Text style={styles.loginButtonText}>Signup</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signinText}>
          <Text style={styles.signinText1}>Already have an Account?</Text>
          <Text style={styles.signinText2} onPress={handleSignin}>Signin</Text>
        </View>
      </View>
      <View style={styles.connectWithUsContainer}>
        <Text style={styles.connectWithUsText}>Connect with us at:</Text>
        <TouchableOpacity>
            <Ionicons name="logo-instagram" size={28} color="#fff" style={styles.socialIcon} />
          </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="logo-google" size={28} color="#fff" style={styles.socialIcon} />
          </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="logo-linkedin" size={28} color="#fff" style={styles.socialIcon} />
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,.
    height:"100%"
  },
  imageBackground: {
    flex: 1,
    height: 250,
    resizeMode: "cover",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  gladText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 20,
  },
  loginText: {
    paddingTop: 50,
    paddingRight: 30,
    fontSize: 50,
    textAlign: "right",
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 20,
    marginTop:0
  },
  input: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 2,
    borderRadius: 36,
    marginBottom: 16,
    paddingHorizontal: 26,
    color: "#000",
  },
  loginbutton: {
    backgroundColor: "black",
    height:50,
    justifyContent:"center",
    padding: 10,
    borderRadius: 36,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  signinText: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    gap: 4,
  },
  signinText1: {
    fontSize: 20,
  },
  signinText2: {
    fontSize: 20,
    color: "blue",
  },
  connectWithUsContainer: {
    // flex: 1,
    flexDirection:"row",
    gap:10,
    justifyContent:"center",
    marginTop:90,
    height:120,
    backgroundColor: "#100B16",
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  connectWithUsText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});


export default Page;
