//console.log(document.title = 'Javacript DOM')
//document.write('Sou o uso do document.write')
//document.getElementById('test').innerHTML = 'Sou um novo texto'

setTimeout(function () {
    //document.getElementById('test').innerHTML = 'Sou um novo texto'
    //document.getElementById('test').innerText = 'Sou um novo texto'
    //console.log(document.getElementsByName('div-name')[0].innerText ='Alterado o primeiro')

    var nameTag = document.getElementsByName('div-name')
    nameTag[0].innerText = 'Alterei...'
    nameTag[1].innerText = 'Alterei o segundo...'
    //document.getElementsByName('div-name')[1].innerText ='Alterando o segundo'

}, 3000)
