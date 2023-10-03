import { SvgLine } from "./SVG/svgLine";

export const Lineas = () => {
	return (
		<div style={{
      transform:'translateX(100px) translateY(-10px)'
    }} >
				<SvgLine ancho={1200} largo={10} stroke={10} seed={1} color="red" x={40} y={145}   duracionCaja={50} />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={2} color="red" x={40} y={195}   duracionCaja={50} /> 
				<SvgLine ancho={1200} largo={10} stroke={10} seed={3} color="red"  x={40} y={244}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={4} color="red"  x={40} y={317}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={5} color="red"  x={40} y={367}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={6} color="red"  x={40} y={445}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={7} color="red"  x={40} y={492}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={8} color="red"  x={40} y={540}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={9} color="red"  x={40} y={589}  duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={10} color="red"  x={40} y={640} duracionCaja={50}                 />
				<SvgLine ancho={1200} largo={10} stroke={10} seed={10} color="red"  x={40} y={700} duracionCaja={50}                 />
		</div>
	);
};

