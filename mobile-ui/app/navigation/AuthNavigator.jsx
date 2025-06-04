import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import PasswordResetScreen from "../screens/PasswordResetScreen";
import ConfirmPasswordResetScreen from "../screens/ConfirmPasswordResetScreen";
import OtpScreen from "../screens/OtpScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen options={{
      headerShown: true
    }} name="Forgot-password" component={PasswordResetScreen} />
    <Stack.Screen options={{
      headerShown: true
    }} name="Reset Password" component={ConfirmPasswordResetScreen} />
    <Stack.Screen options={{
      headerShown: true
    }} name="OTP" component={OtpScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
