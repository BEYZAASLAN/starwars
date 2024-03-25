/* bakıcam buna sonra suan tam olmadı */
// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener("DOMContentLoaded", function () {
  // Yıldızların sayısı
  const count = 500;
  // HTML body elementini seç
  const body = document.querySelector("body");
  // Yıldız sayacı
  let i = 0;
  // Belirlenen sayıda yıldızları ekle
  while (i < count) {
    const star = document.createElement("i");
    // Rastgele x ve y konumları belirle
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    // Rastgele boyut belirle
    const size = Math.random() * 5;
    // Yıldızın pozisyonunu ayarla
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    // Rastgele animasyon süresi ve gecikme belirle
    const duration = Math.random() * 2;
    star.style.animationDuration = 2 + duration + "s";
    star.style.animationDelay = 2 + duration + "s";
    // Yıldızı body'ye ekle
    body.appendChild(star);
    i++;
  }
});

const charactersData = [{
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 17,
    "name": "Wedge Antilles",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    "homeworld": "corellia"
  },
  {
    "id": 18,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 19,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
  },
  {
    "id": 20,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
];

/*   console.log(charactersData); */

let charactersVisible = false; // visible değişkenini tanımlayın

const cardContainer = document.createElement("div"); // Kartları içeren bir konteyner oluştur
cardContainer.classList.add("container"); // Bootstrap container sınıfını ekleyin

function renderCharacters() {
  const cardRow = document.createElement("div"); // Kartları içeren bir sıra oluştur
  cardRow.classList.add("row"); // Bootstrap row sınıfını ekleyin

  charactersData.forEach(function (character) {
    // Yeni bir div öğesi oluştur
    const newCard = document.createElement("div");
    // Div'e "col-lg-4" sınıfını ekle
    newCard.classList.add("col-lg-3", "mb-4"); // col-lg-4 sınıfı eklenir

    // Kartın içeriğini oluştur
    newCard.innerHTML = `
      <div class="card w-75 h-100 text-center">
        <img src="${character.pic}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">Homeworld: ${character.homeworld || 'Unknown'}</p>
        </div>
      </div>
    `;

    cardRow.appendChild(newCard); // Kartı sıra içine yerleştir
  });

  cardContainer.appendChild(cardRow); // Kart sırasını konteyner içine yerleştir

  // Kartları sayfanın ortasında yer alan konteyner içine yerleştir
  document.getElementById("cardContainer").appendChild(cardContainer);
}

function removeCharacters() {
  if (charactersVisible) {
    cardContainer.innerHTML = "";
    let button = document.getElementById("button");
    button.innerText = "Karakterleri Göster";
    button.className = "btn btn-success";
  } else {
    renderCharacters(); // Karakterleri listele
    button.innerText = "Karakterleri Gizle";
    button.className = "btn btn-danger";

  }
  // Karakterlerin görünürlüğünü tersine çevir
  charactersVisible = !charactersVisible;
}

// renderCharacters fonksiyonunu çağır
renderCharacters();

// Karakterleri göster/gizle düğmesine tıklanınca işlevi çağır
document.getElementById("button").addEventListener("click", removeCharacters);


/* ANAVATANA GÖRE FİLTRELEME YAPALIM */
const homeworldsRaw = charactersData.map(character => character.homeworld || "other");
console.log(homeworldsRaw);

const homeworldsUnique = homeworldsRaw.filter((homeworld, index) => {
  return homeworldsRaw.indexOf(homeworld) === index;
});

console.log(homeworldsUnique);

const homeworldsLowercase = [];
homeworldsUnique.forEach(homeworld => {
  homeworldsLowercase.push(homeworld.toLowerCase());
});

console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;


const radioInputsContainer = document.getElementById("radioInputs");
let filteredHomeworld = ""; // Filtrelenmiş anavatanı saklamak için boş bir string

for (let i = 0; i < homeworldsUnique.length; i++) {
  const homeworld = homeworldsUnique[i];

  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.name = "homeworld";
  radioInput.value = homeworld;

  const label = document.createElement("label");
  label.textContent = homeworld;

  radioInput.addEventListener("change", function () {
    filteredHomeworld = this.value; // Seçilen anavatanı filteredHomeworld değişkenine kaydet
    console.log("Seçilen Anavatan:", filteredHomeworld);
  });

  radioInputsContainer.appendChild(radioInput);
  radioInputsContainer.appendChild(label);
  radioInputsContainer.appendChild(document.createElement("br"));
}
/* ****************************** */

function filterCharactersByHomeworld(homeworld) {
  // Öncelikle, kart konteynerini temizleyin
  cardContainer.innerHTML = "";

  // Seçilen anavatana göre karakterleri filtreleyin
  const filteredCharacters = charactersData.filter(character => (character.homeworld || "other").toLowerCase() === homeworld.toLowerCase());

  // Filtrelenmiş karakterleri görüntülemek için renderCharacters işlevini yeniden çağırın
  filteredCharacters.forEach(function (character) {
    // Yeni bir div öğesi oluştur
    const newCard = document.createElement("div");
    // Div'e "col-lg-4" sınıfını ekle
    newCard.classList.add("col-lg-3", "mb-4"); // col-lg-4 sınıfı eklenir

    // Kartın içeriğini oluştur
    newCard.innerHTML = `
      <div class="card w-75 h-100 text-center">
        <img src="${character.pic}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">Homeworld: ${character.homeworld || 'Unknown'}</p>
        </div>
      </div>
    `;

    cardContainer.appendChild(newCard); // Kartı konteynere yerleştir
  });
}


// Radio butonlarına event listener ekle
document.querySelectorAll('input[type="radio"][name="homeworld"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    if (this.checked) {
      filterCharactersByHomeworld(this.value); // Seçilen anavatanı kullanarak karakterleri filtrele
    }
  });
});

