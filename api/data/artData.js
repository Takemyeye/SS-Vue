const artData = {
  jujutsukaisen: [
    { id: 1, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK1.jpg?alt=media&token=26f2b6ac-0c85-4c0f-a4ad-fa8373d84b23', price: 18, subtitle: 'Yuji Itadori, the energetic protagonist with a kind heart...', titleAnime: 'Jujutsu Kaisen' },
    { id: 2, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK2.jpg?alt=media&token=6ab29366-8fec-4af3-a470-18e22dc8f3fb', price: 15, subtitle: 'Yuji Itadori unleashing his hidden strength...', titleAnime: 'Jujutsu Kaisen' },
    { id: 3, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK4.jpg?alt=media&token=16b6d57e-af9e-41e4-86d0-900909485d97', price: 15, subtitle: 'Yuji Itadori in battle mode, ready to fight curses...', titleAnime: 'Jujutsu Kaisen' },
    { id: 4, title: 'Gojo Satoru', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK3.jpg?alt=media&token=e123b5f8-a99b-49d3-ab69-a9067d5b7395', price: 15, subtitle: 'Gojo Satoru, the strongest sorcerer with limitless power...', titleAnime: 'Jujutsu Kaisen' },
    { id: 5, title: 'Gojo Satoru', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK5.jpg?alt=media&token=78029444-ec05-44b2-8c19-841681c69c9c', price: 10, subtitle: 'Gojo Satoru, demonstrating his unrivaled jujutsu skills...', titleAnime: 'Jujutsu Kaisen' },
    { id: 6, title: 'Ryomen Sukuna', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK7.jpg?alt=media&token=57a25015-d684-4df4-a76b-54eb95913c93', price: 12, subtitle: 'Ryomen Sukuna, embodying ancient evil and strength...', titleAnime: 'Jujutsu Kaisen' },
    { id: 7, title: 'Ryomen Sukuna', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK11.jpg?alt=media&token=66f69d8a-0756-412c-b9ec-cd0851cf4fb4', price: 18, subtitle: 'Ryomen Sukuna, the fearsome King of Curses...', titleAnime: 'Jujutsu Kaisen' },
    { id: 8, title: 'Choso', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK12.jpg?alt=media&token=2e656d82-8221-4491-bbcc-34464e3f86d0', price: 18, subtitle: 'Choso, the mysterious Cursed Womb brother...', titleAnime: 'Jujutsu Kaisen' },
    { id: 9, title: 'Todo Yaoi', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK8.jpg?alt=media&token=8620e701-07fb-4eca-b090-ea99e9518a5f', price: 18, subtitle: 'Todo Yaoi, the powerhouse with a unique perspective...', titleAnime: 'Jujutsu Kaisen' },
    { id: 10, title: 'Okkotsu Yuta', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK9.jpg?alt=media&token=fff0bba8-091b-40f1-9cad-00c6b5f1aec9', price: 15, subtitle: 'Okkotsu Yuta, a special grade sorcerer with a powerful ally...', titleAnime: 'Jujutsu Kaisen' },
    { id: 11, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK10.jpg?alt=media&token=9b302c54-5f0f-4436-b800-6d95f75cf343', price: 10, subtitle: 'Yuji Itadori in his quest to protect humanity...', titleAnime: 'Jujutsu Kaisen' },
    { id: 12, title: 'Okkotsu Yuta', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK13.jpg?alt=media&token=167af346-e472-44d2-886a-5bebe7f159b7', price: 10, subtitle: 'Okkotsu Yuta, the cursed weapon wielder with a tragic past...', titleAnime: 'Jujutsu Kaisen' },
    { id: 13, title: 'Gojo Satoru', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK14.jpg?alt=media&token=cf2fe786-9cfd-4c0b-8cc2-029c631ee7ea', price: 18, subtitle: 'Gojo Satoru showcasing his unique Six Eyes technique...', titleAnime: 'Jujutsu Kaisen' },
  ],
  callOfNight: [
    { id: 14, title: 'Ko Yamori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/CON1.jpg?alt=media&token=9be5a54c-f82a-49cd-bafc-d762126ad8ba', price: 10, subtitle: 'Ko Yamori, the night wanderer searching for freedom...', titleAnime: 'Call of Night' },
    { id: 15, title: 'Ko Yamori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/CON2.jpg?alt=media&token=557c22a6-cbbb-4ed0-bdb6-20f67ca9541c', price: 15, subtitle: 'Ko Yamori, exploring the mysteries of the night...', titleAnime: 'Call of Night' },
    { id: 16, title: 'Ko Yamori', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/CON3.jpg?alt=media&token=edbd4775-47dd-4825-aeea-2fee28f38289', price: 18, subtitle: 'Ko Yamori, captivated by the allure of nocturnal life...', titleAnime: 'Call of Night' },
  ],
  fireForce: [
    { id: 17, title: 'Benimaru', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/FFB.jpg?alt=media&token=88deb5c5-aa47-4a92-886f-b923404a6532', price: 18, subtitle: 'Benimaru, the fierce captain with dual flame powers...', titleAnime: 'Fire Force' },
  ],
  mha: [
    { id: 18, title: 'Deku', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/MHA1.jpg?alt=media&token=d03f12cb-64e2-4b7d-b0f0-fc04c5a13b87', price: 10, subtitle: 'Deku, the aspiring hero with a heart of gold...', titleAnime: 'My Hero Academia' },
  ],
  sd: [
    { id: 19, title: 'Takamura', image: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/SD1.jpg?alt=media&token=66f28578-0bec-4526-a6f0-1ad90c6a27b5', price: 10, subtitle: 'Takamura, the quirky assassin with a sharp wit...', titleAnime: 'Sakamoto Days' },
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
