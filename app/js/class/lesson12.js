{
  //defination and the instance
  class Parent{
    constructor(name = 'google'){
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('instance', v_parent);
}

{
  //inheritance
  class Parent{
    constructor(name = 'google'){
      this.name = name;
    }
  }

  class Child extends Parent{

  }

  console.log('inheritance', new Child());
}
{
  class Parent{
    constructor(name = 'parent'){
      this.name = name;
    }
  }

  class Child extends Parent{
    constructor(name = 'child'){
      super(name);
      this.type = 'child';
    }
  }
  console.log('inhertiance2', new Child());
}
{
  //getter setter
  class Parent{
    constructor(name = 'parent'){
      this.name = name;
    }

    get fullName(){
      return 'mk' + this.name;
    }

    set fullName(name){
      this.name = name;
    }
  }
  let v = new Parent();
  console.log('getter', v.fullName);
  v.fullName = 'hi';
  console.log('setter', v.fullName);

}

{
  //static method
  class Parent{
    constructor(name = 'parent'){
      this.name = name;
    }

    static tell(){
      console.log('tell');
    }
  }
  let v = new Parent();
  Parent.tell();
  //v.tell();
}

{
  //static attribute
  class Parent{
    constructor(name = 'parent'){
      this.name = name;
    }

    static tell(){
      console.log('tell');
    }


  }

  Parent.type = 'parent';
  console.log('static attribute', Parent.type);

}
