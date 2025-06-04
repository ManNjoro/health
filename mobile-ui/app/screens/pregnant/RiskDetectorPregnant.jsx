import { ScrollView, StyleSheet, Text } from "react-native";
import Screen from "../../components/Screen";
import { AppForm, FormField, SubmitButton } from "../../components/forms";
import * as Yup from "yup";
import AppFormPicker from "../../components/AppFormPicker";
import TextHeader from "../../components/TextHeader";
import colors from "../../config/colors";
import risksApi from "../../api/risks";
import { useState } from "react";
import UploadScreen from "../UploadScreen";

const validationSchema = Yup.object().shape({
  age: Yup.number().required().label("Age"),
  bmi: Yup.number().required().label("BMI"),
  diabp: Yup.number().required().label("Diastolic BP"),
  sysbp: Yup.number().required().label("Systolic Bp"),
  fam_history_hypertension: Yup.string().required().label("Family hypertension history"),
  glucose_levels: Yup.number().required().label("Glucose Levels"),
});

const choices = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

export default function RiskDetectorPregnant({navigation}) {
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [formKey, setFormKey] = useState(0);

  const initialValues = {
    age: "",
    bmi: "",
    diabp: "",
    sysbp: "",
    fam_history_hypertension: "",
    glucose_levels: "",
  }

  const handleSubmit = async (symptom, {resetForm}) => {
    setProgress(0)
    setUploadVisible(true)
    console.log(symptom)
    const result = await risksApi.postPreeclampsia({...symptom},
      (progress) => setProgress(progress)
    )
    console.log("result:",result?.data)
    if (!result.ok) {
      setUploadVisible(false)
      return alert('Could not predict the symptoms')}
    resetForm({ values: initialValues }); 
    setFormKey(prevKey => prevKey + 1);
    navigation.navigate("Prediction", result.data)
  }
  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
      <TextHeader>Risk Level Detector</TextHeader>
      <Text style={styles.description}>
        In this section you can be able to predict your risk level of having
        preeclampsia by filling the form below and clicking predict button
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          key={formKey}
          initialValues={initialValues}
          onSubmit={handleSubmit}
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
          <AppFormPicker
            items={choices}
            name="fam_history_hypertension"
            placeholder="Any family hypertension history?"
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
