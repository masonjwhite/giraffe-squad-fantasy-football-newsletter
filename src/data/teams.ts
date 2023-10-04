const teams = [
    {
        id: 'nick',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
        name: 'DakStreet Boys',
        coach: 'Nick Bradfish',
        content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
        rank: "1",
    },
    {
        id: 'audrey',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_2_a.png',
        name: 'The Bus Stop',
        coach: 'Audrey Pottinger',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "2",
    },
    {
        id: 'jackie',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
        name: 'Pattibot',
        coach: 'Jackie Munger',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "3",
    },
    {
        id: 'adam',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
        name: 'Henry\'s Hustle',
        coach: 'Adam LaCasse',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "4",
    },
    {
        id: 'mason',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/113652f074d7b306a0e4a45eefeb5b5ee1e8542fdda2680cef96dd306229367a.png',
        name: 'Jaguar King',
        coach: 'Mason White',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "5",
    },
    {
        id: 'zac',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/f81eb36e9164b5d16a14a0d98cb10325a3ecd5c40a18762114c0e8992be89eec.jpg',
        name: 'VisiGoffs',
        coach: 'Zac Fermanis',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "6",
    },
    {
        id: 'zari',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/504c777005d70cb6a10b7418ec386981f855e9b18747117a8df8c51ac7319c3c.png',
        name: 'Let\'s Get Wiested',
        coach: 'Zari Bazarian',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "7",
    },
    {
        id: 'joe',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
        name: 'Average Joes',
        coach: 'Joe Pecosky',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "8",
    },
    {
        id: 'will',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/2482266e246e51fc0a087de4fb4aa927a806305ef1966242d06f57251d836504.jpg',
        name: 'CeeDee Phone Home',
        coach: 'Will Stone',
        content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
        rank: "9",
    },
    {
        id: 'kristen',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_7_k.png',
        name: 'Any Given Sunday',
        coach: 'Kristen Tsakiris',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "10",
    },
    {
        id: 'david',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_d.png',
        name: 'Mixon it with Dak',
        coach: 'David Phillips',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "11",
    },
    {
        id: 'kara',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
        name: 'Hurts So Good',
        coach: 'Kara Prescott',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: "12",
    },
  ];

  export default teams;