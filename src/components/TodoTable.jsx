import axios from 'axios'

import AddButton from './AddButton.jsx'
import TableHeader from './TableHeader.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'

const TodoTable = () => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/todos/')
            .then((res) => {
                setCurrentData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const addRow = () => {
        axios.post('http://localhost:8000/api/todos/add/', {title: 'New Item', completed: false})
            .then((res) => {
                setCurrentData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteRow = (id) => {
        axios.delete(`http://localhost:8000/api/todos/delete/${id}/`)
            .then((res) => {
                setCurrentData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const row = currentData.map((el) => <TableRow
        initialTodoData={el}
        initialEditMode={false}
        key={el.id}
        deleteRow={() => deleteRow(el.id)}
        setCurrentData={setCurrentData}
    />)

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {row}
                </tbody>

                <tfoot>
                    <AddButton addRow={addRow}/>
                </tfoot>
            </table>
        </div>
    )
}

export default TodoTable