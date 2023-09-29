import {TextoManchaMask} from './highlight.tsx/TextoManchaMask';

export const Mancha1: React.FC<{
	duracionCaja: number;
	altura: number;
	ancho: number;
	seed: number;
	children: React.ReactNode;
	delay: number;
}> = ({ children}) => {


	return (
	<TextoManchaMask duracionCaja={300} altura={500} ancho={500} seed={3} delay={20}>
		{children}
	</TextoManchaMask>
	);
};
