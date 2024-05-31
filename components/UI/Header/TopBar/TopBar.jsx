import React from "react";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import PhoneCircleIcon from "../../Icons/PhoneCircleIcon";
import EmailCircleIcon from "../../Icons/EmailCircleIcon";
import Divider from "@mui/material/Divider";
export default function TopBar() {
  return (
    <Section>
      <Container className="wrapper" maxWidth="xl" component="div">
        <Link className="link-wrapper" href="tel: 0210 261 3991">
          <PhoneCircleIcon />
          <Typography
            variant="body1"
            component="span"
            color="var(--dark-secondary)"
          >
            0210 261 3991
          </Typography>
        </Link>
        <Divider
          sx={{ borderColor: "var(--dark-secondary)" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Link
          className="link-wrapper"
          href="mailto: waihekeprimetaxis@gmail.com"
        >
          <EmailCircleIcon />
          <Typography
            variant="body1"
            component="span"
            color="var(--dark-secondary)"
          >
            waihekeprimetaxis@gmail.com
          </Typography>
        </Link>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--light-primary);
  @media (max-width: 1000px) {
    display: none;
  }
  .wrapper {
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: flex-end;
    .link-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
