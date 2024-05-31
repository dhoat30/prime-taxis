import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "../Buttons/Button";
import Paper from "@mui/material/Paper";
export default function ServiceCard({
  title,
  description,
  image,
  label,
  link,
}) {
  return (
    <Card variant="outlined">
      <div className="image-wrapper">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 750px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="content">
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography className="description" variant="body1" component="p">
          {description}
        </Typography>
        <Link href={link}>
          <Button className="button">{label}</Button>
        </Link>
      </div>
    </Card>
  );
}

const Card = styled(Paper)`
  background: var(--light-surface-container-low);
  .image-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    img {
      object-fit: cover;
    }
  }
  .content {
    padding: 16px;
    .description {
      margin: 16px 0 24px 0;
    }
  }
`;
