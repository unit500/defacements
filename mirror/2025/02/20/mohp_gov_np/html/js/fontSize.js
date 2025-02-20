const nightMode = document.getElementById('nightMode')
nightMode.addEventListener("click", () => {
    const body = document.getElementById('body')
    body.classList.toggle('active')
})

//Font size increase

let noOfIncrease = 0
let noOfDecrease = 0

function changeFontSize(type){
    let reset
    let headingFontSize, parapragpFontSize, anchorFontSize, spanFontSize, labelFontSize

    if(type === 'reset') {
        var h = ["h1", "h2", "h3", "h4", "h5", "h6"]
        var headings = []
        var element

        for(i = 0; i < h.length; i++) {
            headings[i]  = document.querySelectorAll(`h${i+1}`)

            for(j = 0; j < h.length; j++) {
                if(headings[i][j]) {
                    let fontSize = getComputedStyle(headings[i][j], null).getPropertyValue("font-size")
                    fontSize = parseFloat(fontSize)

                    // if(type === "increase" && noOfIncrease < 2){
                    //     headings[i][j].style.fontSize = (fontSize + 2) + "px";
                    // }else if(type === "decrease" && noOfDecrease < 2){
                    //     headings[i][j].style.fontSize = (fontSize - 2) + "px";
                    // }else{
                    //     headings[i][j].style.fontSize = fontSize;
                    // }
                    console.log(fontSize)
                }
            }
        }

        var paragraphElements = document.querySelectorAll('p')
        var anchorElements = document.querySelectorAll('a')
        var spanElements = document.querySelectorAll('span')
        var labelElements = document.querySelectorAll('label')


        for(i = 0; i < paragraphElements.length; i++) {
            let fontSize = getComputedStyle(paragraphElements[i], null).getPropertyValue("font-size")
            fontSize = parseFloat(fontSize)
            
            if(type === "increase" && noOfIncrease < 2){
                paragraphElements[i].style.fontSize = (fontSize + 2) + "px";
            }else if(type === "decrease" && noOfDecrease < 2){
                paragraphElements[i].style.fontSize = (fontSize - 2) + "px";
            }else{
                paragraphElements[i].style.fontSize = fontSize;
            }
        }

        for(i = 0; i < anchorElements.length; i++) {
            let fontSize = getComputedStyle(anchorElements[i], null).getPropertyValue("font-size")
            fontSize = parseFloat(fontSize)
            
            if(type === "increase" && noOfIncrease < 2){
                anchorElements[i].style.fontSize = (fontSize + 2) + "px";
            }else if(type === "decrease" && noOfDecrease < 2){
                anchorElements[i].style.fontSize = (fontSize - 2) + "px";
            }else {
                anchorElements[i].style.fontSize = fontSize;
            }
        }

        for(i = 0; i < spanElements.length; i++) {
            let fontSize = getComputedStyle(spanElements[i], null).getPropertyValue("font-size")
            fontSize = parseFloat(fontSize)
            
            if(type === "increase" && noOfIncrease < 2){
                spanElements[i].style.fontSize = (fontSize + 2) + "px";
            }else if(type === "decrease" && noOfDecrease < 2){
                spanElements[i].style.fontSize = (fontSize - 2) + "px";
            }else {
                spanElements[i].style.fontSize = fontSize;
            }
        }

        for(i = 0; i < labelElements.length; i++) {
            let fontSize = getComputedStyle(labelElements[i], null).getPropertyValue("font-size")
            fontSize = parseFloat(fontSize)
            
            if(type === "increase" && noOfIncrease < 2){
                labelElements[i].style.fontSize = (fontSize + 2) + "px";
            }else if(type === "decrease" && noOfDecrease < 2){
                labelElements[i].style.fontSize = (fontSize - 2) + "px";
            }else {
                labelElements[i].style.fontSize = fontSize;
            }
        }
    }

    //for headings
    var h = ["h1", "h2", "h3", "h4", "h5", "h6"]
    var headings = []
    var element

    for(i = 0; i < h.length; i++) {
        headings[i]  = document.querySelectorAll(`h${i+1}`)

        for(j = 0; j < h.length; j++) {
            if(headings[i][j]) {
                let fontSize = getComputedStyle(headings[i][j], null).getPropertyValue("font-size")
                fontSize = parseFloat(fontSize)

                // if(type === "increase" && noOfIncrease < 2){
                //     headings[i][j].style.fontSize = (fontSize + 2) + "px";
                // }else if(type === "decrease" && noOfDecrease < 2){
                //     headings[i][j].style.fontSize = (fontSize - 2) + "px";
                // }else{
                //     headings[i][j].style.fontSize = fontSize;
                // }
            }
        }
    }

    var paragraphElements = document.querySelectorAll('p')
    var anchorElements = document.querySelectorAll('a')
    var spanElements = document.querySelectorAll('span')
    var labelElements = document.querySelectorAll('label')


    for(i = 0; i < paragraphElements.length; i++) {
        let fontSize = getComputedStyle(paragraphElements[i], null).getPropertyValue("font-size")
        fontSize = parseFloat(fontSize)
        
        if(type === "increase" && noOfIncrease < 2){
            paragraphElements[i].style.fontSize = (fontSize + 2) + "px";
        }else if(type === "decrease" && noOfDecrease < 2){
            paragraphElements[i].style.fontSize = (fontSize - 2) + "px";
        }else{
            paragraphElements[i].style.fontSize = fontSize;
        }
    }

    for(i = 0; i < anchorElements.length; i++) {
        let fontSize = getComputedStyle(anchorElements[i], null).getPropertyValue("font-size")
        fontSize = parseFloat(fontSize)
        
        if(type === "increase" && noOfIncrease < 2){
            anchorElements[i].style.fontSize = (fontSize + 2) + "px";
        }else if(type === "decrease" && noOfDecrease < 2){
            anchorElements[i].style.fontSize = (fontSize - 2) + "px";
        }else {
            anchorElements[i].style.fontSize = fontSize;
        }
    }

    for(i = 0; i < spanElements.length; i++) {
        let fontSize = getComputedStyle(spanElements[i], null).getPropertyValue("font-size")
        fontSize = parseFloat(fontSize)
        
        if(type === "increase" && noOfIncrease < 2){
            spanElements[i].style.fontSize = (fontSize + 2) + "px";
        }else if(type === "decrease" && noOfDecrease < 2){
            spanElements[i].style.fontSize = (fontSize - 2) + "px";
        }else {
            spanElements[i].style.fontSize = fontSize;
        }
    }

    for(i = 0; i < labelElements.length; i++) {
        let fontSize = getComputedStyle(labelElements[i], null).getPropertyValue("font-size")
        fontSize = parseFloat(fontSize)
        
        if(type === "increase" && noOfIncrease < 2){
            labelElements[i].style.fontSize = (fontSize + 2) + "px";
        }else if(type === "decrease" && noOfDecrease < 2){
            labelElements[i].style.fontSize = (fontSize - 2) + "px";
        }else {
            labelElements[i].style.fontSize = fontSize;
        }
    }

    if(type === "increase" && noOfIncrease < 2) {
        noOfIncrease++
        noOfDecrease--
    } 
    if(type === "decrease" && noOfDecrease < 2) {
        noOfDecrease++
        noOfIncrease--
    }
}