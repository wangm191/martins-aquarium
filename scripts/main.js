import { fishList, renderFishListToDOM } from './fishList.js'
import { tipList, renderTipListToDOM } from './tipList.js'
import { locationList, renderLocationListToDOM } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
renderFishListToDOM(fishHTML)

renderTipListToDOM(tipHTML)

renderLocationListToDOM(locationHTML)