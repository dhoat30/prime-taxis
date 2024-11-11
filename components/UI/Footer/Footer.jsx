import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { footerLinks } from "./FooterLinks";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import Copyright from "./Copyright";
import PhoneCircleIcon from "../Icons/PhoneCircleIcon";
import EmailCircleIcon from "../Icons/EmailCircleIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TouristIcon from "../Icons/TouristIcon";

import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  return (
    <>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          borderRadius: 0,
          padding: "40px 0",
          backgroundColor: "var(--light-surface-container-highest)",
        }}
      >
        <ContainerStyled maxWidth="lg" className="row">
          {/* logo wrapper */}
          <Box className="footer-wrapper">
            <Box className="logo-wrapper">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={48 * 2}
                  height={51 * 2}
                  alt="Webduel Logo"
                />
              </Link>
              <Typography
                variant="body1"
                component="p"
                sx={{ marginTop: "16px" }}
              >
                Prime Taxis: Your Gateway to Waiheke Adventures
              </Typography>
            </Box>
            <Box className="footer-useful-links links-container">
              <Typography
                variant="h6"
                component="div"
                color="var(--light-on-surface)"
                sx={{ marginBottom: "8px" }}
                id="contact"
              >
                Contact Us
              </Typography>
              <Box component="ul" sx={{ margin: 0, padding: 0 }}>
                <li>
                  <Link
                    className="contact-link-wrapper"
                    href="tel: 0210 261 3991"
                  >
                    <PhoneCircleIcon />
                    <Typography
                      variant="body1"
                      component="span"
                      color="var(--light-secondary)"
                    >
                      0210 261 3991
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact-link-wrapper"
                    href="mailto: waihekeprimetaxis@gmail.com"
                  >
                    <EmailCircleIcon />
                    <Typography
                      variant="body1"
                      component="span"
                      color="var(--light-secondary)"
                    >
                      waihekeprimetaxis@gmail.com
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact-link-wrapper"
                    href="https://www.instagram.com/waiheke_primetour/"
                    target="_blank"
                  >
                  <InstagramIcon/> 
                    <Typography
                      variant="body1"
                      component="span"
                      color="var(--light-secondary)"
                    >
                      Follow us Instagram
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact-link-wrapper"
                    href="https://www.waihekeprimetour.com/"
                    target="_blank"
                  >
                  <TouristIcon/> 
                    <Typography
                      variant="body1"
                      component="span"
                      color="var(--light-secondary)"
                    >
                    To book a tour, please visit here. 
                    </Typography>
                  </Link>
                </li>
              </Box>
            </Box>
            <Box className="footer-useful-links links-container">
              <Typography
                variant="h6"
                component="div"
                color="var(--light-on-surface)"
                sx={{ marginBottom: "8px" }}
              >
                Opening Hours
              </Typography>
              <Box component="ul" sx={{ margin: 0, padding: 0 }}>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="var(--light-secondary)"
                  >
                    <strong>Winter:</strong> 8am - 10pm
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="var(--light-secondary)"
                  >
                    <strong>Summer:</strong> 8am - 12 midnight
                  </Typography>
                </li>
              </Box>
            </Box>
          </Box>
        </ContainerStyled>
      </Paper>
      {/* copyright container */}
      <Copyright />
      <FabContainer href="#back-to-top">
        <Fab color="primary" aria-label="back to top">
          <ArrowUpwardIcon />
        </Fab>
      </FabContainer>
    </>
  );
}
const ContainerStyled = styled(Container)`
  .footer-wrapper {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    .logo-wrapper {
      width: 300px;
    }
    .contact-link-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }
  }
  .footer-newsletter {
    /* @media (max-width: 900px) {
      grid-column: span 2;
    } */
    .social-links {
      margin-top: 24px;
      a {
        margin: 0 8px 0 0;
      }
    }
  }
`;
const FabContainer = styled(Link)`
  position: fixed;
  z-index: 100;
  right: 16px;
  bottom: 16px;
`;
