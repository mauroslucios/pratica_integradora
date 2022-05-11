function Temp(){
    var i, maior = 0, menor = 99, indiceMaior, indiceMenor, choveu = 0, sol =0;
    const vet = new Array(12);
    
    for(i = 0;i < 12; i++){ 
        vet[i] = parseFloat(window.prompt("Entre com a temperatura do " + (i+1) + "º dia."));
        chuva = parseInt(window.prompt("Escolha 1 para sol e 2 para chuva:"));
        dia = parseFloat(vet[i]);
        document.write("O valor da temperatura do dia " +  (i+1)+ "º e = " + parseFloat(dia) + "<br>");
        if(chuva == 2){
            choveu += 1;
        }else{
            sol += 1;
        }   
       
    }

    for( i = 0;i < 12; i++){
       if(menor > vet[i] ){
           menor = vet[i] ;
           indiceMenor = i;
       }
       if(maior < vet[i] ){
           maior = vet[i] ;
           indiceMaior = i;
       }
    }

    document.write("A menor temperatura foi " + parseFloat(menor).toFixed(2)+" e ocorreu em ");

    switch(indiceMenor){
        case 0:
            document.write("Janeiro"+"<br>");
            break;
        case 1:
            document.write("Fevereiro"+"<br>");
            break;
        case 2:
            document.write("Março"+"<br>");
            break;
        case 3:
            document.write("Abril"+"<br>");
            break;
        case 4:
            document.write("Maio"+"<br>");
            break;
        case 5:
            document.write("Junho"+"<br>");
            break;
        case 6:
            document.write("Julho"+"<br>");
            break;
        case 7:
            document.write("Agosto"+"<br>");
            break;
        case 8:
            document.write("Setembro"+"<br>");
            break;
        case 9:
            document.write("Outubro"+"<br>");
            break;
        case 10:
            document.write("Novembro"+"<br>");
            break;
        case 11:
            document.write("Dezembro"+"<br>");
            break;
    }

    document.write("A maior temperatura foi " + parseFloat(maior).toFixed(2)+" e ocorreu em ");
    switch(indiceMaior){
        case 0:
            document.write("Janeiro"+"<br>");
            break;
        case 1:
            document.write("Fevereiro"+"<br>");
            break;
        case 2:
            document.write("Março"+"<br>");
            break;
        case 3:
            document.write("Abril"+"<br>");
            break;
        case 4:
            document.write("Maio"+"<br>");
            break;
        case 5:
            document.write("Junho"+"<br>");
            break;
        case 6:
            document.write("Julho"+"<br>");
            break;
        case 7:
            document.write("Agosto"+"<br>");
            break;
        case 8:
            document.write("Setembro"+"<br>");
            break;
        case 9:
            document.write("Outubro"+"<br>");
            break;
        case 10:
            document.write("Novembro"+"<br>");
            break;
        case 11:
            document.write("Dezembro"+"<br>");
            break;
    }
    document.write("Tivemos " + sol + " dia(s) de sol.<br>");
    document.write("Tivemos " + choveu + " dia(s) de chuva.<br>");
}