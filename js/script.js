function temperatura(){
    var media = 0;
    var total = 0;
    var qtdDiasMaior = 0;
    var choveu = 0;
    var sol = 0;
    var maior = 0;
    var menor = 0;
    const vet = new Array(5);
    
    for(i = 0;i <= vet.length-1; i++){           
        dia = parseFloat(window.prompt("Entre com a temperatura do " + (i+1) + "º dia."));
        chuva = parseInt(window.prompt("Escolha 1 para sol e 2 para chuva:"));
        document.write("O valor da temperatura do dia " +  (i+1)+ "º e= " + dia + "<br>");
        total += dia;
         if(dia > 30){
             qtdDiasMaior = (qtdDiasMaior + 1);
         } 
         if(chuva == 2){
             choveu += 1;
         }else{
             sol += 1;
         }       
         if(dia > maior){
            maior = dia;
        }else {
            menor = dia;
        }  
    }

    
    media = parseFloat(total/vet.length).toFixed(2);
    document.write("<br>A média das temperaturas é de : " + media + ".<br>");  
    document.write("A quantidade de dias que a temperatura foi maior que 30º foram de " + qtdDiasMaior + " dias.<br>");
    document.write("Tivemos " + sol + " dia(s) de sol.<br>");
    document.write("Tivemos " + choveu + " dia(s) de chuva.<br>");
    document.write("A maior temperatura foi de: " + maior + ".<br>");
    document.write("A menor temperatura foi de: " + menor + ".<br>");
}