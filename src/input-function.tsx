import { useState } from "react"

export function InputFunction(){

    const [numbers, setNumbers] = useState({
        numOne: 0,
        numTwo: 0
    });

    const [results, setResults] = useState<string[]>([]);

    function handleFirstNum(event: React.ChangeEvent<HTMLInputElement>){
        const num:number = Number(event.target.value);
        // We need to create a BRAND NEW OBJECT that has the desired value
        
        const numbersClone = {...numbers};
        numbersClone.numOne = num;
        setNumbers(numbersClone); // whenever you call a set function ALWAYS pass in a new object
    }

    function handleSecondNum(event: React.ChangeEvent<HTMLInputElement>){
        const num:number = Number(event.target.value);
        // We need to create a BRAND NEW OBJECT that has the desired value
        
        const numbersClone = {...numbers};
        numbersClone.numTwo = num;
        setNumbers(numbersClone); // whenever you call a set function ALWAYS pass in a new object
    }

    function doAddition(){
        const resultsClone = [...results]; // clones the array
        resultsClone.unshift(`${numbers.numOne} + ${numbers.numTwo} = ${numbers.numOne + numbers.numTwo}`);
        setResults(resultsClone);
    }

    function doSubtraction(){
        const resultsClone = [...results]; // clones the array
        resultsClone.unshift(`${numbers.numOne} - ${numbers.numTwo} = ${numbers.numOne - numbers.numTwo}`);
        setResults(resultsClone);
    }

    function doMultiplication(){
        const resultsClone = [...results]; // clones the array
        resultsClone.unshift(`${numbers.numOne} * ${numbers.numTwo} = ${numbers.numOne * numbers.numTwo}`);
        setResults(resultsClone);
    }

    function doDivision(){
        const resultsClone = [...results]; // clones the array
        resultsClone.unshift(`${numbers.numOne} / ${numbers.numTwo} = ${numbers.numOne / numbers.numTwo}`);
        setResults(resultsClone);
    }

    function doModulus(){
        const resultsClone = [...results]; // clones the array
        resultsClone.unshift(`${numbers.numOne} % ${numbers.numTwo} = ${numbers.numOne % numbers.numTwo}`);
        setResults(resultsClone);
    }

    function doPower(){
        const resultsClone = [...results]; // clones the array
        resultsClone.unshift(`${numbers.numOne} ^ ${numbers.numTwo} = ${Math.pow(numbers.numOne, numbers.numTwo)}`);
        setResults(resultsClone);
    }

    function doClear(){
        const resultsClone:string[] = []; // clones the array
        setResults(resultsClone);
    }


    return <>
    
        <label htmlFor="fNumInput">First Number</label>
        <input id="textId" type="text" placeholder="0" onChange={handleFirstNum} size={30}></input>
    
        <label htmlFor="lNumInput">Second Number</label>
        <input id="textId" type="text" placeholder="0" onChange={handleSecondNum} size={30}></input>

        <hr />

        <button onClick={doAddition}>Add</button>
        <button onClick={doSubtraction}>Subtract</button>
        <button onClick={doMultiplication}>Multiply</button>
        <button onClick={doDivision}>Division</button>
        <button onClick={doPower}>Power</button>
        <button onClick={doClear}>Clear</button>


        <h2>Results/History</h2>
        <ul>

            {results.map(num => <li>{num}</li>)}

        </ul>
    </>



}