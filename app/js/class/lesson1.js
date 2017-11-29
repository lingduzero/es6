//let and const key word block level

function test() {
  // for(var i = 1; i < 3; i++){
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1;
  // let a = 2;
}

function last() {
  const PI = 3.1415926;
  //PI = 1;
  const k = {
    a: 1
  }
  k.b = 3;
  console.log(PI);
  console.log(k);
}

//test();
last();
