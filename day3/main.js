// a user needs to send messages
// messages needs to be stored with user they belong to
// need to be able to read individual messages
// classes start with a capital letter
// 95% of the time are singular in Username
// everyclass has to have constructor function
//any object based on a class is called an intance
//an instance represents one object based on the class name
//user.inbox --> that person's messages

class User{
  constructor(name){
    this.name = name
    this.inbox = []

  }
}
 sendMessage(receiver,content){
   let msg = new Message(receiver,content)
   receiver.inbox.push(msg)
   return `Your message to ${receiver.name} has been sent!`
 }
readMessage{
  return this.index[i].content
}
class Message {
  constructor(receiver, content){
    this.receiver = receiver
    this.content = content
  }
}
let user1 = new User('Michael')
let user2 = new User('Ryan')
