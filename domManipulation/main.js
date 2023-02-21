const body = document.getElementsByTagName('body')[0];
const container = document.getElementsByClassName('container')[0];
const table = document.getElementById('table');
const form = document.getElementById('createRowForm');
const createRowBtn = document.getElementById('createRowBtn');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const roleInput = document.getElementById('role');
const toggleThemeBtn = document.querySelector('.toggleThemeBtn');

toggleThemeBtn.onclick = () => {
    body.classList.toggle('darkTheme');
    container.classList.toggle('darkTheme');
}

function isInputEmpty(inputElement){
  return (inputElement.value === '' && inputElement.value.length === 0);
}

function validateFormEntries(){
    return (isInputEmpty(firstNameInput) || isInputEmpty(lastNameInput) || isInputEmpty(roleInput));
}

function removeRow(removeBtn){
    const parentTr = removeBtn.closest('tr');
    parentTr.remove()
}

function addClickEventsToRemoveBtn(){
    const removeRowBtns = Array.from(document.getElementsByClassName('removeRowBtn'));
    removeRowBtns.forEach(rbtn => {
        rbtn.onclick = () => {
            removeRow(rbtn);
        }
    })
}

addClickEventsToRemoveBtn();

function createTableRow(){
    if (validateFormEntries()){
        alert('All the fields are mandatory.');
        return;
    }
    table.innerHTML += `
        <tr>
            <td>${firstNameInput.value}</td>
            <td>${lastNameInput.value}</td>
            <td>${roleInput.value}</td>
            <td><button class="btn removeRowBtn" style="width: 100%;">Remove</button></td>
        </tr>
    `
    addClickEventsToRemoveBtn();
    form.reset();
}

createRowBtn.onclick = (e) => {
    e.preventDefault();
    createTableRow();
};