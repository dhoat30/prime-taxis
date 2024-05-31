import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import Divider from "@mui/material/Divider";
export default function Copyright() {
  return (
    <PaperStyle variant="outlined">
      <Container maxWidth="lg" className="content-wrapper">
        <Typography variant="body1" component="div" align="center">
          © {new Date().getFullYear()} Waiheke Prime Taxis. All rights reserved
        </Typography>
        <Divider orientation="vertical" flexItem className="divider" />
        <Typography variant="body1" component="div" align="center">
          Built by{" "}
          <Link href="https://webduel.co.nz" rel="nofollow" target="_blank">
            web<strong>duel</strong>
          </Link>
        </Typography>
      </Container>
    </PaperStyle>
  );
}
const PaperStyle = styled(Paper)`
  padding: 8px 0;
  background: var(--light-surface-container-highest);
  border-radius: 0;
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 8px;
    }
    .divider {
      @media (max-width: 700px) {
        display: none;
      }
    }
    span {
      color: var(--light-on-surface);
      font-weight: 300;
      text-align: center;
    }
  }
`;
