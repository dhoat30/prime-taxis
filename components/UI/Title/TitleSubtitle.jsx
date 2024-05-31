import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
export default function TitleSubtitle({ title, subtitle, color }) {
  return (
    <Wrapper className="title-wrapper">
      <Typography
        className="subtitle"
        variant="h5"
        component="div"
        align="center"
        color={
          color === "light" ? "var(--light-primary)" : "var(--dark-primary)"
        }
      >
        {subtitle}
        <span className="double-line"></span>
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        color={
          color === "light"
            ? "var(--light-on-surface)"
            : "var(--dark-on-surface)"
        }
      >
        {title}
      </Typography>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .subtitle {
    display: inline-block;
    position: relative;
    margin-bottom: 8px;

    &::before {
      content: "";
      width: 50px;
      top: auto;
      left: -60px;
      bottom: 7px;
      position: absolute;
      background-color: var(--dark-primary);
      height: 2px;
      z-index: 11;
      @media (max-width: 600px) {
        content: none;
      }
    }
    &::after {
      @media (max-width: 600px) {
        content: none;
      }
      left: -40px;
      margin-top: 3px;
      width: 30px;
      top: 7px;
      height: 2px;
      position: absolute;
      content: "";
      background-color: var(--dark-primary);
      z-index: 11;
    }
    .double-line {
      &::before {
        @media (max-width: 600px) {
          content: none;
        }
        content: "";
        width: 50px;
        top: auto;
        right: -60px;
        bottom: 7px;
        position: absolute;
        background-color: var(--dark-primary);
        height: 2px;
        z-index: 11;
      }
      &::after {
        @media (max-width: 600px) {
          content: none;
        }
        right: -40px;
        margin-top: 3px;
        width: 30px;
        top: 7px;
        height: 2px;
        position: absolute;
        content: "";
        background-color: var(--dark-primary);
        z-index: 11;
      }
    }
  }
`;
