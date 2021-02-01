//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
	return [
		{
			title: 'The Athlete',
			mainImg: athlete,
			secondaryImg: athlete2,
			id: '1',
			awards: [
				{
					title: 'Truly A masterpiece',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Fresh look on a brutal sport.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Something about sport.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
		{
			title: 'Good Times',
			mainImg: goodtimes,
			id: '3',
			secondaryImg: goodtimes2,
			awards: [
				{
					title: 'Truly A masterpiece',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Fresh look on a brutal sport.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Something about having a good time.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
		{
			title: 'The Racer',
			mainImg: theracer,
			id: '2',
			secondaryImg: theracer2,
			awards: [
				{
					title: 'Truly A masterpiece',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Fresh look on a brutal sport.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Something about racing.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
	];
};
