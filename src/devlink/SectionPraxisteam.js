"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-64","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"306bdaf8-8a78-9bdc-95ec-0cda47ef146d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"306bdaf8-8a78-9bdc-95ec-0cda47ef146d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-64-p","smoothing":97,"startsEntering":true,"addStartOffset":true,"addOffsetValue":100,"startsExiting":false,"addEndOffset":true,"endOffsetValue":25}],"createdOn":1699416438195},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-65","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1473","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1473","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-65-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699416438195},"e-188":{"id":"e-188","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-65","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"306bdaf8-8a78-9bdc-95ec-0cda47ef149f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"306bdaf8-8a78-9bdc-95ec-0cda47ef149f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-65-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699416438195}},"actionLists":{"a-64":{"id":"a-64","title":"Home - Team Sticky Animation - Desktop 8","continuousParameterGroups":[{"id":"a-64-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-64-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14f8"},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-64-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef149b"},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-64-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14a0"},"value":0,"unit":""}},{"id":"a-64-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14bc"},"value":0,"unit":""}},{"id":"a-64-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14da"},"value":0,"unit":""}}]},{"keyframe":19,"actionItems":[{"id":"a-64-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1476"},"value":1,"unit":""}},{"id":"a-64-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1497"},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-64-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1497"},"value":1,"unit":""}}]},{"keyframe":22,"actionItems":[{"id":"a-64-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1476"},"value":0,"unit":""}},{"id":"a-64-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1497"},"xValue":50,"yValue":-50,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-64-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef1497"},"value":0,"unit":""}},{"id":"a-64-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14a0"},"value":0,"unit":""}}]},{"keyframe":28,"actionItems":[{"id":"a-64-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14a0"},"value":1,"unit":""}}]},{"keyframe":41,"actionItems":[{"id":"a-64-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14a0"},"value":1,"unit":""}},{"id":"a-64-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14ba"},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"keyframe":44,"actionItems":[{"id":"a-64-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14a0"},"value":0,"unit":""}},{"id":"a-64-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14ba"},"xValue":50,"yValue":-50,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-64-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14bc"},"value":0,"unit":""}}]},{"keyframe":47,"actionItems":[{"id":"a-64-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14bc"},"value":1,"unit":""}}]},{"keyframe":63,"actionItems":[{"id":"a-64-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14bc"},"value":1,"unit":""}},{"id":"a-64-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14d7"},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"keyframe":66,"actionItems":[{"id":"a-64-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14bc"},"value":0,"unit":""}},{"id":"a-64-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14d7"},"xValue":50,"yValue":-50,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-64-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14da"},"value":0,"unit":""}}]},{"keyframe":72,"actionItems":[{"id":"a-64-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14da"},"value":1,"unit":""}}]},{"keyframe":90,"actionItems":[{"id":"a-64-n-26","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef14f8"},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"keyframe":100,"actionItems":[{"id":"a-64-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"306bdaf8-8a78-9bdc-95ec-0cda47ef149b"},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1644474018380},"a-65":{"id":"a-65","title":"Section Name Parallax - Mobile 6","continuousParameterGroups":[{"id":"a-65-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-65-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-outlined-heading","selectorGuids":["ca8b5bde-9774-13e0-6c7e-7f59d6db5d17"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-65-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-outlined-heading","selectorGuids":["ca8b5bde-9774-13e0-6c7e-7f59d6db5d17"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionPraxisteam({
  as: _Component = _Builtin.Section,
  backgroundTitle = "Team",
  heading = "Praxisteam",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section_sticky-slider"
      grid={{
        type: "section",
      }}
      tag="section"
      bind="4303679d-2009-d753-b448-b156dd749e33"
      id="artze"
    >
      <_Builtin.Block
        className="sticky-slider_container"
        data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef146d"
        tag="div"
      >
        <_Builtin.Block
          className="section-title-wrapper is-hidden-above-tablet"
          tag="div"
        >
          <_Builtin.Block
            className="section-outlined-heading outlined"
            tag="div"
          >
            {"Team"}
          </_Builtin.Block>
          <_Builtin.Heading className="heading-2 absolute" tag="h2">
            {"Ärzte"}
          </_Builtin.Heading>
          <_Builtin.Block
            className="section-outlined-heading-trigger"
            data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef1473"
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block className="sticky-slider_component" tag="div">
          <_Builtin.Block className="sticky-slider_item" tag="div">
            <_Builtin.Block
              className="sticky-slider_text"
              data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef1476"
              tag="div"
            >
              <_Builtin.Block
                dyn={{
                  bind: {},
                }}
                tag="div"
                bind="4303679d-2009-d753-b448-b156dd749e3e"
              >
                <_Builtin.Strong>
                  {"Dr. med. stom (UMF Temeschburg)"}
                </_Builtin.Strong>
              </_Builtin.Block>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Heading tag="h3">{"Desirée Ladar"}</_Builtin.Heading>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Paragraph>
                {"Zahnärztin"}
                <br />
                {"Tätigkeitsschwerpunkt "}
                <br />
                {"Parodontologie "}
                <br />
                {"Endodontie"}
              </_Builtin.Paragraph>
              <_Builtin.Block className="sticky-slider_line" tag="div" />
              <_Builtin.Block
                className="sticky-slider_paragraphs-wrapper"
                tag="div"
              >
                <_Builtin.Paragraph
                  className="paragraph bio-motto"
                  dyn={{
                    bind: {},
                  }}
                  bind="4303679d-2009-d753-b448-b156dd749e4b"
                >
                  {'"Ein Lächeln ist das schönste was man tragen kann."'}
                </_Builtin.Paragraph>
                <_Builtin.RichText
                  className="sticky-slider_rich-text"
                  tag="div"
                >
                  <_Builtin.List tag="ul" unstyled={false}>
                    <_Builtin.ListItem>
                      {
                        "(1991-1997) Studium der Zahnmedizin an der UMFTemeschburg"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {"(2005) Curriculum Parodontologie"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {"(2012) Curriculum Implantologie an der ZFZ Stuttgart"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(2014-2015) Tec2 Curriculum Endodontie in Zusammenarbeit mit der University of Pennsylvania"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(2003) Niederlassung in der Gemeinschaftspraxis Ladar Desiree & Emil — Freudenstadt"
                      }
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.RichText>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sticky-slider_image-wrapper" tag="div">
              <_Builtin.Block
                className="sticky-slider_image-wrapper-inner"
                data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef1497"
                tag="div"
              >
                <_Builtin.Image
                  className="sticky-slider_image"
                  dyn={{
                    bind: {},
                  }}
                  height="auto"
                  loading="lazy"
                  width="606.5"
                  bind="4303679d-2009-d753-b448-b156dd749e5b"
                  alt=""
                  src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549ae4c3a68fc5998841310_Desiree-Ladar.jpg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className="sticky-slider_big-heading-wrapper"
                tag="div"
              >
                <_Builtin.Block className="section-title-wrapper" tag="div">
                  <_Builtin.Block
                    className="section-outlined-heading outlined for-testimonial"
                    data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef149b"
                    tag="div"
                    data-outlined="dark"
                  >
                    {backgroundTitle}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className="heading-2 absolute bigger"
                    tag="h2"
                  >
                    {heading}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className="section-outlined-heading-trigger"
                    data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef149f"
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="sticky-slider_item"
            data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef14a0"
            tag="div"
          >
            <_Builtin.Block className="sticky-slider_text" tag="div">
              <_Builtin.Block
                dyn={{
                  bind: {},
                }}
                tag="div"
                bind="4303679d-2009-d753-b448-b156dd749e67"
              >
                <_Builtin.Strong>
                  {"Dr. med. stom (UMF Temeschburg)"}
                </_Builtin.Strong>
              </_Builtin.Block>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Heading tag="h3">{"Emil Ladar"}</_Builtin.Heading>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Paragraph>
                {"Zahnarzt Tätigkeitsschwerpunkt Implantologie"}
              </_Builtin.Paragraph>
              <_Builtin.Block className="sticky-slider_line" tag="div" />
              <_Builtin.Block
                className="sticky-slider_paragraphs-wrapper"
                tag="div"
              >
                <_Builtin.Paragraph
                  className="paragraph bio-motto"
                  dyn={{
                    bind: {},
                  }}
                  bind="4303679d-2009-d753-b448-b156dd749e72"
                >
                  {
                    '"Perfektion und Präzision, das ist mein ganz persönlicher Qualitätsanspruch."'
                  }
                </_Builtin.Paragraph>
                <_Builtin.RichText
                  className="sticky-slider_rich-text"
                  tag="div"
                >
                  <_Builtin.List tag="ul" unstyled={false}>
                    <_Builtin.ListItem>
                      {
                        "(1991-1997) Studium der Zahnmedizin an der UMFTemeschburg"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {"(2004-2005) Curriculum Implantologie bei der DGOI"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {"(2015) Curriculum Parodontologie"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(2003) Niederlassung in der Gemeinschaftspraxis Ladar Desiree & Emil — Freudenstadt"
                      }
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.RichText>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sticky-slider_image-wrapper" tag="div">
              <_Builtin.Block
                className="sticky-slider_image-wrapper-inner"
                data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef14ba"
                tag="div"
              >
                <_Builtin.Image
                  className="sticky-slider_image"
                  dyn={{
                    bind: {},
                  }}
                  height="auto"
                  loading="lazy"
                  width="auto"
                  bind="4303679d-2009-d753-b448-b156dd749e82"
                  alt=""
                  src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549ae4b3a68fc5998841306_Emil-Ladar.jpg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="sticky-slider_item"
            data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef14bc"
            tag="div"
          >
            <_Builtin.Block className="sticky-slider_text" tag="div">
              <_Builtin.Block
                dyn={{
                  bind: {},
                }}
                tag="div"
                bind="4303679d-2009-d753-b448-b156dd749e9f"
              >
                {" "}
              </_Builtin.Block>
              <_Builtin.Heading tag="h3">{"Dr. Sandra Duma"}</_Builtin.Heading>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Paragraph>
                {"Zahnärztin"}
                <br />
                {""}
              </_Builtin.Paragraph>
              <_Builtin.Block className="sticky-slider_line" tag="div" />
              <_Builtin.Block
                className="sticky-slider_paragraphs-wrapper"
                tag="div"
              >
                <_Builtin.Paragraph
                  className="paragraph bio-motto"
                  dyn={{
                    bind: {},
                  }}
                  bind="4303679d-2009-d753-b448-b156dd749e8e"
                >
                  {
                    '"Kompetente Beratungen, schmerzarme und qualitative Behandlungen sowie die nötige Prise Spaß stehen für mich an erster Stelle."'
                  }
                </_Builtin.Paragraph>
                <_Builtin.RichText
                  className="sticky-slider_rich-text"
                  tag="div"
                >
                  <_Builtin.List tag="ul" unstyled={false}>
                    <_Builtin.ListItem>
                      {
                        "(2014-2020) Studium der Zahnmedizin an der Ludwig-Maximilians-Universität München"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(2019-2023) Promotion zum Dr. med. dent. an der Poliklinik für Zahnerhaltung und Parodontologie München"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(Seit 2020) Angestellte Zahnärztin in der Gemeinschaftspraxis Dres. Ladar in Freudenstadt"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(2022) Publikation mit dem Titel „Adhesion to a CAD/CAM composite: causal factors for a reliable long-term bond“ im Journal of Functional Biomaterials"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(Seit 2023) Tec2 Curriculum Endodontie in Zusammenarbeit mit der University of"
                      }
                      <br />
                      {"Pennsylvania"}
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.RichText>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="sticky-slider_image-wrapper"
              data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef14d7"
              tag="div"
            >
              <_Builtin.Block
                className="sticky-slider_image-wrapper-inner"
                tag="div"
              >
                <_Builtin.Image
                  className="sticky-slider_image"
                  dyn={{
                    bind: {},
                  }}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  bind="4303679d-2009-d753-b448-b156dd749e9a"
                  alt=""
                  src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549ae4b3a68fc5998841301_Sandra-Duma.jpg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="sticky-slider_item last"
            data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef14da"
            tag="div"
          >
            <_Builtin.Block className="sticky-slider_text" tag="div">
              <_Builtin.Block
                dyn={{
                  bind: {},
                }}
                tag="div"
                bind="4303679d-2009-d753-b448-b156dd749e9f"
              >
                {" "}
              </_Builtin.Block>
              <_Builtin.Heading tag="h3">
                {"Dr. Tobias Pfeifer"}
              </_Builtin.Heading>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Block
                dyn={{
                  bind: {},
                }}
                tag="div"
                bind="4303679d-2009-d753-b448-b156dd749ea4"
              >
                {"Zahnarzt "}
                <br />
              </_Builtin.Block>
              <_Builtin.Block className="sticky-slider_line" tag="div" />
              <_Builtin.Block
                className="sticky-slider_paragraphs-wrapper"
                tag="div"
              >
                <_Builtin.Paragraph
                  className="paragraph bio-motto"
                  dyn={{
                    bind: {},
                  }}
                  bind="4303679d-2009-d753-b448-b156dd749ea9"
                >
                  {
                    '"Gesunde und schöne Zähne sind für mich nicht nur Geschmackssache."'
                  }
                </_Builtin.Paragraph>
                <_Builtin.RichText
                  className="sticky-slider_rich-text"
                  tag="div"
                >
                  <_Builtin.List tag="ul" unstyled={false}>
                    <_Builtin.ListItem>
                      {
                        "(2018) Studium der Zahnmedizin an der Ruprechts-Karls-Universität Heidelberg"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(2021) Promotion zum Dr. med. dent an der Universität Heidelberg"
                      }
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {"(2021-2022) Curriculum Implantologie der DGi"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      {
                        "(Seit 2020) Angestellter Zahnarzt in der Gemeinschaftspraxis Dres. Ladar in Freudenstadt"
                      }
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.RichText>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sticky-slider_image-wrapper" tag="div">
              <_Builtin.Block
                className="sticky-slider_image-wrapper-inner"
                tag="div"
              >
                <_Builtin.Image
                  className="sticky-slider_image"
                  dyn={{
                    bind: {},
                  }}
                  height="auto"
                  loading="lazy"
                  width="auto"
                  bind="4303679d-2009-d753-b448-b156dd749eb7"
                  alt=""
                  src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549ae4b3a68fc599884130b_Tobias-Pfeifer.jpg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="sticky-slider_progres-bar" tag="div">
            <_Builtin.Block
              className="sticky-slider_inner-bar"
              data-w-id="306bdaf8-8a78-9bdc-95ec-0cda47ef14f8"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
