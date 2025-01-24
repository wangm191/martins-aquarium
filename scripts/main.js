import { mostHolyFish, soldierFish, regularFish } from './fishList.js'
import { tipList, renderTipListToDOM } from './tipList.js'
import { locationList, renderLocationListToDOM } from './locationList.js'

// Generate the fish list
const mostHolyfishHTML = mostHolyFish()

const soldierFishHtml = soldierFish()

const regularFishHtml = regularFish()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
// const holyString = renderFishListToDOM(mostHolyfishHTML)
// const soldierString = renderFishListToDOM(soldierFishHtml)
// const regularString = renderFishListToDOM(regularFishHtml)

renderTipListToDOM(tipHTML)

renderLocationListToDOM(locationHTML)

const domReference = document.getElementById('fishList');

domReference.innerHTML = `${mostHolyfishHTML}${soldierFishHtml}${regularFishHtml}`