
//     const selection = ['milk and egg', 'apple and orange', 'bread and butter']
//     const availableItems = Math.floor(Math.random() * 3)
//     const randomSelection = selection[availableItems]
//     console.log('Available items: ' ,randomSelection)


// function selectingItems () {
//     if (randomSelection == selection[0]) {
//         console.log('Alright, then pack milk and egg')
//     } else if (randomSelection == selection[1]) {
//         console.log('Ok then pack apple and orange')
//     } else {
//         console.log('Ohh then pack the bread and butter')
//     }
// }
// selectingItems()


const milkButton = document.querySelector('.milk')
const appleButton = document.querySelector('.apple')
const breadButton = document.querySelector('.bread')
const selectedButton = document.querySelector('.selectedItem')

milkButton.addEventListener('click', selectedMilk)

function selectedMilk () {
    selectedButton.innerText = 'Alright, packing milk and egg.'
}

appleButton.addEventListener('click', selectedApple)

function selectedApple () {
    selectedButton.innerText = 'Then packing apple and orange.'
}

breadButton.addEventListener('click', selectedBread)

function selectedBread () {
    selectedButton.innerText = 'Ohh packing bread and butter.'
}