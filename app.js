const settings = require("./settings.json")
const c=new (require("discord.js")).Client();
c.on("ready",()=>{console.log("hi i'm alive\nhi alive i'm bot")});
c.on("message",m=>{
	if(/im/gi.test(m)){
		m.channel.send(`hi ${m.content.replace(/'/g,"").split(/im\s(.+)/)[1]}, i'm ${c.user.username}`)
	}
});
c.login(settings.token);