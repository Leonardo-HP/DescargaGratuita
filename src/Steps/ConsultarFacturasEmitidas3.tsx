import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {ScreenShot3} from '../ScreenShots/Screenshot3';
import {ScreenShot4} from '../ScreenShots/Screenshot4';
import {ScreenShot5} from '../ScreenShots/Screenshot5';
import {ScreenShot6} from '../ScreenShots/Screenshot6';
import {ScreenShot7} from '../ScreenShots/Screenshot7';
import {ScreenShot8} from '../ScreenShots/Screenshot8';
import {ScreenShot10} from '../ScreenShots/Screenshot10';
import {ScreenShot9} from '../ScreenShots/Screenshot9';
import {ScreenShot11} from '../ScreenShots/Screenshot11';
import {ScreenShot12} from '../ScreenShots/Screenshot12';
import {Fondo} from '../ScreenShots/Fondo';
import {ScreenShot13} from '../ScreenShots/Screenshot13';
import {Fondo2} from '../ScreenShots/Fondo2';
import {CompCursorClick2} from '../CompCursorClick/CompCursorClick2';
import {CompClick} from '../CompCursorClick/CompClick/CompClick';
import {IconBXFTexto} from '../highlight.tsx/LogosBXFTexto';
import {CirclePop} from '../highlight.tsx/CirclePop';

export const ConsultarFacturasEmitidas3 = () => {
	const frame = useCurrentFrame();

	const rotacion = interpolate(frame, [0, 500], [160, 170], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence durationInFrames={200}>
				<ScreenShot3 />
			</Sequence>

			<Sequence from={200} durationInFrames={400}>
				<ScreenShot4 scroll={90} />
			</Sequence>

			<Sequence from={350} durationInFrames={150}>
				<ScreenShot5 scroll={140} />
			</Sequence>

			<Sequence from={500} durationInFrames={20}>
				<ScreenShot6 scroll={140} />
			</Sequence>

			<Sequence from={520} durationInFrames={200}>
				<ScreenShot7 scroll={140} />
			</Sequence>

			<Sequence from={650} durationInFrames={100}>
				<ScreenShot8 scroll={140} />
			</Sequence>

			<Sequence from={750} durationInFrames={20}>
				<ScreenShot9 scroll={140} />
			</Sequence>

			<Sequence from={770} durationInFrames={200}>
				<ScreenShot10 scroll={140} />
			</Sequence>

			<Sequence from={900} durationInFrames={200}>
				<ScreenShot11 scroll={15} />
			</Sequence>

			<Sequence from={1000} durationInFrames={1200}>
				<ScreenShot12 scroll={52} />
			</Sequence>

			<Sequence from={970}>
				<Fondo />
			</Sequence>

			<Sequence from={1500} durationInFrames={1000}>
				<ScreenShot13 scroll={-615} />
			</Sequence>

			<Sequence from={1570}>
				<Fondo2 />
			</Sequence>

			<Sequence from={200}>
				<div
					style={{
						transform: `translateX(113px) translateY(87px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>
			<Sequence from={100} durationInFrames={150}>
				<CompCursorClick2
					empiezaX={700}
					empiezaY={750}
					positionX={112}
					positionY={445}
				/>
			</Sequence>

			<Sequence from={350}>
				<div
					style={{
						transform: `translateX(600px) translateY(0px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>

			<Sequence from={250} durationInFrames={150}>
				<CompCursorClick2
					empiezaX={112}
					empiezaY={445}
					positionX={600}
					positionY={355}
				/>
			</Sequence>

			<Sequence from={500}>
				<div
					style={{
						transform: `translateX(370px) translateY(100px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>

			<Sequence from={400} durationInFrames={150}>
				<CompCursorClick2
					empiezaX={600}
					empiezaY={355}
					positionX={370}
					positionY={460}
				/>
			</Sequence>

			<Sequence from={650}>
				<div
					style={{
						transform: `translateX(1130px) translateY(-5px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>

			<Sequence from={550} durationInFrames={100}>
				<CompCursorClick2
					empiezaX={370}
					empiezaY={460}
					positionX={1130}
					positionY={355}
				/>
			</Sequence>

			<Sequence from={750}>
				<div
					style={{
						transform: `translateX(890px) translateY(170px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>

			<Sequence from={650} durationInFrames={120}>
				<CompCursorClick2
					empiezaX={1130}
					empiezaY={355}
					positionX={890}
					positionY={530}
				/>
			</Sequence>

			<Sequence from={870}>
				<div
					style={{
						transform: `translateX(1080px) translateY(330px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>

			<Sequence from={770} durationInFrames={580}>
				<CompCursorClick2
					empiezaX={890}
					empiezaY={530}
					positionX={1080}
					positionY={690}
				/>
			</Sequence>

			<Sequence from={1450}>
				<div
					style={{
						transform: `translateX(400px) translateY(240px)`,
					}}
				>
					<CompClick />
				</div>
			</Sequence>

			<Sequence from={1350}>
				<CompCursorClick2
					empiezaX={1080}
					empiezaY={690}
					positionX={400}
					positionY={600}
				/>
			</Sequence>

			<Sequence from={1000}>
				<CirclePop
					positionX={700}
					positionY={0}
					rotacion={10}
					duracionCaja={200}
					size={500}
					texto="Selecciona todas o cada una de las facturas que quieres descargar."
					imagenX={0}
					imagenY={25}
					fuenteSize={28}
				/>
			</Sequence>


			<Sequence from={100}>
				<CirclePop
					positionX={700}
					positionY={0}
					rotacion={-5}
					duracionCaja={800}
					size={400}
					texto="Filtramos las facturas por folio fiscal o por fecha de emision."
					imagenX={0}
					imagenY={-17}
					fuenteSize={28}
				/>
			</Sequence>


			<Sequence from={1573}>
				<CirclePop
					positionX={0}
					positionY={-70}
					rotacion={-5}
					duracionCaja={800}
					size={500}
					texto="Es importante guardar este folio, pues noes ayudara más adelante a encontrar nuestra descarga."
					imagenX={0}
					imagenY={-17}
					fuenteSize={28}
				/>
			</Sequence>




		</div>
	);
};
