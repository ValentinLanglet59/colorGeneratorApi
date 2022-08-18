const button = document.getElementById('button');
const wrapper = document.getElementById('wrapper')


button.addEventListener('click', (e) => {
    e.preventDefault()
    const colorGenerator = document.getElementById('color-generator').value
    const mode = document.getElementById('colors').value.toLowerCase()
    const filteredColor = colorGenerator.substring(1, 7)
    fetch(`https://www.thecolorapi.com/scheme?hex=${filteredColor}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => { 
            data.colors.map(color => {
                console.log(color.hex.value)
            const result = color.rgb.value
            const split = result.split("]")
            for (let i = 0; i < split.length; i++){
                console.log(split[i])
                wrapper.innerHTML += 
                `<div class="box" style="background-color: ${split[i]};"><p class="align">${color.hex.value}</p></div>`
            }
        })
    })
    wrapper.innerText = ''
})




// data.colors[0].rgb.value
// style="background-color: rgb(148, 96, 143);"
