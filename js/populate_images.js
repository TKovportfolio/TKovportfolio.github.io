window.onload = function() {
    overlay = document.getElementById('popup-overlay')
    imgPopUp = document.getElementById('popup-img')
    closeButton = document.getElementById('close')
    closeButton.onclick = function(){hideOverlay()}
}


function showOverlay(page, item) {
    overlay.style.display = 'flex'
    imgPopUp.src = `../imgs/${page}/` + window[page][item].filename
    if (page == 'composition') {
        switch(window[page][item].tag){
            case 'long':
                imgPopUp.className = 'long-img'
                break
            case 'short':
                imgPopUp.className = 'short-img'
                break
            default:
                imgPopUp.className = ''
        }
    }
    if (page == 'photoshop') {
       if (window[page][item].tag == 'large') {
            imgPopUp.className = 'large-img'
       } else {
            imgPopUp.className = 'normal-img'
       }
    }
    if (page == 'lighting') {
        if (window[page][item].tag == 'weird') {
             imgPopUp.className = 'weird-img'
        } else {
             imgPopUp.className = 'normal-img'
        }
     }
}

function hideOverlay() {
    overlay.style.display = 'none'
}

function populate_composition() {
    longImgIdNum = 1
    shortImgIdNum = 1
    for (pNum = 0; pNum < composition.length; pNum++) {
        const lookUpNum = pNum
        var imgTextParent = document.createElement('div')
        switch(composition[pNum].tag){
            case 'long':
                imgTextParent.setAttribute('id', `long-img-${longImgIdNum}`)
                break
            case 'short':
                imgTextParent.setAttribute('id', `short-img-${shortImgIdNum}`)
                break
            default:
                console.log(`No tag for ${composition[pNum].name}`)
        }
        document.getElementById('img-wrapper').appendChild(imgTextParent)

        var img = document.createElement('img')
        img.src = '../imgs/composition/' + composition[pNum].filename
        imgTextParent.appendChild(img)

        img.onclick = function(){ showOverlay('composition', lookUpNum) }

        longImgIdNum ++
        shortImgIdNum ++
    }
}

function populate_lenses() {
    for (pNum = 0; pNum < lenses.length; pNum++) {
        const lookUpNum = pNum
        var imgTextParent = document.createElement('div')
        if (lenses[pNum].tag == 'big') {
            imgTextParent.setAttribute('id', 'bigger-img')
        }
        document.getElementById('img-wrapper').appendChild(imgTextParent)

        var img = document.createElement('img')
        img.src = '../imgs/lenses/' + lenses[pNum].filename
        imgTextParent.appendChild(img)

        img.onclick = function(){ showOverlay('lenses', lookUpNum) }
    }
}

function populate_photoshop() {
    longImgIdNum = 1
    shortImgIdNum = 1
    for (pNum = 0; pNum < photoshop.length; pNum++) {
        const lookUpNum = pNum
        var imgTextParent = document.createElement('div')
        if (photoshop[pNum].tag == 'big') {
            imgTextParent.setAttribute('id', 'bigger-img')
        } else if (photoshop[pNum].tag == 'large') {
            imgTextParent.setAttribute('id', 'larger-img')
        }
        else if (photoshop[pNum].tag == 'weird') {
            imgTextParent.setAttribute('id', 'weird-img')
        }
        document.getElementById('img-wrapper').appendChild(imgTextParent)

        var img = document.createElement('img')
        img.src = '../imgs/photoshop/' + photoshop[pNum].filename
        imgTextParent.appendChild(img)

        var imgTextDiv = document.createElement('div')
        imgTextDiv.className = 'img_text'
        imgTextParent.appendChild(imgTextDiv)

        var imgText = document.createElement('h3')
        imgText.innerHTML = photoshop[pNum].name
        imgTextDiv.appendChild(imgText)

        imgTextDiv.onclick = function(){ showOverlay('photoshop', lookUpNum) }
        img.onclick = function(){ showOverlay('photoshop', lookUpNum) }

        longImgIdNum ++
        shortImgIdNum ++
    }
}
function populate_lighting() {
    imgNum = 1
    for (pNum = 0; pNum < lighting.length; pNum++) {
        const lookUpNum = pNum
        var imgTextParent = document.createElement('div')
        imgTextParent.setAttribute('class', `img-${imgNum}`)
        if (lighting[pNum].tag == 'weird') {
            imgTextParent.setAttribute('id', 'weird-img')
        }
        document.getElementById('img-wrapper').appendChild(imgTextParent)

        var img = document.createElement('img')
        img.src = '../imgs/lighting/' + lighting[pNum].filename
        imgTextParent.appendChild(img)
        
        img.onclick = function(){ showOverlay('lighting', lookUpNum) }

        imgNum ++
    }
}