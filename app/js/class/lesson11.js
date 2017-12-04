{
  let obj = {
    time : '2017-11-29',
    name : 'net',
    _r : 123
  };

  let monitor = new Proxy(obj,{
    get(target, key){
      return target[key].replace('2017','2018')
    },
    set(target, key, value){
      if(key === 'name'){
        return target[key] = value;
      } else {
        return target[key];
      }
    },
    //proxy the key in obj
    has(target, key){
      if(key === 'name'){
        return target[key];
      } else {
        return false;
      }
    },
    //change the delete action
    deleteProperty(target, key){
      if(key.indexOf('_') > -1){
        delete target[key];
        return true;
      } else {
        return target[key];
      }
    },
    //change Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter((item) => item!='time');
    }
  });

  console.log('get', monitor.time);
  monitor.name = 'google';
  console.log('set', monitor);
  console.log('has', 'name' in monitor, 'time' in monitor);
  // delete monitor.time;
  // delete monitor._r;
  // console.log('delete', monitor);
  console.log('ownKeys', Object.keys(monitor));
}

{
  let obj = {
    time : '2017-11-29',
    name : 'net',
    _r : 123
  };
  console.log('Reflect get', Reflect.get(obj, 'time'));
  Reflect.set(obj, 'name', 'google');
  console.log(obj);
  console.log('has', Reflect.has(obj, 'name'));
}

{
  function validator(target, validator){
    return new Proxy(target,{
      _validator:validator,
      set(target, key, value, proxy){
        if(target.hasOwnProperty(key)){
          let va = this._validator[key];
          if(!!va(value)){
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error(`can not define ${key} to ${value}`)
          }
        }else {
          throw Error(`${key} not exist`)
        }
      }
    })
  }

  const personValidators = {
    name(val){
      return typeof val === 'string';
    },
    age(val){
      return typeof val === 'number' && val > 18;
    }
      }
    class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
        return validator(this, personValidators)
      }
    }
    const person = new Person('lilei', 30);
    console.log(person);

    person.name = 'han';
    console.log(person);
}
