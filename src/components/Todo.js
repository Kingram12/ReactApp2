import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

//UseState Hook - hooks can only be used directly inside component functions & custom hooks
//UseState always returns an array with two elements - can destructure
//First returned item is current state 'snapshot' - ex: modalIsOpen is current state
//Second (setModalIsOpen) is a function to assign new value  - - state changing function

function Todo(props) {
    const [modalIsOpen, setModalIsOpen ] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);

    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal/>}
            {modalIsOpen && <Backdrop/>}
        </div>
    )
}

// {modalIsOpen && <Modal/>} - if both conditions are true, second will return. Vs doing a ternary operator ? <Modal/> : null 





export default Todo;