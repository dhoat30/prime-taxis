import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";
function LoadingBtn({
  align,
  isLoading,
  onClick,
  isSuccess,
  className,
  label,
  children,
  newSubmission,
  id,
}) {
  let labelText = children ? children : "Submit";
  return (
    <LoadingButtonStyle
      sx={{
        borderRadius: "50px",
      }}
      className={className}
      id={id}
      onClick={onClick}
      align={align}
      size="large"
      variant="contained"
      disableElevation
      loading={isLoading}
    >
      {isSuccess && !newSubmission ? <DoneIcon /> : <span>{labelText}</span>}
    </LoadingButtonStyle>
  );
}

export default LoadingBtn;
const LoadingButtonStyle = styled(LoadingButton)`
  transform: skew(-20deg);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 16px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  background-color: ${(props) =>
    props.color === "dark" ? "var(--dark-primary)" : "var(--light-primary)"};

  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  padding: 21px 31px;
  border-radius: 0;
  border: none;
  transition: all ease 0.4s;
  cursor: pointer;
  span {
    display: inline-block;
    -webkit-transform: skew(20deg);
    -ms-transform: skew(20deg);
    transform: skew(20deg);
    color: ${(props) =>
      props.color === "dark"
        ? "var(--dark-on-primary)"
        : "var(--light-on-primary)"};
  }
  &:hover {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--dark-on-primary)"
        : "var(--light-on-surface)"};

    transform: skew(-20deg);
    margin-left: 10px;
    margin-right: 10px;
    span {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--dark-primary)"
          : "var(--dark-on-surface)"};
    }
  }
  svg {
    path {
      fill: var(--dark-on-primary);
    }
  }
`;
