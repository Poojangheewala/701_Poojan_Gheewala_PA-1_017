const readline = require('readline');
const chatreply = require('./chatbot');

const interface = readline.createInterface(process.stdin, process.stdout);
console.log("Hii, I am a chatbot!!");
interface.setPrompt("Enter your quetion => ");
interface.prompt();

interface.on('line', (msg) => {
	console.log("Answer => " + chatreply.chatReply(msg));
	interface.prompt();
})