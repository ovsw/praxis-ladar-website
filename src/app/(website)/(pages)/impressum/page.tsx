import { SectionLongContent } from "@/devlink";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Praxis Ladar",
  description:
    "Zuständige Aufsichtsbehörde:Bezirkszahnärztkammer KarlsruheHindenburgstraße 268167 Mannheim.",
};

export default function Impressum() {
  return (
    <>
      <SectionLongContent
        eyebrowText={"Praxis Ladar"}
        headingText={"Impressum"}
        hasTopImage={false}
        hasBottomButtons={false}
        richTextSlot={
          <div
            dangerouslySetInnerHTML={{
              __html: `<p><strong>Zuständige Aufsichtsbehörde:</strong><br>Bezirkszahnärztkammer Karlsruhe<br>Hindenburgstraße 2<br>68167 Mannheim</p><p><strong>Zuständige Kammer:</strong><br>Landeszahnärztekammer Baden-Württemberg<br>Albstadtweg 9 70567 Stuttgart</p><p><strong>Berufsbezeichnung: <br>‍</strong>Zahnärzte (verliehen in Temeschburg / Rumänien)<br>Approbation erteilt durch das Regierungspräsidium Stuttgart, Bundesrepublik Deutschland<br><br><strong>Tätigkeitsschwerpunkte: </strong><br>Parodontologie – Implantologie – Endodontie.<br>(Anerkennung dieser Tätigkeitsschwerpunkte gem. §14 der Berufsordnung der Landeszahnärztekammer Baden - Württemberg)</p><p><strong>Berufsrechtliche Regelungen: </strong><br>- Zahnheilkundegesetz<br>- Heilberufe-Kammergesetz<br>- Gebührenordnung für Zahnärzte<br>- Berufsordnung für Zahnärzte (www.zaek-nr.de)</p><p><strong>Inhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV:</strong><br>Ladar Emil Hindenburgstr. 2, 72250 Freudenstadt</p><p>‍</p><h2>Haftungsauschluss / Disclaimer</h2><p><strong>1. Inhalt des Onlineangebotes</strong></p><p>Der Inhaltsanbieter und Betreiber der Seiten, im Folgenden auch mit "Autor" bezeichnet, übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p><p><strong>2. Verweise und Links</strong></p><p>Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt daher ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren. Der Autor hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.</p><p><strong>3. Urheber- und Kennzeichenrecht</strong></p><p>Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.</p><p><strong>4. Rechtswirksamkeit dieses Haftungsausschlusses</strong></p><p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>`,
            }}
          />
        }
      />
    </>
  );
}
