const emojiResponses = {
  "🧐": {
    "MALE": [
      "naam भाई, इतनी गहराई से क्यों देख रहे हो? क्या खोज रहे हो? 🧐",
      "naam क्या मस्त ध्यान दे रहे हो, कोई खजाना मिला क्या? 🧐",
      "naam ये क्या मीनू की तरह घूर रहे हो? 🧐",
      "naam इतनी गंभीरता से देख रहे हो, कहीं प्रेम पत्र तो नहीं देख रहे? 🧐",
      "naam हिम्मत कर, पलकें झपकाओ, आँखें बर्न नहीं होंगी 🧐"
    ],
    "FEMALE": [
      "naam बेबी, इतनी देर से क्यों देख रही हो? कोई दिल की बात है? 🧐",
      "naam क्या देख रही हो, कुछ खास? 🧐",
      "naam बेबी, तुम्हारी निगाहों का जादू तो कमाल है 🧐",
      "naam इतना ध्यान से देखना, कहीं और नजर तो नहीं लग रही? 🧐",
      "naam क्या आँखों का टेस्ट ले रही हो? 🧐"
    ]
  },
  "😎": {
    "MALE": [
      "naam ओह, कूलनेस का सैलाब आ गया 😎",
      "naam तू कूल नहीं, आइसक्रीम भी पिघल जाएगी 😎",
      "naam कूलनेस की दुनिया का बादशाह 😎",
      "naam इतनी कूलनेस तो एयर कंडीशनर में भी नहीं 😎",
      "naam इतनी ठंडी हवा आ रही है, बर्फ बन जाओगे 😎"
    ],
    "FEMALE": [
      "naam ओह, कूलनेस की देवी 😎",
      "naam तुम्हारी कूलनेस से सब पिघल जाएगा 😎",
      "naam तुम कूलनेस की मिसाल हो 😎",
      "naam इतनी कूल हो, जैसे तुम आर्कटिक से आई हो 😎",
      "naam तुमसे कूल कोई नहीं 😎"
    ]
  },
  "😂": {
    "MALE": [
      "naam हंसी के फव्वारे छूट रहे हैं 😂",
      "naam हंसते हंसते पेट में दर्द हो गया 😂",
      "naam हंसने की तुम्हारी स्पीड तो वर्ल्ड रिकॉर्ड तोड़ देगी 😂",
      "naam हंसी की ऊँचाई इतनी कि छत छू रही है 😂",
      "naam हंसते हंसते लोटपोट हो गए 😂"
    ],
    "FEMALE": [
      "naam तुम्हारी हंसी सुनकर दिल खुश हो गया 😂",
      "naam हंसते हंसते मैं भी थक गया 😂",
      "naam तुम्हारी हंसी तो सबकी दवा है 😂",
      "naam हंसते हंसते हालत खराब 😂",
      "naam इतनी हंसी, आँखों में आंसू भी आ गए 😂"
    ]
  },
  "🔥": {
    "MALE": [
      "naam इतनी आग लगा दी कि फायर ब्रिगेड भी पास आ रही है 🔥",
      "naam तेरी हॉटनेस से सब जल रहा है 🔥",
      "naam आग लगाना तुझसे सीखा है 🔥",
      "naam इतनी गर्मी, पंखा भी फेल 🔥",
      "naam तू तो असली आग का शो है 🔥"
    ],
    "FEMALE": [
      "naam तुम्हारी हॉटनेस से सब जल रहा है 🔥",
      "naam आग लगाना तुझसे ही सीखा 🔥",
      "naam इतनी हॉटनेस, बर्फ भी पिघल जाए 🔥",
      "naam तुमसे ज्यादा गरम तो कुछ भी नहीं 🔥",
      "naam इतनी आग, सबके दिल धड़क रहे हैं 🔥"
    ]
  },
  "🥺": {
    "MALE": [
      "naam इतनी मासूमियत दिखा रहे हो, दिल पिघल रहा है 🥺",
      "naam इस प्यारी सी शक्ल पर तो दिल आ जाएगा 🥺",
      "naam मासूमियत से दिल जीत रहे हो 🥺",
      "naam इतना क्यूट, दिल नहीं मानता 🥺",
      "naam आँखों में चमक देख, दिल तो पिघल ही जाएगा 🥺"
    ],
    "FEMALE": [
      "naam इतनी प्यारी शक्ल से दिल बेताब हो गया 🥺",
      "naam इतनी मासूमियत, सबका दिल पिघला दिया 🥺",
      "naam तुम तो दिल को छूने वाली हो 🥺",
      "naam इतना प्यारा भाव, दिल को छू गया 🥺",
      "naam मासूमियत की मूरत हो, दिल बेताब हो गया 🥺"
    ]
  }
};

module.exports.config = {
  name: "emojiReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "Reply to specific emojis",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);

  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();

  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      const userInfo = await api.getUserInfo(senderID);
      const userName = userInfo[senderID].name;

      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender === "MALE" ? "MALE" : "FEMALE") : "MALE";

      // Randomly select a response from the appropriate array based on gender
      const emojiResponsesList = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      const randomResponse = emojiResponsesList[Math.floor(Math.random() * emojiResponsesList.length)];

      const msg = {
        body: randomResponse.replace("naam", userName),
      };
      api.sendMessage(msg, threadID, messageID);
      break;  // Exit the loop once a match is found
    }
  }
};

module.exports.run = function() {};
