import {Component} from 'react';
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
import {MedioCirculoDoble1} from './MedioCirculos';
import {MedioCirculo1} from './MedioCirculos';
import {MedioCirculoDoble2} from './MedioCirculos';
import {CheckMarkRotation} from './CheckMarkRotation';
import {MedioCirculo2} from './MedioCirculos';
import { MedioCirculoDoble3 } from './MedioCirculos';
import { MedioCirculoDoble4 } from './MedioCirculos';
import { MedioCirculo3 } from './MedioCirculos';
import { MedioCirculo4 } from './MedioCirculos';
import { Check } from './Check';
import { CheckMarkScale } from './CheckMarkScale';
import { Marcador } from './Marcador';
import { Marcadores } from './Marcadores';
import { CheckStaging } from './CheckStaging';

export const CheckMark = () => {
	const frame = useCurrentFrame();

	return (
		<div>
      <CheckMarkScale>
			<Sequence durationInFrames={30}>
				<MedioCirculoDoble1 />

				<CheckMarkRotation>
					<MedioCirculo1 />
				</CheckMarkRotation>
			</Sequence>

			<Sequence from={30} durationInFrames={30}>
				<MedioCirculoDoble2 />

				<CheckMarkRotation>
					<MedioCirculo2 />
				</CheckMarkRotation>
			</Sequence>

      <Sequence from={60} durationInFrames={30} >
				<MedioCirculoDoble3 />

				<CheckMarkRotation>
					<MedioCirculo3 />
				</CheckMarkRotation>
			</Sequence>

			<Sequence from={90} durationInFrames={30}>
				<MedioCirculoDoble4 />

				<CheckMarkRotation>
					<MedioCirculo4 />
				</CheckMarkRotation>
			</Sequence>
      </CheckMarkScale>

      <Sequence from={60}>
        <CheckStaging>
				<Check/>
        </CheckStaging>
			</Sequence>


      <Sequence >
      
				<Marcadores/>

			</Sequence>


		</div>
	);
};
