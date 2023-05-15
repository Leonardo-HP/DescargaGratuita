import {Sequence} from 'remotion/.';

import {CaidaDeCortinilla} from './CaidaDeCortinilla';
import {CuentaGratis, Ovalo, Rojo, RojoBF, TextoBXF} from './Colors';
import {Gris} from './Colors';
import {Azul} from './Colors';
import {Blanco} from './Colors';
import {CaidaSpring} from './CaidaSpring';
import {CaidaOvalo} from './CaidaOvalo';

export const CortinillaSalida = () => {
	return (
		<div>
			<Sequence>
				<CaidaDeCortinilla>
					<Blanco />
				</CaidaDeCortinilla>
			</Sequence>
			<Sequence from={15}>
				<CaidaDeCortinilla>
					<Rojo />
				</CaidaDeCortinilla>
			</Sequence>
			<Sequence from={30}>
				<CaidaDeCortinilla>
					<Gris />
				</CaidaDeCortinilla>
			</Sequence>
			<Sequence from={40}>
				<CaidaDeCortinilla>
					<Azul />
				</CaidaDeCortinilla>
			</Sequence>
			<Sequence from={50}>
				<CaidaDeCortinilla>
					<Blanco />
				</CaidaDeCortinilla>
			</Sequence>
			<Sequence from={70}>
				<CaidaSpring>
					<RojoBF />
				</CaidaSpring>
			</Sequence>

			<Sequence from={70}>
				<CaidaOvalo>
					<Ovalo />
				</CaidaOvalo>
			</Sequence>

			<Sequence from={75}>
				<CaidaSpring>
					<TextoBXF />
				</CaidaSpring>
			</Sequence>

			<Sequence from={75}>
				<CaidaSpring>
					<CuentaGratis />
				</CaidaSpring>
			</Sequence>
		</div>
	);
};
