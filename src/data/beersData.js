// src/data/beersData.js
const beersData = [
    {
        id: 1,
        batchNumber: 93,
        name: "Domówka",
        styleName: "Old School Pale Ale",
        description: "Domówka to lekkie, przyjemne piwo na amerykańskim oraz nowozelandzkim chmielu, ale w subtelnym wydaniu. Delikatna goryczka i wyważony profil słodowy sprawiają, że jest to piwo, imprezowo, serialowo, spotkaniowe. Tak zwane piwo \"codzienne\", do wypicia z przyjemnością, bez uniesień. Oczywiście nie polecam picia piwa codziennie. Tak się tylko mówi. W smaku wyczujesz połączenie łagodnej, zbożowej bazy słodowej, w zapachu lekkie nuty owoców tropikalnych uzyskanych z chmielu.",
        malts: ["Pale Ale", "Abbey Malt"],
        hops: [
            "Simcoe (USA)",
            "Riwaka (NZ)",
            "Mosaic (USA)",
            "Centennial (USA)",
            "Ekuanot (USA)"
        ],
        yeast: "US-05",
        adjuncts: null,
        extract: 11.1,
        alcohol: 4.4,
        ibu: 36,
        brewFatherLink: "https://share.brewfather.app/2esywTrJXJ1xSw"
    },
    {
        id: 2,
        batchNumber: 94,
        name: "Wolnosypane",
        styleName: "Polish Pale Ale",
        description: "Niektóre piwa powstają z precyzyjnie zaplanowanej receptury, a inne… z przypadku, z ustawki po pracy z Danielem, Dominikiem i Marcelem. Pomieszaliśmy w garze, zamówiliśmy pizzę, zjedliśmy i brzuch bolał. Ale piwo wyszło spoko.\n\nWolnosypane to Ale na polskim chmielu Książęcym i tyle. Lekkie, z delikatną goryczką, bez zbędnych fajerwerków. Takie do pizzy – dokładnie tak, jak powstało.",
        malts: ["Pale Ale", "Cookie", "Pszeniczny"],
        hops: ["Ksiąźęcy (PL)"],
        yeast: "CROWN American Ale Yeast",
        adjuncts: null,
        extract: 13.9,
        alcohol: 5.6,
        ibu: 46,
        brewFatherLink: "https://share.brewfather.app/7iXszBZmATRT13"
    },
    {
        id: 3,
        batchNumber: 95,
        name: "50 metrów dalej jest taniej",
        styleName: "Polish Pale Ale",
        description: "Delikatne pale ale z nutą słodkości od słodów cookies i pszenicznego. Amerykańskie drożdże US-05 dają czysty charakter, a polski chmiel Książęcy zapewnia tradycyjną goryczkę z aromatycznym wykończeniem. Harmonijne piwo łączące amerykańską elegancję z polskim rzemiosłem - łatwo pijące się ale o wyrazistej osobowości.",
        malts: ["Pale Ale", "Cookie", "Pszeniczny"],
        hops: ["Ksiąźęcy (PL)"],
        yeast: "US-05",
        adjuncts: null,
        extract: 12.9,
        alcohol: 5.2,
        ibu: 38,
        brewFatherLink: null
    },
    {
        id: 4,
        batchNumber: 96,
        name: "Kolejna Piwo",
        styleName: "Experimental Ale",
        description: "Opis kolejnego piwa...",
        malts: ["Pale Ale", "Vienna"],
        hops: ["Citra (USA)", "Saaz (CZ)"],
        yeast: "London Ale Yeast",
        adjuncts: ["Owoce cytrusowe"],
        extract: 12.5,
        alcohol: 5.0,
        ibu: 40,
        brewFatherLink: null
    },
    {
        id: 5,
        batchNumber: 97,
        name: "Nowa Stara Szkoła",
        styleName: "Modern Grodziskie",
        description: "\"Nowa Stara Szkoła\" to lekkie grodziskie, które pamięta o korzeniach, ale nie zamyka się w" +
            " muzealnej gablocie. Pozostaje rześkie, musujące i ultralekkie, jednak podane we współczesnej interpretacji.\n\nW aromacie wszystko dzieje się subtelnie. Nutka dymu pojawia się tylko wtedy, gdy piwo jest naprawdę dobrze schłodzone - bardziej jako delikatne echo tradycji niż dominujący akcent. To świadoma rezygnacja z klasycznego \"ogniska w szklance\" na rzecz czystszej, bardziej przystępnej formy.\n\nZ kolei połączenie Tallusa i Książęcego wnosi zupełnie inny, świeży wymiar: lekko cytrusową, zieloną, wręcz soczystą nutę, która pięknie kontruje pszeniczną bazę. Gorycz jest czysta i uprzejma, a chmielenie na zimno podkręca nowoczesny charakter całości.\n\n\"Nowa Stara Szkoła\" to piwo lekkie jak wakacyjne popołudnie, ale niepuste. To grodziskie, które szanuje tradycję, jednocześnie pokazując, że można ją opowiedzieć na nowo - z finezją, świeżością i bez przesady. Idealne na pierwszy łyk... i na kolejny też.",
        malts: [
            "Wheat Malt Pale (Weyermann)",
            "Oak Smoked Wheat Malt (Weyermann)"
        ],
        hops: [
            "Książęcy (PL)",
            "Talus (USA)"
        ],
        yeast: "K-97 (Fermentis)",
        adjuncts: null,
        extract: 8.0,
        alcohol: 3.0,
        ibu: 28,
        brewFatherLink: "https://share.brewfather.app/NgjthTwEkLcQAj"
    }
];

export default beersData;