setInterval(() => {
    changecolor()
}, 500);

function changecolor() {
    let x = document.getElementsByClassName('bigHeading')
    //x.style.color = x.style.color == "red" ? "red" : "rgb(36, 35, 36)";
    
}


async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  
function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}


async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
    }

const carouselText = [
    {text: "385", color: "red"},
    {text: "Sharma", color: "orange"},
    {text: "Blog!", color: "yellow"}
    ]
    
async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
    updateFontColor(eleRef, carouselList[i].color)
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(2500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
$(eleRef).css('color', color);
}

typeSentence('Siddhant','#sentence',150)
carousel(carouselText,"#feature-text")
typeSentence("Welcome To My Site","#secondHeading",200)
