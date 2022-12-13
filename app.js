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
    text: 'In order to be iterable, an object must implement the @@iterator method. This means that the object (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key.',
  },
  {
    id: 3,
    name: 'Martha Higareda',
    job: 'UX Designer',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Martha_Higareda_en_2019_3.jpg',
    text: 'You can force a generator to throw an exception by calling its throw() method and passing the exception value it should throw. This exception will be thrown from the current suspended context of the generator, as if the yield that is currently suspended were instead a throw value statement.',
  },
  {
    id: 4,
    name: 'Mick Jagger',
    job: 'Product Manager',
    img: 'https://okdiario.com/img/2021/10/06/mick-jagger-655x368.jpg',
    text: 'Con su acuerdo, nosotros y nuestros socios usamos cookies o tecnologías similares, propias y de terceros, para almacenar, acceder y procesar información (incluyendo datos personales) como su visita en este sitio web con las finalidades descritas más abajo',
  },
  {
    id: 5,
    name: 'Andre Pierre Gignac',
    job: 'Tech leader',
    img: 'https://cdn.tigres.com.mx/wp-content/uploads/2020/10/06124135/MEXSPORT_A22C23_10Andre-PierreGignac0007.jpg',
    text: 'André-Pierre Gignac es un futbolista francés naturalizado mexicano que juega como delantero y su equipo actual son los Tigres de la UANL de la Primera División de México. ​​Gignac hizo su debut con Francia en abril de 2009 contra Lituania. Wikipedia',
  },

];

// selected items
const img = document.querySelector('.image');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const text = document.querySelector('.author__review');

// select buttons
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random');


// set starting item
let currentItem = 0;

// load item
window.addEventListener('DOMContentLoaded', function() {
  showPerson();
});


// show current person
function showPerson (){
  const item = reviews[currentItem];
  img.src = item.img;
  author.innerText = item.name;
  job.textContent = item.job;
  text.innerText = item.text;
}

// change items
function sum1() {
  currentItem++;
  if (currentItem > reviews.length - 1) currentItem = 0;
  showPerson(currentItem)
}
function rest1() {
  currentItem--;
  if (currentItem < 0) currentItem = reviews.length -1;
  showPerson()
}
function random () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson()
}

// addEventListener managment
window.addEventListener ('click', function (event) {
  if(event.target.id === 'previousBtn') rest1();
  if(event.target.id === 'nextBtn') sum1();
  if (event.target.id === 'random') random();
})