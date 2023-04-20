const score = (dice) => {
  let score = 0;
  let roll = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  dice.forEach((die) => {
    roll[die] += 1;
  });

  for (let value in roll) {
    if (value == 1) {
      if (roll[value] > 3) {
        score += 1000 + (roll[value] - 3) * 100;
      } else if (roll[value] === 3) {
        score += 1000;
      } else {
        score += roll[value] * 100;
      }
    }
    if (value == 5) {
      if (roll[value] > 3) {
        score += 500 + (roll[value] - 3) * 50;
      } else if (roll[value] === 3) {
        score += 500;
      } else {
        score += roll[value] * 50;
      }
    }
    if (roll[value] >= 3 && +value !== 1 && +value !== 5) {
      score += value * 100;
    }
  }

  return score;
};

console.log(score([1,2,3,4,5]))
console.log(score([1, 1, 1, 2, 5]));
console.log(score([1,1,2,2,2]))
