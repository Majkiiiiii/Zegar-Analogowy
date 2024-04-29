import * as React from "react";
const Zegar = ({hours,minutes,seconds}) => (
<svg
    width="114mm"
    height="114mm"
    viewBox="-57 -57 114 114"
    id="svg1"
    inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
    sodipodi:docname="rysunek.svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <sodipodi:namedview
      id="namedview1"
      pagecolor="#505050"
      bordercolor="#eeeeee"
      borderopacity={1}
      inkscape:showpageshadow={0}
      inkscape:pageopacity={0}
      inkscape:pagecheckerboard={0}
      inkscape:deskcolor="#505050"
      inkscape:document-units="mm"
      inkscape:zoom={1.0218084}
      inkscape:cx={397.33476}
      inkscape:cy={563.21714}
      inkscape:window-width={2560}
      inkscape:window-height={1361}
      inkscape:window-x={-9}
      inkscape:window-y={-9}
      inkscape:window-maximized={1}
      inkscape:current-layer="layer1"
    />
    <defs id="defs1" />
    <g inkscape:label="Warstwa 1" inkscape:groupmode="layer" id="layer1">
      <circle
        style={{
          fill: "#000000",
          fillOpacity: 1,
          stroke: "#d4aa00",
          strokeWidth: 0.29143,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="path1"
        r={54.986786}
      />
      <circle
        style={{
          fill: "#000000",
          fillOpacity: 1,
          stroke: "#d4aa00",
          strokeWidth: 0.272929,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="path1-7"
        r={51.496037}
      />
      <circle
        style={{
          fill: "#e6e6e6",
          fillOpacity: 1,
          stroke: "#d4aa00",
          strokeWidth: 0.251085,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="path1-6"
        r={47.374458}
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.265241,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect3-2"
        width={94.17675}
        height={2.0712485}
        x={-47}
        cx={9.9712353}
        cy={56.171486}
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.265241,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect3-21"
        width={94.17675}
        height={2.0712485}
        x={-47}
        cx={-67.899895}
        cy={-79.108231}
        transform="rotate(150)"
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.265241,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect3-3"
        width={94.17675}
        height={2.0712485}
        x={-47}
        cx={-26.075373}
        cy={-79.05426}
        transform="rotate(120)"
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.265241,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect3-38"
        width={94.17675}
        height={2.0712485}
        x={-47}
        cx={10.118728}
        cy={-58.095234}
        transform="rotate(90)"
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.265241,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect3-0"
        width={94.17675}
        height={2.0712485}
        x={-47}
        cx={30.98424}
        cy={-21.847141}
        transform="rotate(60)"
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.265241,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect3-05"
        width={94.17675}
        height={2.0712485}
        x={-47}
        cx={30.93025}
        cy={19.977377}
        transform="rotate(30)"
      />
      <circle
        style={{
          fill: "#e6e6e6",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.288667,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="path4"
        r={38}
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.256471,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect6"
        width={35.886745}
        height={1.4647652}
        transform={"rotate("+(minutes-90)+")"}
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.228259,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect6-2"
        width={25.267197}
        height={1.6478609}
        transform={"rotate("+(hours-90)+")"}
      />
      <rect
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.224567,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect6-1"
        width={43.942127}
        height={0.91712576}
        x={-8}
        transform={"rotate("+(seconds-90)+")"}
      />
      <circle
        style={{
          fill: "#d4aa00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.231639,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="path5"
        r={5}
      />
      <circle
        style={{
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.256508,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="path6"
        r={3.5}
      />
    </g>
  </svg>
);
export default Zegar;


