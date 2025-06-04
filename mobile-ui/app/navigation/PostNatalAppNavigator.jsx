import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WellnessNavigator from "./WellnessNavigator";
import NoContentScreen from "../screens/NoContentScreen";
import DashboardPostnatal from "../screens/postnatal/DashboardPostnatal";
import NotificationScreen from "../screens/postnatal/NotificationScreen";
import FeedingTips from "../screens/postnatal/FeedingTips";
import HealthStatus from "../screens/postnatal/HealthStatus";
import RiskDetectorPostNatal from "../screens/postnatal/RiskDetectorPostNatal";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const PostNatalAppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={DashboardPostnatal}
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
      component={HealthStatus}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="chart-line" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Content"
      component={FeedingTips}
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
      component={NotificationScreen}
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
      component={RiskDetectorPostNatal}
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

export default PostNatalAppNavigator;
