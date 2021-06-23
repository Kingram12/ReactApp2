import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

//UseState Hook - hooks can only be used directly inside component functions & custom hooks
//UseState always returns an array with two elements - can destructure
//First returned item is current state 'snapshot' - ex: modalIsOpen is current state
//Second (setModalIsOpen) is a function to assign new value  - - state changing function

// here, the intial state of the modal when loading the Todo component is false - meaning the modal will not show until the state value is set to true. 

function Todo(props) {
    const [modalIsOpen, setModalIsOpen ] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);

    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
        </div>
    )
}



//Following backdrop files - on Todo.js  - Backdrop component is implemented with it's prop "onClick" *which we named and could be named anything we want the prop to be called* this prop is set to closeModalHandler, which changes the state of the modal. onClick could not be used by Backdrop if it was not passed in via props from the original html return (backdrop.js)

//working backwords in the code - the end result is that these are still built in HTML attributes that are being utilized (ex: onClick is on a div that we return with our creating a component function), but in order to use anything on an empty component we need to pass it to that component via props. We can then set that prop to whatever we need, including a function. 

// {modalIsOpen && <Modal/>} - if both conditions are true, second will return. Vs doing a ternary operator ? <Modal/> : null 





export default Todo;