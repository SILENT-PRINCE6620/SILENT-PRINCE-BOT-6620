const fs = require("fs");
module.exports.config = {
  name: "isha",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("isha") ||
     react.includes("ISHA") || react.includes("Isha Khan") || react.includes("iSHA") ||
react.includes("Isha") ||
react.includes("ISHA") ||     
react.includes("isha")) {
    var msg = {
        body: `${name} 𝐿𝑂 𝑀𝐸𝑅𝐼 𝐽𝐴𝐴𝑁 😹 𝐈𝐒𝐇𝐀 𝐀𝐀𝐆𝐘𝐈🤣 𝐅𝐀𝐂𝐁𝐎𝐎𝐊 😸𝐊𝐈 𝐒𝐀𝐁 𝐒𝐄 𝐊𝐇𝐔𝐁 𝐒𝐔𝐑𝐀𝐓🤧 𝐋𝐀𝐃𝐊𝐈🤤 𝐈𝐒𝐇𝐀 𝐊𝐇𝐀𝐍 💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/isha.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }