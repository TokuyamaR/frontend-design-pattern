// Singletonパターンとは
// ・インスタンス化を一度だけ行い、グローバルアクセスできるようなクラス
// 考え方としては、useContextやReduxでの状態管理

// Singletonパターンが適用されていない場合

let notSingletonCounter = 0;

class NotSingletonCounter {
  getInstance() {
    return this;
  }

  getCounter() {
    return notSingletonCounter;
  }

  increment() {
    return ++notSingletonCounter;
  }

  decrement() {
    return --notSingletonCounter;
  }
}

const counter1 = new NotSingletonCounter();
const counter2 = new NotSingletonCounter();

console.log("NotSingletonCounter result", counter1 === counter2); // false

// Singletonパターンが適用された場合
let instance;
let singletonCounter = 0;
class SingletonCounter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance !");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCounter() {
    return singletonCounter;
  }

  increment() {
    return ++singletonCounter;
  }

  decrement() {
    return --singletonCounter;
  }
}

// エラーが発生することを確認
// const counter3 = new SingletonCounter();
// const counter4 = new SingletonCounter();

// 下記の実装はエラーが発生しない
const counter5 = Object.freeze(new SingletonCounter());
