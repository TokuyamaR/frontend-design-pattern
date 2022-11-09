/////////////////////////////////////
// Proxyパターンとは
// ・対象のobjectを直接操作するのではなく、proxyオブジェクトを通して対象を操作する
/////////////////////////////////////

const person = {
  name: "John",
  age: 30,
  sex: "male",
  country: "Japan",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Change ${prop} from  ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

personProxy.age;
personProxy.name = "Alex";
