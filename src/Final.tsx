import {Sequence} from 'remotion';
import {PrimerPasoSSO} from './ScreenShots/ScreenshotPrimerPaso';
import {ComponenteDireccion} from './ComponenteDireccion';
import {
	Blanco,
	Blanco2,
	BlancoFinal,
	RojoBF,
	RojoBF2,
	VerdeGobierno,
} from './Cortinillas/Colors';
import {PrimerPaso} from './Steps/PrimerPaso';
import {Login1} from './Steps/Login1';
import {CompEmoji} from './Steps/IntroEmoji1/CompEmoji';
import {ServiciosDeFactura2} from './Steps/ServiciosDeFactura2';
import {CortinaIkea} from './CortinaIkea';
import {ConsultarFacturasEmitidas3} from './Steps/ConsultarFacturasEmitidas31';
import {ServiciosDeFactura4} from './Steps/ServiciosDeFactura4';
import {RecuperarCFDI} from './Recuperar';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {ScreenshotRecuperar} from './ScreenShots/ScreenShotsConsultarFacturas';

export const Final = () => {
	return (
		<div>
			<Sequence durationInFrames={300}>
				<RojoBF2 />
			</Sequence>

			<Sequence from={150} durationInFrames={300}>
				<BlancoFinal />
			</Sequence>

			<Sequence from={100} durationInFrames={300}>
				<CortinaIkea />
			</Sequence>

			<Sequence from={200} durationInFrames={600}>
				<CompEmoji />
			</Sequence>

			<Sequence from={720}>
				<Sequence durationInFrames={850}>
					<PrimerPasoSSO />
				</Sequence>

				<Sequence from={400} durationInFrames={493}>
					<PrimerPaso />
				</Sequence>

				<Sequence from={893} durationInFrames={760}>
					<Login1 />
				</Sequence>

				<Sequence from={1581} durationInFrames={600}>
					<ServiciosDeFactura2 />
				</Sequence>

				<Sequence from={2000}>
					<ConsultarFacturasEmitidas3 />
				</Sequence>

				<Sequence from={1000}>
					<Sequence from={6600} durationInFrames={520}>
						<ServiciosDeFactura4 />
					</Sequence>
				</Sequence>

				<Sequence from={8120} durationInFrames={2100}>
					<RecuperarCFDI />
				</Sequence>

				<Sequence from={873} durationInFrames={50}>
					<Blanco2 />
				</Sequence>

				<Sequence from={1560} durationInFrames={50}>
					<Blanco2 />
				</Sequence>

				<Sequence from={1980} durationInFrames={50}>
					<Blanco2 />
				</Sequence>


				<Sequence from={7580} durationInFrames={50}>
					<Blanco2 />
				</Sequence>

				<Sequence from={8100} durationInFrames={50}>
					<Blanco2 />
				</Sequence>


				<Sequence from={10000}>
					<CortinillaSalida />
				</Sequence>
				<ComponenteDireccion />
			</Sequence>
		</div>
	);
};
