// FUNCTIONS

function aligningAction(hashOfURL) {

    if(! hashOfURL) {
        return false
    }

    const elementThatTheAnchorTargets = document.querySelector(hashOfURL)
    
    // distance (on the Y axis) between the top of the document or webpage and the begining of the elementThatTheAnchorTargets

    const YCoordinateOfTheTargetElement = elementThatTheAnchorTargets.offsetTop

    // make the scroll correctly (because it takes into account the sticky top bar)

    window.scrollTo({
        top: YCoordinateOfTheTargetElement - topBarHeight
    })
}


// MAIN LOGIC

// id of sticky top bar
const topBarSelector = '#topbar'

// fetch website for the sticky top bar element
const topBarElement = document.querySelector(topBarSelector)

// get sticky top bar height
const topBarHeight = topBarElement.offsetHeight

// 1. ON-LOAD (to address 'typing in the browser's address bar' when we are coming from outside of our website)

window.onpopstate = function() {
    aligningAction(location.hash)
}

// 2. ON-POPSTATE (to address 'typing in the browser's address bar' when we are coming within our website)

window.onload = function() {
    aligningAction(location.hash)
}

// 3. ON-CLICK (to address clicking on anchor links of our website)

// fetch all elements that are anchor links that point to our website (internal anchor links)
const anchorLinks = document.querySelectorAll('a[href*="#"]')

// apply an event to those links
for (let anchorElement of anchorLinks) {
    anchorElement.addEventListener('click', function(e) {
        aligningAction(this.hash)

        // make the click on this links part of history (to be able to retrogress) These lines are needed because of the .preventDefault() and/or(?) .stopPropogation() below
        const targetHref = `${location.origin}${location.pathname}${this.hash}`
        history.pushState(null, null, targetHref)

        // this is required because the browser would align the page, without taking into account the stick top bar, after we have done the scroll alignment. Destroying the proper scroll alignment
        e.preventDefault()
        e.stopPropagation()
    })
}
