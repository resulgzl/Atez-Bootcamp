const fakt = (x) => {
  if (typeof x === "number") {
    if (x >= 0) {
      let a = 1;
      for (let i = x; i > 0; i--) {
        a *= i;
      }
      console.log(a);
    } else {
      console.log("Pozitif bir sayı giriniz...");
    }
  } else {
    console.log("Faktöriyel hesabı için 'sayı' giriniz...");
  }
};

fakt(5);
