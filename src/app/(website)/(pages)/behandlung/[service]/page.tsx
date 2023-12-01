import { notFound } from "next/navigation";
import { getServicePage } from "@/app/(website)/data/utils";
import { SectionLongContent } from "@/devlink";
import ButtonRuntimeProps from "@/app/(website)/components/ButtonRuntimeProps";
import servicesData from "@/app/(website)/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behandlung | Praxis Ladar",
  description:
    "In unserer Zahnarztpraxis setzen wir auf hochmoderne Technologie, um Ihr Wohlbefinden und Ihre Zahngesundheit zu fördern. Bei uns erwartet Sie eine zeitgemäße Zahnmedizin für ein strahlendes Lächeln und eine sorgenfreie Behandlung.",
};

type Props = {
  params: { service: string };
};

export async function generateStaticParams() {
  //  we're looking for something like: [{ service: "asthetische-zahnheilkunde" }, { service: "bleaching" }, ... etc...];
  return servicesData.map((page) => {
    return {
      service: page.Slug,
    };
  });
}

function getService(params: { service: string }) {
  const service = getServicePage(params.service);
  return service;
}

export default function ServicePage({ params }: Props) {
  const page = getService(params);

  // if (page === undefined) {
  //   notFound();
  // }

  return (
    <main>
      <SectionLongContent
        headingText={page.Name}
        image={page["Main image"]}
        buttons={<ButtonRuntimeProps />}
        richTextSlot={
          <div
            dangerouslySetInnerHTML={{ __html: page["Overview rich text"] }}
          />
        }
      />
    </main>
  );
}
