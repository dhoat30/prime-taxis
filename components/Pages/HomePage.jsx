"use client";
import React from "react";
import Hero from "../UI/Hero/Hero";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import FooterCta from "../UI/CTA/FooterCta";
import BookAppointmentForm from "../UI/Forms/BookAppointmentForm/BookAppointmentForm";
import Image from "next/image";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import { testimonialData } from "@/utlis/testimonialData";
export default function HomePage({ data, techLogos }) {
  const heroData = {
    subtitle: "Taxi Driver for Hire",
    title: "Explore Waiheke Island with <span>Prime Taxis</span>",
    description:
      "Whether you're looking for a quick taxi ride or an extensive tour of Waiheke's renowned vineyards and scenic landscapes, we've got you covered. ",
    desktopImage: {
      url: "/home/hero.jpg",
      alt: "Waiheke Island Image",
    },
    mobileImage: {
      url: "/home/hero.jpg",
      alt: "Waiheke Island Image",
    },
    ctaLabel: "BOOK A TAXI",
    ctaLink: "/#book-a-taxi",
  };
  const aboutUsData = {
    title: "About Us",
    description:
      "Founded in 2017 with just one car, Prime Taxis has grown to a fleet of four, driven by our passion for making every journey a personal experience. Our founder began this venture to connect with people, enjoying the daily opportunities to meet new faces and share the wonders of Waiheke Island. <br><br> We're more than just a taxi service; we're part of your unique exploration of the island’s stunning landscapes and vibrant culture. At Prime Taxis, we aim to make every ride smooth, enjoyable, and enriched with good conversation.      ",
    image: "/home/about-us.png",
  };
  return (
    <>
      <Hero data={heroData} />
      <FormSection maxWidth="xl" id="book-a-taxi">
        <BookAppointmentForm showTitle={true} />
        <div className="image-wrapper">
          <Image src="/home/form.jpg" fill alt="Vineyard on Waiheke Island" />
        </div>
      </FormSection>
      <Services />
      <AboutUs
        title={aboutUsData.title}
        description={aboutUsData.description}
        image={aboutUsData.image}
      />
      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Testimonials"
        dataArr={testimonialData}
      />
    </>
  );
}
const FormSection = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 40px;
  border-radius: 12px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    padding: 0 !important;
  }
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    @media (max-width: 1000px) {
      display: none;
    }
    img {
      object-fit: cover;
    }
  }
`;
