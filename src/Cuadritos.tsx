import { SvgSharp } from "./SVG/svgSharp";

export const Cuadritos = () => {
	return (
		<div>
				<SvgSharp ancho={50} largo={50} stroke={4} seed={2} color="red"  x={46} y={100} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={3} color="red"  x={46} y={150} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={4} color="red"  x={46} y={200} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={5} color="red"  x={46} y={275} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={6} color="red"  x={46} y={320} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={7} color="red"  x={46} y={395} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={8} color="red"  x={46} y={445} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={9} color="red"  x={46} y={495} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={10} color="red" x={46} y={542} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={11} color="red" x={46} y={590} />
				<SvgSharp ancho={50} largo={50} stroke={4} seed={11} color="red" x={46} y={667} />
		</div>
	);
};

export const Cuadrito = () => {
	return (
		<div>
					<SvgSharp ancho={50} largo={50} stroke={4} seed={1} color="red" x={46} y={22} />
		</div>
	);
};
