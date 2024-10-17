"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-229":{"id":"e-229","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220024},"e-230":{"id":"e-230","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-98","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220027},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-manager_trigger","originalId":"868c908e-c04c-b886-2fe1-cd10c63ee2ec","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-manager_trigger","originalId":"868c908e-c04c-b886-2fe1-cd10c63ee2ec","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615730156825},"e-232":{"id":"e-232","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-100","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-manager_trigger","originalId":"868c908e-c04c-b886-2fe1-cd10c63ee2ec","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-manager_trigger","originalId":"868c908e-c04c-b886-2fe1-cd10c63ee2ec","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615730156825},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615343217594},"e-234":{"id":"e-234","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615343217595},"e-235":{"id":"e-235","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-236"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615393093699},"e-236":{"id":"e-236","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-235"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615393093699}},"actionLists":{"a-97":{"id":"a-97","title":"Cookie Banner [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"value":"none"}},{"id":"a-97-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-97-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"value":"flex"}},{"id":"a-97-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615288223878},"a-98":{"id":"a-98","title":"Cookie Banner [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-98-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-98-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615288223878},"a-99":{"id":"a-99","title":"Manager [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-99-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"value":0,"unit":""}},{"id":"a-99-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-99-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"value":"none"}}]},{"actionItems":[{"id":"a-99-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"value":"block"}},{"id":"a-99-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-99-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615340734554},"a-100":{"id":"a-100","title":"Manager [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-100-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"value":0,"unit":""}},{"id":"a-100-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-100-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-manager_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc68"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615340734554},"a-101":{"id":"a-101","title":"Preferences Checkbox [CHECK]","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".fs-cc-prefs_toggle","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc7c"]},"xValue":20,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-101-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_checkbox-field","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc79"]},"globalSwatchId":"","rValue":67,"bValue":255,"gValue":83,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615343221337},"a-102":{"id":"a-102","title":"Preferences Checkbox [UNCHECK]","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".fs-cc-prefs_toggle","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc7c"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-102-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_checkbox-field","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc79"]},"globalSwatchId":"","rValue":204,"bValue":204,"gValue":204,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615343221337},"a-103":{"id":"a-103","title":"Preferences Popup [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-103-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"value":"none"}},{"id":"a-103-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"value":"flex"}}]},{"actionItems":[{"id":"a-103-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"value":1,"unit":""}},{"id":"a-103-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615393118761},"a-104":{"id":"a-104","title":"Preferences Popup [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"value":0,"unit":""}},{"id":"a-104-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-104-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc6c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615393118761}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FsCookieConsent({
  as: _Component = _Builtin.Block,
  acceptBtnProp = {},
  denyBtnProp = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="set-all-components-to-display-none-and-use-this-div-to-create-a-symbol"
      tag="div"
    >
      <_Builtin.Block
        className="fs-cc-banner_component"
        tag="div"
        fs-cc="banner"
      >
        <_Builtin.Block className="fs-cc-banner_container" tag="div">
          <_Builtin.Block className="fs-cc-banner_text" tag="div">
            {"By clicking "}
            <_Builtin.Strong>{"“Accept All Cookies”"}</_Builtin.Strong>
            {
              ", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our "
            }
            <_Builtin.Link
              className="fs-cc-banner_text-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Privacy Policy"}
            </_Builtin.Link>
            {" for more information."}
          </_Builtin.Block>
          <_Builtin.Block className="fs-cc-banner_buttons-wrapper" tag="div">
            <_Builtin.Link
              className="fs-cc-banner_text-link"
              button={false}
              fs-cc="open-preferences"
              block=""
              options={{
                href: "#",
              }}
            >
              {"Preferences"}
            </_Builtin.Link>
            <_Builtin.Link
              className="fs-cc-banner_button fs-cc-button-alt"
              button={true}
              fs-cc="deny"
              block=""
              options={{
                href: "#",
              }}
              {...denyBtnProp}
            >
              {"Deny"}
            </_Builtin.Link>
            <_Builtin.Link
              className="fs-cc-banner_button"
              button={true}
              fs-cc="allow"
              block=""
              options={{
                href: "#",
              }}
              {...acceptBtnProp}
            >
              {"Accept"}
            </_Builtin.Link>
            <_Builtin.Block
              className="fs-cc-banner_close"
              tag="div"
              fs-cc="close"
            >
              <_Builtin.HtmlEmbed
                className="fs-cc-banner_close-icon"
                value="%3Csvg%20fill%3D%22currentColor%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%09%3Cpath%20d%3D%22M9.414%208l4.293-4.293-1.414-1.414L8%206.586%203.707%202.293%202.293%203.707%206.586%208l-4.293%204.293%201.414%201.414L8%209.414l4.293%204.293%201.414-1.414L9.414%208z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="fs-cc-banner_trigger"
          tag="div"
          fs-cc="interaction"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className="fs-cc-manager_component"
        tag="div"
        fs-cc="manager"
        st=""
      >
        <_Builtin.Block
          className="fs-cc-manager_button"
          tag="div"
          fs-cc="open-preferences"
        >
          <_Builtin.HtmlEmbed
            className="fs-cc-manager_icon"
            value="%3Csvg%20viewBox%3D%220%200%2054%2054%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0)%22%3E%0A%3Cpath%20d%3D%22M52.631%2030.3899C52.229%2030.4443%2051.8161%2030.4769%2051.3924%2030.4769C47.5135%2030.4769%2044.2322%2027.9344%2043.1022%2024.4358C42.9066%2023.8382%2042.4177%2023.371%2041.7984%2023.2624C35.3553%2022.0346%2030.4877%2016.3847%2030.4877%209.5831C30.4877%206.72555%2031.3461%204.07445%2032.8237%201.86881C33.1714%201.34728%2032.8781%200.641046%2032.2588%200.521529C30.5529%200.173843%2028.8036%200%2027%200C12.093%200%200%2012.093%200%2027C0%2041.907%2012.093%2054%2027%2054C40.4402%2054%2051.5553%2044.2213%2053.6415%2031.3678C53.7392%2030.7811%2053.2068%2030.303%2052.631%2030.3899Z%22%20fill%3D%22%234264D1%22%2F%3E%0A%3Cpath%20d%3D%22M14.8093%2021.7738C16.7355%2021.7738%2018.297%2020.2123%2018.297%2018.2861C18.297%2016.3599%2016.7355%2014.7984%2014.8093%2014.7984C12.883%2014.7984%2011.3215%2016.3599%2011.3215%2018.2861C11.3215%2020.2123%2012.883%2021.7738%2014.8093%2021.7738Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M16.5477%2038.3215C17.9879%2038.3215%2019.1554%2037.154%2019.1554%2035.7138C19.1554%2034.2737%2017.9879%2033.1062%2016.5477%2033.1062C15.1075%2033.1062%2013.9401%2034.2737%2013.9401%2035.7138C13.9401%2037.154%2015.1075%2038.3215%2016.5477%2038.3215Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M38.2129%207.06237L37.963%208.56177C37.7565%209.78953%2038.4519%2010.9956%2039.6254%2011.441L41.8419%2012.2668C43.2978%2012.8101%2044.9167%2011.9626%2045.297%2010.4523L46.0901%207.3014C46.5791%205.33481%2044.7429%203.58551%2042.8089%204.16137L40.06%204.98712C39.093%205.26961%2038.3759%206.07364%2038.2129%207.06237Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M47.0354%2016.5477L45.9815%2017.0692C45.1557%2017.4821%2044.7972%2018.4708%2045.1557%2019.3183L46.0032%2021.2958C46.5139%2022.4909%2048.1111%2022.7191%2048.9477%2021.7195L50.3058%2020.0897C50.9469%2019.3183%2050.8056%2018.1774%2050.0125%2017.5799L48.8608%2016.7106C48.3284%2016.3195%2047.6221%2016.2543%2047.0354%2016.5477Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M52.2615%2013.06C53.2216%2013.06%2053.9999%2012.2816%2053.9999%2011.3215C53.9999%2010.3614%2053.2216%209.5831%2052.2615%209.5831C51.3014%209.5831%2050.5231%2010.3614%2050.5231%2011.3215C50.5231%2012.2816%2051.3014%2013.06%2052.2615%2013.06Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M30.2704%2050.7296C15.3634%2050.7296%203.27042%2038.6366%203.27042%2023.7296C3.27042%2017.1018%205.66076%2011.039%209.61569%206.34528C3.73763%2011.2998%200%2018.7099%200%2027C0%2041.907%2012.093%2054%2027%2054C35.2901%2054%2042.7002%2050.2732%2047.6439%2044.3952C42.9501%2048.3501%2036.8873%2050.7296%2030.2704%2050.7296Z%22%20fill%3D%22%234264D1%22%2F%3E%0A%3Cpath%20d%3D%22M42.2222%2010.2459C40.7662%209.70263%2039.897%208.19236%2040.1469%206.64951L40.4403%204.86761L40.0274%204.98713C39.0712%205.26963%2038.365%206.07365%2038.202%207.06238L37.9521%208.56178C37.7457%209.78955%2038.4411%2010.9956%2039.6145%2011.4411L41.831%2012.2668C43.0044%2012.7014%2044.2648%2012.2342%2044.9167%2011.2563L42.2222%2010.2459Z%22%20fill%3D%22%234264D1%22%2F%3E%0A%3Cpath%20d%3D%22M47.8612%2020.1658L46.905%2017.9276C46.7203%2017.5038%2046.7095%2017.0584%2046.8181%2016.6455L45.9815%2017.0692C45.1557%2017.4821%2044.7972%2018.4708%2045.1557%2019.3183L46.0032%2021.2958C46.5139%2022.491%2048.1111%2022.7191%2048.9477%2021.7195L49.2845%2021.3175C48.6869%2021.198%2048.1328%2020.8069%2047.8612%2020.1658Z%22%20fill%3D%22%234264D1%22%2F%3E%0A%3Cpath%20d%3D%22M16.6563%2019.9268C14.7332%2019.9268%2013.1686%2018.3622%2013.1686%2016.4391C13.1686%2015.961%2013.2664%2015.4938%2013.4402%2015.0809C12.1907%2015.6133%2011.3107%2016.8519%2011.3107%2018.2861C11.3107%2020.2093%2012.8753%2021.7739%2014.7984%2021.7739C16.2435%2021.7739%2017.4821%2020.8938%2018.0036%2019.6443C17.6016%2019.829%2017.1344%2019.9268%2016.6563%2019.9268Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M17.9059%2036.9634C16.4608%2036.9634%2015.2982%2035.79%2015.2982%2034.3557C15.2982%2033.9863%2015.3743%2033.6386%2015.5155%2033.3235C14.592%2033.7256%2013.9401%2034.6491%2013.9401%2035.7248C13.9401%2037.1698%2015.1135%2038.3324%2016.5477%2038.3324C17.6234%2038.3324%2018.5469%2037.6805%2018.9489%2036.757C18.623%2036.8873%2018.2753%2036.9634%2017.9059%2036.9634Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M33.0954%2041.8093C35.0216%2041.8093%2036.5831%2040.2477%2036.5831%2038.3215C36.5831%2036.3953%2035.0216%2034.8338%2033.0954%2034.8338C31.1692%2034.8338%2029.6077%2036.3953%2029.6077%2038.3215C29.6077%2040.2477%2031.1692%2041.8093%2033.0954%2041.8093Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M34.9425%2039.9513C33.0193%2039.9513%2031.4547%2038.3867%2031.4547%2036.4636C31.4547%2035.9855%2031.5525%2035.5183%2031.7264%2035.1054C30.4769%2035.6378%2029.5968%2036.8765%2029.5968%2038.3107C29.5968%2040.2338%2031.1614%2041.7984%2033.0845%2041.7984C34.5296%2041.7984%2035.7682%2040.9183%2036.2898%2039.6688C35.8877%2039.8535%2035.4314%2039.9513%2034.9425%2039.9513Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M27.8063%2022.9281C27.9601%2021.9804%2027.3165%2021.0874%2026.3688%2020.9336C25.421%2020.7798%2024.5281%2021.4234%2024.3743%2022.3711C24.2205%2023.3188%2024.864%2024.2118%2025.8118%2024.3656C26.7595%2024.5194%2027.6525%2023.8758%2027.8063%2022.9281Z%22%20fill%3D%22%236CE2FF%22%2F%3E%0A%3Cpath%20d%3D%22M42.6785%2035.6487C42.798%2035.6487%2042.9284%2035.6161%2043.0371%2035.5618C43.4391%2035.3553%2043.602%2034.8664%2043.4065%2034.4644L42.5373%2032.726C42.3308%2032.3239%2041.8419%2032.161%2041.4399%2032.3565C41.0379%2032.563%2040.8749%2033.0519%2041.0705%2033.4539L41.9397%2035.1924C42.0918%2035.4857%2042.3743%2035.6487%2042.6785%2035.6487Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M33.0954%2030.4225C33.2149%2030.4225%2033.3453%2030.39%2033.4539%2030.3356L35.1923%2029.4664C35.5944%2029.26%2035.7573%2028.771%2035.5618%2028.369C35.3553%2027.967%2034.8664%2027.804%2034.4644%2027.9996L32.726%2028.8688C32.3239%2029.0753%2032.161%2029.5642%2032.3565%2029.9662C32.5087%2030.2596%2032.802%2030.4225%2033.0954%2030.4225Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M8.85515%2028.2386C8.9964%2028.5211%209.28976%2028.6841%209.58312%2028.6841C9.70263%2028.6841%209.83302%2028.6515%209.94167%2028.5972C10.3437%2028.3908%2010.5067%2027.9018%2010.3111%2027.4998L9.44187%2025.7614C9.23543%2025.3594%208.7465%2025.1964%208.34449%2025.392C7.94247%2025.5984%207.7795%2026.0873%207.97507%2026.4894L8.85515%2028.2386Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M22.2845%2041.9505L20.5461%2042.8197C20.1441%2043.0262%2019.9811%2043.5151%2020.1767%2043.9171C20.3179%2044.1996%2020.6113%2044.3626%2020.9046%2044.3626C21.0242%2044.3626%2021.1545%2044.33%2021.2632%2044.2757L23.0016%2043.4064C23.4036%2043.2%2023.5666%2042.7111%2023.371%2042.3091C23.1755%2041.907%2022.6865%2041.7441%2022.2845%2041.9505Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M23.2189%209.00724L22.3497%208.13802C22.0346%207.82293%2021.5131%207.82293%2021.198%208.13802C20.8829%208.45311%2020.8829%208.97464%2021.198%209.28973L22.0672%2010.1589C22.2302%2010.3219%2022.4366%2010.398%2022.6431%2010.398C22.8495%2010.398%2023.0559%2010.3219%2023.2189%2010.1589C23.5449%209.84385%2023.5449%209.32233%2023.2189%209.00724Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M19.4596%2028.1626C19.1445%2028.4777%2019.1445%2028.9992%2019.4596%2029.3143L20.3288%2030.1835C20.4918%2030.3465%2020.6982%2030.4226%2020.9047%2030.4226C21.1111%2030.4226%2021.3175%2030.3465%2021.4805%2030.1835C21.7956%2029.8684%2021.7956%2029.3469%2021.4805%2029.0318L20.6113%2028.1626C20.2853%2027.8475%2019.7747%2027.8475%2019.4596%2028.1626Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M29.6729%2047.0354V47.9046C29.6729%2048.3501%2030.0423%2048.7195%2030.4877%2048.7195C30.9332%2048.7195%2031.3026%2048.3501%2031.3026%2047.9046V47.0354C31.3026%2046.5899%2030.9332%2046.2205%2030.4877%2046.2205C30.0423%2046.2205%2029.6729%2046.5791%2029.6729%2047.0354Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M25.8374%2015.3851L26.7067%2014.5159C27.0217%2014.2008%2027.0217%2013.6793%2026.7067%2013.3642C26.3916%2013.0491%2025.87%2013.0491%2025.5549%2013.3642L24.6857%2014.2334C24.3706%2014.5485%2024.3706%2015.07%2024.6857%2015.3851C24.8487%2015.5481%2025.0551%2015.6241%2025.2616%2015.6241C25.468%2015.6241%2025.6745%2015.5372%2025.8374%2015.3851Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0%22%3E%0A%3Crect%20width%3D%2254%22%20height%3D%2254%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className="fs-cc-manager_trigger"
          tag="div"
          fs-cc="interaction"
        />
      </_Builtin.Block>
      <_Builtin.FormWrapper
        className="fs-cc-prefs_component"
        fs-cc="preferences"
        fs-cc-scroll="disable"
      >
        <_Builtin.FormForm
          className="fs-cc-prefs_form"
          name="wf-form-Cookie-Preferences"
          data-name="Cookie Preferences"
          method="get"
          id="cookie-preferences"
        >
          <_Builtin.Block className="fs-cc-prefs_close" tag="div" fs-cc="close">
            <_Builtin.HtmlEmbed
              className="fs-cc-prefs_close-icon"
              value="%3Csvg%20fill%3D%22currentColor%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%09%3Cpath%20d%3D%22M9.414%208l4.293-4.293-1.414-1.414L8%206.586%203.707%202.293%202.293%203.707%206.586%208l-4.293%204.293%201.414%201.414L8%209.414l4.293%204.293%201.414-1.414L9.414%208z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="fs-cc-prefs_content" tag="div">
            <_Builtin.Block className="fs-cc-prefs_space-small" tag="div">
              <_Builtin.Block className="fs-cc-prefs_title" tag="div">
                {"Privacy Preference Center"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_space-small" tag="div">
              <_Builtin.Block className="fs-cc-prefs_text" tag="div">
                {
                  "When you visit websites, they may store or retrieve data in your browser. This storage is often necessary for the basic functionality of the website. The storage may be used for marketing, analytics, and personalization of the site, such as storing your preferences. Privacy is important to us, so you have the option of disabling certain types of storage that may not be necessary for the basic functioning of the website. Blocking categories may impact your experience on the website."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_space-medium" tag="div">
              <_Builtin.Link
                className="fs-cc-prefs_button fs-cc-button-alt"
                button={true}
                fs-cc="deny"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Reject all cookies"}
              </_Builtin.Link>
              <_Builtin.Link
                className="fs-cc-prefs_button"
                button={true}
                fs-cc="allow"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Allow all cookies"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_space-small" tag="div">
              <_Builtin.Block className="fs-cc-prefs_title" tag="div">
                {"Manage Consent Preferences by Category"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_option" tag="div">
              <_Builtin.Block className="fs-cc-prefs_toggle-wrapper" tag="div">
                <_Builtin.Block className="fs-cc-prefs_label" tag="div">
                  {"Essential"}
                </_Builtin.Block>
                <_Builtin.Block className="fs-cc-prefs_text" tag="div">
                  <_Builtin.Strong>{"Always Active"}</_Builtin.Strong>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="fs-cc-prefs_text" tag="div">
                {
                  "These items are required to enable basic website functionality."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_option" tag="div">
              <_Builtin.Block className="fs-cc-prefs_toggle-wrapper" tag="div">
                <_Builtin.Block className="fs-cc-prefs_label" tag="div">
                  {"Marketing"}
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper className="fs-cc-prefs_checkbox-field">
                  <_Builtin.FormCheckboxInput
                    className="fs-cc-prefs_checkbox"
                    type="checkbox"
                    name="marketing-2"
                    data-name="Marketing 2"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="marketing"
                    id="marketing-2"
                    form={{
                      type: "checkbox-input",
                      name: "Marketing 2",
                    }}
                    inputType=""
                  />
                  <_Builtin.FormInlineLabel
                    className="fs-cc-prefs_checkbox-label"
                    htmlFor="marketing-2"
                  >
                    {"Essential"}
                  </_Builtin.FormInlineLabel>
                  <_Builtin.Block className="fs-cc-prefs_toggle" tag="div" />
                </_Builtin.FormCheckboxWrapper>
              </_Builtin.Block>
              <_Builtin.Block className="fs-cc-prefs_text" tag="div">
                {
                  "These items are used to deliver advertising that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator’s permission."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_option" tag="div">
              <_Builtin.Block className="fs-cc-prefs_toggle-wrapper" tag="div">
                <_Builtin.Block className="fs-cc-prefs_label" tag="div">
                  {"Personalization"}
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper className="fs-cc-prefs_checkbox-field">
                  <_Builtin.FormCheckboxInput
                    className="fs-cc-prefs_checkbox"
                    type="checkbox"
                    name="personalization-2"
                    data-name="Personalization 2"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="personalization"
                    id="personalization-2"
                    form={{
                      type: "checkbox-input",
                      name: "Personalization 2",
                    }}
                    inputType=""
                  />
                  <_Builtin.FormInlineLabel
                    className="fs-cc-prefs_checkbox-label"
                    htmlFor="personalization-2"
                  >
                    {"Essential"}
                  </_Builtin.FormInlineLabel>
                  <_Builtin.Block className="fs-cc-prefs_toggle" tag="div" />
                </_Builtin.FormCheckboxWrapper>
              </_Builtin.Block>
              <_Builtin.Block className="fs-cc-prefs_text" tag="div">
                {
                  "These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your current location."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_option" tag="div">
              <_Builtin.Block className="fs-cc-prefs_toggle-wrapper" tag="div">
                <_Builtin.Block className="fs-cc-prefs_label" tag="div">
                  {"Analytics"}
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper className="fs-cc-prefs_checkbox-field">
                  <_Builtin.FormCheckboxInput
                    className="fs-cc-prefs_checkbox"
                    type="checkbox"
                    name="analytics-2"
                    data-name="Analytics 2"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="analytics"
                    id="analytics-2"
                    form={{
                      type: "checkbox-input",
                      name: "Analytics 2",
                    }}
                    inputType=""
                  />
                  <_Builtin.FormInlineLabel
                    className="fs-cc-prefs_checkbox-label"
                    htmlFor="analytics-2"
                  >
                    {"Essential"}
                  </_Builtin.FormInlineLabel>
                  <_Builtin.Block className="fs-cc-prefs_toggle" tag="div" />
                </_Builtin.FormCheckboxWrapper>
              </_Builtin.Block>
              <_Builtin.Block className="fs-cc-prefs_text" tag="div">
                {
                  "These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="fs-cc-prefs_buttons-wrapper" tag="div">
              <_Builtin.Link
                className="fs-cc-prefs_button"
                button={true}
                fs-cc="submit"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Confirm my preferences and close"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.FormButton
              className="fs-cc-prefs_submit-hide"
              type="submit"
              value="Submit"
              data-wait="Please wait..."
            />
            <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%2F*%20smooth%20scrolling%20on%20iOS%20devices%20*%2F%0A.fs-cc-prefs_content%7B-webkit-overflow-scrolling%3A%20touch%7D%0A%3C%2Fstyle%3E" />
          </_Builtin.Block>
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage />
        <_Builtin.FormErrorMessage />
        <_Builtin.Block
          className="fs-cc-prefs_overlay"
          tag="div"
          fs-cc="close"
        />
        <_Builtin.Block
          className="fs-cc-prefs_trigger"
          tag="div"
          fs-cc="interaction"
        />
      </_Builtin.FormWrapper>
    </_Component>
  );
}
