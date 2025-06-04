import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import TextHeader from "../../components/TextHeader";
import FormImagePicker from "../../components/forms/FormImagePicker";
import { AppForm, SubmitButton } from "../../components/forms";
import colors from "../../config/colors";
import CameraImageInput from "../../components/CameraImageInput";

const validationSchema = Yup.object().shape({
  image: Yup.string().required().label("Profile pic"),
});

export default function ProfilePicUploadScreen({ navigation }) {
  return (
    <Screen>
      <AppForm
        initialValues={{ image: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Qualifications");
        }}
        validationSchema={validationSchema}
      >
        <TextHeader style={{ textAlign: "center" }}>Profile photo</TextHeader>
        <View style={styles.imageTextContainer}>
          <FormImagePicker name="image" />
          <Text style={{color: colors.active,width: "50%"}}>
            Click on the image to choose image from gallery or delete existing
            image
          </Text>
        </View>
        <View style={styles.buttons}>
          <CameraImageInput name="images" />
          <SubmitButton
            color="gray"
            title="Next"
            textColor="dark"
            width="45%"
          />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",

    justifyContent: "space-around",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.gray,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
