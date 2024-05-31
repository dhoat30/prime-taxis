import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import TitleSubtitle from "@/components/UI/Title/TitleSubtitle";
import { servicesData } from "@/utlis/servicesData";
import ServiceCard from "@/components/UI/Card/ServiceCard";

export default function Services() {
  const serviceCards = servicesData.map((item, index) => {
    return (
      <ServiceCard
        key={index}
        title={item.title}
        description={item.description}
        image={item.image}
        label={item.label}
        link={item.link}
      />
    );
  });
  return (
    <Section id="our-services">
      <div className="bg-image">
        <Image
          src="/services/service-background.jpg"
          fill
          alt="person in a driver seat looking at a phone"
        />
      </div>
      <div className="content-wrapper">
        <Container maxWidth="xl">
          <TitleSubtitle
            title="Our Services"
            subtitle="Your Premier Choice to Travel Waiheke"
          />
          <div className="service-cards-wrapper">{serviceCards}</div>
        </Container>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 80px 0;
  .bg-image {
    position: relative;
    width: 100%;
    padding-bottom: 500px;
    z-index: 1;
  }
  .content-wrapper {
    position: relative;
    top: -350px;
    z-index: 10;
    margin-bottom: -350px;
    .service-cards-wrapper {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;

      & > div {
        width: 30%;
        @media (max-width: 1200px) {
          width: 45%;
        }
        @media (max-width: 740px) {
          width: 100%;
        }
      }
    }
  }
`;
