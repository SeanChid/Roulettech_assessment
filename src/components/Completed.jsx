const Completed = (props) => {

    const {isEditing, value, setCompleted} = props

    return isEditing? (
        <td>
            <input
                type='checkbox'
                checked={value}
                onChange={(e) => setCompleted(e.target.checked)}
            />
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}

export default Completed