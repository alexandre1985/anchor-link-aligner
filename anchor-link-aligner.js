// HELPER FUNCTIONS

String.prototype.substringStartingFromChar = function(char) {
    const index  = this.indexOf(char)
    return this.substr(index)
}

function isLinkWithinTheSamePage(url) {
    const currentPagePathname = window.location.pathname
    const currentHost = window.location.host
    const currentProtocol = window.location.protocol

    if(url.pathname === currentPagePathname && url.host === currentHost && url.protocol == currentProtocol) {
        return true
    }

    return false
}


// MAIN LOGIC

// id of topBar
const topBarId = 'topbar'

// fetch website top bar element
const topBarElement = document.getElementById(topBarId)

// get top bar height
const topBarHeight = topBarElement.offsetHeight

// fetch all elements that are anchor links that point to our website (internal anchor links)
const anchorLinks = document.querySelectorAll('a[href*="#"]')

// apply an event to those links
for (let anchorElement of anchorLinks) {
    anchorElement.addEventListener('click', function(e) {
        const anchorElementHref = anchorElement.getAttribute('href')

        // if anchorElementHref is NOT pointing to an href of this page, stop
        if( ! isLinkWithinTheSamePage(this) ) {
            return
        }

        // from here now on all the anchor links should be pointing to the same page
        
        // the anchorElementHref may be, as an example, /about-us/#team but .querySelector() below only accepts a selector, which would be #team in this example. So that is the reason for this line of code
        const targetElementSelector = anchorElementHref.substringStartingFromChar('#')
        
        const targetElement = document.querySelector(targetElementSelector)
        
        // distance (on the Y axis) between the top of the document or webpage and the begining of the targetElement
        const targetYCoordinate = targetElement.offsetTop

        // make the scroll (correctly and also smoothly as a bonus)
        window.scrollTo({
            top: targetYCoordinate - topBarHeight,
            behavior: 'smooth'
        })
        
        // make the click on this links part of history (to be able to retrogress)
        history.pushState(null, null, anchorElementHref)

        // this is needed because we do not need the link to go to the anchor again, we already made the user arrive to the anchor link
        e.preventDefault()
    })
}
