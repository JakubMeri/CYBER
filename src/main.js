let otazka = [
{
otazka: "Ako sa mas?",
odpovede:[{
    odpoved: "ano",
    spravna: 1
},
{
    odpoved: "nie",
    spravna: 0
},
{
    odpoved: "mozno",
    spravna: 0
}
],
hint: "nejake kokotiny, co ti napovie",
img: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
},
{
    otazka: "ROZUMIES?",
    odpovede:[{
        odpoved: "ano",
        spravna: 1
    },
    {
        odpoved: "nie",
        spravna: 0
    },
    {
        odpoved: "mozno",
        spravna: 0
    }
    ],
    hint: "nejake kokotiny, co ti napovie",
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
                document.querySelector(".data").innerHTML = "SPRAVNE";
                nextQ();
                spravne.push(1);
            }
            else{
                modal.style.display = "flex";
                document.querySelector(".data").innerHTML = `${otazka[Q].hint}`;
                nextQ();
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

                test.innerHTML = `${spravne.reduce( (count, curent) => curent += count)} / ${otazka.length} <button onclick= relocate() class='btn-clasic'>DOMOV</button>`;
                image.style.background = "linear-gradient(to right ,#0BBFA7, #4200F6)";
                image.innerHTML = "Zamakaj na sebe";
               /*  window.location.href = "../index.html";  */
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

const relocate = () => {
    window.location.href = "../index.html";
}


