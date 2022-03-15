// PARTE 01

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let corpo = document.body;
let tagH1 = document.createElement("h1");
tagH1.innerText = "Exercício 5.2 - JavaScript DOM";
corpo.appendChild(tagH1);

// 2. Adicione a tag main com a classe main-content como filho da tag body;
let corpo2 = document.body;
let tagMain = document.createElement("main");
tagMain.className = "main-content";
corpo2.appendChild(tagMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let main = document.querySelector(".main-content");
let tagSection = document.createElement("section");
tagSection.className = "center-content";
main.appendChild(tagSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let section = document.querySelector(".center-content");
let tagP = document.createElement("p");
tagP.innerText =
  "Texto dentro da tag p, que é filha do section que criei anteriormente";
section.appendChild(tagP);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let main2 = document.querySelector(".main-content");
let tagSection2 = document.createElement("section");
tagSection2.className = "left-content";
main2.appendChild(tagSection2);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let main3 = document.querySelector(".main-content");
let tagSection3 = document.createElement("section");
tagSection3.className = "right-content";
main3.appendChild(tagSection3);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let section2 = document.querySelector(".left-content");
let imagem = document.createElement("img");
imagem.src = "https://picsum.photos/200";
imagem.className = "small-image";
section2.appendChild(imagem);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let section3 = document.querySelector(".right-content");
let listaNaoOrdenada = document.createElement("ul");
section3.appendChild(listaNaoOrdenada);
let numeros = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];
for (let i = 0; i < numeros.length; i += 1) {
  let tagLi = document.createElement("li");
  tagLi.innerText = numeros[i];
  listaNaoOrdenada.appendChild(tagLi);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let main4 = document.querySelector(".main-content");
for (i = 0; i < 3; i += 1) {
  let tagH3 = document.createElement("h3");
  main4.appendChild(tagH3);
}

// PARTE 02

// 1. Adicione a classe title na tag h1 criada;


// 2. Adicione a classe description nas 3 tags h3 criadas;


// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();


// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;


// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;


// 6. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

