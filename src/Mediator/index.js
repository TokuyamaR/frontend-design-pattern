/*
メディエータパターンとは
メディエータ(仲介者)オブジェクトを介してコンポーネント間のやりとりを制御する。
パイロットと航空管制官の関係を考えるとわかりやすい。
*/

class Chatroom {
  logMessage(message, user) {
    const time = new Date().toLocaleString();
    const sender = user.name;

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(message, this);
  }
}

const chatroom = new Chatroom();

const user1 = new User("Raido", chatroom);
const user2 = new User("Miho", chatroom);

user1.send("Hi, How are you?");
user2.send("Hi! Very nice!!");
