{
  let list = new Set();
  list.add(5);
  list.add(7);
  console.log('size', list.size);
}
{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);
  console.log('size',list.size);
}
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list', list);

  let arr=[1,2,3,1,2];
  let list2 = new Set(arr);
  console.log('list2', list2);
}
{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('has'));
  console.log('delete', list.delete('has'), list);
  list.clear();
  console.log('clear', list);
}
{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for(let key of list.keys()){
    console.log('key', key);
  }
  for(let value of list.values()){
    console.log('value', value);
  }
  for(let ele of list){
    console.log('ele', ele);
  }
  for(let [key, value] of list.entries()){
    console.log('entries', key, value);
  }
  list.forEach((item) => {console.log(item)});
}

{
  let weakList = new WeakSet();
  let arg ={};
  weakList.add(arg);
  console.log('weaklist', weakList);
}
{
  let map = new Map();
  let arr = ['123'];
  map.set(arr, 456);
  console.log('map',map, map.get(arr));
}
{
  let map = new Map([['a', 123],['b', 456]]);
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}
{
  let weakmap = new WeakMap();
  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}

{
  let map = new Map();
  let array = [];
  //add elements
  map.set('t', 1);
  array.push({t : 1});
  console.info('map-array', map, array);

  //look up
  let map_exist = map.has('t');
  let array_exist = array.find(item => item.t);
  console.info('map-array', map_exist, array_exist);

  //update
  map.set('t', 2);
  array.forEach(item => item.t ? item.t = 2 :'');
  console.info('map-array-modify', map, array);

  //delete
  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.log('map-array-delete', map, array);
}
{
  let set = new Set();
  let array = [];
  let o = {t : 1};
  //add
  set.add(o);
  array.push({t : 1});
  console.log('set-array-add', set, array);

  //look up
  let set_exist = set.has(o);
  let array_exist = array.find(item => item.t);
  console.log('set-array-look', set_exist, array_exist);

  //update
  set.forEach(item => item.t ? item.t = 2 : '');
  array.forEach(item => item.t ? item.t = 2 : '');
  console.log('set-array-modify', set, array);

  //delete
  set.forEach(item => item.t ? set.delete(item):'');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.log('map-array-delete', set, array);
}
{
  //Map, Set, Object
  let item = {t : 1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  //add
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;
  console.log('map-set-obj', map, set, obj);

  //look up
  console.log({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  })

  //update
  map.set('t', 2);
  item.t = 2;
  obj['t'] = 2;
  console.log('map-set-obj-update', map, set, obj);

  //delete
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.log('map-set-obj-delete', map, set, obj);
}
