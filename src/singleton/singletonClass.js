/////////////////////////////////////
// Singletonパターンとは
// ・インスタンス化を一度だけ行い、グローバルアクセスできるようなクラス
// 考え方としては、ReactでのuseContextやReduxでの状態管理だが、mutableかreadonlyかという点で異なる
/////////////////////////////////////

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
