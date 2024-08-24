const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode, deleteRow} = props

    if(isEditing) {
        return <td>
            <button className='btn btn-primary' onClick={changeNormalMode}>Save</button>
        </td>
    } else {
        return <td>
            <button className="btn btn-danger" onClick={deleteRow}>Delete</button>
            <button className='btn btn-primary'onClick={changeEditMode}>Edit</button>
        </td>
    }
}

export default ModeButtons