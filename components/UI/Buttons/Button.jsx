import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
function Button({ onClick, children, align, color }) {
  return (
    <Container onClick={onClick} align={align} color={color}>
      <span>{children}</span>
    </Container>
  );
}

export default Button;
const Container = styled.button`
  transform: skew(-20deg);
  margin-left: 10px;
  margin-right: 10px;
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
`;
