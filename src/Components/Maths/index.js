import React, {useState} from "react";
import {TextArea, Button} from 'grommet'
import { queries } from "../../Services/api";


export const Evaluator = (props) => {
    
    const whichEvaluator = String(props.type).toUpperCase();
    const [value, setValue] = useState('')
    const [response, setResponse] = useState('')

    const askAI = () => {
        queries.ask(value).then(data => {
            const res = JSON.parse(data.data)[0]
            setResponse(res.text)
        })
    }

    return (
        <div>
        <h1>Ask me any {whichEvaluator} related question.</h1>

        <TextArea
            placeholder="type here"
            value={value}
            onChange={event => setValue(event.target.value)}
            size="medium"
        />
        <Button primary label="Send" onClick={askAI}/>
        <h1>{response}</h1>
        </div>
    )   
}