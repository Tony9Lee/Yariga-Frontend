import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
//useGetIdentity hook fetches and manages user-related data from the backend

import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
//useForm returns 'methods' like 'handleSubmit' to handle form submissions, 'register'to register form inputs, & 'reset' to reset the form
//Fieldvalues represents the values to be stored and ensures type safety when working with form data

import Form from "../components/common/Form";

const CreateProperty = () => {
  const { data: user } = useGetIdentity();

  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
      setPropertyImage({ name: file?.name, url: result })
    );
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!propertyImage.name) return alert("Please select an image");

    await onFinish({ ...data, photo: propertyImage.url, email: user.email });
  };

  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
    />
  );
};

export default CreateProperty;
