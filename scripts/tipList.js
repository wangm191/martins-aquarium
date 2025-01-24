import { database } from './aquariumData.js'

export const tipList = () => {
    let tipListHtml = '';
    
    for (const tip of database.tips ){
        tipListHtml += `
        <article class="tips">
            <li class="tip__topic">${tip.topic}</li>
            <ul class="tip__text">${tip.text}</ul>
           </article>
       `;
    }

    return tipListHtml
}

export const renderTipListToDOM = (tipListHtml) => {
    const renderTipList = document.getElementById("tipList")

    if (renderTipList) {
        renderTipList.innerHTML = tipListHtml;
    } else {
        console.error('Could not find element with id "tipList"');
    }
}
