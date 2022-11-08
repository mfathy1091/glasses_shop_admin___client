import './dataTable.css'
import { FaEye, FaEdit } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import TablePagination from '../TablePagination/TablePagination'

const DataTable = (props) => {
  const { columns, rows, path, totalRows, page, rowsPerPage, onPageChange, onRowsPerPageChange, hoverable } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (page) => {
    onPageChange(page);
  }

  const handleChangeRowsPerPage = (rowsPerPage) => {
    onRowsPerPageChange(rowsPerPage);
  }

  if(rows?.length >= 1){
    return (
      <div>
        <table className='data-table'>
          <thead>
            <tr>
              {columns.map((column, index) => <th key={index}>{column.headerLabel}</th>)}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => <TableRow key={index} row={row} columns={columns} path={path} hoverable={hoverable} />)}
            
            <tr>
              <td colSpan={columns.length+1}>
                <TablePagination
                  totalRows={totalRows}
                  page={page}
                  rowsPerPage={rowsPerPage} 
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    )
  }else{
    return (
      <p className='no-data-message'>No data to display!</p>
    )
  }

  
}

const TableHeadItem = ({item}) => <tr>{item.headerLabel}</tr>

const TableRow = ({row, columns, path, hoverable}) => {
  const navigate = useNavigate();
  let now = new Date();
  let created_at = new Date(row.created_at);
  let isNew = (now - created_at)/1000/60 < 5;

  return (
    <tr className={`data-row ${isNew ? 'new' : ''}`}>
      {columns.map((columnItem, index) => {
        return <td key={index}>{row[`${columnItem.value}`]}</td>
      })}
      <td>
        <button
          className='hover:text-cyan-400 text-sm p-3'
          onClick={() => {navigate(`${path}/show/${row.id}`)}}
        >
          <FaEye />
        </button>        

        <button
          className='hover:text-cyan-400 text-sm p-3'
          onClick={() => {navigate(`${path}/edit/${row.id}`)}}
        >
          <FaEdit />
        </button>
      </td>
      
    </tr>
  )
}

export default DataTable