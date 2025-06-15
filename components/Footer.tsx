import Image from 'next/image';

export default function Footer() {
	return (
		<footer>
			<section className="grid gap-5 place-items-center py-20 p-10 bg-bridal">
				<p className="font-semibold text-lg uppercase">Diseña tu prenda</p>
				<p className="text-center">
					SI EL PRODUCTO QUE NECESITAS NO SE ENCUENTRA TAL CÓMO TE GUSTARÍA EN
					ESTA SECCIÓN, PUEDES DISEÑAR TU PRENDA! ¡ELIGE EL TIPO, TELA Y COLOR A
					TU GUSTO!
				</p>
				<button className="bg-sandal w-60 py-3 text-sm text-humo">
					COMENZAR
				</button>
			</section>
			<section className="grid place-content-center  md:flex md:flex-wrap md:justify-evenly gap-10 bg-jungle py-20 p-10">
				<Image
					src={'/assets/logo.png'}
					alt={'CUCUFATE'}
					width={180}
					height={180}
					className="aspect-square object-contain"
				/>
				<div>
					<p>Sitio</p>
					<ul>
						<li>Inicio</li>
						<li>Sobre Cucufate</li>
						<li>En stock Arma tu prenda</li>
						<li>Ideas de prendas</li>
						<li>Contacto</li>tacto
					</ul>
				</div>
				<div>
					<p>Soporte</p>
					<ul>
						<li>Políticas de Reembols</li>
						<li>Facturación</li>
					</ul>
				</div>
				<div>
					<p>Contacto</p>
					<ul>
						<li> Loreto, Baja California Sur</li>
						<li>Teléfono: 613 125 15 52</li>
					</ul>
				</div>
			</section>
		</footer>
	);
}
