import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WellnessNavigator from "./WellnessNavigator";
import NoContentScreen from "../screens/NoContentScreen";
import HealthMonitoringScreen from "../screens/pregnant/HealthMonitoringScreen";
import AppointmentScreen from "../screens/pregnant/AppointmentScreen";
import PregnantContent from "../screens/pregnant/PregnantContent";
import RiskDetectorPregnant from "../screens/pregnant/RiskDetectorPregnant";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const PregnantNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={WellnessNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="home" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="TeleHealth"
      component={NoContentScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            color={color}
            name="video-outline"
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Health M"
      component={HealthMonitoringScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="chart-line" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Content"
      component={PregnantContent}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            color={color}
            name="book-open-blank-variant"
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={AppointmentScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            color={color}
            name="bell-outline"
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Risk Detector"
      component={RiskDetectorPregnant}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            color={color}
            name="hazard-lights"
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                color={color}
                name="account"
                size={size}
              />
            ),
          }}
        />
  </Tab.Navigator>
);

export default PregnantNavigator;
