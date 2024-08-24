const Completed = (props) => {

    const {isEditing, value, setCompleted} = props

    return isEditing? (
        <td>
            <input
                className='form-check-input border border-dark'
                type='checkbox'
                checked={value}
                onChange={(e) => setCompleted(e.target.checked)}
            />
        </td>
    ) : (
        <td>
            {value ? 'Completed' : 'Incomplete'}
        </td>
    )
}

export default Completed