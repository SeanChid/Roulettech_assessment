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

    const row = currentData.map((el) => <TableRow />)

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable