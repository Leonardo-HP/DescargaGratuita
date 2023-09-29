import {Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {
	ScreenshotConsultarFacturas1,
	ScreenshotConsultarFacturas2,
  ScreenshotConsultarFacturas3,
  ScreenshotConsultarFacturas4,
  ScreenshotConsultarFacturas5,
  ScreenshotConsultarFacturas6,
  ScreenshotConsultarFacturas7,
  ScreenshotConsultarFacturas8,
  ScreenshotConsultarFacturas9,
	ScreenshotConsultarFacturas10,
	ScreenshotConsultarFacturas11,
} from '../ScreenShots/ScreenShotsConsultarFacturas';
import { SvgFlecha } from '../SVG/svgFlecha';

export const SecuenciaConsultar = () => {
	const frame = useCurrentFrame();

	const y1 = interpolate(frame, [350, 400], [0, -240], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const y2 = interpolate(frame, [1450, 1500], [-34, -730], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence durationInFrames={350}>
        <div>
				<ScreenshotConsultarFacturas1 />
        </div>
      </Sequence>



			<Sequence from={350} durationInFrames={450}>
				<div
					style={{
						transform: `translateY(${y1}px)`,
					}}
				>
					<ScreenshotConsultarFacturas2 />
				</div>
			</Sequence>



      <Sequence from={800} durationInFrames={200}>
				<div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas3 />
				</div>
			</Sequence>



      <Sequence from={950} durationInFrames={50}>
      <div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas4 />
				</div>
			</Sequence>



      <Sequence from={1000} durationInFrames={200}>
      <div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas5 />
				</div>
			</Sequence>



      <Sequence from={1100} durationInFrames={200}>
      <div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas6 />
				</div>
			</Sequence>



      <Sequence from={1150} durationInFrames={200}>
      <div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas7 />
				</div>
			</Sequence>



      <Sequence from={1200} durationInFrames={200}>
      <div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas8 />
				</div>
			</Sequence>



      <Sequence from={1240} durationInFrames={150}>
      <div
					style={{
						transform: `translateY(-240px)`,
					}}
				>
					<ScreenshotConsultarFacturas9 />
				</div>
			</Sequence>



      <Sequence from={1350} durationInFrames={2600} >
      <div
					style={{
						transform: `translateY(${y2}px)`,
					}}
				>
					<ScreenshotConsultarFacturas10 />

				<div style={{
					transform: `translateX(500px) translateY(500px)`
				}}>
					<SvgFlecha ancho={300} largo={300} seed={5} stroke={1} color="red" />
				</div>

				</div>
			</Sequence>



	



		</div>
	);
};

