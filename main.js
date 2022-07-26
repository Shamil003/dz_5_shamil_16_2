const list = [

]

const addButton = document.getElementById("button");
const input = document.getElementById('input');
const todos = document.getElementsByClassName('list')

function change(id) {
    const item = list.findIndex(t => t.id === id)
    const text = prompt("текст для изменения")
    list[item].text = text;
    render()
}
//change

function deleteTodo(id) {
    const item = list.findIndex(todo => todo.id === id);
    list.splice(item, 1)
    render()
}
//change


function render() {
    //change
    todos['0'].remove();
    //change
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');
    for (let i = 0; i < list.length; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text
        div.append(p);
        const buttons = document.createElement('div')
        buttons.setAttribute("class", 'actions')
        const changeButton = document.createElement("button");
        changeButton.setAttribute('class', 'change');
        changeButton.onclick = () => {
            change(list[i].id)
        }
        changeButton.innerText = 'change'
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", 'delete');

        //change
        deleteButton.onclick = () => {
            deleteTodo(list[i].id);
        }
        //change



        deleteButton.innerText = 'delete'

        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div)
    }
    // console.log(mainDiv)

    const form = document.querySelector('.form')
    document.querySelector('.list')
    form.append(mainDiv)

}

addButton.onclick = () => {
    console.log();
    const obj = {
        id: list.length + 1,
        text: input.value
    }
    list.push(obj);
    console.log(list)
    render()
}