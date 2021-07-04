import Team from '../team';

const team = new Team();

test('add characters', () => {
  team.members.clear();
  team.add('Bowman');
  team.add('Swordsman');
  expect(team.members).toContainEqual({ char: 'Bowman' });
  expect(team.members).toContainEqual({ char: 'Swordsman' });
});

test('Add same char', () => {
  team.members.clear();
  team.add('Bowman');
  team.add('Bowman');
  expect(team.members.size).toBe(1);
});

test('Add many chars with one same', () => {
  team.members.clear();
  expect(team.members.size).toBe(0);
  team.addAll('Magician', 'Demon', 'Bowman', 'Swordsman', 'Bowman');
  team.addAll('Magician', 'Demon');
  expect(team.members).toContainEqual({ char: 'Demon' });
  expect(team.members.size).toBe(5);
});

test('is Array?', () => {
  team.members.clear();
  team.addAll('Magician', 'Demon', 'Bowman', 'Swordsman', 'Bowman');
  expect(Array.isArray(team.toArray())).toBeTruthy();
});
