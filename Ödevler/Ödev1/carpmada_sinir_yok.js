


carpma = (...args) => {
  let a = 1;
  args.forEach((i) => 
  {
    a *= i;
  });

  console.log(a);
};

carpma(2,4,8,5)
