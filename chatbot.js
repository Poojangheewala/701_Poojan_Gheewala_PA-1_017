module.exports.chatReply = (msg) => {
	if (msg.toLowerCase().indexOf("hii") > -1 || msg.toLowerCase().indexOf("hello") > -1) {
		return "hello";
	}

	else if (msg.toLowerCase().indexOf("what is node.js?") > -1 || msg.toLowerCase().indexOf("node.js") > -1) {
		return "Node.js is a runtime environment. It is used for backend.";
	}

	else {
		return "I don't know the answer :(";
	}

}   
