import {AbsoluteFill, Sequence} from 'remotion';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {CortinaAlCentro} from './Steps/CortinaRapida';
import {Cursor} from './CompCursorClick/CompCursor/Cursor';
import {Cursor2} from './CompCursorClick/CompCursor/Cursor2';
import {TextAlone} from './highlight.tsx/TextoAlone';
import {Apertura} from './Cortinillas/AperturaCortinilla';
import { ConsultarFacturasEmitidas3 } from './Steps/ConsultarFacturasEmitidas3';
import { Login1 } from './Steps/Login1';
import { ServiciosDeFactura2 } from './Steps/ServiciosDeFactura2';

export const MyComposition2 = () => {
	return (
		<div>
		




<Sequence from={200}>
<Login1/>
</Sequence>
<Sequence from={530}>
<ServiciosDeFactura2/>
</Sequence>
<Sequence from={800}>
<ConsultarFacturasEmitidas3/>
</Sequence>





<TextAlone />

<Sequence durationInFrames={150}>
	<AbsoluteFill>
		<CortinillaEntrada />
	</AbsoluteFill>
</Sequence>



			<Sequence from={500}>
				<CortinaAlCentro />
			</Sequence>

			<Sequence from={800}>
				<CortinaAlCentro />
			</Sequence>


			<Sequence from={2500} durationInFrames={150}>
				<AbsoluteFill>
					<CortinillaSalida />
				</AbsoluteFill>
			</Sequence>
		</div>
	);
};
