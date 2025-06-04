import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./app/navigation/MainNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { useEffect, useState } from "react";
import authStorage from "./app/auth/storage";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import DoctorAppNavigator from "./app/navigation/DoctorAppNavigator";
import PlanningNavigator from "./app/navigation/PlanningNavigator";
import PregnantNavigator from "./app/navigation/PregnantNavigator";
import PostNatalAppNavigator from "./app/navigation/PostNatalAppNavigator";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthContext.Provider value={{ user, setUser }}>
        {!user && <AuthNavigator />}
        {user?.userType === "postnatal" && <PostNatalAppNavigator />}
        {user?.userType === "doctor" && <DoctorAppNavigator />}
        {user?.userType === "non-pregnant-user" && <PlanningNavigator />}
        {user?.userType === "pregnant-user" && <PregnantNavigator />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
