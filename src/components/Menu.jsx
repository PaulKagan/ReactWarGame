import React, {useState} from 'react'

export default function Menu(props) {

const [name, setName] = useState('');
const [empty, setEmpty] = useState(false)


return (
<div>
    <div id='menu'>
        <div id="title">Ready for WAR</div>
        <input type="text" id='name' onChange={e => setName(e.target.value)} placeholder='Enter your name'/>
        <button id='signin' onClick={() => {
            if (name.length < 1) {
                setEmpty(true);
                return;
            }
            props.setUserName(name);
            props.setSignedIn(!props.signedIn);
            }}>Start</button>
            {empty && <p style={{color: 'red'}}>Name is empty</p>}
    </div>
</div>
)
}
