// nationalpark.js
const nationalParks = [
  {
    name: "Campbell Bay NP",
    lat: "7.2333",
    lng: "93.7500",
    details:
      "Located in Andaman & Nicobar Islands, this park is known for its marine diversity and unique vegetation.",
  },
  {
    name: "Galathea Bay NP",
    lat: "6.7500",
    lng: "93.8333",
    details:
      "A stunning national park in the Andaman Islands, featuring rich biodiversity and beautiful coastal scenery.",
  },
  {
    name: "Mahatma Gandhi Marine NP",
    lat: "7.0000",
    lng: "93.9000",
    details:
      "This park protects marine life and coral reefs in the Andaman Islands.",
  },
  {
    name: "Middle Button Island NP",
    lat: "7.0000",
    lng: "93.8500",
    details:
      "An island national park that showcases the rich marine biodiversity of the Andaman Islands.",
  },
  {
    name: "Mount Harriet NP",
    lat: "11.7200",
    lng: "92.7800",
    details:
      "Known for its scenic views and trekking trails, located in the Andaman Islands.",
  },
  {
    name: "North Button Island NP",
    lat: "7.0000",
    lng: "93.8500",
    details:
      "Features pristine beaches and is a refuge for diverse marine species in the Andaman Islands.",
  },
  {
    name: "Rani Jhansi Marine NP",
    lat: "7.1500",
    lng: "93.9500",
    details:
      "A marine park that emphasizes conservation of coastal treasures and marine biodiversity.",
  },
  {
    name: "Saddle Peak NP",
    lat: "12.0000",
    lng: "92.8333",
    details:
      "The northernmost national park in the Andaman Islands, known for its diverse flora and fauna.",
  },
  {
    name: "South Button Island NP",
    lat: "7.0000",
    lng: "93.8500",
    details:
      "A small island park known for its untouched natural beauty and vibrant marine life.",
  },
  {
    name: "Papikonda NP",
    lat: "17.6833",
    lng: "82.9000",
    details:
      "A picturesque park in Andhra Pradesh with rich biodiversity and scenic landscapes.",
  },
  {
    name: "Rajiv Gandhi (Rameswaram) NP",
    lat: "9.285225890275",
    lng: "79.2871793005",
    details:
      "Famous for its unique ecosystem and migratory birds, located in Tamil Nadu.",
  },
  {
    name: "Sri Venkateswara NP",
    lat: "13.6500",
    lng: "79.4000",
    details:
      "This park features sacred flora and is part of the Tirumala hills in Andhra Pradesh.",
  },
  {
    name: "Mouling NP",
    lat: "27.7500",
    lng: "94.2500",
    details:
      "A gem in Arunachal Pradesh known for its rich wildlife and beautiful landscapes.",
  },
  {
    name: "Namdapha NP",
    lat: "27.2500",
    lng: "96.0000",
    details:
      "Recognized for its vast biodiversity including rare species. Located in Arunachal Pradesh.",
  },
  {
    name: "Dibru-Saikhowa NP",
    lat: "27.4500",
    lng: "95.0000",
    details:
      "Known for its unique wetlands and diverse flora and fauna in Assam.",
  },
  {
    name: "Dehing Patkai NP",
    lat: "26.5000",
    lng: "93.5000",
    details:
      "This park in Assam is known for its lush rainforest and diverse wildlife.",
  },
  {
    name: "Raimona NP",
    lat: "26.4000",
    lng: "92.5000",
    details:
      "A national park that showcases the rich biodiversity of Assam's landscape.",
  },
  {
    name: "Kaziranga NP",
    lat: "26.5253",
    lng: "92.9924",
    details:
      "A UNESCO World Heritage site famous for its population of the Indian one-horned rhinoceros.",
  },
  {
    name: "Manas NP",
    lat: "26.6594",
    lng: "91.0011",
    details:
      "Recognized for its rich wildlife and a UNESCO World Heritage site located in Assam.",
  },
  {
    name: "Nameri NP",
    lat: "26.3500",
    lng: "92.2000",
    details: "Known for its scenic landscapes and diverse birdlife in Assam.",
  },
  {
    name: "Orang NP",
    lat: "26.8000",
    lng: "92.5000",
    details:
      "A national park home to a variety of wildlife, including the Indian rhinoceros.",
  },
  {
    name: "Valmiki NP",
    lat: "26.6500",
    lng: "84.6000",
    details: "Located in Bihar, it is known for its diverse flora and fauna.",
  },
  {
    name: "Guru Ghasidas NP",
    lat: "22.1000",
    lng: "82.1000",
    details:
      "A beautiful national park situated in Chhattisgarh, rich in wildlife.",
  },
  {
    name: "Indravati NP",
    lat: "20.9000",
    lng: "81.6000",
    details:
      "Known for its dense forests and various wildlife species in Chhattisgarh.",
  },
  {
    name: "Kanger Valley NP",
    lat: "19.1500",
    lng: "81.4000",
    details:
      "Famous for its biodiversity and stunning landscapes in Chhattisgarh.",
  },
  {
    name: "Mollem NP",
    lat: "15.3500",
    lng: "74.0500",
    details:
      "Located in Goa, this park features rich biodiversity and scenic views.",
  },
  {
    name: "Blackbuck (Velavadar) NP",
    lat: "21.8333",
    lng: "70.8333",
    details:
      "A national park in Gujarat renowned for its population of blackbucks.",
  },
  {
    name: "Gir NP",
    lat: "21.1245",
    lng: "70.7472",
    details: "The only habitat of the Asiatic lion, located in Gujarat.",
  },
  {
    name: "Marine (Gulf of Kutch) NP",
    lat: "22.2500",
    lng: "69.8000",
    details: "Known for its coral reefs and marine biodiversity in Gujarat.",
  },
  {
    name: "Vansda NP",
    lat: "20.7000",
    lng: "73.2500",
    details: "A picturesque park in Gujarat offering rich flora and fauna.",
  },
  {
    name: "Kalesar NP",
    lat: "30.0500",
    lng: "77.2500",
    details: "Located in Haryana, known for its diverse flora and fauna.",
  },
  {
    name: "Sultanpur NP",
    lat: "28.3500",
    lng: "77.1000",
    details: "A bird sanctuary famous for its migratory birds in Haryana.",
  },
  {
    name: "Great Himalayan NP",
    lat: "32.0000",
    lng: "77.5000",
    details:
      "A national park in Himachal Pradesh known for its stunning landscapes.",
  },
  {
    name: "Inderkilla NP",
    lat: "32.3000",
    lng: "77.0000",
    details:
      "Located in Himachal Pradesh, it features dense forests and diverse wildlife.",
  },
  {
    name: "Khirganga NP",
    lat: "32.1000",
    lng: "77.2000",
    details:
      "Famous for its hot springs and trekking routes in Himachal Pradesh.",
  },
  {
    name: "Pin Valley NP",
    lat: "32.7500",
    lng: "77.5000",
    details:
      "Located in Himachal Pradesh, known for its unique cold desert ecosystem.",
  },
  {
    name: "Simbalbara NP",
    lat: "32.0000",
    lng: "77.8000",
    details: "A lesser-known park in Himachal Pradesh featuring dense forests.",
  },
  {
    name: "Dachigam NP",
    lat: "33.9000",
    lng: "74.9000",
    details: "Home to the endangered Hangul deer, located in Jammu & Kashmir.",
  },
  {
    name: "Kishtwar NP",
    lat: "33.2000",
    lng: "75.6000",
    details:
      "This park showcases stunning landscapes and rich biodiversity in Jammu & Kashmir.",
  },
  {
    name: "Kazinag NP",
    lat: "33.3000",
    lng: "74.6000",
    details:
      "Features diverse wildlife and picturesque landscapes in Jammu & Kashmir.",
  },
  {
    name: "City Forest (Salim Ali) NP",
    lat: "34.0833",
    lng: "74.8000",
    details:
      "A forested national park located near the city, famous for birdwatching.",
  },
  {
    name: "Betla NP",
    lat: "23.5000",
    lng: "85.5000",
    details:
      "Known for its rich biodiversity and beautiful landscapes in Jharkhand.",
  },
  {
    name: "Anshi NP",
    lat: "12.5167",
    lng: "75.5333",
    details:
      "A national park in Karnataka, noted for its unique eco-systems and wildlife.",
  },
  {
    name: "Bandipur NP",
    lat: "11.6664",
    lng: "76.6292",
    details:
      "Famous for its tigers and diverse wildlife, located in Karnataka.",
  },
  {
    name: "Bannerghatta NP",
    lat: "12.8000",
    lng: "77.6000",
    details:
      "Features a safari park and a rich variety of flora and fauna near Bengaluru.",
  },
  {
    name: "Kudremukh NP",
    lat: "13.2500",
    lng: "75.0000",
    details: "Known for its mountainous terrain and biodiversity in Karnataka.",
  },
  {
    name: "Nagarahole NP",
    lat: "12.2000",
    lng: "76.5000",
    details:
      "Home to a wide range of wildlife, including elephants and tigers in Karnataka.",
  },
  {
    name: "Anamudi Shola NP",
    lat: "10.1600",
    lng: "77.0500",
    details:
      "A national park in Kerala known for its shola grasslands and endangered species.",
  },
  {
    name: "Eravikulam NP",
    lat: "10.2000",
    lng: "77.0200",
    details: "Famous for the Neelakurinji flowers that bloom every 12 years.",
  },
  {
    name: "Mathikettan Shola NP",
    lat: "10.1500",
    lng: "77.0500",
    details: "Known for its cool climate and shola forests in Kerala.",
  },
  {
    name: "Pampadum Shola NP",
    lat: "10.1500",
    lng: "77.1000",
    details: "A small but ecologically important park in Kerala.",
  },
  {
    name: "Periyar NP",
    lat: "9.5000",
    lng: "77.2500",
    details: "Famous for its lake and rich biodiversity in Kerala.",
  },
  {
    name: "Silent Valley NP",
    lat: "10.26549602960",
    lng: "76.584037723037",
    details:
      "An undisturbed tropical rainforest known for its rare flora and fauna.",
  },
  {
    name: "Hemis NP",
    lat: "32.3548",
    lng: "78.1620",
    details: "A beautiful high-altitude park in Ladakh known for its wildlife.",
  },
  {
    name: "Bandhavgarh NP",
    lat: "23.8000",
    lng: "80.3000",
    details: "Famous for having one of the highest densities of Bengal tigers.",
  },
  {
    name: "Dinosaur Fossil NP",
    lat: "24.0000",
    lng: "78.0000",
    details:
      "Unique park featuring fossilized dinosaur remains in Madhya Pradesh.",
  },
  {
    name: "Fossil NP",
    lat: "24.1000",
    lng: "78.1000",
    details: "Known for its fascinating fossil beds in Madhya Pradesh.",
  },
  {
    name: "Indira Priyadarshini Pench NP",
    lat: "22.0166",
    lng: "79.8297",
    details: "A beautiful wildlife park with a variety of ecosystems.",
  },
  {
    name: "Kanha NP",
    lat: "22.3340",
    lng: "80.1230",
    details: "Known for the conservation efforts of the tiger population.",
  },
  {
    name: "Kuno NP",
    lat: "24.2000",
    lng: "77.8000",
    details: "A national park focused on the reintroduction of cheetahs.",
  },
  {
    name: "Madhav NP",
    lat: "23.8000",
    lng: "78.0000",
    details: "Known for its historical significance and biodiversity.",
  },
  {
    name: "Panna NP",
    lat: "24.2000",
    lng: "79.0000",
    details: "A national park in Madhya Pradesh known for its diamond mines.",
  },
  {
    name: "Sanjay NP",
    lat: "22.0000",
    lng: "78.0000",
    details: "Features diverse wildlife and beautiful landscapes.",
  },
  {
    name: "Satpura NP",
    lat: "22.9000",
    lng: "78.5000",
    details: "Noted for its rugged mountains and deciduous forests.",
  },
  {
    name: "Van Vihar NP",
    lat: "23.2000",
    lng: "77.4000",
    details:
      "A serene park in Madhya Pradesh home to various wildlife species.",
  },
  {
    name: "Chandoli NP",
    lat: "17.1437",
    lng: "73.8573",
    details:
      "Known for its scenic beauty and diverse ecosystem in Maharashtra.",
  },
  {
    name: "Gugamal NP",
    lat: "18.5000",
    lng: "73.8000",
    details: "A park in Maharashtra known for its scenic landscapes.",
  },
  {
    name: "Nawegaon NP",
    lat: "20.0000",
    lng: "74.0000",
    details: "Features a beautiful lake and dense forests in Maharashtra.",
  },
  {
    name: "Pench (Jawaharlal Nehru) NP",
    lat: "21.0000",
    lng: "79.0000",
    details: "Known for its tiger reserve and diverse wildlife.",
  },
  {
    name: "Sanjay Gandhi (Borivilli) NP",
    lat: "19.2000",
    lng: "72.9000",
    details: "Located near Mumbai, known for rich biodiversity.",
  },
  {
    name: "Tadoba Andhari NP",
    lat: "20.7520",
    lng: "79.4212",
    details: "Famous for its tiger population and diverse wildlife.",
  },
  {
    name: "Keibul Lamjao NP",
    lat: "24.5671",
    lng: "93.8370",
    details: "Situated in Manipur, known for its unique floating phumdis.",
  },
  {
    name: "Shirui NP",
    lat: "25.1000",
    lng: "93.7000",
    details: "Famous for the Shirui lily, a rare flower found in Manipur.",
  },
  {
    name: "Balphakram NP",
    lat: "25.3000",
    lng: "90.7000",
    details:
      "Known for its beautiful landscapes and biodiversity in Meghalaya.",
  },
  {
    name: "Nokrek NP",
    lat: "25.3500",
    lng: "90.2000",
    details: "Famous for its rich flora and fauna in Meghalaya.",
  },
  {
    name: "Murlen NP",
    lat: "23.7000",
    lng: "92.7000",
    details: "A national park in Mizoram known for its unique wildlife.",
  },
  {
    name: "Phawngpui Blue Mountain NP",
    lat: "23.2500",
    lng: "92.8000",
    details: "The highest peak in Mizoram, known for its stunning views.",
  },
  {
    name: "Intanki NP",
    lat: "26.0000",
    lng: "94.0000",
    details: "Known for its rich biodiversity and scenic beauty in Nagaland.",
  },
  {
    name: "Bhitarkanika NP",
    lat: "20.8000",
    lng: "86.3000",
    details:
      "Famous for its mangrove forests and saltwater crocodiles in Odisha.",
  },
  {
    name: "Simlipal NP",
    lat: "21.3000",
    lng: "85.2000",
    details: "A national park in Odisha known for its diverse wildlife.",
  },
  {
    name: "Desert NP",
    lat: "26.6500",
    lng: "71.8000",
    details:
      "A unique desert ecosystem in Rajasthan known for its varied wildlife.",
  },
  {
    name: "Keoladeo NP",
    lat: "26.5000",
    lng: "74.9000",
    details:
      "A UNESCO World Heritage site famous for its bird sanctuary in Rajasthan.",
  },
  {
    name: "Mukundara Hills NP",
    lat: "25.5000",
    lng: "73.5000",
    details:
      "Known for its stunning landscapes and wildlife, located in Rajasthan.",
  },
  {
    name: "Ranthambore NP",
    lat: "26.0170",
    lng: "76.5110",
    details: "Famed for its population of Bengal tigers and historic ruins.",
  },
  {
    name: "Sariska NP",
    lat: "27.3667",
    lng: "76.3667",
    details: "Known for its tiger reserve and rich biodiversity in Rajasthan.",
  },
  {
    name: "Khangchendzonga NP",
    lat: "27.4833",
    lng: "88.1667",
    details:
      "A national park in Sikkim known for the majestic Khangchendzonga mountain.",
  },
  {
    name: "Indira Gandhi (Annamalai) NP",
    lat: "11.5000",
    lng: "79.5000",
    details: "Located in Tamil Nadu, known for its rich flora and fauna.",
  },
  {
    name: "Guindy NP",
    lat: "13.0674",
    lng: "80.2376",
    details:
      "A small urban national park in Chennai, home to diverse wildlife.",
  },
  {
    name: "Gulf of Mannar Marine NP",
    lat: "8.4692461113",
    lng: "78.0222337070239",
    details: "Famous for its rich marine biodiversity, including coral reefs.",
  },
  {
    name: "Mudumalai NP",
    lat: "11.5000",
    lng: "76.7000",
    details: "Known for its elephants and scenic beauty in Tamil Nadu.",
  },
  {
    name: "Mukurthi NP",
    lat: "10.0000",
    lng: "78.15000",
    details: "Located in the Nilgiri hills, known for its unique fauna.",
  },
  {
    name: "Kasu Brahmananda Reddy NP",
    lat: "17.5000",
    lng: "78.3000",
    details:
      "A national park in Hyderabad providing a green oasis in the urban area.",
  },
  {
    name: "Mahaveer Harina Vanasthali NP",
    lat: "17.2000",
    lng: "78.1000",
    details: "Known for its deer park and rich flora and fauna in Telangana.",
  },
  {
    name: "Mrugavani NP",
    lat: "17.5000",
    lng: "80.0000",
    details:
      "A beautiful forest area close to Hyderabad, rich in biodiversity.",
  },
  {
    name: "Bison (Rajbari) NP",
    lat: "23.8000",
    lng: "91.42000",
    details: "Known for its biodiversity and rich wildlife in Tripura.",
  },
  {
    name: "Clouded Leopard NP",
    lat: "23.7500",
    lng: "91.4500",
    details: "A national park in Tripura named after its elusive inhabitant.",
  },
  {
    name: "Dudhwa NP",
    lat: "28.521846048206143",
    lng: "80.37552102720554",
    details:
      "Famous for its wildlife including tigers and swamp deer in Uttar Pradesh.",
  },
  {
    name: "Gangotri NP",
    lat: "30.7120",
    lng: "79.4550",
    details: "Known for its stunning Himalayan landscapes and glaciers.",
  },
  {
    name: "Govind Pashu Vihar NP",
    lat: "30.1000",
    lng: "79.2000",
    details: "A national park in Uttarakhand, rich in flora and fauna.",
  },
  {
    name: "Jim Corbett NP",
    lat: "29.5486",
    lng: "78.9353",
    details: "India's first national park, known for its tiger population.",
  },
  {
    name: "Nanda Devi NP",
    lat: "30.3558",
    lng: "79.5610",
    details: "A UNESCO World Heritage Site known for its stunning peak.",
  },
  {
    name: "Rajaji NP",
    lat: "29.9040",
    lng: "78.1420",
    details:
      "Known for its beautiful landscapes and diverse wildlife in Uttarakhand.",
  },
  {
    name: "Valley of Flowers NP",
    lat: "30.7120",
    lng: "79.4550",
    details:
      "A UNESCO World Heritage site, famous for its meadows of endemic alpine flowers.",
  },
  {
    name: "Buxa NP",
    lat: "26.7000",
    lng: "88.5000",
    details: "Located in West Bengal, known for its rich biodiversity.",
  },
  {
    name: "Gorumara NP",
    lat: "26.34000",
    lng: "89.5000",
    details:
      "Known for its elephant population and lush forests in West Bengal.",
  },
  {
    name: "Jaldapara NP",
    lat: "26.7000",
    lng: "89.1333",
    details: "Famous for its rhinoceros population in West Bengal.",
  },
  {
    name: "Neora Valley NP",
    lat: "27.0853",
    lng: "88.7009",
    details:
      "Known for its rich biodiversity and beautiful landscapes in West Bengal.",
  },
  {
    name: "Singalila NP",
    lat: "27.0000",
    lng: "88.1667",
    details:
      "Famous for its trekking trails and stunning views of the Himalayas.",
  },
  {
    name: "Sunderban NP",
    lat: "22.8380",
    lng: "88.5852",
    details:
      "The largest mangrove forest in the world, known for its tigers and diverse ecosystem.",
  },
];
