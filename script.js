// chamadas 
const initial = document.querySelector('.initial')
const countArea = document.querySelector('.count-area')
const resFin = document.querySelector('.results-final')
const container = document.querySelector('.container')

// placar
const timerText = document.querySelector('.timer')
const pts = document.querySelector('.pts')
const ptsErr = document.querySelector('.pts-err')

// btns
const btnJump = document.querySelector('.btn-jump')
const btnRes = document.querySelector('.btn-res')
const stopedd = document.querySelector('.stoped')


// texts
const contage = document.querySelector('.contage')
const number = document.querySelector('.number')


// texts results final
const ptsError = document.querySelector('.res-final-pts-error')
const countGerad = document.querySelector('.res-final-count-gerada')
const resFinalHits = document.querySelector('.res-final-hits')
const resFinalPts = document.querySelector('.res-final-pts')
const resFinalTime = document.querySelector('.res-final-time')

const inputRes = document.querySelector('.input-res')




const div = document.querySelector('.div')

const respostAnimation = document.querySelector('.respost-animation') 

// res animation
const resAnimation = document.querySelector('.res-animation')

// sistema

    // criar a conta aleatoria

    var interrompeFunc = true;

    var stopTimerTwo = true;

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

        number.innerText = `${numRandomOne} + ${numRandomTwo}`

        sum = numRandomOne + numRandomTwo;

        if(randomWan) { 
            console.log('Nivel 1')
            //console.log('nivel 1: 0 a 10')

            const numRandomOne = Math.floor(Math.random() * 20)
            const numRandomTwo = Math.floor(Math.random() * 20)

            number.innerText = `${numRandomOne} + ${numRandomTwo}`

            sum = numRandomOne + numRandomTwo;

        }

        if(randomTwo) {
            console.log('random 2')
            // console.log('nivel 2: 0 a 15')

            // resAnimation.innerText = "Nivel 2"

            // resAnimation.style.animation = "";
            // setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);


            const numRandomOne = Math.floor(Math.random() * 20)
            const numRandomTwo = Math.floor(Math.random() * 10)
            const numRandomTree = Math.floor(Math.random() * 20)

            number.innerText = `${numRandomOne} + ${numRandomTwo} + ${numRandomTree}`

            sum = numRandomTwo + numRandomTree + numRandomOne;

        }

        if(randomTree) {
            console.log('random 3')
            // console.log('nivel 3: 0 a 20')

            // resAnimation.innerText = "Nivel 3"

            // resAnimation.style.animation = "";
            // setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);

            const numRandomOne = Math.floor(Math.random() * 11)
            const numRandomTwo = Math.floor(Math.random() * 20)
            const numRandomTree = Math.floor(Math.random() * 15)
            const numRandomFor = Math.floor(Math.random() * 20)

            number.innerText = `${numRandomOne} * ${numRandomTwo} - ${numRandomTree} + ${numRandomFor}`

            sum = numRandomOne * numRandomTwo - numRandomTree + numRandomFor;

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


    let valSkiped = 2
    validSkipJump = true
    function veryRandomCount() {

        // if(valSkiped > 0) {
        //     btnJump.style.display = 'block'
        // }

        if(valpts < 1) {
            //console.log('nivel 1: 0 a 10')
            randomWan = true
            resAnimation.innerText = "Nivel 1"
            if(randomWan) {
                valSkiped = 2
                console.log('vl skiped nv 1', valSkiped)
            }

        }

        if(valpts >= 7) {
           // console.log('nivel 2: 0 a 15')
            randomWan = false
            randomTwo = true

            if(valSkiped == 0) {
                validSkipJump = false
                console.log('validSkipJump', validSkipJump)
            }else {
               validSkipJump = true 
               console.log('validSkipJump', validSkipJump,)
            }

            console.log('validSkipJump', validSkipJump)

            if(randomTwo) {
                resAnimation.innerText = "Nivel 2"
                valSkiped = 15
                console.log('vl skiped nv 2', valSkiped)
                if(valSkiped == 0) {
                    validSkipJump = false
                    console.log('validSkipJump', validSkipJump)
                }else {
                   validSkipJump = true 
                   console.log('validSkipJump', validSkipJump,)
                }

                resAnimation.innerText = `${valSkiped} Chances`
                resAnimation.style.animation = "";
                resAnimation.style.animation = "resAnim 2s linear";

            }

            console.log('skip:', valSkiped)

        }   

        if(valpts >= 3) {
           // console.log('nivel 3: 0 a 20')
            randomTwo = false
            randomTree = true

            if(randomTree) {
                resAnimation.innerText = "Nivel 3"
                valSkiped = 5
                console.log('vl skiped nv 3', valSkiped)
                if(valSkiped == 0) {
                    validSkipJump = false
                    console.log('validSkipJump', validSkipJump)
                }else {
                   validSkipJump = true 
                   console.log('validSkipJump', validSkipJump,)
                }
            }

            resAnimation.innerText = `${valSkiped} Chances`
            resAnimation.style.animation = "";
            resAnimation.style.animation = "resAnim 2s linear";

        } 

    }

     
    // função pra pular a conta

    
    function funcJump() {

        contage.style.opacity = '0'

        valSkiped--

        resAnimation.innerText = `${valSkiped} Chances`
        resAnimation.style.animation = "";
        resAnimation.style.animation = "resAnim 2s linear";

        if(valSkiped === 1) {
            resAnimation.innerText = `${valSkiped} Chance`
        }

        if(valSkiped === 0 ) {
            resAnimation.innerText = "Chances esgotadas"
            resAnimation.style.animation = "resAnim 2s linear";

            validSkipJump = false

        }

    
        gerar()

        if(randomWan) {
            t2 = 20
        }

        if(randomTwo) {
            t2 = 30
        }

        if(randomTree) {
            t2 = 50
        }

        btnJump.style.display = 'none'
        console.log('voce tem:', valSkiped, 'pulos')

    }

    function timertwo() {

        t2 = 20
        let timeRes

        if(randomWan) {
            t2 = 20
        }

        if(randomTwo) {
            t2 = 30
        }

        if(randomTree) {
            t2 = 50
        }

    
        
        twoInterval = setInterval(() => {
            t2--
            
            if(validSkipJump) {
                if(t2 <= 10) {
                    btnJump.style.display = 'block'
                    console.log('oi btnjump', valSkiped)
                }
                if(t2 <= 5) {
                    btnJump.style.display = 'none'
                }
            }



            if(t2 <= 10) {
                contage.innerText = `${t2}`
                contage.style.opacity = 1
                contage.style.animation = "";
                setTimeout(() => contage.style.animation = "contageAniim .3s ease-in-out", 900);
            }

            

            if(t2 === 0) {
                ptsErr.style.animation = ""
                setTimeout(() => ptsErr.style.animation = "scoreErrAnim 1s linear", .1);
                contage.style.opacity = 0
                console.log('atualizando conta')
                t2 = timeRes
                
                if(randomWan) {
                    t2 = 20
                }

                if(randomTwo) {
                    t2 = 30
                }

                if(randomTree) {
                    t2 = 50
                }

                gerar()
                scoreError()
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

    // function jump

    // pegar val do input e verificar resposta

    let valCountGer = 0 
    function countGer() {
        valCountGer++ 
        countGerad.innerText = `Contas geradas: ${valCountGer}`
    }

    let valpts = 0
    function score() {
        valpts++
        pts.innerText = `Pontos: ${valpts}`
        pts.style.animation = ""
        setTimeout(() => pts.style.animation = "scoreAnim 1s linear", .1);
        console.log('pontos:', valpts)
        veryRandomCount()

    }

    let valptsErr = 0
    function scoreError() {
        valptsErr++
        ptsErr.innerText = `Erros: ${valptsErr}`
        ptsErr.style.animation = ""
        setTimeout(() => ptsErr.style.animation = "scoreErrAnim 1s linear", .1);
    }


    function verify() {

        const valInput = inputRes.value;

        fadeIn = true;

        if(inputRes.value == "") {
            resAnimation.innerText = "Preencha o campo"

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", .1);

            inputRes.focus()

        }else if(valInput == sum) {

            btnJump.style.display = 'none'

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
                t2 = 20
            }

            if(randomTwo) {
                t2 = 30
            }

            if(randomTree) {
                t2 = 50
            }

            // gerar palavras aleatorias
            certas = [ 'Acertou', 'Você é um robõ?', 'Boa!', 'Isso ai', 'Ta indo bem', 'Continue assim', 'Bota na conta', '+ 1 pontin', 'Isso']
            const pickedTrue = certas[Math.floor(Math.random() * certas.length)];

            resAnimation.innerText = pickedTrue
            //console.log('certo', sum)

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 1.2s linear", .1);

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

    function stoped() {

        

        if(valpts <= 0) {
            console.log("val pts:", valpts)
            console.log("val ptsErr:", valptsErr)
            resAnimation.innerText = "Acerte pelomenos uma questão"

            resAnimation.style.animation = "";
            setTimeout(() => resAnimation.style.animation = "resAnim 2s linear", 1);
        }else {

        clearInterval(twoInterval)

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