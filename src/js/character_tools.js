/* eslint-disable no-plusplus */
export default function getSortedArrOfObjProperties(obj, sortingArr = []) {
  let propsArr = [];
  let i = 0;
  for (propsArr[i++] in obj);

  const sortedArr = [];

  for (const prop of sortingArr) {
    if (propsArr.includes(prop)) {
      sortedArr.push(prop);
    }
  }

  for (const prop of propsArr.sort()) {
    if (!sortedArr.includes(prop)) {
      sortedArr.push(prop);
    }
  }

  propsArr = [];
  for (const prop of sortedArr) {
    propsArr.push({ key: prop, value: obj[prop] });
  }

  return propsArr;
}

export function getSpecialActions(character) {
  const actions = [];
  for (const action of character.special) {
    const {
      description = 'Описание недоступно',
    } = action;
    action.description = description;
    actions.push(action);
  }

  return actions;
}
