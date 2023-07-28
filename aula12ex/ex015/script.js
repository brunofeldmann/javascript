function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'besbe-h.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'home.png')
            } else {
                // idoso
                img.setAttribute('src', 'veio.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'besbe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'muie.png')
            } else {
                // idoso
                img.setAttribute('src', 'veia.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}