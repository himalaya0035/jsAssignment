const allNumericKeys = Array.from(document.getElementsByClassName('numericKeys'));
const operatorKeys = Array.from(document.getElementsByClassName('operatorKeys'));
const screen = document.getElementsByClassName('screen')[0];
const evaluateOperator = document.getElementById('evaluateExpression')
const clearKey = document.getElementById('clearKey');


allNumericKeys.map(nkey => {
    nkey.onclick = (e) => {
        const buttonPressed = e.target;
        const blinkingCursor = document.getElementsByClassName('blinkingCursor')[0];
        if (screen.contains(blinkingCursor)){
            screen.innerHTML = '';
        }
        screen.textContent += buttonPressed.textContent;
    }
})

operatorKeys.map(okey => {
    okey.onclick = (e) => {
        const operator = e.target;
        const blinkingCursor = document.getElementsByClassName('blinkingCursor')[0];
        if (screen.contains(blinkingCursor)){
            screen.innerHTML = '';
        }
        screen.textContent += operator.textContent;
    }
})

evaluateOperator.onclick = () => {
    try{
        const ans = eval(screen.innerText)
        screen.textContent = ans;
    }catch(e) {
        screen.textContent = 'SYNTAX ERROR'
    }
}

clearKey.onclick = () => {
    screen.textContent = '';
    screen.innerHTML = '<span class="blinkingCursor">|</span>'
}