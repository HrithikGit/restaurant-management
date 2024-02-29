import React,{useState} from 'react';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { OrdersData } from './OrdersData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableSortLabel from '@mui/material/TableSortLabel';
import '../App.css';

function Orders(){
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentDate, setCurrentDate] = useState(new Date());
  const columns = [
    {
        id: 'orderId',
        label: 'Order ID'
    },
    {
        id: 'date',
        label: 'Date'
    },
    {
        id: 'customerName',
        label: 'Customer Name'
    },
    {
        id: 'location',
        label: 'Location'
    },
    {
        id: 'amount',
        label: 'Amount'
    },
    {
        id: 'status',
        label: 'Status'
    },
  ]
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    const [orderBy, setOrderBy] = useState('');
    const [order, setOrder] = useState('asc');
    const handleSortRequest = (property) => {
      const isAsc = orderBy === property && order === 'asc';
      console.log(property);
      setOrderBy(property);
      setOrder(isAsc ? 'desc' : 'asc');
    };
    const sortedData = OrdersData
    .filter(row => !currentDate || new Date(row.date).toDateString() === currentDate.toDateString())
    .sort((a, b) => {
      if (order === 'asc') {
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
    });

  const headingStyle = {
    marginBottom: 0
  };
  const labelStyle = {
    marginTop: 0 ,
    color: '#817f82',
    fontSize: '15px'
  };
    return (
        <div className="page-background">
            <div className="ordersMain">
            <Container sx={{display : "flex", width : "100%"}}>
                <Paper elevation={0} sx={{flex:"70%", margin: "20px", backgroundColor: "#fafafa"}}>
                   <h3 style={headingStyle}>Orders</h3>
                   <label style={labelStyle}>Here is your order list data</label>
                </Paper>
                <Paper elevation={0} sx={{flex:"30%", margin: "20px", backgroundColor: "#fafafa"}}>
                <LocalizationProvider dateAdapter={AdapterDateFns} className= 'datePicker'>
                <DatePicker 
                 renderInput={(props) => <input {...props} className="datePicker" />}
                 label="Select Date"
                 value={currentDate} 
                 onChange={(newValue) => {
                    setCurrentDate(newValue);
                 }}
                 
                 />
                </LocalizationProvider>
                </Paper>
            </Container>
            <Container>
            <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '20px' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                            >
                            <TableSortLabel
                              active={orderBy === column.id}
                              direction={orderBy === column.id ? order : 'asc'}
                              onClick={() => handleSortRequest(column.id)} >
                                 {column.label}
                            </TableSortLabel>
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                         <TableRow hover role="checkbox" tabIndex={-1} key={row.orderId}>
                            <TableCell> {row.orderId} </TableCell>
                            <TableCell> {row.date} </TableCell>
                            <TableCell> {row.customerName} </TableCell>
                            <TableCell> {row.location} </TableCell>
                            <TableCell> {row.amount} </TableCell>
                            <TableCell> {row.status} </TableCell>
                        </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={OrdersData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            </Container>
            </div>
        </div>
    )
}

export default Orders;