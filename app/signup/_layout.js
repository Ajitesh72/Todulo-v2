import { Stack } from "expo-router";
const SignupLayout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PageScreen" component={PageScreen} />
    </Stack.Navigator>
  );
};
