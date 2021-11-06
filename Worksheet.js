function removeSmallest(numbers) {
    let smallestNum = numbers[0]
    let index = 0
    let copy = numbers.slice(0)

    numbers.forEach((num, i) => {
      if(num < smallestNum) {
        smallestNum = num
        index = i
      }
    })
    
      copy.splice(index, 1);

    return copy
  }