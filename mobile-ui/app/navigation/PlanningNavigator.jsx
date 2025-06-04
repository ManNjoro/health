import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoContentScreen from "../screens/NoContentScreen";
import ContentPlanning from "../screens/planning/ContentPlanning";
import HealthMonitoringPlanning from "../screens/planning/HealthMonitoringPlanning";
import HomePlanning from "../screens/planning/HomePlanning";
import NotificationPlanning from "../screens/planning/NotificationPlanning";
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const PlanningNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen
      name="Home"
      component={HomePlanning}
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
      component={HealthMonitoringPlanning}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="chart-line" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Content"
      component={ContentPlanning}
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
      component={NotificationPlanning}
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
    {/* <Tab.Screen
          name="Risk Detector"
          component={RiskDetectorPlanning}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                color={color}
                name="hazard-lights"
                size={size}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
)

export default PlanningNavigator;