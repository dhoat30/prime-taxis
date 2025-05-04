import React, { useState, forwardRef } from "react";
import styled from "@emotion/styled";
import { Container, Paper, Typography, Box } from "@mui/material";
import { appointmentFormData } from "./appointmentFormData";
import Input from "../InputFields/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

import CustomDatePicker from "../InputFields/DatePicker";
import LoadingBtn from "../../Buttons/LoadingBtn";
import axios from "axios";
export default function BookAppointmentForm({ showTitle }) {
  const [formData, setFormData] = useState({
    typeOfService: [],
    formName: "Taxi Booking Form",
    showTitle,
  });
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [newSubmission, setNewSubmission] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (id, value, isSelectMultiple) => {
    let updatedValue = value;

    setFormData({ ...formData, [id]: updatedValue });
    // Reset errors on change
    if (errors[id]) {
      setErrors({ ...errors, [id]: false });
    }
  };

  const handleBlur = (id, validationFunction) => {
    if (!validationFunction(formData[id])) {
      setErrors({ ...errors, [id]: true });
    }
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission if using form tag

    let allFieldsValid = true;
    const newErrors = {};

    // Loop through each field to check if it's required and valid
    appointmentFormData.forEach((field) => {
      if (field.required && !formData[field.id]) {
        // Set field as invalid if it's required but empty or invalid
        newErrors[field.id] = true;
        allFieldsValid = false;
        return;
      }
    });
    setErrors(newErrors);
    // If any required field is invalid, stop and don't make API calls
    if (!allFieldsValid) {
      return; // Stop the function if any field is invalid or empty
    }

    setIsLoading(true);

    // hubspot config
    var configHubspot = {
      method: "post",
      url: "/api/create-hubspot-contact",
      headers: { "Content-Type": "application/json" },
      data: formData,
    };
    const mailText = `Date & Time: ${startDate} \n First name: ${formData.firstName} \n Pick up address: ${formData.pickup} \n Drop off address: ${formData.dropoff} \n Email address: ${formData.email} \n Phone:${formData.phone} \n Number of passengers:${formData.message} \n Number of passengers:${formData.message}`;

    // mailgun config
    var configSendMail = {
      method: "post",
      url: "/api/sendmail",
      headers: { "Content-Type": "application/json" },
      data: {
        mailText: mailText,
        formName: formData.formName,
        emailTo: "designer@primetaxis.co.nz",
        fromEmail: formData.email,
      },
    };
    Promise.all([axios(configHubspot), axios(configSendMail)])
      .then(function (responses) {
        // responses[0] is the response from create-hubspot-contact
        // responses[1] is the response from sendmail
        if (responses[1].status === 200) {
          console.log("sucesss");
          setIsLoading(false);
          setIsSuccess(true);
          setNewSubmission(true);
          router.push("/thank-you");
          // set initial state to empty string
          setError(false);
        } else {
          console.log("error");
          setIsLoading(false);
          setIsSuccess(false);
          setError(true);
          setNewSubmission(false);
        }

        // Other success logic
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        setIsSuccess(false);
        setError(true);
        setNewSubmission(false);
      });
  };

  // loop over all the input fields
  const formInputs = appointmentFormData.map((field, index) => {
    const isSelectMultiple = field.type === "select" && field.multiple; // Example condition

    if(field.type === "tel") {
      return (
        <Input
          key={index}
          label={field.label}
          type={field.type}
          value={
            isSelectMultiple ? formData[field.id] || [] : formData[field.id] || ""
          }
          onChange={(e) =>
             handleChange(field.id, `+${e}`, isSelectMultiple)
          }
          onBlur={
            field.required ? () => handleBlur(field.id, field.validation) : null
          } //check if the field is required then call the function
          required={field.required}
          autoComplete={field.autoComplete}
          isInvalid={errors[field.id]}
          errorMessage={field.errorMessage}
          options={field.options}
          multipleValue={field.multiple}
        />
      );
    } 
    else { 
      return (
        <Input
          key={index}
          label={field.label}
          type={field.type}
          value={
            isSelectMultiple ? formData[field.id] || [] : formData[field.id] || ""
          }
          onChange={(e) =>
             handleChange(field.id, e.target.value, isSelectMultiple)
          }
          onBlur={
            field.required ? () => handleBlur(field.id, field.validation) : null
          } //check if the field is required then call the function
          required={field.required}
          autoComplete={field.autoComplete}
          isInvalid={errors[field.id]}
          errorMessage={field.errorMessage}
          options={field.options}
          multipleValue={field.multiple}
        />
      );
      

    }

  });
  return (
    <ContainerStyled>
      <Paper className="wrapper" variant="outlined">
        {showTitle && (
          <>
            <Typography className="title" variant="h3" component="h3">
              Book Your Waiheke Adventure Today
            </Typography>
            <Typography variant="subtitle1" component="p" className="subtitle">
              Fill out the form below to reserve your taxi or tour. Our team
              will confirm your booking details via email and get you ready for
              an exceptional Waiheke experience!
            </Typography>
          </>
        )}

        <Box className="form-wrapper">
          <div className="date-picker-wrapper">
            <CustomDatePicker
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          {formInputs}

          <LoadingBtn
            newSubmission={newSubmission}
            onClick={submitHandler}
            isLoading={isLoading}
            isSuccess={isSuccess}
          >
            BOOK TAXI NOW
          </LoadingBtn>
        </Box>
      </Paper>
    </ContainerStyled>
  );
}
const ContainerStyled = styled(Box)`
  .subtitle {
    margin: 8px 0 24px 0;
  }
  .wrapper {
    padding: 16px 32px;
    border-radius: 0;
    @media (max-width: 600px) {
      padding: 16px 16px;
    }
    .react-datepicker-wrapper {
      width: 100%;
    }
    .react-datepicker-popper {
      z-index: 200 !important;
    }
  }
`;
