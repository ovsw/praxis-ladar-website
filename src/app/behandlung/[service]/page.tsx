import { notFound } from "next/navigation";
import { getServicePage } from "@/data/utils";
import { ButtonPrimary, SectionServiceRte } from "@/devlink";
import ButtonRuntimeProps from "@/app/components/ButtonRuntimeProps";

type Props = {
  params: { service: string };
};

export default function ServicePage({ params }: Props) {
  const slug = params.service;
  const page = getServicePage(slug);

  if (page === undefined) {
    notFound();
  }

  return (
    <main>
      <SectionServiceRte
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
