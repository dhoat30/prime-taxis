import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TitleSubtitle from "@/components/UI/Title/TitleSubtitle";
import Paper from "@mui/material/Paper";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Image from "next/image";
export default function TestimonialSection({ dataArr, title, subtitle }) {
  const cards = dataArr.map((item, index) => {
    return (
      <Paper key={index} variant="outlined" className="card">
        <FormatQuoteIcon className="icon" />
        <Typography
          variant="body1"
          component="p"
          className="description"
          color="var(--light-on-surface-variant)"
          align="center"
        >
          {item.description}
        </Typography>
        <div className="divider" />
        <Image src={item.image} alt={item.name} width="50" height="50" />
        <Typography
          variant="subtitle1"
          component="div"
          className="name"
          color="var(--light-on-surface)"
          align="center"
        >
          {item.name}
        </Typography>
      </Paper>
    );
  });
  return (
    <Section id="testimonials">
      <Container className="container" maxWidth="xl">
        <TitleSubtitle
          color="light"
          title={title}
          subtitle={subtitle}
        ></TitleSubtitle>
        <div className="cards-wrapper">{cards}</div>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--light-surface-lowest);
  padding: 80px 0;
  .container {
    .cards-wrapper {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
      gap: 16px;
      .card {
        padding: 24px 16px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        background: var(--light-surface-container-high);
        border-radius: 0 !important;
        .icon {
          font-size: 4rem;
          color: var(--light-primary-container);
        }
        .divider {
          margin: 16px 0 !important;
          max-width: 100px;
          width: 100%;
          border-top: 1px solid var(--dark-outline);
        }
      }
    }
  }
`;
