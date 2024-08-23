const Title = (props) => {

    const {isEditing, value, setTitle} = props

    return isEditing? (
        <td>
            <input
                type='text'
                value={value}
                onChange={(e) => setTitle(e.target.value)}
            />
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}

export default Title