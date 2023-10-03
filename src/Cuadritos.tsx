import { SvgSharp } from "./SVG/svgSharp";

export const Cuadritos = () => {
	return (
		<div>
				<SvgSharp ancho={50} largo={50} stroke={4} seed={2} color="red" x={46} y={100}  duracionCaja={100} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={3} color="red"  x={46} y={150} duracionCaja={100}/>
				<SvgSharp ancho={50} largo={50} stroke={4} seed={4} color="red"  x={46} y={200} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={5} color="red"  x={46} y={275} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={6} color="red"  x={46} y={320} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={7} color="red"  x={46} y={395} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={8} color="red"  x={46} y={445} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={9} color="red"  x={46} y={495} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={10} color="red" x={46} y={542} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={11} color="red" x={46} y={590} duracionCaja={100}                 />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={11} color="red" x={46} y={667} duracionCaja={100}                  />
		</div>
	);
};

export const Cuadrito = () => {
	return (
		<div>
					<SvgSharp ancho={50} largo={50} stroke={4} seed={1} color="red" x={46} y={22} duracionCaja={200} />
		</div>
	);
};
