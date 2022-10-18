const progressInner = document.querySelectorAll('.inner');

const aboutLoadHandler = () => {
    setTimeout(() => {
        progressInner.forEach(pro => pro.style.width = `${pro.getAttribute('value')}%`)
    }, 2000)
}

window.addEventListener('load', aboutLoadHandler)
