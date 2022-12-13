// local reviews data

const reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'Developer',
    img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias consequuntur obcaecati inventore doloribus vitae deserunt aut fugiat quibusdam quaerat ex saepe hic, at itaque officia a officiis ab nam!',
  },
  {
    id: 2,
    name: 'Cristhian Salas',
    job: 'Developer jr',
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias consequuntur obcaecati inventore doloribus vitae deserunt aut fugiat quibusdam quaerat ex saepe hic, at itaque officia a officiis ab nam!',
  },
  {
    id: 3,
    name: 'Martha Higareda',
    job: 'UX Designer',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Martha_Higareda_en_2019_3.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias consequuntur obcaecati inventore doloribus vitae deserunt aut fugiat quibusdam quaerat ex saepe hic, at itaque officia a officiis ab nam!',
  },

];

// selected items
const img = document.querySelector('.image');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const text = document.querySelector('.author__review');

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

// set starting item
let currentItem = 0;

