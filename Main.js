window.onload = () => {
    let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    let cards2 = cards.concat(cards)
    let count = 0
    let flipped = []
    let saver = []
    let lmao;



    function shuffleArray(array) {
        for (let i = 0; i < cards2.length; i++) {

            let randomized = Math.floor(Math.random() * cards2.length);

            let temp = array[i];
            array[i] = array[randomized];
            array[randomized] = temp;
        }
        return array;
    }


    let arrFinal = shuffleArray(cards2);
    let  board = document.createElement('div')
        board.id = "table"
    let a = document.getElementById("container")

    for (let i = 0; i < arrFinal.length; i++) {
        lmao = document.createElement('button')
        lmao.className = "lmao"
        lmao.id = lmao.id + i
        board.appendChild(lmao)
        lmao.addEventListener("click", flipCard)
    }
    a.appendChild(board)
    document.body.appendChild(a)



    function flipCard(e){
        e.target
        let chosen = document.getElementById(e.target.id)
        let parsed = arrFinal[parseInt(e.target.id)]
        let text = document.createTextNode(parsed);
        chosen.appendChild(text)
        flipped[count] = parsed
        saver[count] = e.target.id


        for (let i = 0; i < arrFinal.length; i++) {

            if (count === 0){
                chosen.disabled = true
            }
            if (count === 1){
                document.getElementById("" + i).disabled = true
                setTimeout(restart, 2000);
            }
        }

        if (count === 1 && flipped[0] === flipped[1]){
            document.getElementById(saver[0]).className = "done"
            document.getElementById(saver[1]).className = "done"

            for (let i = 0; i <= saver.length; i++) {
                document.getElementsByClassName("done").disabled = true
            }

        }


        count++
    }
    function restart(){
        for (let i = 0; i < arrFinal.length; i++) {

            let a = "" + i
            let maker = document.getElementById(a)
            maker.innerText = ""
            document.getElementById(a).disabled = false





            count = 0
        }
        flipped = []
        saver = []
    }



}



