let circle = document.getElementById('circle');

circle.addEventListener('mousedown', function (e) {
    // e.preventDefault();
    let selected = e.target

    document.body.addEventListener('mousemove', function (e) {
        e.preventDefault();
        let offSetX = e.pageX - selected.offsetWidth / 2;
        let offSetY = e.pageY - selected.offsetHeight / 2;

        // console.log('X: ' + offSetX, 'Y: ' + offSetY)
        
        selected.style.position = 'absolute';
        selected.style.zIndex=1000;

        selected.style.left = offSetX + 'px';
        selected.style.top = offSetY + 'px';
    })
    document.body.addEventListener('mouseup', function (e) {
        selected=null
     })

    //  selected.ondragstart =function(){
    //     return false
    //  }
})