const artData = {
  jujutsukaisen: [
    { id: 1, title: 'Yuji Itadori', image: 'JJK1.jpg', price: 18, subtitle: 'Yuji Itadori, the energetic protagonist with a kind heart...', titleAnime: 'Jujutsu Kaisen' },
    { id: 2, title: 'Yuji Itadori', image: 'JJK2.jpg', price: 15, subtitle: 'Yuji Itadori unleashing his hidden strength...', titleAnime: 'Jujutsu Kaisen' },
    { id: 3, title: 'Yuji Itadori', image: 'JJK4.jpg', price: 15, subtitle: 'Yuji Itadori in battle mode, ready to fight curses...', titleAnime: 'Jujutsu Kaisen' },
    { id: 4, title: 'Gojo Satoru', image: 'JJK3.jpg', price: 15, subtitle: 'Gojo Satoru, the strongest sorcerer with limitless power...', titleAnime: 'Jujutsu Kaisen' },
    { id: 5, title: 'Gojo Satoru', image: 'JJK5.jpg', price: 10, subtitle: 'Gojo Satoru, demonstrating his unrivaled jujutsu skills...', titleAnime: 'Jujutsu Kaisen' },
    { id: 6, title: 'Ryomen Sukuna', image: 'JJK7.jpg', price: 12, subtitle: 'Ryomen Sukuna, embodying ancient evil and strength...', titleAnime: 'Jujutsu Kaisen' },
    { id: 7, title: 'Ryomen Sukuna', image: 'JJK11.jpg', price: 18, subtitle: 'Ryomen Sukuna, the fearsome King of Curses...', titleAnime: 'Jujutsu Kaisen' },
    { id: 8, title: 'Choso', image: 'JJK12.jpg', price: 18, subtitle: 'Choso, the mysterious Cursed Womb brother...', titleAnime: 'Jujutsu Kaisen' },
    { id: 9, title: 'Todo Yaoi', image: 'JJK8.jpg', price: 18, subtitle: 'Todo Yaoi, the powerhouse with a unique perspective...', titleAnime: 'Jujutsu Kaisen' },
    { id: 10, title: 'Okkotsu Yuta', image: 'JJK9.jpg', price: 15, subtitle: 'Okkotsu Yuta, a special grade sorcerer with a powerful ally...', titleAnime: 'Jujutsu Kaisen' },
    { id: 11, title: 'Yuji Itadori', image: 'JJK10.jpg', price: 10, subtitle: 'Yuji Itadori in his quest to protect humanity...', titleAnime: 'Jujutsu Kaisen' },
    { id: 12, title: 'Okkotsu Yuta', image: 'JJK13.jpg', price: 10, subtitle: 'Okkotsu Yuta, the cursed weapon wielder with a tragic past...', titleAnime: 'Jujutsu Kaisen' },
    { id: 13, title: 'Gojo Satoru', image: 'JJK14.jpg', price: 18, subtitle: 'Gojo Satoru showcasing his unique Six Eyes technique...', titleAnime: 'Jujutsu Kaisen' },
  ],
  callOfNight: [
    { id: 14, title: 'Ko Yamori', image: 'CON1.jpg', price: 10, subtitle: 'Ko Yamori, the night wanderer searching for freedom...', titleAnime: 'Call of Night' },
    { id: 15, title: 'Ko Yamori', image: 'CON2.jpg', price: 15, subtitle: 'Ko Yamori, exploring the mysteries of the night...', titleAnime: 'Call of Night' },
    { id: 16, title: 'Ko Yamori', image: 'CON3.jpg', price: 18, subtitle: 'Ko Yamori, captivated by the allure of nocturnal life...', titleAnime: 'Call of Night' },
  ],
  fireForce: [
    { id: 17, title: 'Benimaru', image: 'FFB.jpg', price: 18, subtitle: 'Benimaru, the fierce captain with dual flame powers...', titleAnime: 'Fire Force' },
  ],
  mha: [
    { id: 18, title: 'Deku', image: 'MHA1.jpg', price: 10, subtitle: 'Deku, the aspiring hero with a heart of gold...', titleAnime: 'My Hero Academia' },
  ],
  sd: [
    { id: 19, title: 'Takamura', image: 'SD1.jpg', price: 10, subtitle: 'Takamura, the quirky assassin with a sharp wit...', titleAnime: 'Sakamoto Days' },
  ],
  all: []
};

// Динамическое объединение массивов
artData.all = [
  ...artData.jujutsukaisen,
  ...artData.callOfNight,
  ...artData.fireForce,
  ...artData.mha,
  ...artData.sd,
];

module.exports = artData;
