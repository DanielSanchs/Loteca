var numSort = [];
var numEsco = [];

function contAcertos(){
    var contA = 0;
    numEsco.forEach(function (value, index){
        
        if(numSort.includes(value)){
            contA = contA + 1;
        }
        
    });
    document.getElementById("acertos").innerHTML = contA;
    
}

function getValor(valor, pos){
    valor = Number(valor);
    if(valor <= 0 || valor > 60){
        alert("Numero inválido, digite um numero entre 1 e 60");
        document.getElementById(`num${pos+1}`).value = "";
    }else if(numEsco.includes(valor)){
        alert("Numero repetido, escolha um outro numero");
    }else{
        numEsco[pos] = valor;
        console.log(numEsco);
    }
}

function sorteio(){
    var cont = 0;
    numSort = [];
    while(cont < 6){
        let num = 60 * Math.random();
        num = Math.ceil(num);

        if(!numSort.includes(num)){
            numSort[cont] = num;
            console.log(numSort);
            cont++;
        }
    }
    document.getElementById("sorteados").innerHTML = numSort;
    contAcertos();
}