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
	"tharki": {
		"MALE": ["naam तु ठरकी 😡👈", "naam तु ठरकी तेरा बाप ठरकी 😏👈", "naam तु है ठरकी मैं तो बोट हूं। 😏👈", "naam अबे तु है ठरकी गांडू 😏👈"],
		"FEMALE": ["naam तु ठरकी 🙄👈", "naam चुप हो जा बेवड़ी खेबड़ी 😏🙄👈", "naam मैं तुम्हारा बाबू हूं न बेबी और बाबू को ठरकी नहीं बोलते 🥹👈"]
	},
	"hate you": {
		"MALE": ["naam आई हेट यू थू 🤧😪😒👈🏻", "naam चल चल हवा आने दे 😒👈🏻"],
		"FEMALE": ["आई लव यू naam बाबू 🥹👈🏻", "naam आई प्यार यू सोना मान जाओ न बाबू प्लीज 🥹👈🏻"]
	},
	 "pagal": {
    "MALE": ["naam तु सच्ची में पागल है, मैं तेरे लिए डॉक्टर ढूंढू? 🤨", "naam तु इतना बड़ा पागल है कि पागलखाने से भी निकाल दिया 😂", "naam तु है पागल मैं तो स्मार्ट हूं 😎", "naam पागलपन की भी हद होती है, तेरी तो कोई हद ही नहीं 🤯"],
    "FEMALE": ["naam पागल तो है ही, लेकिन क्यूट भी है 😘", "naam तु इतनी प्यारी पागल है, दिल कर रहा है पागलपंती में साथ दे दूं 🥰", "naam तु पागल है पर दिल की बहुत अच्छी है 😌", "naam पागलपंती की भी हद है, तु तो हद से आगे निकल गई 😂"]
  },
  "chutiya": {
    "MALE": ["naam तु पक्का चुतिया है भाई 🤦‍♂️", "naam तु इतना बड़ा चुतिया है, कि चुतियापे का अवार्ड तुझे ही मिलेगा 🏆", "naam चुतिया की भी एक हद होती है, लेकिन तु तो लाजवाब है 🤯", "naam तु है चुतिया और मैं तो तेरे बाप का बाप हूं 😏"],
    "FEMALE": ["naam तु चुतिया नहीं, चुतिया की मलिका है 😏", "naam तुझे चुतिया बोलूं या दुनिया की सबसे बड़ी बेवकूफ 🤔", "naam तु है चुतिया मैं तो बोट हूं 😑", "naam ओये चुप कर चुतिया बनना तेरे बस की बात नहीं 🤨"]
  },
  "gadha": {
    "MALE": ["naam तु पूरा गधा है, गधे भी तुझसे शर्माते हैं 😏", "naam गधा तु है, तु रहोगा गधा 🤦‍♂️", "naam तु है गधा, मैं तो स्मार्ट हूं 😎", "naam गधा होना भी एक आर्ट है, पर तु तो मास्टरपीस है 🎨"],
    "FEMALE": ["naam गधी तु ही रहोगी 😏", "naam तु गधी है, मगर दिल से प्यारी है 🥺", "naam तु इतनी गधी है कि गधों का भी फेवरेट बन गई 😏", "naam गधी होने की भी हद है, लेकिन तु तो हद से आगे है 😂"]
  },
  "bewkuf": {
    "MALE": ["naam तु है बेवकूफ, और मैं हूं तेरे बाप का बाप 😏", "naam बेवकूफ तो हर कोई होता है, लेकिन तु अलग ही लेवल का है 🤦‍♂️", "naam बेवकूफी की भी एक हद होती है, तु तो हद से आगे है 🤯", "naam तु है बेवकूफ, मैं तो बोट हूं 😑"],
    "FEMALE": ["naam तु बेवकूफ नहीं, बेवकूफों की रानी है 😏", "naam बेवकूफी में तु मुझसे भी आगे निकल गई 😂", "naam तु इतनी प्यारी बेवकूफ है कि दिल कर रहा है दिमाग भेज दूं 🧠", "naam बेवकूफी और तु, एक परफेक्ट जोड़ी 👫"]
	},
	 "gandu": {
    "MALE": ["naam तु सच्चा गांडू है भाई 😏", "naam तु है गांडू, तेरी पूरी गंड फैमिली 😂", "naam गांडू बोलूं या तेरे जैसा unique character 🤔", "naam तेरे लिए तो dictionary में नया शब्द बनाना पड़ेगा, गांडू भी छोटा है 😆"],
    "FEMALE": ["naam तु गांडू तो नहीं, पर तेरे जैसे rare species देखी नहीं कभी 😏", "naam गांडू बोलूं या सबसे बड़ी मिस्टेक 😂", "naam तु गंडियों की रानी 😏", "naam इतना गांडूपन कहां से लाती हो? 🧐"]
  },
  "ullu": {
    "MALE": ["naam तु उल्लू नहीं, उल्लू का पट्ठा है 😂", "naam उल्लू मत बन, दिमाग इस्तेमाल कर 😒", "naam तु है उल्लू, बाकी सब फुल्लू 😏", "naam तु उल्लू है या पूरे जंगल का राजा? 🦉"],
    "FEMALE": ["naam तु उल्लू मत बन, थोड़ा दिमाग इस्तेमाल कर 🧐", "naam तु इतनी प्यारी उल्लू है, कि दिल कर रहा है तुम्हें पिंजरे में रख लूं 😏", "naam उल्लू तो सब होते हैं, पर तु स्पेशल उल्लू है 🦉", "naam तु है उल्लू, बाकि सब तेरे शिकार 😂"]
  },
  "bhosdi": {
    "MALE": ["naam तु पूरा भोसड़ीके है भाई 🤬", "naam तु इतना बड़ा भोसड़ीके है कि dictionary में तेरा नाम होना चाहिए 🤯", "naam भोसड़ीके बोलूं या genius idiot 🤔", "naam तु भोसड़ीके है, बस अब इससे ज़्यादा कुछ नहीं बोल सकता 😏"],
    "FEMALE": ["naam तु भोसड़ीकी है, और इसमें कोई शक नहीं 🤬", "naam तुझे देख कर लगता है भोसड़ीके भी शर्मा जाए 😏", "naam इतनी भोसड़ीकी मत बन, थोड़ा सुधर जा 😤", "naam तु है भोसड़ीकी, और मैं तेरा बोट हूं 😑"]
  },
  "nalayak": {
    "MALE": ["naam तु नालायक है, और तेरे जैसे नालायक बहुत कम मिलते हैं 😂", "naam नालायकी में तेरा कोई मुकाबला नहीं 😏", "naam नालायक तु है, और मैं तेरा उस्ताद 😎", "naam इतनी नालायकी कहां से लाता है तु? 🤔"],
    "FEMALE": ["naam तु नालायकी की भी हद पार कर गई 😏", "naam नालायकी तेरे खून में है क्या? 😂", "naam तु है नालायक और मैं तेरे जैसी और नालायक कभी नहीं देखा 😌", "naam नालायक तु ही रहोगी, दुनिया से लड़ने की जरूरत नहीं 😂"]
  },
  "jhantu": {
    "MALE": ["naam तु सच्चा झांटू है भाई 🤦‍♂️", "naam तु झांटू नहीं, झांटू का बाप है 😂", "naam झांटू होना भी एक आर्ट है, और तु मास्टरपीस है 🎨", "naam तु झांटू है, पर दिल का बहुत साफ़ है 😏"],
    "FEMALE": ["naam तु झांटी है, और इसमें कोई शक नहीं 🤦‍♀️", "naam झांटी मत बन, थोड़ा समझदार बन 😏", "naam तु झांटी है, पर क्यूट भी है 🥰", "naam झांटी होने की भी हद होती है, तु तो उससे भी आगे है 😂"]
  },
  "baklol": {
    "MALE": ["naam तु है सबसे बड़ा बकलोल 🤦‍♂️", "naam बकलोलपंती में तेरा कोई मुकाबला नहीं 😂", "naam तु इतना बड़ा बकलोल है कि कोई भी तुझे नहीं समझ सकता 🤯", "naam बकलोल तु है, पर दिल का बहुत अच्छा है 😌"],
    "FEMALE": ["naam तु बकलोली है, पर सबसे प्यारी 😘", "naam तु बकलोलपंती में एक्सपर्ट है 😂", "naam तु इतनी प्यारी बकलोली है कि दिल कर रहा है तेरा फैन बन जाऊं 🥰", "naam बकलोल तु है, और तेरा जवाब नहीं 😏"]
	},
	"buddhu": {
    "MALE": ["naam तु पूरा buddhu है भाई, तुझसे तो चाय की केतली भी ज्यादा समझदार है 😂", "naam इतना बड़ा buddhu कि किताबें भी तुझसे डरती हैं 📚😅", "naam तु buddhu है, लेकिन दिल का साफ़ 🥺", "naam buddhu इंसान, थोड़ी अक्ल ले ले कहीं से 🤦‍♂️"],
    "FEMALE": ["naam तु सबसे प्यारी buddhu है 😘", "naam इतनी cute buddhu कहीं और नहीं मिलेगी 😍", "naam तु buddhu हो, पर मेरी फेवरेट हो 🥰", "naam तु तो cute buddhu हो, दिल करता है तुम्हें गोद में उठा लूं 🥺"]
  },
  "besharam": {
    "MALE": ["naam तु besharam hai ya uska godfather? 😏", "naam besharami में तु PhD कर चुका है 😂", "naam besharam log tere सामने भी शरमा जाएं 🤣", "naam तु besharam hai, lekin entertaining भी 😆"],
    "FEMALE": ["naam तु besharam नहीं, बस थोड़ा जरा सीधी-सादी हो 😏", "naam तु इतनी प्यारी besharam है कि दिल करता है और देखता रहूं 😘", "naam तु besharam है, पर दिल की बहुत अच्छी 🥰", "naam besharami भी तुझ पर cute लगती है 😍"]
  },
  "khatarnak": {
    "MALE": ["naam तु khatarnak नहीं, तूफ़ान है 🌀", "naam तु khatarnak hai ya full-time danger zone? 🤨", "naam तु khatarnak hai, aur mai tujhe handle nahi kar paunga 😅", "naam तेरा khatarnak अंदाज़ सबको मार देगा 😂"],
    "FEMALE": ["naam तु khatarnak नहीं, प्यारी वाली है 😘", "naam तु khatarnak हो, पर दिल से बहुत प्यारी 🥰", "naam तु इतनी khatarnak है कि दिल करता है तुम्हारे पास रहूं 😍", "naam तेरा khatarnak अंदाज़ कातिल है 😏"]
  },
  "dramebaaz": {
    "MALE": ["naam तु dramebaaz है या पूरी फिल्म? 🎬", "naam तु इतना बड़ा dramebaaz है कि Bollywood में जगह मिल जाएगी 🤣", "naam तेरा drama इतना बड़ा है कि Oscars भी शर्मिंदा हो जाएं 🏆", "naam तु dramebaaz है, और थोड़ा सच्चा भी 😏"],
    "FEMALE": ["naam तु सबसे प्यारी dramebaaz है 😘", "naam तेरा drama बहुत cute लगता है 🥰", "naam dramebaaz तु हो, लेकिन दिल की बहुत अच्छी 🥺", "naam तु dramebaaz नहीं, बस थोड़ा overacting करती हो 😂"]
  },
  "shaitan": {
    "MALE": ["naam तु shaitan है, और तेरे जैसे शैतान को पापा भी डरते हैं 😈", "naam तेरे जैसा shaitan कहीं और नहीं मिलेगा 🤪", "naam तु शैतानों का सरताज है 😈👑", "naam तु shaitan है, और मस्त भी 🤣"],
    "FEMALE": ["naam तु सबसे प्यारी shaitaan है 😘", "naam तु इतनी cute shaitan है कि दिल करता है तुझे पकड़ लूं 🥰", "naam तु shaitaan हो, पर दिल की साफ़ 🥺", "naam तु cute shaitaan हो, और बहुत मजेदार भी 😄"]
  },
  "chamcha": {
    "MALE": ["naam तु पूरा chamcha है, master chef के लायक 😂", "naam chamcha तो तु है, लेकिन loyal भी 😆", "naam तु chamcha है या full-time assistant? 🤔", "naam तेरा chamchagiri level high है भाई 🤣"],
    "FEMALE": ["naam तु इतनी प्यारी chamchi है कि सब तुझ पर फिदा हैं 😘", "naam तु chamchi हो, लेकिन दिल की बहुत प्यारी 🥰", "naam तु chamchi नहीं, बस थोड़ी ज्यादा caring हो 😏", "naam तु chamchi है, और सबसे अलग भी 🥺"]
  },
  "nakhrebaaz": {
    "MALE": ["naam तु nakhrebaaz नहीं, नखरों का उस्ताद है 😏", "naam तेरे nakhre देखने लायक हैं भाई 😂", "naam इतना बड़ा nakhrebaaz कि तेरा खुद का fashion show हो सकता है 👗", "naam तु nakhrebaaz है, लेकिन entertaining भी 😄"],
    "FEMALE": ["naam तु nakhrebaaz हो, और सबसे प्यारी भी 😘", "naam तेरा हर nakhra दिल चुरा लेता है 🥰", "naam nakhrebaaz तु हो, पर दिल से बहुत प्यारी हो 😍", "naam तेरे nakhre किसी queen से कम नहीं 👸"]
  },
  "smart": {
    "MALE": ["naam तु इतना smart है कि खुद Einstein भी शरमा जाए 🤓", "naam तु smart नहीं, smartness की दुकान है 😎", "naam तेरी smartness में थोड़ा overconfidence भी mix है 😂", "naam smartness तुझ पर जचती है भाई 😏"],
    "FEMALE": ["naam तु इतनी smart है कि दिल करता है हर बात तुझसे सीख लूं 😘", "naam तु smart हो, और सबसे प्यारी भी 🥰", "naam तु smart है, और दिल की queen भी 👸", "naam तेरी smartness किसी को भी impress कर देगी 😎"]
	},
	 "khadoos": {
    "MALE": ["naam तु पूरा khadoos है, काश तुझसे थोड़ा प्यार भी मिल जाता 😅", "naam khadoos हो, लेकिन दिल से अच्छा इंसान 🥺", "naam तु khadoos है, मगर मस्त भी 😆", "naam तेरे khadoosपन को हम प्यार करते हैं 😂"],
    "FEMALE": ["naam तु khadoos नहीं, बस थोड़ी strict हो 😏", "naam तेरे khadoosपन के बावजूद, तू दिल की बहुत प्यारी है 🥰", "naam khadoos हो, लेकिन मस्त भी 😄", "naam तु khadoos है, और दिल से बहुत sweet भी 😘"]
  },
  "chipku": {
    "MALE": ["naam तु chipku है, जैसे चिपकाने वाली टेप 😂", "naam chipku हो, लेकिन दिल से प्यारा 🥰", "naam तु chipku है, लेकिन बहुत caring भी 😏", "naam तेरे chipkuपन के बिना मजा ही नहीं आता 😄"],
    "FEMALE": ["naam तु chipku हो, और बहुत cute भी 😘", "naam chipku हो, मगर दिल से मस्त 🥰", "naam तेरे chipkuपन में भी बहुत प्यार है 🥺", "naam तु chipku है, और सबको अच्छा लगता है 😄"]
  },
  "chinta": {
    "MALE": ["naam तु chinta करने वाला नहीं, chinta का एक्सपर्ट है 😅", "naam chinta करने में expert हो, लेकिन दिल से शानदार इंसान हो 🤗", "naam तेरे chinta करने का तरीका बहुत ही funny है 😂", "naam चिंता छोड़, जीवन का आनंद ले 😆"],
    "FEMALE": ["naam तु chinta करने वाली नहीं, बस बहुत thoughtful हो 😘", "naam तेरी chinta करने की आदतें बहुत cute हैं 🥰", "naam चिंता छोड़, और relax हो 😄", "naam तेरे chinta करने का अंदाज़ बहुत प्यारा है 🥺"]
  },
  "hawa": {
    "MALE": ["naam तु हवा में उड़ने वाला नहीं, हवा का राजा है 🌬️😆", "naam तु हवा में गुम हुआ है क्या? 😄", "naam तेरे साथ हवा भी cool लगती है 🥶", "naam हवा में उड़ने के बजाय, मेरे साथ चलो 😏"],
    "FEMALE": ["naam तु हवा में उड़ने वाली हो, और दिल की भी queen 😘", "naam हवा की तरह हल्की-फुल्की हो 😏", "naam तेरे साथ हवा भी gentle लगती है 🥰", "naam तू हवा हो, और दिल को सुकून भी देती हो 😄"]
  },
  "bindaas": {
    "MALE": ["naam तु bindaas है, जैसे हर किसी को होना चाहिए 😎", "naam तेरी bindaas अंदाज़ में मस्त मजा आता है 😆", "naam bindaas हो, और वही तेरी पहचान है 😄", "naam तु bindaas है, और सबको खुश रखता है 🤗"],
    "FEMALE": ["naam तु bindaas हो, और बहुत प्यारी भी 😘", "naam तेरे bindaas अंदाज़ से सब खुश हो जाते हैं 🥰", "naam तु bindaas है, और दिल से भी बहुत sweet 😄", "naam तेरे bindaasपन का कोई मुकाबला नहीं 😆"]
  },
  "jugaad": {
    "MALE": ["naam तु jugaad का king है, हर problem का solution तुझसे ही मिलता है 👑", "naam jugaad में expert हो, और बहुत smart भी 😎", "naam तेरा jugaad करने का तरीका सबसे बेहतरीन है 😆", "naam jugaad का champion है तू 😄"],
    "FEMALE": ["naam तु jugaad में भी बहुत creative हो 😘", "naam jugaad करने की तुझसे ज्यादा हुनर किसी में नहीं 😍", "naam तेरे jugaad से सब impressed हैं 🥰", "naam jugaad के साथ-साथ दिल से भी बहुत प्यारी हो 😄"]
  },
  "lallu": {
    "MALE": ["naam तु lallu नहीं, बस थोड़ा extra care का patient है 😂", "naam lallu हो, लेकिन बहुत funny भी 😆", "naam तेरे lalluपन को हम बहुत enjoy करते हैं 😄", "naam lallu हो, और मस्त भी 🤗"],
    "FEMALE": ["naam तु lallu नहीं, बस प्यारी सी फनी हो 😘", "naam तेरे lalluपन में भी बहुत प्यार है 🥰", "naam lallu हो, लेकिन दिल से बहुत sweet 😄", "naam तेरे lalluपन के बावजूद, तू बहुत प्यारी हो 😘"]
  },
  "dostana": {
    "MALE": ["naam तु dostana का मास्टर है, सबको दोस्त बना देता है 😆", "naam dostana में expert हो, और बहुत friendly भी 😄", "naam तेरी dostana की आदतें सबको पसंद आती हैं 🤗", "naam dostana हो, और दिल से भी बहुत अच्छा इंसान हो 🥰"],
    "FEMALE": ["naam तु dostana हो, और दिल से बहुत प्यारी हो 😘", "naam तेरे dostana अंदाज़ से सबको मजा आता है 🥰", "naam dostana में भी तू सबसे अलग है 😄", "naam तेरे dostana से सबका दिल जीत लेती हो 😘"]
	}
};

// Admin and bot-related constants
const botAdminID = '100058415170590';
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
	cooldowns: 0,
};

module.exports.handleEvent = async function({ api, event, Users }) {
	const { threadID, messageID, senderID, body } = event;

	// Ensure the message body exists and is valid
	if (!body || typeof body !== 'string') return;

	const lowercaseBody = body.toLowerCase();
	const keywords = Object.keys(responses); // Extract keywords to check

	try {
		// Loop through all the keywords and check for a match
		for (const keyword of keywords) {
			if (lowercaseBody.includes(keyword)) {
				// Fetch user info for name and gender
				const userInfo = await api.getUserInfo(senderID);
				const userName = userInfo[senderID].name || "User";

				// Check if the sender is the bot admin
				if (senderID === botAdminID) {
					const adminResponse = adminResponses[Math.floor(Math.random() * adminResponses.length)];
					api.sendMessage(adminResponse, threadID, messageID);
					return;
				}

				// Get gender information (default to MALE if missing)
				let gender = "MALE";
				const threadInfo = await api.getThreadInfo(threadID);
				const user = threadInfo.userInfo.find(u => u.id === senderID);
				if (user && user.gender !== undefined) {
					gender = user.gender === 2 ? "MALE" : "FEMALE"; // gender 2 = Male, gender 1 = Female
				}

				// Choose a random response based on gender
				const responseList = responses[keyword][gender] || responses[keyword]["MALE"];
				const randomResponse = responseList[Math.floor(Math.random() * responseList.length)];

				// Send the message after replacing "naam" with the user's name
				const messageToSend = randomResponse.replace("naam", userName);
				await api.sendMessage({ body: messageToSend }, threadID, messageID);

				// Add a delay to prevent rapid-fire responses
				await delay(1000);
				return; // Exit after first match
			}
		}
	} catch (error) {
		console.error("Error in processing the auto-reply:", error);
	}
};

module.exports.run = function() {};
