import { avatars } from '@/config';
import { Avatar } from '../avatar';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

const speakers = [
	{
		name: 'Andressa',
		imageUri: avatars.andressa,
		classNames: 'left-[-1rem] md:left-0 z-[60]',
	},
	{
		name: 'Robson Júnior',
		imageUri: avatars.robson,
		classNames: 'left-[2rem] md:left-[3rem] z-[59]',
	},
	{
		name: 'Luiz Duarte',
		imageUri: avatars.luiz,
		classNames: 'left-[4.4rem] md:left-[6rem] z-[58]',
	},
	{
		name: 'Ed Pereira',
		imageUri: avatars.ed,
		classNames: 'left-[7rem] md:left-[9rem] z-[57]',
	},
	{
		name: 'Eduardo Garcia',
		imageUri: avatars.eduardo,
		classNames: 'left-[9.3rem] md:left-[12rem] z-[56]',
	},
	{
		name: 'Felipe Bastos',
		imageUri: avatars.felipe,
		classNames: 'left-[12rem] md:left-[15rem] z-[55]',
	},
	{
		name: 'Raryson Pereira',
		imageUri: avatars.raryson,
		classNames: 'left-[14.5rem] md:left-[18rem] z-[54]',
	},
	{
		name: 'Alessandro Cauduro',
		imageUri: avatars.alessandro,
		classNames: 'left-[17rem] md:left-[21rem] z-[53]',
	},
	{
		name: 'Rayana Garay',
		imageUri: avatars.rayana,
		classNames: 'left-[19rem] md:left-[24rem] z-[52]',
	},
];

function About() {
	// generate random avatars from the list
	return (
		<section
			className="flex justify-center bg-white py-11 px-6 md:px-0"
			id="sobre"
		>
			<div className="flex flex-col w-full max-w-6xl space-y-10 md:space-y-20">
				<Heading
					level="h2"
					className="italic font-medium text-left md:text-center"
				>
					Talks de{' '}
					<strong className="text-orange-pink font-extrabold">
						Dev para Devs
					</strong>
				</Heading>
				<div className="flex flex-col md:flex-row gap-14 items-center">
					<div className="flex flex-col gap-4 text-primary">
						<Paragraph>
							O 1º evento da{' '}
							<strong className="bg-orange-pink/20 px-1 inline-flex">
								Região Metropolitana
							</strong>{' '}
							de Porto Alegre/RS, promovido por profissionais locais para
							incentivar a troca de conhecimentos e networking entre
							profissionais, estudantes e pessoas interessadas na área da
							programação.
						</Paragraph>
						<Paragraph>
							Um evento <strong>totalmente gratuito</strong>, mas com vagas
							limitadas. Garanta já a sua!
						</Paragraph>
					</div>
					<div className="flex relative w-full md:max-w-64 max-w-full h-18">
						{speakers.map((speaker, index) => (
							<div
								className={`absolute w-18 bg-white overflow-hidden rounded-full ${speaker.classNames}`}
								key={speaker.name}
							>
								<Avatar
									imageUri={speaker.imageUri}
									name={speaker.name}
									size="default"
									className={index > 0 ? 'opacity-50' : ''}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export { About };
