const input = document.querySelector('#task'),
      btnAdd = document.querySelector('.btn__add')

let taskCount = 0
let checked = false

btnAdd.addEventListener('click', () =>{
    const task = input.value
    if (task.length > 0) {
        const cardZone = document.querySelector('.task__card__zone')
        cardZone.innerHTML += createTask(task)
    }  
    input.value = ''
})


const createTask = (text, index) =>{
    return `
    <div class="task__card">
        <label for="" class="task__check">
            <input type="checkbox" class="checkbox" onchange="doneTask(${index})">
        </label>
    
        <div class="task__text">${text}</div>
        <button class="task__delete"></button>
    </div>
    `
}

const doneTask = index =>{
    const 
}