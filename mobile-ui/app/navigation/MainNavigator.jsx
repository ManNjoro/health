import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import PregnantNavigator from "./PregnantNavigator";
import PostNatalAppNavigator from "./PostNatalAppNavigator";
import DoctorAppNavigator from "./DoctorAppNavigator";
import PlanningNavigator from "./PlanningNavigator";
import PredictionScreen from "../screens/PredictionScreen";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="pregnant" component={PregnantNavigator} />
    <Stack.Screen name="postnatal" component={PostNatalAppNavigator} />
    <Stack.Screen name="planning" component={PlanningNavigator} />
    <Stack.Screen name="doctor" component={DoctorAppNavigator} />
    <Stack.Screen
      options={{
        headerShown: true,
      }}
      name="Prediction"
      component={PredictionScreen}
    />
  </Stack.Navigator>
);

export default MainNavigator;
