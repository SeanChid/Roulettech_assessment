const Title = (props) => {

    const {isEditing, value, setTitle} = props

    return isEditing? (
        <td>
            <input
                className='form-control border border-dark'
                placeholder='Enter title'
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