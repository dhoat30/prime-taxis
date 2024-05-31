import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function AboutUs({ title, description, image }) {
  return (
    <Section id="about-us">
      <Container maxWidth="xl" className="container">
        <div className="image-wrapper">
          <Image src={image} alt={title} fill />
        </div>
        <div className="content-wrapper">
          <Typography
            variant="h2"
            component="h3"
            color="var(--dark-on-primary)"
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            dangerouslySetInnerHTML={{ __html: description }}
          ></Typography>
        </div>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--light-surface-container-low);
  padding: 80px 0;
  @media (max-width: 600px) {
    padding: 40px 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    .image-wrapper {
      width: 100%;
      padding-bottom: 91.45%;
      position: relative;
      img {
        object-fit: cover;
      }
    }
  }
`;
