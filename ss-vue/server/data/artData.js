const artData = { 
  jujutsukaisen: [
    { id: 1, title: 'Yuji Itadori', image: 'JJK1.jpg', price: 18, subtitle: 'Yuji Itadori from Jujutsu Kaisen' },
    { id: 2, title: 'Yuji Itadori', image: 'JJK2.jpg', price: 15, subtitle: 'Yuji Itadori from Jujutsu Kaisen' },
    { id: 3, title: 'Yuji Itadori', image: 'JJK4.jpg', price: 15, subtitle: 'Yuji Itadori from Jujutsu Kaisen' },
    { id: 4, title: 'Gojo Satoru', image: 'JJK3.jpg', price: 15, subtitle: 'Gojo Satoru from Jujutsu Kaisen' },
    { id: 5, title: 'Gojo Satoru', image: 'JJK5.jpg', price: 10, subtitle: 'Gojo Satoru from Jujutsu Kaisen' },
    { id: 6, title: 'Ryomen Sukuna', image: 'JJK7.jpg', price: 12, subtitle: 'Ryomen Sukuna from Jujutsu Kaisen' },
    { id: 7, title: 'Ryomen Sukuna', image: 'JJK11.jpg', price: 18, subtitle: 'Ryomen Sukuna from Jujutsu Kaisen' },
    { id: 8, title: 'Choso', image: 'JJK12.jpg', price: 18, subtitle: 'Choso from Jujutsu Kaisen' },
    { id: 9, title: 'Todo Yaoi', image: 'JJK8.jpg', price: 18, subtitle: 'Todo Yaoi from Jujutsu Kaisen' },
    { id: 10, title: 'Okkotsu Yuta', image: 'JJK9.jpg', price: 15, subtitle: 'Okkotsu Yuta from Jujutsu Kaisen' },
    { id: 11, title: 'Yuji Itadori', image: 'JJK10.jpg', price: 10, subtitle: 'Yuji Itadori from Jujutsu Kaisen' },
    { id: 12, title: 'Okkotsu Yuta', image: 'JJK13.jpg', price: 10, subtitle: 'Okkotsu Yuta from Jujutsu Kaisen' },
    { id: 13, title: 'Gojo Satoru', image: 'JJK14.jpg', price: 18, subtitle: 'Gojo Satoru from Jujutsu Kaisen' },
  ],
  callOfNight: [
    { id: 1, title: 'Ko Yamori', image: 'CON1.jpg', price: 10, subtitle: 'Ko Yamori from Call of Night' },
    { id: 2, title: 'Ko Yamori', image: 'CON2.jpg', price: 15, subtitle: 'Ko Yamori from Call of Night' },
    { id: 3, title: 'Ko Yamori', image: 'CON3.jpg', price: 18, subtitle: 'Ko Yamori from Call of Night' },
  ],
  fireForce: [
    { id: 1, title: 'Benimaru', image: 'FFB.jpg', price: 18, subtitle: 'Benimaru  from fire Force' },
  ],
  mha: [
    { id: 1, title: 'Deku', image: 'MHA1.jpg', price: 10, subtitle: 'Deku from My Hero Academia' },
  ],
  sd: [
    { id: 1, title: 'Takamura', image: 'SD1.jpg', price: 10, subtitle: 'Takamura from Sacamoto Days' },
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
