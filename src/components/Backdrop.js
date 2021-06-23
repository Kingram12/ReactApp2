function Backdrop(props) {
    return <div className="backdrop" onClick={props.onClick}/>;
}

//on click, add prop onClick (or onSelect, etc. whatever you name prop)
//now Backdrop will have prop called onClick that can be set to a function within another component to perform action

export default Backdrop;