import Team from './team.js';

const first = { character: 'character_1' };
const second = { character: 'character_2' };
const doubleFirst = first;

test('no throw error with different characters', () => {
  const myTeam = new Team();
  expect(() => {
    myTeam.add(first);
    myTeam.add(second);
  }).not.toThrow();
});

test('throw error with the same characters', () => {
  const myTeam = new Team();
  expect(() => {
    myTeam.add(first);
    myTeam.add(doubleFirst);
  }).toThrow('The character has already been added');
});

test('convert to Array', () => {
  const myTeam = new Team();
  myTeam.add(first);
  myTeam.add(second);
  expect(myTeam.toArray()).toEqual([first, second]);
});

test('add all without throw', () => {
  const myTeam = new Team();
  expect(() => {
    myTeam.addAll([first, doubleFirst, second]);
  }).not.toThrow();
});

test('add all without duplicate', () => {
  const myTeam = new Team();
  const addedMyTeam = myTeam.addAll(first, doubleFirst, second);
  expect(addedMyTeam.toArray()).toEqual([first, second]);
});