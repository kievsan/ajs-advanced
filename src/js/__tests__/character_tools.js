// const { default: orderByProps, getSpecialActions } = require('../character_tools.js');
import orderByProps, { getSpecialActions } from '../character_tools.js';

const heroesDataList = [
  [
    'with firsts [name, level])',
    {
      name: 'мечник', level: 2, health: 10, attack: 80, defence: 40,
    },
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    'without firsts)',
    {
      name: 'мечник', level: 2, health: 10, attack: 80, defence: 40,
    },
    [],
    [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
];

test.each(heroesDataList)('Sorted in order %s', (_, hero, sortingOrder, expected) => {
  expect(orderByProps(hero, sortingOrder)).toEqual(expected);
});

const special1 = [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    // <- обратите внимание, описание "засекречено"
  },
];
const character1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: special1,
};

const expected = [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  },
];

test('check character', () => {
  expect(getSpecialActions(character1)).toEqual(expected);
});
