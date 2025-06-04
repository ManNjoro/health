import { ScrollView, StyleSheet, Text } from 'react-native';

import * as Yup from "yup";
import TextHeader from '../../components/TextHeader';
import { AppForm, FormField, SubmitButton } from '../../components/forms';
import Screen from '../../components/Screen';
import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
  age: Yup.number().required().label("Age"),
  bmi: Yup.number().required().label("BMI"),
  diabp: Yup.number().required().label("Diastolic BP"),
  sysbp: Yup.number().required().label("Systolic BP"),
  activity_level: Yup.number().required().label("Physical Activity Level"),
  glucose_levels: Yup.number().required().label("Glucose Levels"),
});

export default function RiskDetectorPlanning() {
return (
<Screen style={styles.container}>
    <TextHeader>Risk Level Detector</TextHeader>
          <Text style={styles.description}>
            In this section you can be able to predict your risk level of having
            health complications by filling the form below and clicking predict button
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <AppForm
              initialValues={{
                age: "",
                bmi: "",
                diabp: "",
                sysbp: "",
                activity_level: "",
                glucose_levels: "",
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <FormField
                name="age"
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                placeholder="Age"
                keyboardType="number-pad"
                width="100%"
              />
              <FormField
                name="activity_level"
                autoCapitalize="none"
                autoCorrect={false}
                icon="run"
                placeholder="Physical Activity Level"
                keyboardType="number-pad"
                width="100%"
              />
              <FormField
                name="bmi"
                icon="weight"
                placeholder="BMI"
                keyboardType="number-pad"
                width="100%"
              />
              <FormField
                name="diabp"
                icon="blood-bag"
                placeholder="Distolic Blood Pressure"
                keyboardType="number-pad"
                width="100%"
              />
              <FormField
                name="sysbp"
                icon="blood-bag"
                placeholder="Systolic Blood Pressure"
                keyboardType="number-pad"
                width="100%"
              />
              <FormField
                name="glucose_levels"
                icon="tape-measure"
                placeholder="Glucose levels"
                keyboardType="number-pad"
                width="100%"
              />
              <SubmitButton title="Predict" />
            </AppForm>
          </ScrollView>
</Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
      },
      description: {
        color: colors.active,
        marginBottom: 10,
      },
});