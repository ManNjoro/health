import { useFormikContext } from "formik";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import AppButton from "./AppButton";
import { useEffect } from "react";
import { ErrorMessage } from "./forms";

export default function CameraImageInput({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted")
      alert("You need to enable permission to access the library");
  };

  const handlePress = async () => {
    console.log("pressed");
    try {
      const result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 0.5,
      });

      if (!result.canceled) {
        setFieldValue("image", result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error opening the camera:", error);
    }
  };
  return (
    <>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      <AppButton
        title="Take photo"
        onPress={handlePress}
        width="45%"
      />
    </>
  );
}

const styles = StyleSheet.create({
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
});
