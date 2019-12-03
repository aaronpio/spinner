const spinner = (chars, t) => {
  let time = 200;
  let index;
  for (let i = 0; i < chars.length * 2 + 1; i++) {
    setTimeout(() => {
      index = i % chars.length;
      process.stdout.write("\r" + chars[index]);
    }, time);
    time += t;
  }
  setTimeout(() => {
    console.log();
  }, time);
};

spinner(["|   ", "/   ", "-   ", "\\   "], 500);
