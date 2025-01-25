function AddButton({changeFunction}){

    
    return (
        <button type="button" className="button bg-blue-200 justify-self-center" onClick={changeFunction}>Add New</button>
    )
}

export default AddButton;