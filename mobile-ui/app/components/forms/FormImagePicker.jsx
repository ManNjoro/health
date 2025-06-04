import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import ImageInput from "../ImageInput";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name]
  const handleAdd = uri => {
    setFieldValue(name, uri);
  }

  const handleRemove = uri => {
    setFieldValue(name, "");
  }
  return (
    <>
      <ImageInput
        imageUri={imageUri}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}