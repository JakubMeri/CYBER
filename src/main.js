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
img: ".././img/URL.jpg"
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
    img: "../img/UNSAFE.jpeg"
    },
{
    otazka: "Aká je skratka bezpečnostného certifikátu?",
    odpovede:[{
    odpoved: "SSL certifikát",
    spravna: 1
    },
{
    odpoved: "SML certifikát",
    spravna: 0
    },
    {
    odpoved: "SLS certifikát",
    spravna: 0
        }
    ],
    hint: "SSL je skratka pre anglický <b>Secure Sockets Layer protokol</b>, ktorý sa nachádza medzi transportnou a aplikačnou vrstvou. Tento protokol (certifikát) zabezpečuje <b>šifrovaný prenos</b> dát medzi vašim počítačom a webstránkou alebo serverom, na ktoré sa pripájate cez internet. Pripojenie zabezpečené <b>SSL certifikátom chráni šifrovaním všetky prenášané dáta</b> - napríklad platobné údaje, či vašu online komunikáciu. Okrem bezpečnosti však SSL prináša aj ďalšie výhody - jednou z nich je napríklad aj lepšie SEO skóre z pohľadu vyhľadávacích nástrojov.",
    img: ".././img/SSL.jpg"
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
    hint: "<b>Zámok</b> v URL nám predstavuje prítomnosť SSL certifikátu, ktorý nám zabezpečuje ochranu našich <b>osobných údajov</b>.",
    img: ".././img/SECURITY.jpeg"
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
        hint: "Treba si dávať na preklepy v URL. Častokrát môžu byť vytvorené <b>rovnako vyzerajúce stránky na pohľad</b> no v skutočnosti sú to len kópie, ktoré od vás majú získať osobné informácie ako sú čísla kreditných kariet, rodné čísla atď...",
        img: ".././img/write.gif"
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
            hint: "Šifrovanie emailov má zmysel v prípade, že prostredníctvom e-mailu posielame citlivé údaje, či už firemné alebo súkromné. Tento krok zťažuje hackerom získať vaše informácie.",
            img: ".././img/VIRUS.jpg"
            },
            {
                otazka: "Čo je to počítačový vírus?",
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
                hint: "Počítačový vírus v oblasti počítačovej bezpečnosti označuje program alebo kód, ktorý sa dokáže <b>sám šíriť bez vedomia používateľa</b>. Aby sa mohol rozmnožovať, vkladá kópie svojho kódu do iných spustiteľných súborov alebo dokumentov, ktoré sa tak stávajú prostriedkom na aktiváciu ďalšieho vírusu. (Pri jednoduchších vírusoch dochádza <b>ku kopírovaniu jeho samotného viackrát na disk poprípade premenovanie kópií</b>.) Takýto program sa teda chová podobne ako biologický vírus, ktorý sa šíri vkladaním svojho genetického kódu do živých buniek.",
                img: ".././img/VIRUS.jpg"
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
                    img: ".././img/WIFI.jpg"
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
                document.querySelector(".data").innerHTML = `<span>SPRÁVNA ODPOVEĎ</span><br><br><p>${otazka[Q].hint}</p>`;
                spravne.push(1);
            }
            else{
                modal.style.display = "flex";
                document.querySelector(".data").innerHTML = `<span>NESPRÁVNA ODPOVEĎ</span><br><br> <p>${otazka[Q].hint}</p>`;
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
                let hodnotenie = spravne.reduce( (count, curent) => curent += count)
                test.innerHTML = `<h2>Správne si zodpovedal na <br> ${hodnotenie} / ${otazka.length} otázok</h2> <button onclick= relocate() class='btn-clasic'>DOMOV</button>`
                image.style.background = "linear-gradient(to right ,#0BBFA7, #4200F6)";
                if(hodnotenie >= 7){
                    image.innerHTML = "Veľmi dobre";
                }
                else if(hodnotenie >= 4){
                    image.innerHTML = "Zaber na svojom vzdelaní";
                }
                else{
                    image.innerHTML = "Radšej na internet nechoď";
                }
                
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


