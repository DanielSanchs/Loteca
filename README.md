# Projeto Loteca
Este é um projeto de simulador de loteria , onde o usuario digita seis numeros e realiza um sorteio de outros seis numeros no final é verificado quantos numeros
ele acertou.
## Tecnologias Utilizadas 
- **HTML**: estrutura do site
- _CSS_: Estilização do site 
- *_JAVASCRIPT_*:Funções do site
-  ~~Bootstrap~~: Não foi utilizado

### Melhorias possiveis
1. [X] Subir para o GitHUb Pages
2. [ ] Alterar os Alerts 
3. [ ] Utilizar o BoosTrap
4. [ ] Deizar responsivo

### Disponibilizar em
[GitHub Page](https://danielsanchs.github.io/Loteca/)

#### Prints da Tela
 | id | primeira tela | Segunda tela |
 |----|---------------|--------------|
 | 1 | Loteca Limpa | Loteca preenchida|
 | 2 | ![Tela Loteca Não preenchida](https://user-images.githubusercontent.com/92760821/161781926-759066ac-b7b0-4b5d-be23-0b62e25e6fe7.png) | ![Tela Loteca preenchida](https://user-images.githubusercontent.com/92760821/161782387-f5564e80-36a3-4dd1-95db-e419feb7be88.png)|
 
 ### Função Principal 
 ```JS:
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
 ```
 
 ### Comando Git
Para iniciar o projeto 
```bash:
git init
```
