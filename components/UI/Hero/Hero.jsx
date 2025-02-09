import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Buttons/Button";

export default function Hero({ data }) {
  return (
    <Section component="section">
      <Box className="image-wrapper flexGrow-1">
        <Image
          src={data.desktopImage.url}
          alt={data.desktopImage.alt}
          fill
          priority={true}
        />
        <div className="overlay"></div>
      </Box>
      <div className="content-container">
        <Container className="row " maxWidth="xl">
          <Box className="content-wrapper">
            <Typography
              className="subtitle"
              component="h2"
              variant="h4"
              color="white"
            >
              {data.subtitle}
            </Typography>

            {/* set title dangerously  */}
            <h1
              className="title"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></h1>
            <Typography
              component="h2"
              variant="h6"
              color=" var(--dark-on-surface)"
              className="hero-description"
            >
              {data.description}
            </Typography>
            <Box className="button-wrapper">
            <Link href={'tel:0210 261 3991'}>
                <Button
                  className="button"
                  variant="contained"
                  size="large"
                  color="dark"
                >
                CALL US
                </Button>
              </Link>
              <Link href={data.ctaLink}>
                <Button
                  className="button"
                  variant="outlined"
                  size="large"
                  color="dark"
                >
                  {data.ctaLabel}
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </div>
    </Section>
  );
}
const Section = styled(Box)`
  position: relative;
  .image-wrapper {
    width: 100%;
    padding-bottom: 56%;
    position: relative;
    @media (max-width: 1000px) {
      width: 100%;
      padding-bottom: 100%;
    }
    @media (max-width: 600px) {
      width: 100%;
      padding-bottom: 170%;
    }
    img {
      object-fit: cover;
    }
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 33, 75);
    background: linear-gradient(
      90deg,
      rgba(0, 33, 75, 0.95) 0%,
      rgba(0, 33, 75, 0.65) 48%,
      rgba(0, 33, 75, 0.34217436974789917) 100%
    );
    z-index: 10;
  }
  .content-container {
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    .row {
      .content-wrapper {
        border-radius: 12px;
        width: 70%;

        @media (max-width: 1000px) {
          width: 100%;
        }
        .subtitle {
          @media (max-width: 600px) {
            font-size: 1.5rem;
          }
        }
        .title {
          margin: 16px 0 16px 0;
          font-size: 5rem;
          font-weight: 700;
          color: var(--dark-on-surface);
          @media (max-width: 1200px) {
            font-size: 3.5rem;
            line-height: 4.5rem;
          }
          @media (max-width: 600px) {
            font-size: 1.8rem;
            line-height: 2.3rem;
            margin: 8px 0 8px 0;
          }
          span {
            position: relative;
            padding: 8px 32px;
            z-index: 28;
            @media (max-width: 600px) {
              padding: 8px 16px;
            }
            color: var(--light-on-surface-variant);
            display: inline-block;
            &::before {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background: #fff url(/pattern_bg_1.png) repeat;
              z-index: -1;
              -webkit-transform: skew(-20deg);
              -ms-transform: skew(-20deg);
              transform: skew(-20deg);
            }
          }
        }
        .hero-description {
          margin: 0 0 24px 0;
          @media (max-width: 600px) {
            font-size: 1rem;
            line-height: 1.5rem;
            margin: 0 0 8px 0;
          }
        }
        .button-wrapper {
          display: flex;
          flex-wrap: wrap; 
          margin-top: 16px;
          gap: 16px; 
          .button {
            background: var(--dark-primary);
            color: var(--dark-on-primary);
          }
        }
      }
    }
  }
`;
