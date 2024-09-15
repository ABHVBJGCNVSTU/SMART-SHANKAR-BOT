const responses = {
  "kamin": {
    "MALE": ["naam तु है कमिना मैं तो बोट हूं।🥺", "naam तु डबल कमिना 😐🤐😑", "naam तु है सबसे बड़ा कमिना", "naam तु है कमिना मैं तो टकलू हूं।😐🤐"],
    "FEMALE": ["naam तु है कमिनी मैं तो बोट हूं।🥺", "naam तु डबल कमिनी 😐🤐😑", "naam तु है सबसे बड़ी कमिनी", "naam तु है कमिनी मैं तो बोट हूं।😐🤐"]
  },
  "kutt": {
    "MALE": ["naam तु कुत्ता 😷", "naam कुत्ता बोला तो पेल दूंगा 🥺😒👈", "naam दूर हो जा कुत्ते मेरे नजरों से 😷", "naam कुत्ते मैं तेरा खून पी जाऊंगा 😡😒👈"],
    "FEMALE": ["naam तु कुतिया 😷", "naam कुत्ता बोलेगी तो ग्रुप से भाग जाऊंगा 🥺👈", "naam दूर हो जा कुतिया मेरे नजरों से 😷", "naam ओय कुत्ती चुप एक दम चुप 😡😒👈"]
  },
  "chup": {
    "MALE": ["naam तु चुप कमिना 😒👈", "naam तुम कौन होते हो मुझे चुप कराने वाले ठरकी इंसान 😡😒👈", "naam नहीं रहूंगा चुप 😒👈"],
    "FEMALE": ["naam बाबू मुझे तो सिर्फ तुमसे ही बात करने में अच्छा लगता है। 🥹👈", "naam बाबू मैं चुप नहीं रह सकता न 🥹👈", "naam अगर मैं चुप हो गया तो तुमसे प्यारी प्यारी बातें कौन करेगा 🥹👈", "naam तु चुप बेवड़ी कही की 🤨😏👈"]
  },
  "kutte": {
    "MALE": ["naam तु कुत्ता 😷", "naam कुत्ता बोला तो पेल दूंगा 🥺😒👈", "naam दूर हो जा कुत्ते मेरे नजरों से 😷", "naam कुत्ते मैं तेरा खून पी जाऊंगा 😡😒👈"],
    "FEMALE": ["naam तु कुतिया 😷", "naam कुत्ता बोलेगी तो ग्रुप से भाग जाऊंगा 🥺👈", "naam दूर हो जा कुतिया मेरे नजरों से 😷", "naam ओय कुत्ती चुप एक दम चुप 😡😒👈"]
  },
  "welcome": {
    "MALE": ["naam थैंक्यू भाई 🙄", "naam धन्यवाद भाई साब 😒👈", "naam शुक्रिया भाई जान 🫣👈"],
    "FEMALE": ["naam थैंक्यू बाबू 😘🤭👈", "naam धन्यवाद बाबू 😘🙈👈", "naam शुक्रिया सोना 😘🥰👈"]
  },
  "wel": {
    "MALE": ["naam थैंक्यू भाई 🙄", "naam धन्यवाद भाई साब 😒👈", "naam शुक्रिया भाई जान 🫣👈"],
    "FEMALE": ["naam थैंक्यू बाबू 😘🤭👈", "naam धन्यवाद बाबू 😘🙈👈", "naam शुक्रिया सोना 😘🥰👈"]
  },
  "tharki": {
    "MALE": ["naam तु ठरकी 😡👈", "naam तु ठरकी तेरा बाप ठरकी 😏👈", "naam तु है ठरकी मैं तो बोट हूं। 😏👈", "naam अबे तु है ठरकी गांडू 😏👈"],
    "FEMALE": ["naam तु ठरकी 🙄👈", "naam चुप हो जा बेवड़ी खेबड़ी 😏🙄👈", "naam मैं तुम्हारा बाबू हूं न बेबी और बाबू को ठरकी नहीं बोलते 🥹👈"]
  },
  "hate you": {
    "MALE": ["naam आई हेट यू थू 🤧😪😒👈🏻", "naam चल चल हवा आने दे 😒👈🏻"],
    "FEMALE": ["आई लव यू naam बाबू 🥹👈🏻", "naam आई प्यार यू सोना मान जाओ न बाबू प्लीज 🥹👈🏻"]
  }
};

const botAdminID = '100058415170590'; // Replace with the actual admin ID

const adminResponses = [
  "माफ़ कर दीजिए मालिक अगर मुझसे कोई गलती हो गई हो तो प्लीज़ 🥹🙏.",
  "सॉरी सर 🥹🙏.",
  "सॉरी बॉस 🥹🙏👈.",
  "मेरी गलती के लिए माफी चाहता हूं हुज़ूर 🥹🥹👈🙏"
];

// Helper function to add delay between responses
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports.config = {
  name: "autoReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "Auto-reply to specific keywords",
  commandCategory: "No command marks needed",
  usePrefix: false,
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  
  // Return if body is missing or invalid
  if (!body || typeof body !== 'string') return;

  const emojis = Object.keys(responses);
  const lowercaseBody = body.toLowerCase();

  try {
    for (const emoji of emojis) {
      if (lowercaseBody.includes(emoji)) {
        const userInfo = await api.getUserInfo(senderID);
        const userName = userInfo[senderID].name;

        // If the sender is the bot admin
        if (senderID === botAdminID) {
          const randomAdminResponse = adminResponses[Math.floor(Math.random() * adminResponses.length)];
          api.sendMessage(randomAdminResponse, threadID, messageID);
          await delay(1000); // Optional delay between replies
          continue;  // Continue to check for more matches if needed
        }

        // Fetch user's gender
        const ThreadInfo = await api.getThreadInfo(threadID);
        const user = ThreadInfo.userInfo.find(user => user.id === senderID);
        const gender = user ? (user.gender === 2 ? "MALE" : "FEMALE") : "MALE";

        // Get a random response based on gender
        const genderResponses = responses[emoji][gender] || responses[emoji]["MALE"];
        const randomResponse = genderResponses[Math.floor(Math.random() * genderResponses.length)];
        
        // Send the reply
        const msg = {
          body: randomResponse.replace("naam", userName)
        };
        api.sendMessage(msg, threadID, messageID);
        
        await delay(1000); // Optional delay between replies
      }
    }
  } catch (error) {
    console.error("Error in processing event:", error);
  }
};

module.exports.run = function() {};
