import React, { useState } from "react";
import PropTypes from 'prop-types'

function Input({ addPost }) {
    const [Input, setInput] = useState('');

    function onChange(e) {
        setInput(e.target.value)
    }

    function onKeyDown(e) {
        const title = e.target.value;

        if (e.key === 'Enter' && title) {
            addPost(title);
            setInput('')
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">Create post</div>
            <input className="Input__field" type="text" value={Input} onChange={onChange} onKeyDown={onKeyDown}/>
        </div>
    );
}

Input.propTypes = {
    addPost : PropTypes.func.isRequired
}

export default Input;