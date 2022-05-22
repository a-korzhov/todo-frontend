export const handleInputChangeStrategy = (event, state, setState) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
}