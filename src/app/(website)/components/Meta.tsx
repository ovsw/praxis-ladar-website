import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function Meta(props: Props) {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
    </Head>
  );
}
