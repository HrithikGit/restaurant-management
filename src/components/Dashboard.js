import { Container, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { LineChart } from '@mui/x-charts/LineChart';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ListIcon from '@mui/icons-material/List';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';

function Sidebar(){

    const statStyle = {
        paddingX : "30px",
        paddingY : "10px",
        cursor : "pointer"
    }

    return (
        <>
            <Container sx={{ marginY : "30px", display : "flex", justifyContent : "space-around", width : "100%"}}>
                <Paper sx={ statStyle} > 
                    <div style={{ display : "flex", alignItems : "center", justifyContent: "space-around"}}>
                        <ArrowOutwardIcon sx={{ marginRight : "12px", color : "white", backgroundColor : "#572F89", borderRadius : "8px", padding : "8px"}} /> 
                        <div>
                            <h3 style={{marginBottom : "0px"}}>$40,000</h3>
                            <p style={{ marginTop : "8px"}}> Today's Revenue </p>
                        </div>  
                    </div>
                </Paper>
                <Paper sx={ statStyle} > 
                    <div style={{ display : "flex", alignItems : "center", justifyContent: "space-around"}}>
                        <ListIcon sx={{ marginRight : "12px", color : "white", backgroundColor : "#FF92C2", borderRadius : "8px", padding : "8px"}} /> 
                        <div>
                            <h3 style={{marginBottom : "0px"}}> 200 </h3>
                            <p style={{ marginTop : "8px"}}> Orders Today </p>
                            
                        </div>  
                    </div>
                </Paper>
                <Paper sx={ statStyle} > 
                    <div style={{ display : "flex", alignItems : "center", justifyContent: "space-around"}}>
                        <GroupIcon sx={{ marginRight : "12px", color : "white", backgroundColor : "#FF7D00", borderRadius : "8px", padding : "8px"}} /> 
                        <div>
                            <h3 style={{marginBottom : "0px"}}> 500 </h3>
                            <p style={{ marginTop : "8px"}}> Total Customers </p>
                            
                        </div>  
                    </div>
                </Paper>
                <Paper sx={ statStyle} > 
                    <div style={{ display : "flex", alignItems : "center", justifyContent: "space-around"}}>
                        <InsightsIcon sx={{ marginRight : "12px", color : "white", backgroundColor : "#817F82", borderRadius : "8px", padding : "8px"}} /> 
                        <div>
                            <h3 style={{marginBottom : "0px"}}> $ 50000 </h3>
                            <p style={{ marginTop : "8px"}}> Total Revenue </p>
                            
                        </div>  
                    </div>
                </Paper>
            </Container>
            <Container sx={{display : "flex"}}>
                <Paper sx={{width : "65%"}}>
                    <div sx={{ display: "flex" , "justify-content" : "space-between"}}>
                        <h4>Revenue</h4>
                        <>
                            <Button> Weekly </Button>
                            <Button> Monthly </Button>
                            <Button> Yearly </Button>
                        </>
                    </div>
                    {/* <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={300}
                        /> */}
                </Paper>
            </Container>
        </>
    )
}

export default Sidebar;