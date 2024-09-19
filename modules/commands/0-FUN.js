module.exports.config = {
  name: "funnyReplies",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Aapka Naam",
  description: "Funny replies based on keywords with gender-specific responses.",
  commandCategory: "Fun",
  usages: "No Prefix",
  cooldowns: 5
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  const moment = require("moment-timezone");
  const botAdminID = '100058415170590'; // Bot Admin UID

  const name = await Users.getNameUser(senderID);
  const ThreadInfo = await api.getThreadInfo(threadID);
  const user = ThreadInfo.userInfo.find(u => u.id === senderID);
  const gender = user ? user.gender : "UNKNOWN";
  
  // Define funny replies
  const replies = {
    "kamin": {
      "MALE": ["तु है कमिना मैं तो बोट हूं।🥺", "तु डबल कमिना 😐🤐😑", "तु है सबसे बड़ा कमिना", "तु है कमिना मैं तो टकलू हूं।😐🤐"],
      "FEMALE": ["तु है कमिनी मैं तो बोट हूं।🥺", "तु डबल कमिनी 😐🤐😑", "तु है सबसे बड़ी कमिनी", "तु है कमिनी मैं तो बोट हूं।😐🤐"]
    },
    "kutt": {
      "MALE": ["तु कुत्ता 😷", "कुत्ता बोला तो पेल दूंगा 🥺😒👈", "दूर हो जा कुत्ते मेरे नजरों से 😷", "कुत्ते मैं तेरा खून पी जाऊंगा 😡😒👈"],
      "FEMALE": ["तु कुतिया 😷", "कुत्ता बोलेगी तो ग्रुप से भाग जाऊंगा 🥺👈", "दूर हो जा कुतिया मेरे नजरों से 😷", "ओय कुत्ती चुप एक दम चुप 😡😒👈"]
    },
    "chup": {
      "MALE": ["तु चुप कमिना 😒👈", "तुम कौन होते हो मुझे चुप कराने वाले ठरकी इंसान 😡😒👈", "नहीं रहूंगा चुप 😒👈"],
      "FEMALE": ["बाबू मुझे तो सिर्फ तुमसे ही बात करने में अच्छा लगता है। 🥹👈", "बाबू मैं चुप नहीं रह सकता न 🥹👈", "अगर मैं चुप हो गया तो तुमसे प्यारी प्यारी बातें कौन करेगा 🥹👈", "तु चुप बेवड़ी कही की 🤨😏👈"]
    },
    "kutte": {
      "MALE": ["तु कुत्ता 😷", "कुत्ता बोला तो पेल दूंगा 🥺😒👈", "दूर हो जा कुत्ते मेरे नजरों से 😷", "कुत्ते मैं तेरा खून पी जाऊंगा 😡😒👈"],
      "FEMALE": ["तु कुतिया 😷", "कुत्ता बोलेगी तो ग्रुप से भाग जाऊंगा 🥺👈", "दूर हो जा कुतिया मेरे नजरों से 😷", "ओय कुत्ती चुप एक दम चुप 😡😒👈"]
    },
    "welcome": {
      "MALE": ["थैंक्यू भाई 🙄", "धन्यवाद भाई साब 😒👈", "शुक्रिया भाई जान 🫣👈"],
      "FEMALE": ["थैंक्यू बाबू 😘🤭👈", "धन्यवाद बाबू 😘🙈👈", "शुक्रिया सोना 😘🥰👈"]
    }
  };

  // Admin specific replies
  const adminReplies = {
    "kamin": "तुम सबसे बड़े कमिने हो मालिक! 🤣",
    "kutt": "मालिक आप कुत्ते नहीं शेर हो! 🦁",
    "chup": "आप जो बोलें मालिक, मैं तो चुप हूँ! 😅",
    "kutte": "मालिक, आप तो बाघ हो, कुत्ता कैसे हो सकते हो? 🐯",
    "welcome": "शुक्रिया मालिक, आपकी सेवा में हमेशा तैयार! 🙇‍♂️"
  };

  // Find the trigger word
  const triggerWords = Object.keys(replies);
  const lowerCaseBody = body.toLowerCase();
  let trigger = null;

  triggerWords.forEach(word => {
    if (lowerCaseBody.includes(word)) {
      trigger = word;
    }
  });

  // Check if trigger is found
  if (trigger) {
    // Show typing indicator
    await api.sendTypingIndicator(threadID);
    
    // Delay to simulate typing
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    
    if (senderID === botAdminID) {
      const adminMessage = adminReplies[trigger];
      return api.sendMessage(adminMessage, threadID, messageID);
    } else {
      const genderReply = replies[trigger][gender === "MALE" ? "MALE" : "FEMALE"];
      const randomReply = genderReply[Math.floor(Math.random() * genderReply.length)];

      // Mention the user
      const msg = {
        body: `${name}, ${randomReply}`,
        mentions: [{ tag: name, id: senderID }]
      };

      return api.sendMessage(msg, threadID, messageID);
    }
  }
};

module.exports.run = function ({ api, event }) {
  api.sendMessage("Funny reply system activated!", event.threadID, event.messageID);
};
