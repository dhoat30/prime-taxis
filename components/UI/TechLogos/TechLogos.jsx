import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 6,
  autoplay: true,
  draggable: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  autoplaySpeed: 4000,
  padding: "40px",
  cssEase: "linear",
  speed: 4000,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
export default function TechLogos({ data }) {
  const matches = useMediaQuery("(max-width:800px)");

  const logos = data.map((item, index) => {
    return (
      <Image
        style={{ objectFit: "cover" }}
        key={index}
        src={item.url}
        alt={item.alt}
        width={matches ? 133 : 300}
        height={matches ? 51 : 72}
      />
    );
  });
  return (
    <Section component="section">
      <Box sx={{ backgroundColor: "secondary.main" }} className="title-wrapper">
        <Typography
          variant="h6"
          component="h6"
          align="center"
          sx={{ color: "var(--dark-on-secondary)" }}
        >
          Technologies We Work With
        </Typography>
      </Box>
      <Box className="carousel-wrapper">
        <Slider {...settings}>{logos}</Slider>
      </Box>
    </Section>
  );
}
const Section = styled(Box)`
  background: rgb(29, 29, 33);
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
  .title-wrapper {
    width: 250px;
    padding: 40px;
    @media (max-width: 1020px) {
      width: 150px;
      padding: 16px;
    }
    @media (max-width: 550px) {
      width: 100%;
    }
  }
  .carousel-wrapper {
    width: calc(100% - 250px);
    @media (max-width: 1020px) {
      width: calc(100% - 150px);
    }
    @media (max-width: 550px) {
      width: 100%;
    }
  }
  img {
    object-fit: contain !important;
  }
`;
