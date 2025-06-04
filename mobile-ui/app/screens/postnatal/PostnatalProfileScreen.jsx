import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import DatePicker from "../../components/DatePicker";
import Screen from "../../components/Screen";
import { AppForm, FormField, SubmitButton } from "../../components/forms";
import colors from "../../config/colors";
import FormImagePicker from "../../components/forms/FormImagePicker";
import { useRef } from "react";
import AppFormPicker from "../../components/AppFormPicker";

const validationSchema = Yup.object().shape({
  date: Yup.date().required(),
  children: Yup.string().required().label("Children"),
});

const children = [
  {
    label: 0,
    value: 0,
  },
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: "4+",
    value: "4+",
  },
];

export default function PostnatalProfileScreen() {
  const scrollView = useRef();
  return (
    <Screen style={styles.container}>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <AppForm
          initialValues={{ date: "", children: "", image: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Text style={styles.title}>Child&apos;s birthdate</Text>
          <DatePicker icon="calendar" width="50%" name="date" />
          <Text style={styles.title}>How many children do you have?</Text>
          <FormField name='children' width='80%' bg='transparent' keyboardType='numeric' />
          <View style={styles.photoSection}>
            <FormImagePicker name="image" />
            <View style={styles.textSection}>
              <Text style={styles.title}>Profile photo (optional)</Text>
              <Text style={styles.description}>
                Add a photo of yourself to help other users recognize you.
              </Text>
            </View>
          </View>
          <SubmitButton title="Next" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  photoSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  textSection: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    fontSize: 14,
    color: "#A1824A",
    fontWeight: "400",
    flexWrap: "wrap",
  },
});
