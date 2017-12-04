{
  function test(x, y = 'World'){
    console.log('default values', x, y);
  }
  test('Hello');
  test('Hello','Bing');
}

{
  let x = 'test';
  function test2(x, y = x){
    console.log('context', x, y);
  }

  test2('kill');
}

{
  function test3(...args){
    for(let v of args){
      console.log('rest', v);
    }
  }

  test3(1,2,3,4);
}
{
  console.log(...[1,2,4]);
}
{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow', arrow(3));
  console.log('arrow2', arrow2());
}
