

function randBool() {
    return Math.random() < 0.5;
}

function randInt(n) {
    //Returns a random number from 0 to n-1
    return Math.floor(n*Math.random());
}
function randElem(list) {
    const n = list.length;
    return list[randInt(n)];
}

let nomes = {
    f: ["Letícia", "Laura", "Nath", "Isa", "Migs"],
    m: ["César", "Marcelo", "Vini", "Luan", "Gusta", "Lingui", "Gil"]
};

let substantivos = {
    f: ["mão", "mãe", "mamãe", "sogra", "jabuticaba", "jaca", "manteiga"],
    m: ["avô", "pai", "tio", "cachorro", "gato", "miojo", "danoninho", "feijão", "nhoque", "cálculo"]
};

let adjetivos = {
    f:["branca", "preta", "aloprada", "maravilhosa", "católica", "ímpia", "vermelha", "safada", "teórica"],
    m:["branco", "preto", "aloprado", "maravilhoso", "católico", "ímpio", "vermelho", "safado", "teórico"],
    n:["azul","verde","comunista","indecente", "de estimação", "de pelúcia", "de açúcar", "cor de abóbora"]
}

let verbos =
    //Eu, ele, nós, eles
    [
        //andar
        [["ando", "anda", "andamos", "andam"],
        ["andei", "andou", "andamos", "andaram"],
        ["andava", "andava", "andávamos", "andavam"],
        ["andarei", "andará", "andaremos", "andarão"]],
        //atirar
        [["atiro", "atira", "atiramos", "atiram"],
        ["atirei", "atirou", "atiramos", "atiraram"],
        ["atirava", "atirava", "atirávamos", "atiravam"],
        ["atirarei", "atirará", "atiraremos", "atirarão"]],
        //aloprar
        [["alopro", "alopra", "alopramos", "alopram"],
        ["aloprei", "aloprou", "alopramos", "alopraram"],
        ["aloprava", "aloprava", "aloprávamos", "alopravam"],
        ["aloprarei", "aloprará", "alopraremos", "aloprarão"]],
        //mijar
        [["mijo", "mija", "mijamos", "mijam"],
        ["mijei", "mijou", "mijamos", "mijaram"],
        ["mijava", "mijava", "mijávamos", "mijavam"],
        ["mijarei", "mijará", "mijaremos", "mijarão"]],
        //comer
        [["como", "come", "comemos", "comem"],
         ["comi", "comeu", "comemos", "comeram"],
         ["comia", "comia", "comíamos", "comiam"],
         ["comerei", "comerá", "comeremos", "comerão"]],
         //Inventar
        [["invento", "inventa", "inventamos", "inventam"],
         ["inventei", "inventou", "inventamos", "inventaram"],
         ["inventava", "inventava", "inventávamos", "inventavam"],
         ["inventarei", "inventará", "inventaremos", "inventarão"]],
        //Gostar
        [["gosto", "gosta", "gostamos", "gostam"],
         ["gostei", "gostou", "gostamos", "gostaram"],
         ["gostava", "gostava", "gostávamos", "gostavam"],
         ["gostarei", "gostará", "gostaremos", "gostarão"]]
    ];
let verbos_infinitivo = ["andar", "atirar", "aloprar", "mijar", "coisar", "matar", "destruir", "brincar"];
let verbos_ligacao = 
    [
        ["sou", "é", "somos", "são"],
        ["estou", "está", "estamos", "estão"]
    ]

let verbos_auxiliares = 
    [
        //Ir
        [["vou", "vai", "vamos", "vão"],
         ["fui", "foi", "fomos", "foram"],
         ["ia", "ia", "íamos", "iam"],
         ["irei", "irá", "iremos", "irão"]],
        //Querer
        [["quero", "quer", "queremos", "querem"],
         ["quis", "quis", "quisemos", "quereram"],
         ["queria", "queria", "queríamos", "queriam"],
         ["quererei", "quererá", "quereremos", "quereriam"]]
    ]

let pron_possessivos = {
    f:["meu", "seu", "nosso"],
    m:["minha", "sua", "nossa"]
};

let artigos = {
    f:["a", "uma"],
    m:["o", "um"]
}

let expressoes_verbais = [
    function inventar_de(tempo, pessoa) {
        return verbos[5][tempo][pessoa] + " de";
    },
    function gostar_um_pouco_mais_de(tempo, pessoa) {
        return verbos[6][tempo][pessoa] + " um pouquinho mais de";
    }
]

//let expressoes_adjetivas = ["de estimação", ""]

//"<sujeito> <verbo> <objeto>"
function sujeito(pessoa) {
    if (pessoa == 0) { //1a pessoa sing
        return "eu";
    }
    else if (pessoa == 1) { //3a pessoa sing
        if(randBool()) {
            let adj = randElem(randElem([adjetivos.m, adjetivos.n]));
            return randElem(artigos.m) + " " + randElem(substantivos.m) + " " + adj;
        }
        else {
            let adj = randElem(randElem([adjetivos.f, adjetivos.n]));
            return randElem(artigos.f) + " " + randElem(substantivos.f) + " " + adj;
        }
    }
    else if(pessoa == 2) { //1a pessoa plural
        return "nós";
    }
    else if (pessoa == 3) { //3a pessoa plural
        return "eles";
    }

}
function verbo(tempo, pessoa) {
    let n = randInt(3);
    if(n==0) {
        return randElem(verbos)[tempo][pessoa];
    }
    else if(n==1) {
        return randElem(verbos_auxiliares)[tempo][pessoa] + " " + randElem(verbos_infinitivo);
    }
    else if(n==2) {
        return randElem(expressoes_verbais)(tempo, pessoa) + " " + randElem(verbos_infinitivo);
    }
}

function frase() {
    let tempo = randInt(4);
    let pessoa = 1;
    return sujeito(pessoa) + " " + verbo(tempo, pessoa) + " " + sujeito(pessoa);
}

function novaFrase() {
    let frase_final = frase();
    frase_final = frase_final.charAt(0).toUpperCase() + frase_final.slice(1);
    frase_final = frase_final + ".";
    document.getElementById("frase").textContent = frase_final;
}

novaFrase();

let button = document.getElementById("botão");
button.addEventListener('click', novaFrase);