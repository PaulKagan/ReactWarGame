import React, { useState } from 'react';

import Field from './Field';
import Conclusion from './Conclusion';

export default function Game(props) {

    const [finished, setFinished] = useState(false)

    return (
        <div>
            {finished ? <Conclusion score={props.score} setFinished={setFinished}/> : <Field userName={props.userName} setScore={props.setScore} setFinished={setFinished} score={props.score}/> }
        </div>
    )
}
