// Функция формирования массива заданной длины из неповторяющихся 
// элементов исходного массива в случайном порядке
function shuffleArray<T>(sourceArr : T[], resultArrLength = 5) : T[] | null {
  // Если в исходном массиве меньше элементов чем должно быть в 
  // результате или он пустой, то возвращаем null
  if ((!sourceArr.length) || (resultArrLength > sourceArr.length)) return null;
  
  const resultIndexes : number[] = [];
  const result : T[] = [];
  const sourceArrLength : number = sourceArr.length;
  let randomIndex : number;
  
  while (result.length < resultArrLength) {
    randomIndex = Math.floor(Math.random() * sourceArrLength);
    if (!resultIndexes.includes(randomIndex)) {
      resultIndexes.push(randomIndex);
      result.push(sourceArr[randomIndex]);
    }
  }
  return result;
}

// Функция формирования массива случайных неповторяющихся индексов 
// из указанного диапазона в рандомном порядке
function getRandomIndexesArray(
  startIndex : number, 
  stopIndex : number, 
  qty : number,
) : number[] | null {
  if (!((stopIndex - startIndex < 0) || (stopIndex - startIndex + 1 < qty) 
    || (stopIndex < 0) || (startIndex < 0) || ((qty <= 0)))) {
    const result : number[] = [];
    let randomIndex : number;
    while (result.length < qty) {
      randomIndex = Math.round(Math.random() * (stopIndex - startIndex)) + startIndex;
      if (!result.includes(randomIndex)) {
        result.push(randomIndex);
      }
    }
    return result;
  }
  return null;
}

export { shuffleArray, getRandomIndexesArray };
