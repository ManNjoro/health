import { StyleSheet } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ color, title,textColor, width }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton color={color} title={title} onPress={handleSubmit} textColor={textColor} width={width} />;
}

const styles = StyleSheet.create({});