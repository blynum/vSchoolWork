// Part 1 - GET
function getData() {
    axios.get("https://api.vschool.io/belita/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
// LISTS In THE BROWSER
function listData(data) {
    clearList()
    for (let i = 0; i < data.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
        const h2 = document.createElement('h2')
        h2.textContent = data[i].price
        document.getElementById('todo-list').appendChild(h2)
        const h3 = document.createElement('h3')
        h3.textContent = data[i].description
        document.getElementById('todo-list').appendChild(h3)
        // maybe putting an if statement for image if image url is entered?
        const image = document.createElement('img');
        image.src = data[i].imgUrl
        image.style.width = "300px"
        image.style.height = "300px"
        document.getElementById('todo-list').appendChild(image)
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = data[i]._id
        // checkbox.check = data[i].completed
        document.getElementById('todo-list').appendChild(checkbox)
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "x"
        document.getElementById('todo-list').appendChild(deleteButton)

        checkbox.checked = data[i].completed
        h1.style.textDecoration = data[i].completed ? "line-through" : "none"
        // checkbox.addEventListener('click', e => {
        //     if (checkbox.checked) {
        //         h1.style.textDecoration = "line-through"
        //         axios.put(`https://api.vschool.io/belita/todo/${data[i]._id}`, { completed: true })
        //             .then(res => getData())
        //             .catch(err => console.log(err))

        //     } else {
        //         h1.style.textDecoration = "none"
        //         axios.put(`https://api.vschool.io/belita/todo/${data[i]._id}`, { completed: false })
        //             .then(res => getData())
        //             .catch(err => console.log(err))
        //     }
        // })


        checkbox.addEventListener('change', e => {
            axios.put("https://api.vschool.io/belita/todo/" + data[i]._id, { completed: true })
                .then(response => {
                    {
                        if (checkbox.checked) {
                            h1.style.textDecoration = "line-through"
                        } else {
                            h1.style.textDecoration = "none"
                            axios.put(`https://api.vschool.io/belita/todo/${data[i]._id}`, { completed: false })
                                .then(res => getData())
                                .catch(err => console.log(err))
                        }
                    }
                })
        })



        deleteButton.addEventListener("click", e => {
            axios.delete("https://api.vschool.io/belita/todo/" + data[i]._id)
                .then(response => {
                    getData()
                }
                )
        })
    }
    // check()
}
function clearList() {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
getData()
// Part 2 - POST
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        // completed: todoForm.checkbox.value
    };
    axios
        .post("https://api.vschool.io/belita/todo", newTodo)
        .then((response) => getData())
        .catch((error) => console.log(error));
})
// Part 3 - PUT

// checkbox.addEventListener('click', e => {
//     if (checkbox.checked) {
//         h1.style.textDecoration = "line-through"
//         axios.put(`https://api.vschool.io/belita/todo/${data[i]._id}`, { completed: true })
//             .then(res => getData())
//             .catch(err => console.log(err))
//     } else {
//         h1.style.textDecoration = "none"
//         axios.put(`https://api.vschool.io/belita/todo/${data[i]._id}`, { completed: false })
//             .then(res => getData())
//             .catch(err => console.log(err))
//     }
// })

// Part 4 - DELETE
// function deleteButton(event) {
// deleteButton.addEventListener("click", e => {
//     axios.delete("https://api.vschool.io/belita/todo/" + res.data[i].id)
//         .then(response => {
//             getData()
//         }
//         )
// })
// }