// chamadas 
const initial = document.querySelector('.initial')
const countArea = document.querySelector('.count-area')
const resFin = document.querySelector('.results-final')

//
const timerText = document.querySelector('.timer')
const stopedd = document.querySelector('.stoped')
const contage = document.querySelector('.contage')
const ptsErr = document.querySelector('.pts-err')
const ptsError = document.querySelector('.res-final-pts-error')
const countGerad = document.querySelector('.res-final-count-gerada')
const resFinalHits = document.querySelector('.res-final-hits')

const number = document.querySelector('.number')
const inputRes = document.querySelector('.input-res')
const btnRes = document.querySelector('.btn-res')
const pts = document.querySelector('.pts')

const container = document.querySelector('.container')
const resFinalPts = document.querySelector('.res-final-pts')
const resFinalTime = document.querySelector('.res-final-time')
const div = document.querySelector('.div')

const respostAnimation = document.querySelector('.respost-animation') 

// res animation
const resAnimation = document.querySelector('.res-animation')

// sistema

    // criar a conta aleatoria

    var interrompeFunc = true;

    var veryTimerTwo = true;

    var very = true;

    var randomWan = true;

    var randomTwo = false;

    var randomTree = false;

    var sum = 0;

    function gerar() {

        number.style.animation = "";
        setTimeout(() => number.style.animation = "shakeN .5s ease-in-out")

        const numRandomOne = Math.floor(Math.random() * 10)
        const numRandomTwo = Math.floor(Math.random() * 10)
        const numRandomTree = Math.floor(Math.random() * 10)

        number.innerText = `${numRandomOne} + ${numRandomTwo} + ${numRandomTree}`

        sum = numRandomOne + numRandomTwo + numRandomTree;

        if(randomWan) { 
            console.log('Nivel 1')

            const numRandomOne = Math.floor(Math.random() * 10)
            const numRandomTwo = Math.floor(Math.random() * 10)
            const numRandomTree = Math.floor(Math.random() * 10)

            number.innerText = `${numRandomOne} + ${numRandomTwo} + ${numRandomTree}`

            sum = numRandomOne + numRandomTwo + numRandomTree;

        }

        if(randomTwo) {
            console.log('random 2')

            resAnimation.innerText = "Random 2"

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);


            const numRandomOne = Math.floor(Math.random() * 10)
            const numRandomTwo = Math.floor(Math.random() * 10)
            const numRandomTree = Math.floor(Math.random() * 10)

            number.innerText = `${numRandomOne} - ${numRandomTwo} * ${numRandomTree}`

            sum = numRandomTwo * numRandomTree - numRandomOne;

        }

        if(randomTree) {
            console.log('random 3')

            resAnimation.innerText = "Random 2"

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);

            const numRandomOne = Math.floor(Math.random() * 15)
            const numRandomTwo = Math.floor(Math.random() * 15)
            const numRandomTree = Math.floor(Math.random() * 15)

            number.innerText = `${numRandomOne} + ${numRandomTwo} * ${numRandomTree}`

            sum = numRandomOne + numRandomTwo * numRandomTree;

        }
        

        initial.style.display = 'none'
        countArea.style.display = 'block'

        if(very) {
            timer()
            very = false
        }

        if(veryTimerTwo) {
            timertwo()
            veryTimerTwo = false
        }

    }

    function veryRandomCount() {

        if(valpts < 5) {
            //console.log('nivel 1: 0 a 10')
            randomWan = true
        }

        if(valpts >= 10) {
           // console.log('nivel 2: 0 a 15')
            randomWan = false
            randomTwo = true
           
        }   

        if(valpts >= 25) {
           // console.log('nivel 3: 0 a 20')
            randomTwo = false
            randomTree = true
            
        } 

    }

    function timertwo() {

        t2 = 30
        let timeRes

        if(randomWan) {
            t2 = 30
        }

        if(randomTwo) {
            t2 = 50
        }

        if(randomTree) {
            t2 = 70
        }
        
        setInterval(() => {
            t2--

            if(t2 <= 10) {

                contage.innerText = `${t2}`
                contage.style.opacity = 1
                // contage.style.color = 'red'
                contage.style.animation = "";
                setTimeout(() => contage.style.animation = "contageAniim .3s ease-in-out", 900);
            }

            if(t2 === 0) {
                contage.style.opacity = 0
                console.log('atualizando conta')
                t2 = timeRes
                
                if(randomWan) {
                    t2 = 30
                }

                if(randomTwo) {
                    t2 = 50
                }

                if(randomTree) {
                    t2 = 70
                }

                gerar()
                countGer()
            } 

            console.log(t2)

        }, 1000)      

        console.log(t2)
        
    } 

    function timer() {
        t1 = 0;

        var counter = setInterval(function() {
            t1++
            timerText.innerText = `Tempo: ${t1}s`
        
        if(!interrompeFunc) {
            clearInterval(counter)
            console.log('counter interrompida')
        }

        if(t1 < 10) {
            timerText.innerText = `Tempo: 0${t1}s`
        }


        }, 1000)
    }

    function stoped() {

        if(valpts <= 0) {
            console.log("val pts:", valpts)
            console.log("val ptsErr:", valptsErr)
            resAnimation.innerText = "Acerte pelomenos uma questão"

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);
        }else {

        interrompeFunc = false

        console.log('acertou ', valpts, ' pontos em ', t1, ' segundos')

        resFinalPts.innerText = `Acertou: ${valpts}`;
        ptsError.innerText = `Errou: ${valptsErr}`

        resFinalTime.innerText = `Tempo gasto: ${t1} segundos`;
        const resFinalMedia = valpts * 100 / valCountGer
        resFinalHits.innerText = `Media de acerto: ${Math.round(resFinalMedia)}%`

        container.style.display = 'none'
        resFin.style.display = 'flex'

        }
    }

    // pegar val do input e verificar resposta

    valCountGer = 0 
    function countGer() {
        valCountGer++ 
        countGerad.innerText = `Contas geradas: ${valCountGer}`
    }

    valpts = 0
    function score() {
        valpts++
        pts.innerText = `Pontos: ${valpts}`
        console.log('pontos:', valpts)
        veryRandomCount()
    }

    valptsErr = 0
    function scoreError() {
        valptsErr++
        ptsErr.innerText = `Erros: ${valptsErr}`
    }


    function verify() {

        const valInput = inputRes.value;

        fadeIn = true

        if(inputRes.value == "") {
            resAnimation.innerText = "Preencha o campo"

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);

            inputRes.focus()

        }else if(valInput == sum) {
//gu
            respostAnimation.innerText = valInput
            respostAnimation.style.animation = "";
            respostAnimation.style.color = 'green'
            setTimeout(() => respostAnimation.style.animation = "respostAnim 3s linear", 2.5);

            inputRes.value = ""
            score()
            gerar()
            countGer()

           
            
            contage.style.opacity = 0
            
            if(randomWan) {
                t2 = 30
            }

            if(randomTwo) {
                t2 = 50
            }

            if(randomTree) {
                t2 = 70
            }

            // gerar palavras aleatorias
            certas = [ 'Acertou', 'Você é um robõ?', 'Boa!', 'Isso ai', 'Ta indo bem', 'Continue assim', 'Bota na conta', '+ 1 pontin', 'Isso']
            const pickedTrue = certas[Math.floor(Math.random() * certas.length)];

            resAnimation.innerText = pickedTrue
            //console.log('certo', sum)

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 1.2s linear", 1);

            inputRes.focus()

        }else {

            respostAnimation.innerText = valInput;
            respostAnimation.style.animation = "";
            respostAnimation.style.color = 'red';
            setTimeout(() => respostAnimation.style.animation = "respostAnim 3s linear", 2.5);

            scoreError()
            inputRes.value = ""
            inputRes.focus()

            erradas = ['Errooooou!!!', 'aff', 'c é ruim viu', 'Acertar é bom, né', 'Errou', 'Errou', 'errou', 'Minha vó faz melhor', 'ERROU', 'Vai estudar', 'Acerta nunk?', 'Pessimo', 'Horrivel' ]
            const palavraAleatoria = erradas[Math.floor(Math.random() * erradas.length)];

            resAnimation.innerText = palavraAleatoria
           //console.log('errado', sum)

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 1.2s linear", 1);
            countGer()
        }

    }

    
    


// gerar palavras erradas aleatorias

