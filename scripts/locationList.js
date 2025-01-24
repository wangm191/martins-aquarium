import { database } from './aquariumData.js'

export const locationList = () => {
    let locationListHtml = '';

    for (const location of database.location) {
        locationListHtml += `
        <section>
        <article class="locations">
                   <h2 class="location__name">${location.name}</h2>
                   <p class="location__country">Region: ${location.country}</p>
                   <p class="location__description">${location.description}</p>
           </article>
        </section>
       `;
    }
    
    return locationListHtml
}

export const renderLocationListToDOM = (locationListHtml) => {
    const renderLocationList = document.getElementById('locationList')

    if (renderLocationList) {
        renderLocationList.innerHTML = locationListHtml;
    } else {
        console.error('Could not find element with id "locationList"');
    }
}