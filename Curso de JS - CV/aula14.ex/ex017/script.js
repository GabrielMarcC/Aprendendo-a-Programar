function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let msg = document.querySelector('div#msg')
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        msg.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados')
    }else{
        msg.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p= Number(passo.value)
        if(p <= 0){
            alert('Passo inválido')
            p = 1
        }
        
        if(i < f){
            // Contagem crescente

            for(let c = i; c <= f; c += p){
                msg.innerHTML +=` ${c} \u{1F449}`
            }
        }else{
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                msg.innerHTML += ` ${c} \u{1F449}`
            }
        }
        msg.innerHTML += ' \u{1F3C1}'
    }
        
    
}
