import ModeButtons from './ModeButtons.jsx'
import Title from './Title.jsx'
import Completed from './Completed.jsx'

import { useState } from 'react'
import axios from 'axios'

const TableRow = (props) => {

    const {initialTodoData, initialEditMode, deleteRow, setCurrentData} = props

    const [editMode, setIsEditing] = useState(initialEditMode)
    const [title, setTitle] = useState(initialTodoData.title)
    const [completed, setCompleted] = useState(initialTodoData.completed)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {

        const bodyObj = {
            title,
            completed
        }

        axios.put(`http://localhost:8000/api/todos/update/${initialTodoData.id}/`, bodyObj)
            .then((res) => {
                setCurrentData(res.data)
                setIsEditing(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <tr>
            <ModeButtons
                isEditing={editMode}
                changeEditMode={changeEditMode}
                changeNormalMode={changeNormalMode}
                deleteRow={deleteRow}
            />
            <Title
                isEditing={editMode}
                value={title}
                setTitle={setTitle}
            />
            <Completed
                isEditing={editMode}
                value={completed}
                setCompleted={setCompleted}
            />
        </tr>
    )
}

export default TableRow