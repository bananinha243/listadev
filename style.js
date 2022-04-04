function addTask(){
    const newTask = document.getElementByClassName('new-task')[0].value
    if (newTask === ''){ return }
    const $ul = document.getElementByTagName('ul')[0]
    const $li = document.createElement('li')
    const $div = document.createElement('div')
    $div.className += 'checkbox'
    const $label = document.createElement('label')
    const $input = document.createElement('input')
    $input.className += 'task-item'
    $input.setAttribute('type', 'checkbox')
    $input.setAttribute('name', 'tarefa')
    $input.addEventListener('click', toggleRemoved)
    $label
}

function toggleRemoved(e){
    const $li = e.currentTarget.closest('li')
    $li.classList.toggle('removed')
}

const task = document.getElementsByClassName('task-item')
Array.from(tasks).forEach(task => task.addEventListener('click',toggleRemoved))