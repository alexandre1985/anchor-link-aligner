# Anchor Link Aligner .JS

This is a useful JavaScript for Webpages that have a top fixed navigation bar and anchor links.

## Why?  

When an internet sailor visits any of your website's anchor links, the sailor sees it partially covered with the top fixed navigation bar.
The sailor may wonder:
> arrrr! this is a *bug*, and this website developer is unprofessional!!

Or you may be lucky and this issue may pass unnoticeable in the sailor's eyes.  

Well,... the sailor may not know that this is how the browser behaves, that when visiting an anchor link the browser aligns to the target element id **the same way** either you *have or don't have* a fixed navigation bar on top of your html page (that may be covering some content).  
This script takes into account that your website has a top fixed navigation bar and solves this anchor link alignment issue.

## Dependencies

None. It is written in pure JavaScript, no need for JQuery or any JavaScript dependency. Fits every webpage.

## Usage

1. Add the id "topbar" to your top fixed navigation bar html element. Something like this
```
<nav id="topbar">...</nav>
```
(if you don't like the "topbar" name, it is easily configurable, just edit one line at the source)
2. Add the `anchor-link-aligner.min.js` file to your webpage.  
I suggest you download this script and put it inside your JavaScript asset directory.  
But... if you are lazy or you want to keep up with the latest updates of this script (which I predict little *need for change to remain compatible* in the foreseen future), copy the code below into your html. I suggest you put this code right before your html body closing tag (a html body closing tag looks like this `</body>`):
```
<script type="text/javascript" src="https://raw.githubusercontent.com/alexandre1985/anchor-link-aligner.js/master/anchor-link-aligner.min.js" crossorigin="anonymous"></script>
```
3. Done

## Final Message
Enjoy! ... Always  
:fireworks: :full_moon_with_face: :earth_africa:
