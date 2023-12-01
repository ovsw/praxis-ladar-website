"use client";

import Image from "next/image";
import Link from "next/link";
import { RenderLink, RenderImage } from "@/devlink";

export const LinkRenderer: RenderLink = ({
  href,
  className,
  children,
  ...props
}) => (
  <Link href={href} className={className} {...props}>
    {children}
  </Link>
);

export const ImageRenderer: RenderImage = ({
  src,
  alt,
  height,
  width,
  loading,
  className,
  ...props
}) => {
  const imgProps = {
    loading,
    className,
    src: src || "",
    alt: alt || "",
    width: width === "auto" ? undefined : (width as number),
    height: height === "auto" ? undefined : (height as number),

    // Note: this will fill the image to its parent element container
    // so you'll need to style the parent container with the desired size.
    fill: width === "auto" || height === "auto",
    ...props,
  };

  return (
    <Image
      loading={imgProps.loading}
      className={imgProps.className}
      src={imgProps.src}
      alt={imgProps.alt}
      width={imgProps.width}
      height={imgProps.height}
      fill={imgProps.fill}
    />
  );
};
