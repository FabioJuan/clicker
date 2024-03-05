
var bnt = document.getElementById("botao")
var bntshop = [document.getElementById("1"),document.getElementById("2")
            ,document.getElementById("3"),document.getElementById("4"),
            document.getElementById("5"),document.getElementById("6")
            ,document.getElementById("7"),document.getElementById("8")]

let val = [10,100,1500,5000,15000,100000,1000000,3000000]
var pontos = document.getElementById("pnt")
var pnt = 0
var soma = 0
var porseg = document.getElementById("porseg")
bnt.addEventListener("mouseenter",encima)
bnt.addEventListener("mouseout", fora)
bnt.addEventListener("click", clique)

function encima(){
    bnt.style.width = '150px'
    bnt.style.height = "150px"
}
function clique(){
    pnt++
    pontos.innerHTML = pnt.toFixed()
}
function  fora(){
    bnt.style.width = '180px'
    bnt.style.height = '180px'
}
setInterval(function(){
    pnt += soma
    pontos.innerHTML = pnt.toFixed()
    console.log(pnt)
}, 1000);
function encimashop(i){
    bntshop[i].style.background = '#ffb492'
}
function forashop(i){
    bntshop[i].style.background = '#ab1aff'
}
function shop(i){
    
    switch(i){
        case 0:
            if(pnt >= val[0]){
                soma += 0.1
                pnt -= val[0]
                val[0] += 5
            }
            break;
        case 1:
            if(pnt >= val[1]){
                soma += 1
                pnt -= val[1]
                val[1] += val[1] * 0.1
            }
            break;
        case 2:
            if(pnt >= val[2]){
                soma += 8
                pnt -= val[2]
                val[2] += val[2] * 0.1
            }
            break;
        case 3:
            if(pnt >= val[3]){
                soma += 14
                pnt -= val[3]
                val[3] += val[3] * 0.1
            }
            break;
        case 4:
            if(pnt >= val[4]){
                soma += 30
                pnt -= val[4]
                val[4] += val[4] * 0.1
            }
            break;
        case 5:
            if(pnt >= val[5]){
                soma += 100
                pnt -= val[5]
                val[5] += val[5] * 0.1
            }
            break;
        case 6:
            if(pnt >= val[6]){
                soma += 1000
                pnt -= val[6]
                val[6] += val[6] * 0.5
            }
        case 7:
            if(pnt >= val[7]){
                soma += 5000
                pnt -= val[7]
                val[7] += val[7] * 0.5
            }
            break;
        
    }
        for(e = 0;e < bntshop.length;e++){
            bntshop[e].innerHTML = val[e].toFixed(0) 
        }
        porseg.innerHTML = `cliques por ${soma.toFixed(2)}`
}
function loaded(){
    for(e = 0;e < bntshop.length;e++){
        bntshop[e].innerHTML = val[e].toFixed(0) 
    }
    porseg.innerHTML = `cliques por ${soma.toFixed(2)}`  
}
