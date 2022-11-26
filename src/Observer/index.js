/*
オブザーバパターンとは
対象の状態が変化した際にObserverに通知するデザインパターン。
対象の状態変化に応じて処理や通知を実行したい場合に利用する
*/

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
