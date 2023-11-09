// Part 1 - GET
function getData() {
    axios.get("https://api.vschool.io/belita/todo")
        // .then(res => listData(res.data))
        .then(res => res.data.forEach(data => {
            listData(data)
        }))
        .catch(err => console.log(err))
}



// LISTS In THE BROWSER
function listData(data) {
    for (let i = 0; i < data.length; i++) {

        const div = document.createElement('div')
        div.setAttribute('id', 'todoItem')
        document.getElementById('todo-list').appendChild(div)

        const elId = document.createElement('p')
        elId.setAttribute('hidden', true)
        elId.textContent = data._id;
        div.appendChild(elId)

        const h1 = document.createElement('h1')
        h1.textContent = data.title
        div.appendChild(h1)

        const h2 = document.createElement('h2')
        h2.textContent = data.price
        div.appendChild(h2)

        const h3 = document.createElement('h3')
        h3.textContent = data.description
        div.appendChild(h3)

        const image = document.createElement('img')
        image.src = data.imgUrl
        image.style.width = "300px"
        image.style.height = "300px"
        div.appendChild(image)

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = data[i].completed
        div.appendChild(checkbox)
        checkbox.addEventListener('click', updates)
    }

    // const deleteButton = document.createElement()
}

function clearList() {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}


getData()
clearList()


// Part 2 - POST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgURL.value,
        // completed: todoForm.checkbox.value
    };


    axios
        .post("https://api.vschool.io/belita/todo", newTodo)
        .then((response) => getData())
        .catch((error) => console.log(error));
})


// Part 3 - PUT

const updates = e => {
    const target = e.target
    // const parentClassList = target.parentElement.classList
    const id = target.parentElement.firstChild.textContent

    // console.log(id)
    axios.put(`https://api.vschool.io/belita/todo/${id}`, { completed: true })
        .then(res => {
            var element = document.getElementById("todoItem")
            element.classList.toggle("completed")
            // {
            //     if (res.data.completed) {
            //         h1.style.textDecoration = "line-through"
            //     } else {
            //         h1.style.textDecoration = "none"
            //     }
            // }
        })
}

// Part 4 - DELETE

const deleteButton = e => {
    addEventListener.target.parentElement.remove(
        axios.delete("https://api.vschool.io/belita/todo/" + res.data[i].id, e.target.parentElement.style)
            .then(response => {
                el.removeChild(firstChild)

            }
            ))
}