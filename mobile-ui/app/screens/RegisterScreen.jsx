import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import AppFormPicker from "../components/AppFormPicker";
import Screen from "../components/Screen";
import { AppForm,ErrorMessage, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import usersApi from '../api/users'
import useApi from "../hooks/useApi";
import authApi from "../api/auth";
import {useState} from 'react'
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(3).label("Name"),
  usertype: Yup.string().required().label("User Type"),
  password: Yup.string().required().min(8).label("Password"),
});

const categories = [
    {
        label: "Pregnant User",
        value: "pregnant user",
    },
    {
        label: "Postnatal User",
        value: "postnatal",
    },
    {
        label: "Not Expecting User",
        value: "non-pregnant-user",
    },
    {
        label: "Doctor",
        value: "doctor",
    },
]

export default function RegisterScreen({navigation}) {
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth();
  const [error, setError] = useState();
  const handleSubmit = async (userInfo) => {
    console.log(userInfo)
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log(result);
      }
      return;
    }
    const {data: authToken} = await loginApi.request(userInfo.email, userInfo.password);
    auth.logIn(authToken);
  };
  const LoginLink = () => {
    return (
      <Text onPress={() => navigation.navigate("Login")} style={{color: 'dodgerblue', fontWeight: 'bold'}}>Login</Text>
    );
  };
  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
    <Screen style={styles.container}>
        <Text style={[styles.text, {textAlign: 'center',marginVertical: 10}]}>Register</Text>
      <AppForm
        initialValues={{name:"", email: "", password: "",usertype: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={error}
          visible={error}
          />
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="First Name"
          textContentType="name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormPicker items={categories} name="usertype" placeholder='User Type' />
        <SubmitButton title="Register" />
        <Text
            style={[
              styles.authText,
              { marginVertical: 10, textAlign: "center" },
            ]}
          >
            Already have an account? <LoginLink />
          </Text>
      </AppForm>
    </Screen>
</>
  );
}

const styles = StyleSheet.create({
  authText: {
    fontSize: 15,
  },
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 22
  }
});
