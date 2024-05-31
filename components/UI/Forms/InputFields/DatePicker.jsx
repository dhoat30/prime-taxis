// CustomDatePicker.js
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
const CustomDatePicker = forwardRef(({ value, onChange }, ref) => {
  // Get the current date with time set to 00:00:00 to prevent today's past times from being selected
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return (
    <DatePickerStyle
      style={{ zIndex: "200" }}
      selected={value}
      onChange={onChange}
      showTimeSelect
      minDate={currentDate} // Prevent past dates from being selected
      dateFormat="MMMM d, yyyy h:mm aa"
      customInput={<DateTimeInput ref={ref} />}
    />
  );
});
CustomDatePicker.displayName = "CustomDatePicker";

const DateTimeInput = forwardRef(({ value, onClick }, ref) => (
  <TextFieldStyle
    sx={{ marginTop: "24px" }}
    variant="outlined"
    label="Select a date and time"
    value={value}
    onClick={onClick}
    ref={ref}
    color="secondary"
    fullWidth={true}
  />
));
DateTimeInput.displayName = "DateTimeInput";

export default CustomDatePicker;
const DatePickerStyle = styled(DatePicker)`
  .react-datepicker-popper {
    z-index: 200 !important;
  }
`;
const TextFieldStyle = styled(TextField)`
  z-index: 200 !important;

  .react-datepicker-popper {
    z-index: 200 !important;
  }
`;
