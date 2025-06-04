import { ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import DatePicker from "../../components/DatePicker";
import Screen from "../../components/Screen";
import { AppForm, FormField, SubmitButton } from "../../components/forms";
import colors from "../../config/colors";
import FormImagePicker from "../../components/forms/FormImagePicker";
import { useRef } from "react";

const validationSchema = Yup.object().shape({
  date: Yup.date().required(),
  stage: Yup.string().required().min(3).label("Pregnancy Stage"),
});

export default function ProfileScreen() {
  const scrollView = useRef();
  return (
    <Screen style={styles.container}>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <AppForm
          initialValues={{ date: "", stage: "", history: "", image: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Text>Pregnancy due date</Text>
          <DatePicker icon="calendar" width="50%" name="date" />
          <Text>Pregnancy stage</Text>
          <FormField name="stage" bg="transparent" />
          <Text>Health history(optional)</Text>
          <FormField name="history" bg="transparent" />
          <Text>Profile photo (optional)</Text>
          <FormImagePicker name="image" />
          <SubmitButton title="Continue" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
