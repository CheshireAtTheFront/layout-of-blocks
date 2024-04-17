// 	4. Возвращает рандомный элемент массива. Рандомный - случайный элемент массива
const array = [4, 8, 2, 9, 4, 6, 5, 1, 7, 4];

const returnRandomNum = (array) => {
  let num =  Math.round(Math.random(array) * array.length);
  return array[num];
}

let randomNum = returnRandomNum(array);
// console.log(randomNum);

/* 5. Реализуйте функцию, которая принимает на вход массив, состоящий из массивов-пар и возвращает 
объект, полученный из этих пар. Если при 
конструировании объекта попадаются совпадающие ключи, то берётся значение из последнего массива-пары.*/
const arrayAnimal = [['cat', 5], ['dog', 6], ['cat', 11]];
const arrUser = [['name', 'test'], ['age', 12], ['country', 'RF']];

const returnObj = (arr) => {
  let obj = {};
  // let objAnimal = new Map();
  // objAnimal = arr;
  // console.log(objAnimal);
  for (let i = 0; i < arr.length; i++) {
    // let value = arr[i];
    for (let c = 0; c < arr[i].length; c++) {
      // let array = arr[i][c];
      obj[arr[i][c]] = arr[i];
      // obj[c] = arr[i][c];
      // console.log(arr[i][c]);
    }
  }
  return obj
  // let obg = new Map(arr); 
  // console.log(obg);
  // return new Map(arr);
}

const objAnimal = returnObj(arrayAnimal);
const objUser = returnObj(arrUser);
console.log(objAnimal);
// console.log(objUser);
