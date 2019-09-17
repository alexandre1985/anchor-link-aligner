// FUNCTIONS

String.prototype.substringStartingFromChar = function(char) {
    const index  = this.indexOf(char)
    return this.substr(index)
}

function isLinkWithinTheSamePage(url) {
    const currentPagePathname = location.pathname
    const currentHost = location.host
    const currentProtocol = location.protocol

    if(url.pathname === currentPagePathname && url.host === currentHost && url.protocol == currentProtocol) {
        return true
    }

    return false
}

function aligningAction(hashOfURL) {
    
    const targetElement = document.querySelector(hashOfURL)
    
    // distance (on the Y axis) between the top of the document or webpage and the begining of the targetElement
    const targetYCoordinate = targetElement.offsetTop

    // make the scroll (correctly and also smoothly as a bonus)

    window.scrollTo({
        top: targetYCoordinate - topBarHeight
    })
    
    // make the click on this links part of history (to be able to retrogress)
    // const targetHref = `${location.origin}${location.pathname}${location.search}${hashOfURL}`
    const targetHref = `${location.origin}${location.pathname}${hashOfURL}`
    history.pushState(null, null, targetHref)
}


// MAIN LOGIC

// id of topBar
const topBarId = 'topbar'

// fetch website top bar element
const topBarElement = document.getElementById(topBarId)

// get top bar height
const topBarHeight = topBarElement.offsetHeight

// 1. ON-LOAD LOGIC

window.onload = function() {
    const pageHash = location.hash

    if ( pageHash ) {

        aligningAction(pageHash)

    }

}

// 2. ON-CLICK LOGIC

// fetch all elements that are anchor links that point to our website (internal anchor links)
const anchorLinks = document.querySelectorAll('a[href*="#"]')

// apply an event to those links
for (let anchorElement of anchorLinks) {
    anchorElement.addEventListener('click', function(e) {

        // if anchorElement is not pointing to an url of the same page, stop
        // (which means:go towards that url and dont apply this anchor-link-aligner behaviour.
        // Because a JS file domain of acting is only one page, either way)
        if( ! isLinkWithinTheSamePage(this) ) {
            return
        }
        

        aligningAction(this.hash)

        // this is needed because we do not need the link to go to the anchor again, we already made the user arrive to the anchor link
        e.preventDefault()
    })
}
