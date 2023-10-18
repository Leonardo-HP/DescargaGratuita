import React from 'react';
import {MultiplicarSVG} from './MultiplicarSVG';
import {MovingOutsideSVG} from './MovingOutsideSVG';
import {ShrinkingSVG} from './ShrinkingSVG';
import {SvgPapelito} from './svgPapelito';
import {Trail} from './TrailSVG';
import {FadingSVG} from './FadingSVG';

export const CompSVG1: React.FC = () => {
	return (
			<MultiplicarSVG>
				<Trail amount={3}>
					<MovingOutsideSVG x={0} y={-200}>
						<ShrinkingSVG>
							<SvgPapelito seed={1} giro1={150} giro2={250} />
						</ShrinkingSVG>
					</MovingOutsideSVG>
				</Trail>
			</MultiplicarSVG>
	);
};
export const CompSVG2: React.FC = () => {
	return (
			<MultiplicarSVG>
				<Trail amount={4}>
					<MovingOutsideSVG x={70} y={-250}>
						<ShrinkingSVG>
							<SvgPapelito seed={6} giro1={100} giro2={200} />
						</ShrinkingSVG>
					</MovingOutsideSVG>
				</Trail>
			</MultiplicarSVG>
	);
};
export const CompSVG3: React.FC = () => {
	return (
			<MultiplicarSVG>
				<Trail amount={5}>
					<MovingOutsideSVG x={90} y={-300}>
						<ShrinkingSVG>
							<SvgPapelito seed={12} giro1={50} giro2={150} />
						</ShrinkingSVG>
					</MovingOutsideSVG>
				</Trail>
			</MultiplicarSVG>
	);
};
export const CompSVG4: React.FC = () => {
	return (
			<MultiplicarSVG>
				<Trail amount={5}>
					<MovingOutsideSVG x={2} y={-350}>
						<ShrinkingSVG>
							<SvgPapelito seed={12} giro1={50} giro2={150} />
						</ShrinkingSVG>
					</MovingOutsideSVG>
				</Trail>
			</MultiplicarSVG>
	);
};

export const CompSVG5: React.FC = () => {
	return (
			<MultiplicarSVG>
				<Trail amount={5}>
					<MovingOutsideSVG x={40} y={-400}>
						<ShrinkingSVG>
							<SvgPapelito seed={14} giro1={50} giro2={150} />
						</ShrinkingSVG>
					</MovingOutsideSVG>
				</Trail>
			</MultiplicarSVG>
	);
};

