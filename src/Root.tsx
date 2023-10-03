import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {MyTest} from './MyTest';
import {Login1} from './Steps/Login1';
import {ServiciosDeFactura2} from './Steps/ServiciosDeFactura2';
import {PrimerPaso} from './Steps/PrimerPaso';
import {CompEmoji} from './Steps/IntroEmoji1/CompEmoji';
import {ConsultarFacturasEmitidas3} from './Steps/ConsultarFacturasEmitidas31';
import { SvgFirma } from './SvgFirma';
import { ServiciosDeFactura4 } from './Steps/ServiciosDeFactura4';
import { CortinaIkea } from './CortinaIkea';
import { Final } from './Final';
import { RecuperarCFDI } from './Recuperar';

export const RemotionRoot: React.FC = () => {
	return (
		<>
	
						<Composition
				id="Final"
				component={Final}
				durationInFrames={11000}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="ServiciosDeFactura4"
				component={ServiciosDeFactura4}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
					seed: '1',
				}}
			/>

			<Composition
				id="recuperar"
				component={RecuperarCFDI}
				durationInFrames={2000}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>
			<Composition
				id="CortinaIkea"
				component={CortinaIkea}
				durationInFrames={700}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>


			<Composition
				id="ServiciosDeFactura2"
				component={ServiciosDeFactura2}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="ConsultarFacturasEmitidas3"
				component={ConsultarFacturasEmitidas3}
				durationInFrames={5000}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="SvgFirma"
				component={SvgFirma}
				durationInFrames={500}
				fps={50}
				width={650}
				height={400}
			/>

			<Composition
				id="PrimerPaso"
				component={PrimerPaso}
				durationInFrames={550}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="Test"
				component={MyTest}
				durationInFrames={500}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="emoji"
				component={CompEmoji}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>
		</>
	);
};
