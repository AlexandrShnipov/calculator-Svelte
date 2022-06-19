<script>
    import {buttons,} from './Lets.js';

    let textInput = '';
    let previousAction = '';
    let operator;

    const inputContentAfterInput = (e) => {
        if ((e.target.innerText === '=')) {

            previousAction = textInput

            console.log(textInput)
            let splitedTextInput = textInput.split('');
            console.log(splitedTextInput[splitedTextInput.length - 1], splitedTextInput)

            if (splitedTextInput[1] === '.' && splitedTextInput[2] === '.') {
                textInput = 'press AC, please'
            }

            const lookingForAnOperator = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    if (isNaN(arr[i]) && arr[i] !== '.') {
                        operator = arr[i];
                    }
                }
            }
            lookingForAnOperator(splitedTextInput)

            console.log(operator)
            splitedTextInput = textInput.split(operator);
            textInput =
                splitedTextInput.length === 1 ? splitedTextInput[0]
                    : splitedTextInput.length > 2 || isNaN(splitedTextInput[1]) || isNaN(splitedTextInput[0]) ? 'press AC, please'
                        : operator === '/' && splitedTextInput[1] === '0' ? 'press AC, please'
                            : operator === '*' && !Number(splitedTextInput[1]) ? splitedTextInput[0]
                                : operator === '/' && !Number(splitedTextInput[1]) ? splitedTextInput[0]
                                    : operator === '/' ? Number(splitedTextInput[0]) / Number(splitedTextInput[1])
                                        : operator === '*' ? Number(splitedTextInput[0]) * Number(splitedTextInput[1])
                                            : operator === '+' ? Number(splitedTextInput[0]) + Number(splitedTextInput[1])
                                                : Number(splitedTextInput[0]) - Number(splitedTextInput[1])
            console.log(splitedTextInput)
            console.log(previousAction, splitedTextInput[1])

        } else if (e.target.innerText === 'AC') {
            textInput = '';
            previousAction = '';
        } else {
            textInput = String(textInput) + String(e.target.innerText)
            console.log(typeof textInput, textInput, e)
            if (isNaN(textInput.split('')[0])) {
                textInput = 'press AC, please'
            }
        }
        // setTimeout(resetText, 5000);
    }

    // const resetText = () => {
    //     if (result.length !== 0) {
    //         textInput = '';
    //     }
    // }


</script>

<div>
    <input type="text" value={previousAction}>
    <input type="text" value={textInput}>
    <ul>
        {#each buttons as button, i}
            <li key={button.id}>
                <button on:click={inputContentAfterInput}>
                    {button.text}</button>
            </li>
        {/each}
    </ul>
</div>

<style>

    input {
        display: block;
        padding: 1rem;
        height: 4rem;
        margin-bottom: .3rem;
        width: 100%;
        font-size: 1.5rem;
        border: none;
        box-shadow: 0 0 6px;
        outline: transparent;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: .2rem;
    }

    li {
        list-style: none;
    }

    li:nth-child(16) {
        grid-column: 1/4;
    }

    li:nth-child(17) {
        grid-column: 4/6;
    }

    button {
        width: 100%;
        height: 4rem;
        font-size: 2rem;
        border-radius: 10%;
        border: none;
        box-shadow: 0 0 6px;
    }

    button:active {
        background-color: rgba(255, 100, 100, .2);
    }
</style>