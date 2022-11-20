import Person from './person';
import Team from './team';

const player1 = new Person({
  name: 'Лучник',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
});

const player2 = new Person({
  name: 'Демон',
  type: 'daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 10,
});

const player3 = new Person({
  name: 'Волшебник',
  type: 'magician',
  health: 100,
  level: 1,
  attack: 20,
  defence: 10,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}
