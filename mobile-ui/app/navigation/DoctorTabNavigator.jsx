import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NoContentScreen from "../screens/NoContentScreen";
import DashboardDocScreen from "../screens/doctor/DashboardDocScreen";
import ReviewProfileDoctor from "../screens/doctor/ReviewProfileDoctor";

const Tab = createBottomTabNavigator();

const DoctorTabNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
         <Tab.Screen
      name="Home"
      component={DashboardDocScreen}
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
          name="Notifications"
          component={NoContentScreen}
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
          name="Profile"
          component={ReviewProfileDoctor}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                color={color}
                name="account-outline"
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
)

export default DoctorTabNavigator;