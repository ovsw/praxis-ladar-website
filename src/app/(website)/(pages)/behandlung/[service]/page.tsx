import { notFound } from "next/navigation";
import { getServicePage } from "@/app/(website)/data/utils";
import { SectionLongContent } from "@/devlink";
import ButtonRuntimeProps from "@/app/(website)/components/ButtonRuntimeProps";

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
