const bouncingBall = (height, bounce, window) => {
  if (height > window && bounce > 0 && bounce < 1) {
    let count = 1;
    while (height > window) {
      height *= bounce;
      height > window ? (count += 2) : count;
    }
    return count;
  } else {
    return -1;
  }
};

console.log(bouncingBall(3, 0.66, 1.5));
//result should be 3
