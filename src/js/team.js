import Person from './person';

export default class Team {
  constructor() {
    this.players = [];
    this.numberPlayer = 0;
  }

  add(player) {
    if (player instanceof Person) {
      this.players.push(player);
      this.numberPlayer += 1;
    } else {
      throw new Error('Ошибка');
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const { players, numberPlayer } = this;
    return {
      next() {
        if (current < numberPlayer) {
          return {
            value: players[current++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
