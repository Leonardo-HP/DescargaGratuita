import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {MyTest} from './MyTest';
import {Login1} from './Steps/Login1';
import {MyComposition2} from './Composition2';
import {ServiciosDeFactura2} from './Steps/ServiciosDeFactura2';
import {ConsultarFacturasEmitidas3} from './Steps/ConsultarFacturasEmitidas3';
import {PrimerPaso} from './Steps/PrimerPaso';
import { CompEmoji } from './Steps/IntroEmoji1/CompEmoji';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={2000}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="MyComp2"
				component={MyComposition2}
				durationInFrames={2649}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="Login1"
				component={Login1}
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
				durationInFrames={2000}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{
					default: '0',
				}}
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
				durationInFrames={8000}
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
