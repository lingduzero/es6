{
  //clean grammer
  let o = 1;
  let k = 2;
  let es5 = {
    o:o,
    k:k
  };

  let es6 = {
    o,
    k
  };
  console.log(es5, es6);

  let es5_method = {
    hello : function(){
      console.log('hello');
    }
  }

  let es6_method = {
    hello(){
      console.log('hello');
    }
  };

  es5_method.hello();
  es6_method.hello();
}

{
  //attribute grammer
  let a = 'b';
  let es5_obj = {
    a : 'c'
  };
  let es6_obj = {
    [a] : 'c'
  }

  console.log(es5_obj, es6_obj);
}

{
  //new API
  console.log('char', Object.is('abs', 'abs'), 'abc' === 'abc');
  console.log('array',Object.is([],[]), []===[]);
  console.log('copy', Object.assign({a:'a'},{b:'b'}));

  let test = {k : 123, o : 456};
  for(let [key, value] of Object.entries(test)){
    console.log([key, value]);
  }
}

{
  //extension operator
  //let {a, b, ...c} = {a:'test', b:'kill', c:'ddd', d:'ccc'};

}
