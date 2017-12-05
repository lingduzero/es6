//third party library : core-decorators; npm install core-decorators

{
  let readonly = function(target, name, descriptor){
    descriptor.writable = false;
    return descriptor;
  };

  class Test{
    @readonly
    time(){
      return '2017-12-03'
    }
  }

  let test = new Test();
  // test.time = function(){
  //   console.log('reset time');
  // }
  console.log(test.time());
}
{
  let typename = function(target, name, descriptor){
    target.myname = 'hello';
  }

  @typename
  class Test{

  }
  console.log('static descriptor', Test.myname);
}

{
  let log = (type) => {
    return function(target, name, descriptor){
      let src_method = descriptor.value;
      //console.log('des',descriptor);
      // console.log('src_method',src_method);
      descriptor.value = (...args) => {

        src_method.apply(target, args);
        // console.log('target',target);
        // console.log('args',args);
        console.log(`log ${type}`);
      }
    }
  }
  class AD{
    @log('show')
    show(){
      console.log('ad is show');
    }
    @log('click')
    click(){
      console.log('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}
