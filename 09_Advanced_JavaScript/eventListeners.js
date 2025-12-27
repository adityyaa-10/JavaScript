const outerDiv = document.getElementById('outerDiv')
const innerDiv = document.getElementById('innerDiv')

outerDiv.addEventListener(
    'click',
    () => {
        console.log('Outer Div clicked - Capturing')
    },
    true
)

innerDiv.addEventListener('click', () => {
    console.log('Inner Div clicked')
})

outerDiv.addEventListener(
    'click',
    () => {
        console.log('Outer Div clicked - Bubbling')
    },
    false
)