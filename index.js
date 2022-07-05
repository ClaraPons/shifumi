console.log(document)

let scorePlayer = 0
let scoreComputer = 0
let choicecomputer = ''

const result = (choicePlayer) => {
    // console.log(choicePlayer)
    const min = 0
    const max = 2

    let random = Math.floor(Math.random() * max) + min
    let arrayChoice = ['pierre','feuille','ciseaux']
    choicecomputer = arrayChoice[random]
    console.log(choicePlayer, choicecomputer)

    if (choicePlayer === 'pierre' && choicecomputer === 'ciseaux') {
         scorePlayer += 1
        imgIa.setAttribute("src", "ciseaux.png")
        imgP.setAttribute("src", "pierre.png")
        scoreP.innerHTML = scorePlayer
        roundW.innerHTML = "Vous avez gagné !"
    } else if (choicePlayer === 'feuille' && choicecomputer === 'pierre') {
         scorePlayer += 1
        imgIa.setAttribute("src", "pierre.png")
        imgP.setAttribute("src", "feuille.png")
        scoreP.innerHTML = scorePlayer
        roundW.innerHTML = "Vous avez gagné !"
    } else if (choicePlayer === 'ciseaux' && choicecomputer === 'feuille') {
         scorePlayer += 1
         imgIa.setAttribute("src", "feuille.png")
         imgP.setAttribute("src", "ciseaux.png")
         scoreP.innerHTML = scorePlayer
         scoreC.innerHTML = scoreComputer
         roundW.innerHTML = "Vous avez gagné !"
    } else if (choicePlayer === 'pierre' && choicecomputer === 'feuille') {
         scoreComputer += 1
         imgIa.setAttribute("src", "feuille.png")
         imgP.setAttribute("src", "pierre.png")
         scoreC.innerHTML = scoreComputer
         roundW.innerHTML = "IA a gagné !"
    } else if (choicePlayer === 'feuille' && choicecomputer === 'ciseaux') {
         scoreComputer += 1
        imgIa.setAttribute("src", "ciseaux.png")
        imgP.setAttribute("src", "feuille.png")
        scoreC.innerHTML = scoreComputer
        roundW.innerHTML = "IA a gagné !"
    } else if (choicePlayer === 'ciseaux' && choicecomputer === 'pierre') {
         scoreComputer += 1
        imgIa.setAttribute("src", "pierre.png")
        imgP.setAttribute("src", "ciseaux.png")
        scoreC.innerHTML = scoreComputer
        roundW.innerHTML = "IA a gagné !"
    } else {

        if (choicecomputer === 'pierre' && choicePlayer === 'pierre') {
            imgIa.setAttribute("src", "pierre.png")
            imgP.setAttribute("src", "pierre.png")
            roundW.innerHTML = "Égalité"
        }
        else if (choicecomputer === 'feuille' && choicePlayer === 'feuille') {
            imgIa.setAttribute("src", "feuille.png")
            imgP.setAttribute("src", "feuille.png")
            roundW.innerHTML = "Égalité"
        }
        else if (choicecomputer === 'ciseaux' && choicePlayer === 'ciseaux') {
            imgIa.setAttribute("src", "ciseaux.png")
            imgP.setAttribute("src", "ciseaux.png")
            roundW.innerHTML = "Égalité"
        }
    }
    console.log(scorePlayer, scoreComputer)


    if (scoreComputer === 3){
        if(confirm(`${scorePlayer} - ${scoreComputer}. la partie est fini, IA a gagné ! Vous voulez rejouer ?`)){
            scorePlayer = 0 
            scoreComputer = 0
            scoreP.innerHTML = 0
            scoreC.innerHTML = 0
        }
    }else if(scorePlayer === 3){
        if(confirm(`${scorePlayer} - ${scoreComputer}. la partie est fini, vous avez gagné ! Vous voulez rejouer ?`)){
            scorePlayer = 0 
            scoreComputer = 0
            scoreP.innerHTML = 0
            scoreC.innerHTML = 0
        }
}

}

let score = document.getElementById("score")
let scoreP= document.getElementById("player-score")
let scoreC = document.getElementById("ia-score")
let imgIa = document.getElementById("img-sign-ia-container")
let imgP = document.getElementById("img-sign-player-container")
let roundW = document.getElementById("winnerRound")


scoreP.setAttribute = scorePlayer
scoreC.setAttribute = scoreComputer
  
  