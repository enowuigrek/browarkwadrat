// src/data/beersData.js
// slug    — adres podstrony; musi zgadzać się z kodem QR na etykiecie, nie zmieniać
// color   — tło podstrony i kafla (kolor etykiety)
// accent  — kolor z tej samej rodziny: cień nazwy
// intro   — jedno zdanie wprowadzające; description — krótkie akapity
// draft   — piwo bez treści, ukryte na liście
const beersData = [
    {
        id: 1,
        batchNumber: 93,
        slug: "domowka",
        name: "Domówka",
        styleName: "Old School Pale Ale",
        color: "#f5b82e",
        accent: "#8a3c06",
        intro: "Lekkie, przyjemne piwo na amerykańskim i nowozelandzkim chmielu, ale w subtelnym wydaniu.",
        description: [
            "Delikatna goryczka i wyważony profil słodowy sprawiają, że jest to piwo imprezowe, serialowe, spotkaniowe.",
            "Tak zwane piwo „codzienne”, do wypicia z przyjemnością, bez uniesień. Oczywiście nie polecam picia piwa codziennie. Tak się tylko mówi.",
            "W smaku wyczujesz łagodną, zbożową bazę słodową, w zapachu lekkie nuty owoców tropikalnych z chmielu."
        ],
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
        slug: "wolnosypane",
        name: "Wolnosypane",
        styleName: "Polish Pale Ale",
        color: "#e8d64f",
        accent: "#6d5a0a",
        intro: "Niektóre piwa powstają z precyzyjnie zaplanowanej receptury, a inne… z przypadku.",
        description: [
            "To akurat z ustawki po pracy z Danielem, Dominikiem i Marcelem. Pomieszaliśmy w garze, zamówiliśmy pizzę, zjedliśmy i brzuch bolał. Ale piwo wyszło spoko.",
            "Wolnosypane to Ale na polskim chmielu Książęcym i tyle. Lekkie, z delikatną goryczką, bez zbędnych fajerwerków.",
            "Takie do pizzy – dokładnie tak, jak powstało."
        ],
        malts: ["Pale Ale", "Cookie", "Pszeniczny"],
        hops: ["Książęcy (PL)"],
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
        slug: "dalejjesttaniej",
        name: "50 metrów dalej jest taniej",
        styleName: "Polish Pale Ale",
        color: "#d6d33a",
        accent: "#4f5a12",
        intro: "Delikatne pale ale z nutą słodkości od słodów cookie i pszenicznego.",
        description: [
            "Amerykańskie drożdże US-05 dają czysty charakter, a polski chmiel Książęcy zapewnia tradycyjną goryczkę z aromatycznym wykończeniem.",
            "Harmonijne piwo łączące amerykańską elegancję z polskim rzemiosłem – łatwo pijące się, ale o wyrazistej osobowości."
        ],
        malts: ["Pale Ale", "Cookie", "Pszeniczny"],
        hops: ["Książęcy (PL)"],
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
        slug: null,
        name: "Kolejna Piwo",
        styleName: "Experimental Ale",
        color: "#ff3d8a",
        accent: "#ffffff",
        draft: true,
        intro: "Opis kolejnego piwa...",
        description: [],
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
        slug: "nowastarszkola",
        name: "Nowa Stara Szkoła",
        styleName: "Modern Grodziskie",
        color: "#dcbd76",
        accent: "#6b4e22",
        intro: "Lekkie grodziskie, które pamięta o korzeniach, ale nie zamyka się w muzealnej gablocie.",
        description: [
            "Pozostaje rześkie, musujące i ultralekkie, jednak podane we współczesnej interpretacji.",
            "W aromacie wszystko dzieje się subtelnie. Nutka dymu pojawia się tylko wtedy, gdy piwo jest naprawdę dobrze schłodzone – bardziej jako delikatne echo tradycji niż dominujący akcent. To świadoma rezygnacja z klasycznego „ogniska w szklance” na rzecz czystszej, bardziej przystępnej formy.",
            "Połączenie Talusa i Książęcego wnosi świeży wymiar: lekko cytrusową, zieloną, wręcz soczystą nutę, która pięknie kontruje pszeniczną bazę. Gorycz jest czysta i uprzejma, a chmielenie na zimno podkręca nowoczesny charakter całości.",
            "Piwo lekkie jak wakacyjne popołudnie, ale niepuste. Grodziskie, które szanuje tradycję, a jednocześnie pokazuje, że można ją opowiedzieć na nowo – z finezją, świeżością i bez przesady.",
            "Idealne na pierwszy łyk… i na kolejny też."
        ],
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

export const publishedBeers = beersData.filter(beer => !beer.draft && beer.slug);

export default beersData;
