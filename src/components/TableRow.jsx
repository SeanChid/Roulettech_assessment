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
    }

    return (
        <tr>
            <ModeButtons />
            <Title />
            <Completed />
        </tr>
    )
}

export default TableRow