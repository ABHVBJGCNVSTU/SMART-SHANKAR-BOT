module.exports.config = {
  name: 'autosent',
  version: '10.02',
  hasPermssion: 0,
  credits: 'SHANKAR SUMAN',
  description: 'Automatically sends motivational messages based on set times',
  commandCategory: 'group messenger',
  usages: '[]',
  cooldowns: 3
};

const nam = [{
  timer: '12:00:00 AM',
  message: ['🌙 एक नई शुरुआत की ओर कदम बढ़ाओ, सपनों को सच बनाने का समय है।\n_– Shankar Suman_']
},
{
  timer: '1:00:00 AM',
  message: ['🌙 रात का अंधेरा नहीं, बल्कि तुम्हारी मेहनत ही तुम्हें चमकाएगी।\n_– Shankar Suman_']
},
{
  timer: '2:00:00 AM',
  message: ['🌙 सफलता की राह में रुकावटें आती हैं, पर तुम परिश्रम से जीत सकते हो।\n_– Shankar Suman_']
},
{
  timer: '3:00:00 AM',
  message: ['🌙 अपने लक्ष्यों को पाने के लिए हर दिन एक नया अवसर है।\n_– Shankar Suman_']
},
{
  timer: '4:00:00 AM',
  message: ['🌙 सुबह की पहली किरण, तुम्हें नई ऊर्जा और उम्मीद दे।\n_– Shankar Suman_']
},
{
  timer: '5:00:00 AM',
  message: ['🌅 सुबह उठो और अपने सपनों को सच करने का दिन शुरू करो।\n_– Shankar Suman_']
},
{
  timer: '6:00:00 AM',
  message: ['🌅 एक नई सुबह है, अपने लक्ष्य के प्रति समर्पण के साथ दिन शुरू करो।\n_– Shankar Suman_']
},
{
  timer: '7:00:00 AM',
  message: ['🌞 हर सुबह तुम्हारे अंदर की शक्ति को उजागर करने का मौका देती है।\n_– Shankar Suman_']
},
{
  timer: '8:00:00 AM',
  message: ['🌞 मेहनत का फल मीठा होता है, हर दिन की शुरुआत इसी विश्वास के साथ करो।\n_– Shankar Suman_']
},
{
  timer: '9:00:00 AM',
  message: ['🌞 मेहनत में विश्वास रखो, सफलता तुम्हारी राह देख रही है।\n_– Shankar Suman_']
},
{
  timer: '10:00:00 AM',
  message: ['🌞 अपने लक्ष्य की ओर एक कदम और बढ़ाओ, सफलता तुम्हारी होगी।\n_– Shankar Suman_']
},
{
  timer: '11:00:00 AM',
  message: ['🌞 मेहनत और संघर्ष से कभी हार मत मानो, जीत तुम्हारी होगी।\n_– Shankar Suman_']
},
{
  timer: '12:00:00 PM',
  message: ['🌞 दोपहर का समय है, अपने सपनों को सच करने के लिए काम में जुट जाओ।\n_– Shankar Suman_']
},
{
  timer: '1:00:00 PM',
  message: ['🌞 दिन का समय है, अपनी मेहनत और लगन से अपने लक्ष्य को प्राप्त करो।\n_– Shankar Suman_']
},
{
  timer: '2:00:00 PM',
  message: ['🌞 अपने काम को पूर्ण लगन और उत्साह के साथ करो, सफलता तुम्हारे कदम चूमेगी।\n_– Shankar Suman_']
},
{
  timer: '3:00:00 PM',
  message: ['🌞 हर काम में उत्कृष्टता की ओर बढ़ो, सफलता तुम्हारी होगी।\n_– Shankar Suman_']
},
{
  timer: '4:00:00 PM',
  message: ['🌞 हर दिन एक नई चुनौती है, इसे अवसर के रूप में देखो.\n_– Shankar Suman_']
},
{
  timer: '5:00:00 PM',
  message: ['🌆 दिन के अंत में, अपनी मेहनत पर गर्व करो और आगे बढ़ने का संकल्प लो.\n_– Shankar Suman_']
},
{
  timer: '6:00:00 PM',
  message: ['🌆 हर दिन की मेहनत, तुम्हें सफलता की ओर एक कदम और करीब लाती है.\n_– Shankar Suman_']
},
{
  timer: '7:00:00 PM',
  message: ['🌆 अपनी दिन की मेहनत का फल, रात की शांति में पाओ.\n_– Shankar Suman_']
},
{
  timer: '8:00:00 PM',
  message: ['🌙 अपने सपनों की ओर बढ़ते जाओ, सफलता निश्चित रूप से तुम्हारी होगी.\n_– Shankar Suman_']
},
{
  timer: '9:00:00 PM',
  message: ['🌙 दिन भर की मेहनत के बाद, सफलता के सपने देखो.\n_– Shankar Suman_']
},
{
  timer: '10:00:00 PM',
  message: ['🌙 आज का दिन समाप्त हुआ, कल एक नई उम्मीद के साथ शुरू होगा.\n_– Shankar Suman_']
},
{
  timer: '11:00:00 PM',
  message: ['🌙 अपने प्रयासों पर विश्वास रखो, रात का अंधेरा भी जल्दी खत्म होगा.\n_– Shankar Suman_']
}];

module.exports.onLoad = o => setInterval(() => {
  const r = a => a[Math.floor(Math.random()*a.length)];
  if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);

module.exports.run = o => {};
