//console.log(document.title = 'Javacript DOM')
//document.write('Sou o uso do document.write')
//document.getElementById('test').innerHTML = 'Sou um novo texto'

setTimeout(function () {
    //document.getElementById('test').innerHTML = 'Sou um novo texto'
    //document.getElementById('test').innerText = 'Sou um novo texto'
    //console.log(document.getElementsByName('div-name')[0].innerText ='Alterado o primeiro')

    //var nameTag = document.getElementsByName('div-name')
    //nameTag[0].innerText = 'Alterei...'
    //nameTag[1].innerText = 'Alterei o segundo...'
    //document.getElementsByName('div-name')[1].innerText ='Alterando o segundo'

    //console.log(document.getElementsByTagName('div')[0].innerHTML = '<h4> Mudando...</h4>')

    var tagsName = document.getElementsByTagName('div')
    tagsName[0].innerHTML = '<h4> Mudando 1...</h4>'
    tagsName[1].innerHTML = '<h4> Mudando 2...</h4>'
    
    if(tagsName[2]){
        tagsName[2].innerHTML = '<h4> Mudando 3...</h4>'
    }

}, 3000)
