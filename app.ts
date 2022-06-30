import Blockchain from './Blockchain'

const MyBlockchain = new Blockchain()
 
MyBlockchain.addBlock({ sender: "sinai", receiver: "kazadi", amount: 24034 })
MyBlockchain.addBlock({ sender: "Dahouda", receiver: "Pat", amount: 32032 })
MyBlockchain.addBlock({ sender: "Nkolomoni", receiver: "Mao", amount: 20993 })
 
console.log(MyBlockchain)