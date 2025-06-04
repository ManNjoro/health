import { createStackNavigator } from "@react-navigation/stack";
import BabyDevelopmentScreen from "../screens/pregnant/BabyDevelopmentScreen";
import AppointmentScreen from "../screens/pregnant/AppointmentScreen";
import HealthMonitoringScreen from "../screens/pregnant/HealthMonitoringScreen";
import DashboardPreg from "../screens/pregnant/DashboardPreg";

const Stack = createStackNavigator();

const WellnessNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={DashboardPreg}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Health & Development" component={BabyDevelopmentScreen} />
    <Stack.Screen name="Summary" component={HealthMonitoringScreen} />
    <Stack.Screen name="Appointments" component={AppointmentScreen} />
  </Stack.Navigator>
);

export default WellnessNavigator;
