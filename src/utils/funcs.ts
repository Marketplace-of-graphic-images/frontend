  // Функция формирования массива заданной длины из неповторяющихся 
  // элементов исходного массива в случайном порядке
  function shuffleArray<T>(sourceArr : T[], resultArrLength : number = 5) : T[] | null {

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

  export {shuffleArray};
