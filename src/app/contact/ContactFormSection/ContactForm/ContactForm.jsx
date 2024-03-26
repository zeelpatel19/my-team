"use client";

import { useState } from "react";
import { clsx } from "clsx";

import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

import { FormValidator, capitaliseFirstLetter } from "@/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      errorMessage: "",
    },
    email: {
      value: "",
      errorMessage: "",
    },
    company: {
      value: "",
      errorMessage: "",
    },
    title: {
      value: "",
      errorMessage: "",
    },
    message: {
      value: "",
      errorMessage: "",
    },
  });

  const formInputsAreValid = Object.values(formData).every(
    (control) => control.errorMessage === "",
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formControls = event.target.elements;
    const formControlsArray = Array.from(formControls);
    const formControlsArrayWithoutSubmitButton = formControlsArray.filter(
      (control) => control.type !== "submit",
    );

    formControlsArrayWithoutSubmitButton.forEach((control) => {
      const name = control.name;
      const placeholder = control.placeholder;
      const value = control.value;

      if (!FormValidator.isNotEmpty(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: {
            ...prevState[name],
            errorMessage: `${capitaliseFirstLetter(placeholder)} cannot be empty`,
          },
        }));
      }
    });

    const fd = new FormData(event.target);
    const obj = Object.fromEntries(fd.entries());

    console.log(obj);
  };

  const onChangeHandler = (event) => {
    const { name, value, placeholder } = event.target;

    if (!FormValidator.isNotEmpty(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          errorMessage: `${capitaliseFirstLetter(placeholder)} cannot be empty`,
        },
      }));
    } else if (name === "email" && FormValidator.isValidEmail(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          errorMessage: "",
        },
      }));
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  const onBlurHandler = (event) => {
    const { name, value, placeholder } = event.target;

    if (name === "email" && !FormValidator.isValidEmail(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          errorMessage: "You must enter a valid email address",
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          errorMessage: "",
        },
      }));
    }

    if (!FormValidator.isNotEmpty(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          errorMessage: `${capitaliseFirstLetter(placeholder)} cannot be empty`,
        },
      }));
    }

    console.log("blurred: " + value);
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-[1.8rem] px-[2.6rem] lg:relative lg:z-20"
      noValidate
    >
      <TextInput
        name="name"
        placeholder="name"
        value={formData.name.value}
        errorMessage={formData.name.errorMessage}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <TextInput
        name="email"
        placeholder="email address"
        value={formData.email.value}
        errorMessage={formData.email.errorMessage}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        email
      />
      <TextInput
        name="company"
        placeholder="company name"
        value={formData.company.value}
        errorMessage={formData.company.errorMessage}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <TextInput
        name="title"
        placeholder="title"
        value={formData.title.value}
        errorMessage={formData.title.errorMessage}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <TextAreaInput
        name="message"
        placeholder="message"
        value={formData.message.value}
        errorMessage={formData.message.errorMessage}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <button
        type="submit"
        className={clsx(
          "mt-[1rem] self-start rounded-full bg-white px-[3.2rem] py-[1.1rem] text-[1.8rem] text-secondary-green-dark transition-all duration-300 hover:scale-[1.05] active:translate-y-[0.5rem]",
          !formInputsAreValid &&
            "cursor-not-allowed opacity-60 transition-all duration-300",
        )}
      >
        submit
      </button>
    </form>
  );
}
