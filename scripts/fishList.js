import { database } from './aquariumData.js'

export const fishList = () => {
    let fishListHtml = '';

    for (const fish of database.fish){
        fishListHtml += `
        <article class="fishes">
               <img src="${fish.image}" alt="${fish.species} image" class="fish__image">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <p class="fish__species">Species: ${fish.species}</p>
                   <p class="fish__length">Length: ${fish.length}</p>
                   <p class="fish__location">Location: ${fish.location}</p>
                   <p class="fish__diet">Diet: ${fish.diet}</p>
               </div>
           </article>
       `;
    }

    return fishListHtml
};

export const renderFishListToDOM = (fishListHtml) => {
    const renderFishList = document.getElementById('fishList');
 
    if (renderFishList) {
        renderFishList.innerHTML = fishListHtml;
    } else {
        console.error('Could not find element with id "fishList"');
    }
 };