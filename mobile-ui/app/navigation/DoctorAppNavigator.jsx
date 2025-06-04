import { createStackNavigator } from "@react-navigation/stack";
import ProfileSetupScreen from "../screens/doctor/ProfileSetupScreen";
import ConsultationSetupScreen from "../screens/doctor/ConsultationSetupScreen";
import BillingDetailsScreen from "../screens/doctor/BillingDetailsScreen";
import ProfilePicUploadScreen from "../screens/doctor/ProfilePicUploadScreen";
import QualificationScreen from "../screens/doctor/QualificationScreen";
import TermsConditionsScreen from "../screens/doctor/TermsConditionsScreen";
import DashboardDocScreen from "../screens/doctor/DashboardDocScreen";
import DoctorTabNavigator from "./DoctorTabNavigator";

const Stack = createStackNavigator();

const DoctorAppNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DoctorProfile" component={ProfileSetupScreen} />
        <Stack.Screen name="ConsultationSetup" component={ConsultationSetupScreen} />
        <Stack.Screen name="Billing" component={BillingDetailsScreen} />
        <Stack.Screen name="ProfilePic" component={ProfilePicUploadScreen} />
        <Stack.Screen name="Qualifications" component={QualificationScreen} />
        <Stack.Screen name="Terms&Conditions" component={TermsConditionsScreen} />
        <Stack.Screen name="DashboardDoc" component={DoctorTabNavigator} />
    </Stack.Navigator>
)

export default DoctorAppNavigator;