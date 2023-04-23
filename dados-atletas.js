let dvForm = document.querySelector("#dadosAtleta")
let js_nome = document.querySelector("#Nome");
let js_sobrenome = document.querySelector("#sobrenome");
let js_peso = document.querySelector("#peso");
let js_altura = document.querySelector("#Altura");
let js_idade = document.querySelector("#idade");
let js_notas = document.querySelector("#notas");
let js_lista = document.querySelector("#lista");
  
  function calculaIMC(alt,pes){
    alt = alt/100;
    let imc_a ="IMC: "+(pes/(alt*alt));
    return imc_a
  };
  function calculaMediaValida(notas){
    let b = notas.sort(comparar);
    b = b.slice(1,4);
    let total=0;
    b.forEach(function(somar){
    somar = parseFloat(somar);
    total=total+somar
  });
  let media = total/(b.length)
  return "Média: "+media;
  }//} fecha calculaMediaValida
  function obtemNomeAtleta(nome,sobr){
    return "Nome: "+nome + " "+ sobr;
  }// fecha obtemNome
function obtemIdadeAtleta(id){
  return "Idade: "+id;
}//fecha obtemIdadeAtleta()  
function obtemPesoAtleta(peso){
  return "Peso: "+peso;
}// fecha obtemPesoAtleta()
function obtemNotasAtleta(notas){
     return  "Notas: "+ notas;
}// fecha obtemNotasAtleta()
function obtemAltura(alt){
  return "Altura: "+alt;
}//fecha obtemAltura

 dvForm.addEventListener("submit", event => {
    event.preventDefault();
  let notas1 = js_notas.value.split(",");
  let cat = calculaCategoria(js_idade.value);
  let nomeA = obtemNomeAtleta(js_nome.value,js_sobrenome.value);
  let idadeA = obtemIdadeAtleta(js_idade.value);
  let pesoA = obtemPesoAtleta(js_peso.value);
  let alturaA = obtemAltura(js_altura.value);
  let notasA = obtemNotasAtleta(notas1);
  let imcA = calculaIMC(js_altura.value,js_peso.value);
  let mediaA = calculaMediaValida(notas1);
  let frase = `<h1> Dados Gerais do Atleta </h1><p> ${nomeA}</p><p> ${idadeA}</p><p> ${cat}</p><p> ${pesoA}</p><p> ${alturaA}</p><p> ${imcA}</p><p> ${notasA}</p><p> ${mediaA}</p>`
  js_lista.innerHTML= frase;
 });
   
// Declara o atleta

function comparar(a,b){;
  return a-b;
}

function calculaCategoria(id){
    let ca="Categoria: ";
    if (id>=9 && id<=11){
      ca=ca+"Infantil"} else{
        if (id==12 ||id==13){
           ca=ca+"Juvenil"} else {
            if(id==14 || id==15){
               ca=ca+"intermediario"}else{
              if (id>=16 && id<=30){
                 ca=ca+"Adulto"}else{
                   ca=ca+"Sem Categoria";
                };
              };
          };
      };
    return ca;
  }} 
