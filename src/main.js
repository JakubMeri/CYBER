let otazka = [
{
otazka: "Čo znamená skratka URL?",
odpovede:[{
    odpoved: "Webová adresa, link, hypertextový odkaz",
    spravna: 1
},
{
    odpoved: "Ušno-nosno-krčné oddelenie",
    spravna: 0
},
{
    odpoved: "Ultra rýchly lasér",
    spravna: 0
}
],
hint: "URL celým názvom <b>Uniform Resource Locator</b> je reťazec znakov s definovanou štruktúrou, ktorá slúži k presnej špecifikácií umiestnenia zdroja informácií na Internete.",
img: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
},
{
    otazka: "Je stránka s označením http:// bezpečná?",
    odpovede:[{
        odpoved: "áno",
        spravna: 0
    },
    {
        odpoved: "nie",
        spravna: 1
    }
    ],
    hint: "Treba si dávať pozor, aby stránka mala https. To <b>s</b> na konci 'http' znamená, že je daná stránka zabezpečená.",
    img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
    },
{
    otazka: "Aká je skratka bezpečnostného certifikátu?",
    odpovede:[{
    odpoved: "SSL certifikát",
    spravna: 0
    },
{
    odpoved: "SML certifikát",
    spravna: 0
    },
    {
    odpoved: "SLS certifikát",
    spravna: 1
        }
    ],
    hint: "INFO",
    img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
    },
    {
    otazka: "Čo predstavuje obrázok zámku v URL odkaze?",
    odpovede:[{
    odpoved: "stránka je nedostupná",
    spravna: 0
    },
    {
    odpoved: "stránka je nebezpečná",
    spravna: 0
    },
    {
    odpoved: "stránka je uzamknutá",
    spravna: 0
        },
    {
    odpoved: "stránka je bezpečná",
    spravna: 1
    }
    ],
    hint: "INFO",
    img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
    },
    {
        otazka: "Je v poriadku ak je v URL odkaze preklep?",
        odpovede:[{
        odpoved: "áno",
        spravna: 0
        },
        {
        odpoved: "nie",
        spravna: 1
        }
        ],
        hint: "INFO",
        img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
        },
        {
            otazka: "Má zmyslel šifrovanie emailov?",
            odpovede:[{
            odpoved: "áno",
            spravna: 1
            },
            {
            odpoved: "nie",
            spravna: 0
            }
            ],
            hint: "INFO",
            img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
            },
            {
                otazka: "Čo je to počítačoví vírus?",
                odpovede:[{
                odpoved: "Je to chrípka počítačov",
                spravna: 0
                },
                {
                odpoved: "Škodlivý, nebezpečný program alebo kód",
                spravna: 1
                },
                {
                    odpoved: "Červík v základovej doske",
                    spravna: 0
                    }
                ],
                hint: "INFO",
                img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
                },
                {
                    otazka: "Je bezpenčné používanie internetbankingu prostredníctvom verejnej WiFi siete?",
                    odpovede:[{
                    odpoved: "áno",
                    spravna: 0
                    },
                    {
                    odpoved: "nie",
                    spravna: 1
                    }
                    ],
                    hint: "Pri používaní verejnej WiFi siete je potrebná opatrnosť. Vírusi a hackerské útoky nie sú cielen na bežných ľudí. Napadnutie Vášho zariadenia vírusom môže byť spsobené nedbanlivosťou a neopatrnosťou. Na verejných WiFi sietiach môžete surfovať po internete, je však potrebné dať si pozor na to, aké stránky prostredníctvom tejto siete použijete. Odborníci neodporúčajú používať internetbanking a iné pre vás dôležité stránky s hesla prostredníctvom verejných sietí. Ak, nastane situácia, že ste nútený použiť takúto možnosť existujú rôzne možnosti ako takéto stránky navštíviť a neohroziť sa. Takýmto príkladom je napríklad animymatizátor siete VPN, ktorý zapezpečuje ochranu vášho pripojenia.     Viete čo znamená správa hesiel?",
                    img: "https://www.soitron.com/wp-content/uploads/2019/01/iStock-614137876-scaled.jpg"
                    },
];


let test = document.querySelector(".question");
let image = document.querySelector(".image");
let modal = document.querySelector(".modal");
let spravne  = [];
let Q = [0];
const loadQuestion = () => {
    test.innerHTML = `<h2>${otazka[Q].otazka}</h2>`;
     otazka[Q].odpovede.forEach( odpoved =>{
        test.innerHTML += `<span><input class="odpoved" type="radio" name=${otazka[Q].otazka} value=${odpoved.spravna}>${odpoved.odpoved}</span>`;
    })
    test.innerHTML += `<button id="over" class="btn-clasic">OVER</button>`
    image.style.background = `url(${otazka[Q].img}) center`;
    image.style.backgroundSize = `cover`;

    let btn = document.getElementById("over");
    btn.addEventListener("click", () => {
    let ziskajOdpovede = document.querySelectorAll(".odpoved");
    ziskajOdpovede.forEach( odpoved => {
        if(odpoved.checked){
            if(odpoved.value == 1){
                modal.style.display = "flex";
                document.querySelector(".data").innerHTML = "<span>SPRÁVNA ODPOVEĎ</span><br>" + otazka[Q].hint;
                spravne.push(1);
            }
            else{
                modal.style.display = "flex";
                document.querySelector(".data").innerHTML = `<span>NESPRÁVNA ODPOVEĎ</span><br> ${otazka[Q].hint}`;
                spravne.push(0);
            }
        }
        else{

        }
    });
});
}


loadQuestion();

let nextQ = () =>{
    document.getElementById("next").addEventListener("click", () => {
        if(Q[0] == otazka.length - 1){
            modal.style.display = "none";

                test.innerHTML = `<h2>Správne si zodpovedal na <br>${spravne.reduce( (count, curent) => curent += count)} / ${otazka.length}b</h2> <button onclick= relocate() class='btn-clasic'>DOMOV</button>`;
                image.style.background = "linear-gradient(to right ,#0BBFA7, #4200F6)";
                image.innerHTML = "Zamakaj na sebe";
        }
        else if(Q[0] == otazka.length - 2){
            document.getElementById("next").innerHTML = "KONIEC";
            modal.style.display = "none";
            Q[0]++;
            loadQuestion();
        }
        else{
            Q[0]++;
            modal.style.display = "none";
            loadQuestion();
        }   
    });
}
nextQ();
const relocate = () => {
    window.location.href = "../index.html";
}


