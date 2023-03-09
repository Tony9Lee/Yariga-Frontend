import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
//useGetIdentity hook fetches and manages user-related data from the backend

import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
//useForm returns 'methods' like 'handleSubmit' to handle form submissions, 'register'to register form inputs, & 'reset' to reset the form
//Fieldvalues represents the values to be stored and ensures type safety when working with form data

import { useNavigate } from "@pankod/refine-react-router-v6";
//Accesses navigate function and calls it with a route string or location object to navigate to desired location within application

import Form from "components/common/Form";

const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  return <div>create-property</div>;
};

export default CreateProperty;
