import { ScrollView, StyleSheet, Text } from "react-native";
import Screen from "../../components/Screen";
import * as Yup from "yup";
import AppFormPicker from "../../components/AppFormPicker";
import TextHeader from "../../components/TextHeader";
import { AppForm, SubmitButton } from "../../components/forms";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import { useState } from "react";
import risksApi from "../../api/risks";
import UploadScreen from "../UploadScreen";

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

const validationSchema = Yup.object().shape({
  sad: Yup.string().required(),
  trouble_sleeping: Yup.string().required(),
  appetite_loss: Yup.string().required(),
  suicide_attempt: Yup.string().required(),
  thinking_difficulty: Yup.string().required(),
});

export default function RiskDetectorPostNatal({navigation}) {
   const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)
  
    const handleSubmit = async (symptom, {resetForm}) => {
      setProgress(0)
      setUploadVisible(true)
      console.log(symptom)
      const result = await risksApi.postPostNatal({...symptom},
        (progress) => setProgress(progress)
      )
      console.log("result:",result?.data)
      if (!result.ok) {
        setUploadVisible(false)
        return alert('Could not predict the symptoms')}
      resetForm()
      navigation.navigate("Prediction", result.data)
    }
  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
      <TextHeader>Risk Level Detector</TextHeader>
      <Text style={styles.description}>
        In this section you can be able to predict your risk level of having
        mental illness by filling the form below and clicking predict button
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            sad: "",
            trouble_sleeping: "",
            appetite_loss: "",
            suicide_attempt: "",
            thinking_difficulty: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Text style={styles.question}>Are you Feeling sad or Tearful?</Text>
          <AppFormPicker
            items={choices}
            name="sad"
            placeholder="Feeling sad or Tearful?"
            width="100%"
          />
          <Text style={styles.question}>Are you having Trouble sleeping?</Text>
          <AppFormPicker
            items={choices}
            name="trouble_sleeping"
            placeholder="Trouble sleeping?"
            width="100%"
          />
          <Text style={styles.question}>Do you have a loss of appetite?</Text>
          <AppFormPicker
            items={choices}
            name="appetite_loss"
            placeholder="Loss of appetite?"
            width="100%"
          />
          <Text style={styles.question}>Do you have any suicidal thoughts or attempt?</Text>
          <AppFormPicker
            items={choices}
            name="suicide_attempt"
            placeholder="Any suicidal thoughts?"
            width="100%"
          />
          <Text style={styles.question}>Do you have any difficulty in thinking or focusing?</Text>
          <AppFormPicker
            items={choices}
            name="thinking_difficulty"
            placeholder="Difficulty thinking or focusing?"
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
  question: {
    fontWeight: 'bold'
  }
});
