/* eslint-disable linebreak-style */
import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    try {
      this.members.forEach((e) => {
        if (e.char === char) throw new Error(`Персонаж ${char} уже есть в команде`);
      });
      this.members.add(new Character(char));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  addAll(...char) {
    const arrayOfChars = [];
    this.members.forEach((e) => arrayOfChars.push(e.char));
    char.forEach((e) => {
      if (!arrayOfChars.includes(e)) {
        this.members.add(new Character(e));
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
