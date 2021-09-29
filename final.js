var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active')

        var panel = this.nextElementSibling
        if (panel.style.display === 'grid') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'grid'
        }
    })
}

let d = document
let menu = d.getElementById('menu'),
    main = d.getElementById('main')
    slider = d.getElementById('slider')

// console.log(checkbox.getAttribute('checked'))

slider.addEventListener('click', () => {
    menu.classList.toggle('active')
    main.classList.toggle('active')
})