"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CtaButton } from "./CtaButton";

export function FooterWfcms({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="footer3_component"
      grid={{
        type: "section",
      }}
      tag="footer"
      bind="e30db50a-08bd-a1a0-86ad-25e43f752314"
      id="footer"
    >
      <_Builtin.Block
        className="padding-global background-color-black"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block
            className="padding-vertical padding-xxlarge"
            tag="div"
          >
            <_Builtin.Grid className="footer3_top-wrapper" tag="div">
              <_Builtin.Block className="footer3_left-wrapper" tag="div">
                <_Builtin.NavbarBrand
                  className="footer3_logo-link"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    bind="33397276-4795-144c-23d2-8db03cf3fa59"
                    value="%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewbox%3D%220%200%20384%20384%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M99.6459%2072.448C96.4574%2071.7799%2095.8684%2069.8116%2097.7681%2066.1715C98.8531%2064.0921%20100.429%2064%20134.814%2064C154.564%2064%20171.002%2064.2841%20171.342%2064.6321C171.681%2064.9802%20171.606%2066.6229%20171.174%2068.2813C170.528%2070.7672%20169.342%2071.5947%20164.436%2072.9825C157.391%2074.9754%20155.91%2075.877%20152.761%2080.0865C150.218%2083.4841%20148.175%2089.7909%20142.147%20112.842C140.047%20120.87%20137.533%20130.47%20136.559%20134.175C135.586%20137.881%20133.354%20146.47%20131.6%20153.263C128.472%20165.374%20124.276%20181.421%20121.325%20192.561C116.196%20211.926%20115.249%20215.598%20115.249%20216.12C115.249%20216.44%20119.56%20216.711%20124.829%20216.721C131.04%20216.733%20137.298%20217.551%20142.622%20219.044C147.138%20220.312%20152.032%20221.439%20153.495%20221.551C156.321%20221.767%20156.152%20222.256%20163.945%20191.439C164.726%20188.351%20166.915%20180.014%20168.808%20172.912C176.136%20145.432%20175.91%20142.228%20166.436%20139.311C161.118%20137.673%20160.327%20136.331%20162.369%20132.417C163.455%20130.338%20165.033%20130.246%20199.666%20130.246H235.83L235.486%20133.895C235.165%20137.313%20234.761%20137.638%20229.121%20139.036C222.85%20140.59%20218.04%20144.253%20215.359%20149.513C214.09%20152.004%20210.951%20163.255%20202.876%20194.246C202.313%20196.407%20201.107%20200.954%20200.197%20204.351C199.286%20207.747%20197.046%20216.108%20195.218%20222.929C193.389%20229.75%20191.894%20235.939%20191.894%20236.683C191.894%20237.622%20194.486%20238.032%20200.379%20238.025C207.758%20238.015%20209.597%20237.583%20214.483%20234.709C221.221%20230.747%20226.598%20224.563%20230.608%20216.165L233.569%20209.965H255.981C270.969%20209.965%20278.393%20210.357%20278.393%20211.149C278.393%20213.547%20269.711%20225.304%20263.469%20231.358C247.172%20247.166%20230.173%20254.178%20208.317%20254.108C192.073%20254.055%20182.968%20251.381%20159.593%20239.798C138.509%20229.35%20135.517%20228.483%20120.723%20228.538C110.67%20228.577%20106.476%20229.117%2099.9196%20231.22C90.8645%20234.123%2081.5599%20238.626%2072.9198%20244.284C67.3116%20247.955%2067.2568%20247.965%2065.3013%20245.75C63.9545%20244.223%2063.6633%20243.059%2064.3804%20242.064C70.4617%20233.637%2071.7176%20230.434%2077.409%20208.842C80.7452%20196.182%2084.2205%20183.046%2085.1326%20179.649C86.8188%20173.363%2090.5766%20159.053%2096.6315%20135.86C98.4852%20128.758%20101.524%20117.137%20103.383%20110.035C111.689%2078.3034%20111.351%2074.9025%2099.6459%2072.448Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M143.779%20268.912C146.203%20259.649%20148.446%20251.185%20148.763%20250.105C149.08%20249.025%20149.565%20248.14%20149.84%20248.14C150.115%20248.14%20153.654%20249.847%20157.704%20251.932C164.792%20255.582%20176.635%20260.61%20181.765%20262.15C184.824%20263.067%20184.82%20263.357%20181.596%20275.376C180.147%20280.775%20179.284%20285.382%20179.68%20285.614C180.074%20285.845%20183.282%20286.394%20186.808%20286.832C196.09%20287.987%20202.78%20290.262%20214.996%20296.422C228.788%20303.376%20240.258%20306.174%20247.504%20304.35C257.846%20301.747%20269.325%20290.633%20273.08%20279.585L274.228%20276.211H297.114C309.701%20276.211%20320%20276.615%20320%20277.109C320%20279.032%20310.131%20291.684%20303.935%20297.706C288.435%20312.766%20270.862%20320%20249.778%20320C236.842%20320%20231.111%20318.32%20213.245%20309.29C204.211%20304.724%20193.884%20300.214%20190.295%20299.266C173.573%20294.852%20153.27%20299.256%20136.816%20310.865C132.027%20314.243%20131.907%20314.267%20130.031%20312.141C128.2%20310.067%20128.279%20309.733%20131.953%20304.042C136.047%20297.699%20136.943%20295.036%20143.779%20268.912Z%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%22372%22%20height%3D%22372%22%20stroke%3D%22white%22%20stroke-width%3D%2212%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.NavbarBrand>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Paragraph>
                  {"Zahnärztliche"}
                  <_Builtin.Strong> </_Builtin.Strong>
                  {"Gemeinschaftspraxis Ladar Desiree & Emil"}
                </_Builtin.Paragraph>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <CtaButton />
                <_Builtin.Block className="spacer-medium" tag="div" />
                <_Builtin.Block className="footer3_details-wrapper" tag="div">
                  <_Builtin.Block
                    className="margin-bottom margin-tiny"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="text-size-small text-weight-semibold"
                      tag="div"
                    >
                      {"Addresse:"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="margin-bottom margin-small"
                    tag="div"
                  >
                    <_Builtin.Block className="text-size-small" tag="div">
                      {"Hindenburgstrasse 2"}
                      <br />
                      {"172250 Freudenstadt"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="margin-bottom margin-tiny"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="text-size-small text-weight-semibold"
                      tag="div"
                    >
                      {"Kontakt:"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="text-size-small" tag="div">
                    {"Tel: "}
                    <_Builtin.Link
                      className="text-color-white"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"07441-4222"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text-color-white"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      <br />
                    </_Builtin.Link>
                    {"Fax: "}
                    <_Builtin.Link
                      className="text-color-white"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"07441-51124"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text-color-white"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      <br />
                      {"‍"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text-color-white"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"praxis-ladar@t-online.de"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="spacer-medium" tag="div" />
                <_Builtin.Grid className="footer3_social-list" tag="div">
                  <_Builtin.Link
                    className="footer3_social-link"
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/p/Zahnarztpraxis-Ladar-Desiree-Emil-100057178940974/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-small"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M128%2026a102%20102%200%201%200%20102%20102A102.12%20102.12%200%200%200%20128%2026Zm6%20191.8V150h26a6%206%200%200%200%200-12h-26v-26a18%2018%200%200%201%2018-18h16a6%206%200%200%200%200-12h-16a30%2030%200%200%200-30%2030v26H96a6%206%200%200%200%200%2012h26v67.8a90%2090%200%201%201%2012%200Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_social-link"
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/p/Zahnarztpraxis-Ladar-Desiree-Emil-100057178940974/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-small"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M128%2082a46%2046%200%201%200%2046%2046a46.06%2046.06%200%200%200-46-46Zm0%2080a34%2034%200%201%201%2034-34a34%2034%200%200%201-34%2034Zm48-136H80a54.06%2054.06%200%200%200-54%2054v96a54.06%2054.06%200%200%200%2054%2054h96a54.06%2054.06%200%200%200%2054-54V80a54.06%2054.06%200%200%200-54-54Zm42%20150a42%2042%200%200%201-42%2042H80a42%2042%200%200%201-42-42V80a42%2042%200%200%201%2042-42h96a42%2042%200%200%201%2042%2042ZM190%2076a10%2010%200%201%201-10-10a10%2010%200%200%201%2010%2010Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Grid>
                <_Builtin.Block className="spacer-medium" tag="div" />
              </_Builtin.Block>
              <_Builtin.Grid className="footer3_menu-wrapper" tag="div">
                <_Builtin.Block className="footer3_link-list" tag="div">
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Home"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Über uns"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Behandlung"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Team"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Ambiente"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Team"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Jobs"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer3_link"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Kontakt"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.Grid>
            </_Builtin.Grid>
            <_Builtin.Block className="spacer-xxlarge" tag="div" />
            <_Builtin.Block className="line-divider" tag="div" />
            <_Builtin.Block className="spacer-medium" tag="div" />
            <_Builtin.Block className="footer3_bottom-wrapper" tag="div">
              <_Builtin.Block className="footer3_credit-text" tag="div">
                {"© 2023 Praxis Ladar | Erstellt mit ❤️ von "}
                <_Builtin.Link
                  className="text-color-white"
                  button={false}
                  block=""
                  options={{
                    href: "#",
                    target: "_blank",
                  }}
                >
                  {"Studio ROVST"}
                </_Builtin.Link>
                {""}
              </_Builtin.Block>
              <_Builtin.Grid className="footer3_legal-list" tag="div">
                <_Builtin.Link
                  className="footer3_legal-link"
                  button={false}
                  block=""
                  options={{
                    href: "/impressum",
                  }}
                >
                  {"Impressum"}
                </_Builtin.Link>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
