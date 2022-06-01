
let input = $('input')
let add = $('#btn1')
let decrease = $('#btn2')
let somme = $('span')

if (localStorage.getItem('somme') === null) {
    localStorage.setItem('somme', 1000)
} 
showColorSomme(localStorage.getItem('somme'))
showSomme()

add.on('click', ()=> {
    let montant = Number(localStorage.getItem('somme')) + Number(input.val())
    localStorage.setItem('somme', montant)
    showColorSomme(localStorage.getItem('somme'))
    showSomme()
    input.val("")
})

decrease.on('click', ()=> {
    let montant = Number(localStorage.getItem('somme')) - Number(input.val())
    localStorage.setItem('somme', montant)
    showColorSomme(localStorage.getItem('somme'))
    showSomme()
    input.val("")
})


function showSomme(){
    somme.text(localStorage.getItem('somme') + " DH")
}

function showColorSomme(som) {
    if (som > 300) {
        somme.css('color', 'green')
    } else{
        somme.css('color', 'red')
    }
}