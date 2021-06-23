//EVERY COMPONENT WILL HAVE PROPS
// destructure props .... instead of passing props as argument, destructure 
// function Modal(props) { props.onCancel } vs 

function Modal({onCancel, onConfirm}) {
    // creating a prop  - Modal will have 2 props now, onCancel and onConfirm instead of an empty object/component ONCE the prop has been utilized/passed to where the component is actually implemented it will show in react chrome tools. Modal.js simply "lays out" the component and its functionality, then is executed once the component is utilized on the page.

    //function cancelHandler runs on button click which generates onCancel prop to be used by modal within other components. 
    
    function cancelHandler(){
        onCancel();

    }
    function confirmHandler(){
        onConfirm();
    }

    return <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
}

//button - onClick is automatically applied to standard 'html' elements (such as buttons, divs, etc), so we can set onClick to a different function such as cancelHandler which runs a function within this component called onCancel. Now onCancel is available as a prop on the Modal component, which we can set equal to yet another function on that component. Ex: on Todo.js <Modal onCancel**prop passed in on Modal component**={closeModalHandler**fn created within Todo component that will change state}


//when button is clicked, it will run cancelHandler or confirmHandler which will generate props on Modal, we then name the props
//if not destructured, it would be props.onCancel instead of just onCancel.

export default Modal;