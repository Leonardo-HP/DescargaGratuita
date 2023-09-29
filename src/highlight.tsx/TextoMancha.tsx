import {evolvePath} from '@remotion/paths';
import {
	Img,
	Sequence,
	interpolate,
	random,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {SequenceManagerProvider} from 'remotion/dist/cjs/SequenceManager';
import { TextoManchaMask } from './TextoManchaMask';



export const TextoMancha = () => {


	return (
		<div>
<TextoManchaMask duracionCaja={50} altura={200} ancho={200} seed={1} x={0} y={0} fontSize={30}  delay={0}>

	hola
</TextoManchaMask>
		</div>
	);
};
