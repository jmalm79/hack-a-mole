import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import API from '../../utils/API'


function Table({ columns, data }) {
    const [highscores, setHighscores] = useState([])
    useEffect(() => {
        loadHighscores()
    }, [])
    function loadHighscores() {
        API.getHighscores()
        .then(res => 
            setHighscores(res.data)
        )
        .catch(err => console.log(err));
    }
    console.log(highscores);
    
    
    
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

 
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function HighScoreTable() {
  const columns = React.useMemo(
    () => [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Score',
            accessor: 'score',
          },
    ],
    []
  )

  const data = (() => (20), [])

  return (

      <Table columns={columns} data={data} />

  )
}

export default HighScoreTable;
