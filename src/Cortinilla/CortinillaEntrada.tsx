import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
	Video,
	interpolate,
	OffthreadVideo,
	Img,
	useCurrentFrame,
	Easing,
} from 'remotion/.';

import {CuentaGratis, Rojo, RojoBF, RojoBF2, TextoBXF, } from './Colors';


import { Apertura } from './AperturaCortinilla';


export const CortinillaEntrada = () => {
	return (
		<div>
				
			<Apertura>
			
				<RojoBF2/>
			
			</Apertura>
	
		</div>
	);
};
