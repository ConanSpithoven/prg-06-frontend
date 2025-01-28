function DeleteButton({changeFunction}){

    
    return (
        <button type="button" className="bg-red-900 border border-red-800 rounded shadow p-1 flex-1 text-right md:text-center" onClick={changeFunction}>Delete entry</button>
    )
}

export default DeleteButton;