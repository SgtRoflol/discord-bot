const Discord = require("discord.js"); // require discord.js
const bot = new Discord.Client(); // create the discord client
const client = bot
; // store the token in a variable
const prefix = "./"
bot.on("ready", function() {
  console.log("ready");
});
bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + " hi o/ this server is cool plz no leave");
  member.addRole(member.guild.roles.find("name", "mortal"));
});
bot.on("message",function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
    message.channel.send("pong!");
    break;

    case"space":
var time = Date.now();
message.delete();
      message.channel.send("spaaace",{file: "https://i.pinimg.com/originals/a9/ef/38/a9ef38cdc7125701e1c939e10489c7b3.gif"})
             .then(msg=>msg.edit(`${msg.contents} took ${Date.now() - time}`));
      break;

      case "help":
      message.author.send("commands:");
      message.author.send("`time` displays time it took to send the message");
      message.author.send("`test` testmessage");
      message.author.send("`info` an info embed");
      message.author.send("`goodnight` goodnight");
      message.delete();
      break;

      case "hentai":
      message.delete();
      message.channel.send("https://www.youtube.com/watch?v=DBz2_FTeTKc&feature=youtu.be");
      
      break;


    case"test":
    message.delete();
    message.reply("henlo o/");
    break;

    case"info":
    message.channel.send({embed: {
      color: 0xffffff,
      author : {
        name: "roflbot",
    icon_url: client.user.avatarURL
  },
  title:"Info",
  description:"Roflbot is a bot made by Supertimbox",
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text:"©Supertimbox"
  }
    }})
    break;

    case"time":
    message.delete();
    var time = Date.now();
    message.channel.send("time")
    .then(msg=>msg.edit(msg + ' took ' + time));
    break;

    case"goodnight":
    message.delete();
    message.channel.send("gnight o/");
    break;

    case "lol":
    message.delete();
    message.channel.send("lol");
    break;

    case"weeb":
    message.author.send("https://www.youtube.com/watch?v=DBz2_FTeTKc&feature=youtu.be");
    message.author.send("fucking weeb -.-");
    message.delete();
    break;


    default:
    message.channel.send("invalid command");
  }
});

bot.login(process.env.BOT_TOKEN);
