import Resources from './resources';

const events = [
  {
    id: 0,
    title: 'Halloween spooktacular',
    description: 'Come fight witches, ghouls, vampires, more ghouls, and maybe scream with a banshee',
    date: '10/31/20 7:00pm',
    image: Resources.placeholderCat,
  },
  {
    id: 1,
    title: 'April fool\'s concert',
    description: 'You\'d think we\'d be singing but mostly we\'re just going to pie people in the face',
    date: '4/1/20 9:00am',
    image: Resources.placeholderCat2,
  },
  {
    id: 2,
    title: 'End of summer Jamboree',
    description: 'Come see Lyn show off her banjo skills! Come see all the banjoing you can get.',
    date: '8/1/21 4:30pm',
    image: Resources.placeholderCat,
  },
];

export const getEventById = (id) => events.find((e) => e.id === parseInt(id, 10));

export default events;
