const AddButton = (props) => {
    const {addRow} = props

    return (
        <tr>
            <td colSpan='4'>
                <button className='btn btn-success' onClick={addRow}>Add</button>
            </td>
        </tr>
    )
}

export default AddButton