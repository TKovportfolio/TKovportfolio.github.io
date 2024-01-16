function populate_composition() {
    longImgIdNum = 1
    shortImgIdNum = 1
    for (pNum = 0; pNum < composition.length; pNum++) {
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

        var imgTextDiv = document.createElement('div')
        imgTextDiv.className = 'img_text'
        imgTextParent.appendChild(imgTextDiv)

        var imgText = document.createElement('h3')
        imgText.innerHTML = composition[pNum].name
        imgTextDiv.appendChild(imgText)

        longImgIdNum ++
        shortImgIdNum ++
    }
}
