/*
コマンドパターンとは
タスクを実行するこオブジェクトと呼び出し側のオブジェクトを分離する
*/

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function placeOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
}

function cancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    console.log(`You have canceled your order ${id}`);
  });
}

function trackOrderCommand(id) {
  return new Command((orders) => {
    console.log(`Your order ${id} will arrive in 20 minutes.`);
  });
}

const manager = new OrderManager();

manager.execute(placeOrderCommand("Susuhi", 1447));
manager.execute(trackOrderCommand(1447));
manager.execute(cancelOrderCommand(1447));
