// const button = document.getElementById("btn")
// const list = document.getElementsByTagName("ul")
// const item = document.getElementById("item")

// button.onclick = (event) =>{
//     event.preventDefault()

//     var addItem = item.value
//     console.log(addItem)
//     item.value = ""
//     item.focus()
// }


//------------------------------------------------------------------//


const deleteItem = document.querySelector(".delete")
const alert = document.getElementById("alert")
const removeAlert = document.getElementById("remove-alert")



deleteItem.addEventListener('click', () => {
    alert.classList.remove("hide")
})

removeAlert.onclick = () => {
    alert.classList.add("hide")
}