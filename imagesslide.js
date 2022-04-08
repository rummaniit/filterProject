let getNaturePic = document.getElementById('nature')
getNaturePic.addEventListener('click', function (e) {
    let withOutnature = document.getElementsByClassName('withoutnature')
    let withnature = document.getElementsByClassName('withnature')
    for (let outnature of withOutnature) {
        outnature.style.display = 'none'
        e.preventDefault()

    }
    for (let withNature of withnature) {
        withNature.style.display = 'block'
    }

})

let getIslamicPic = document.getElementById('islamic')
getIslamicPic.addEventListener('click', function (e) {
    let nonIslam = document.getElementsByClassName('nonislam')
    let withIslam = document.getElementsByClassName('islam')
    for (let Nonslam of nonIslam) {
        Nonslam.style.display = 'none'
        e.preventDefault()
    }
    for (let WithIslampic of withIslam) {
        WithIslampic.style.display = 'block'
    }
})

let getArtPic = document.getElementById('art')
getArtPic.addEventListener('click', function (e) {
    let nonartpic = document.getElementsByClassName('nonart')
    let artpic = document.getElementsByClassName('art')
    for (let nonartpics of nonartpic) {
        nonartpics.style.display = 'none'
        e.preventDefault()
    }
    for (let artpics of artpic) {
        artpics.style.display = 'block'
    }
})