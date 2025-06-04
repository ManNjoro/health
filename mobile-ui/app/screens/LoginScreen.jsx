import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

import Screen from "../components/Screen";
import { AppForm, ErrorMessage, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const RegisterLink = () => {
    return (
      <Text onPress={() => navigation.navigate("Register")} style={{color: 'dodgerblue', fontWeight: 'bold'}}>Register</Text>
    );
  };

  const handleSubmit = async ({ email, password }) => {
    console.log(email, password);
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Back</Text>
      </View>
      <View style={styles.body}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
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
          <Text onPress={() => navigation.navigate("Forgot-password")} style={[styles.authText, {color: 'dodgerblue', fontWeight: 'bold', marginVertical: 10}]}>Forgot password?</Text>
          <SubmitButton title="Login" />
          <Text
            style={[
              styles.authText,
              { marginVertical: 10, textAlign: "center" },
            ]}
          >
            Don&apos;t have an account yet? <RegisterLink />
          </Text>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  authText: {
    fontSize: 15,
  },
  body: {
    padding: 15,
    marginVertical: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    backgroundColor: colors.primary,
    flex: 0.7,
  },
  headerText: {
    borderBlockColor: colors.white,
    borderBottomWidth: 2,
    borderColor: colors.white,
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 15,
    padding: 10,
    textAlign: 'center'
  },
  text: {
    color: colors.dark,
    fontWeight: "bold",
    fontSize: 22,
  },
});
