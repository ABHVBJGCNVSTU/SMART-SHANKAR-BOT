module.exports.config = {
  name: "goiadmin2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552520556369") {
    var aid = ["61552520556369"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗔𝗗𝗠𝗜𝗡 𝗠𝗨𝗦𝗞𝗜 𝗕𝗨𝗦𝗬 𝗛𝗔𝗜🙁", "𝗕𝗮𝗯𝗬 𝗔𝗗𝗠𝗜𝗡 𝗠𝗨𝗦𝗞𝗜 𝗞𝗢 𝗥𝗲𝘀𝘁 𝗞𝗿𝗻𝘆 𝗗𝗼 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 𝗻𝗶 𝗞𝗿𝗼😐😒", "𝗬𝘄𝗿 𝗘𝗸 𝗕𝗮𝗿𝗿 𝗞𝗲𝗵 𝘁𝘂 𝗱𝗶𝗬𝗮 𝗵𝗮𝗶 𝗠𝘂𝗷𝗛𝘆 𝗯𝘁𝗮𝗼 𝗞𝗬𝗮 𝗸𝗮𝗮𝗺 𝗛𝗮𝗶🤧😣", "ADMIN MUSKI KO ARAM KRNY DO YR", "KYA KAM HA APKO OUSY NAI BULAO", "MUSKI SOYI HUWI HAI FZOL MANTION NAI KRO"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }