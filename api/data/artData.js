const artData = {
  jujutsukaisen: [
    { id: 1, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK1.jpg?alt=media&token=443b9dc8-f885-4984-bbb2-c4935dad6bef', price: 18, subtitle: 'Yuji Itadori, the energetic protagonist with a kind heart...', titleAnime: 'Jujutsu Kaisen' },
    { id: 2, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK2.jpg?alt=media&token=22f3e766-c308-4464-b4ee-52be371fe29a', price: 15, subtitle: 'Yuji Itadori unleashing his hidden strength...', titleAnime: 'Jujutsu Kaisen' },
    { id: 3, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK4.jpg?alt=media&token=279bfd06-cd42-4275-be18-cc916a6c8282', price: 15, subtitle: 'Yuji Itadori in battle mode, ready to fight curses...', titleAnime: 'Jujutsu Kaisen' },
    { id: 4, title: 'Gojo Satoru', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK3.jpg?alt=media&token=c697a3ef-0d02-4405-ae30-b72e5c065c90', price: 15, subtitle: 'Gojo Satoru, the strongest sorcerer with limitless power...', titleAnime: 'Jujutsu Kaisen' },
    { id: 5, title: 'Gojo Satoru', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK5.jpg?alt=media&token=94d42c54-e759-4f73-8d54-a3ab8b751eed', price: 10, subtitle: 'Gojo Satoru, demonstrating his unrivaled jujutsu skills...', titleAnime: 'Jujutsu Kaisen' },
    { id: 6, title: 'Ryomen Sukuna', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK7.jpg?alt=media&token=7a0b82c4-b488-490d-913a-f444bc018d06', price: 12, subtitle: 'Ryomen Sukuna, embodying ancient evil and strength...', titleAnime: 'Jujutsu Kaisen' },
    { id: 7, title: 'Ryomen Sukuna', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK11.jpg?alt=media&token=70d1fc57-e68d-4bb9-a54a-31bef72bd51e', price: 18, subtitle: 'Ryomen Sukuna, the fearsome King of Curses...', titleAnime: 'Jujutsu Kaisen' },
    { id: 8, title: 'Choso', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK12.jpg?alt=media&token=c826405d-e519-4aa6-8b25-634e8420ba77', price: 18, subtitle: 'Choso, the mysterious Cursed Womb brother...', titleAnime: 'Jujutsu Kaisen' },
    { id: 9, title: 'Todo Yaoi', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK8.jpg?alt=media&token=ca6a1122-3946-4015-a07b-9dcecd320e43', price: 18, subtitle: 'Todo Yaoi, the powerhouse with a unique perspective...', titleAnime: 'Jujutsu Kaisen' },
    { id: 10, title: 'Okkotsu Yuta', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK9.jpg?alt=media&token=3e08ab93-89b2-4865-bc4e-565860b03050', price: 15, subtitle: 'Okkotsu Yuta, a special grade sorcerer with a powerful ally...', titleAnime: 'Jujutsu Kaisen' },
    { id: 11, title: 'Yuji Itadori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK10.jpg?alt=media&token=bfaed89d-e245-48bb-9aed-fc9a642bc47e', price: 10, subtitle: 'Yuji Itadori in his quest to protect humanity...', titleAnime: 'Jujutsu Kaisen' },
    { id: 12, title: 'Okkotsu Yuta', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK13.jpg?alt=media&token=1d55c367-af14-441a-a862-e748b843f80f', price: 10, subtitle: 'Okkotsu Yuta, the cursed weapon wielder with a tragic past...', titleAnime: 'Jujutsu Kaisen' },
    { id: 13, title: 'Gojo Satoru', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/JJK14.jpg?alt=media&token=e80a9605-2246-4c84-af2b-b0ebe8f558e5', price: 18, subtitle: 'Gojo Satoru showcasing his unique Six Eyes technique...', titleAnime: 'Jujutsu Kaisen' },
  ],
  callOfNight: [
    { id: 14, title: 'Ko Yamori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/CON1.jpg?alt=media&token=b6ac8a16-8c0c-4aa4-81a6-f61be9c64961', price: 10, subtitle: 'Ko Yamori, the night wanderer searching for freedom...', titleAnime: 'Call of Night' },
    { id: 15, title: 'Ko Yamori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/CON2.jpg?alt=media&token=d6915ea4-f5d2-4ad2-addb-a3f771ca843d', price: 15, subtitle: 'Ko Yamori, exploring the mysteries of the night...', titleAnime: 'Call of Night' },
    { id: 16, title: 'Ko Yamori', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/CON3.jpg?alt=media&token=7e039efe-91ab-4036-b6d4-292ff3db990f', price: 18, subtitle: 'Ko Yamori, captivated by the allure of nocturnal life...', titleAnime: 'Call of Night' },
  ],
  fireForce: [
    { id: 17, title: 'Benimaru', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/FFB.jpg?alt=media&token=d9f55d72-24d7-45a8-a4bb-f0b6c1436b17', price: 18, subtitle: 'Benimaru, the fierce captain with dual flame powers...', titleAnime: 'Fire Force' },
  ],
  mha: [
    { id: 18, title: 'Deku', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/MHA1.jpg?alt=media&token=b2304761-dab9-4e8a-91bb-6adb5efe6485', price: 10, subtitle: 'Deku, the aspiring hero with a heart of gold...', titleAnime: 'My Hero Academia' },
  ],
  sd: [
    { id: 19, title: 'Takamura', image: 'https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/SD1.jpg?alt=media&token=4600a327-3588-4c61-bf19-c5248691ddff', price: 10, subtitle: 'Takamura, the quirky assassin with a sharp wit...', titleAnime: 'Sakamoto Days' },
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
