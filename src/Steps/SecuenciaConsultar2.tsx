import {Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {
	ScreenshotConsultarFacturas10,
	ScreenshotConsultarFacturas11,
	ScreenshotConsultarFacturas12,
	ScreenshotConsultarFacturas13,
	ScreenshotConsultarFacturas14,
	ScreenshotConsultarFacturas15,
} from '../ScreenShots/ScreenShotsConsultarFacturas';
import {VerdeGobierno} from '../Cortinillas/Colors';
import {SvgFlecha} from '../SVG/svgFlecha';

export const SecuenciaConsultar2 = () => {
	const frame = useCurrentFrame();

	const y1 = interpolate(frame, [970, 1070], [-730, -1380], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const y2 = interpolate(
		frame,
		[1400, 1500, 2400, 2600],
		[-1725, -600, -600, 35],
		{
			easing: Easing.elastic(0.8),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div>
			<Sequence durationInFrames={500}>
				<ScreenshotConsultarFacturas10 />
			</Sequence>

			<Sequence from={820} durationInFrames={500}>
				<ScreenshotConsultarFacturas11 />
			</Sequence>

			<Sequence from={875} durationInFrames={500}>
				<div
					style={{
						transform: `translateY(${y1}px)`,
					}}
				>
					<ScreenshotConsultarFacturas11 />
				</div>
			</Sequence>

			<Sequence from={1300} durationInFrames={500}>
				<div
					style={{
						transform: `translateY(-1380px)`,
					}}
				>
					<ScreenshotConsultarFacturas12 />
				</div>
			</Sequence>

			<Sequence from={1290} durationInFrames={1300}>
				<VerdeGobierno />

				<div
					style={{
						transform: `translateY(${y2}px)`,
					}}
				>
					<ScreenshotConsultarFacturas13 />

					<div
						style={{
							transform: 'translateY(2200px)translateX(750px) rotate(180deg)',
						}}
					>
						<SvgFlecha
							ancho={300}
							largo={300}
							seed={5}
							stroke={1}
							color="red"
							duracionCaja={300}
						/>
					</div>
					<div />
				</div>
			</Sequence>

			<Sequence from={2580} durationInFrames={400}>
				<div
					style={{
						transform: `translateY(35px)`,
					}}
				>
					<ScreenshotConsultarFacturas14 />
				</div>
			</Sequence>

			<Sequence from={2680} durationInFrames={600}>
				<div
					style={{
						transform: `translateY(35px)`,
					}}
				>
					<ScreenshotConsultarFacturas15 />
				</div>
			</Sequence>
		</div>
	);
};
