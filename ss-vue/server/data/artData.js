// artData.js
const artData = { 
  jujutsuKaisen: [
    { id: 1, title: 'Yuji Itadori', image: 'JJK1.jpg', price: 18 },
    { id: 2, title: 'Yuji Itadori', image: 'art/JJK2.jpg', price: 15 },
    { id: 3, title: 'Yuji Itadori', image: 'art/JJK4.jpg', price: 15 },
    { id: 4, title: 'Gojo Satoru', image: 'art/JJK3', price: 15 },
    { id: 5, title: 'Gojo Satoru', image: 'art/JJK5', price: 10 },
    { id: 6, title: 'Ryomen Sukuna', image: 'art/JJK7', price: 12 },
    { id: 7, title: 'Ryomen Sukuna', image: 'art/JJK11', price: 18 },
    { id: 8, title: 'Choso', image: 'art/JJK12', price: 18 },
    { id: 9, title: 'Todo Yaoi', image: 'art/JJK8', price: 18 },
    { id: 10, title: 'Okkotsu Yuta', image: 'art/JJK9', price: 15 },
    { id: 11, title: 'Yuji Itadori', image: 'art/JJK10', price: 10 },
    { id: 12, title: 'Okkotsu Yuta ', image: 'art/JJK13', price: 10 },
    { id: 13, title: 'Gojo Satoru', image: 'art/JJK14', price: 18 },
  ],
  callOfNight: [
    { id: 1, title: 'Ko Yamori', image: 'art/CON1', price: 10 },
    { id: 1, title: 'Ko Yamori', image: 'art/CON2', price: 15 },
    { id: 1, title: 'Ko Yamori', image: 'art/CON3', price: 18 },
  ],
  mha: [
    { id: 1, title: 'Deku', image: 'art/MHA1', price: 10 },
  ],
  sd: [
    { id: 1, title: 'Старичок', image: 'art/SD1', price: 10 },
  ],
  all: []
};

// Динамическое объединение массивов
artData.all = [
  ...artData.jujutsuKaisen,
  ...artData.callOfNight,
  ...artData.mha,
];

module.exports = artData;