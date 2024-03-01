import { Container, Button, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import Paper from '@mui/material/Paper';

//Images 
import pizzaIcon from './../images/icons/pizza-icon.jpeg';
import hamIcon from './../images/icons/ham-icon.jpg';
import riceIcon from './../images/icons/rice-icon.jpeg';
import tendersIcon from './../images/icons/tenders-icon.jpeg';

//Icons
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ListIcon from '@mui/icons-material/List';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';
import PersonIcon from '@mui/icons-material/Person';

function Dashboard(){

    const statStyle = {
        paddingX : "24px",
        paddingY : "8px",
        cursor : "pointer",
        width : "180px"
    }
    
    const data = [
        { label: 'Jan', value: 10 },
        { label: 'Feb', value: 15 },
        { label: 'Mar', value: 20 },
        { label: 'Apr', value: 25 },
        { label : 'May', value: 30}
      ];
    

    return (
        <div className="page-background">
            <div style={{paddingTop : "32px", paddingBottom : "32px", display : "flex", justifyContent : "space-around", width : "100%"}}>
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
            </div>

            {/* second section */}

            <Container sx={{display : "flex", justifyContent: "space-around"}}>
                <Paper sx={{padding : "16px", width : "65%"}}>
                    <div style={{ paddingLeft : "12px", paddingRight: "12px", display: "flex" , justifyContent : "space-between",  alignItems : "center"}}>
                        <h4>Revenue</h4>
                        <div className="d-flex jc-around ai-center">
                            <Button> Weekly </Button>
                            <Button> Monthly </Button>
                            <Button> Yearly </Button>
                            <div>
                                2021
                            </div>
                        </div>
                    </div>
                    <div className="h-line"></div>
                    <LineChart
                        xAxis={ [{ scaleType : "band", data: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"] }]}
                        series={[
                            {
                                data: [ 5000,4200, 8000, 9000, 8500, 8700, 9600],
                                color : '#572f89',
                            }
                        ]}
                        width={ 750 }
                        height={ 250 }
                        
                        />
                </Paper>
                <Paper sx={{paddingX : "32px" , paddingY : "12px"}}>
                    <h3 style={{padding : "12px"}}> Restaurant Staff</h3>
                    <div className="h-line"></div>
                    <div className="d-flex ai-center jc-between w-100 color--gray">
                        <div className="d-flex ai-center">
                            <PersonIcon sx={{ color : "#817f82", marginRight : "8px"}}/>
                            <p> Manager </p>
                        </div>
                        <p > 1 </p>
                    </div>
                    <div className="h-line"></div>
                    <div className="d-flex ai-center jc-between w-100 color--gray">
                        <div className="d-flex ai-center">
                            <PersonIcon sx={{ color : "#817f82", marginRight : "8px"}}/>
                            <p> Supervisor </p>
                        </div>
                        <p > 3 </p>
                    </div>
                    <div className="h-line"></div>
                    <div className="d-flex ai-center jc-between w-100 color--gray">
                        <div className="d-flex ai-center">
                            <PersonIcon sx={{ color : "#817f82", marginRight : "8px"}}/>
                            <p> Chef </p>
                        </div>
                        <p > 5 </p>
                    </div>
                    <div className="h-line"></div>
                    <div className="d-flex ai-center jc-between w-100 color--gray">
                        <div className="d-flex ai-center">
                            <PersonIcon sx={{ color : "#817f82", marginRight : "8px"}}/>
                            <p> Waiters </p>
                        </div>
                        <p > 10 </p>
                    </div>
                    <div className="h-line"></div>
                    
                </Paper>
            </Container>

            {/* 3rd section */}

            <Container sx={{paddingY : "12px", display : "flex", justifyContent: "space-between", width : "100%"}}>
                <Paper sx={{paddingX : "32px" , paddingY : "12px", width : "300px"}}>
                    <h3 style={{padding : "12px"}}> Trending Orders</h3>
                    <div className="h-line"></div>
                        <div className="d-flex ai-center  w-100">
                            <img src={hamIcon} className="imageicon"/>
                            <div>
                                <p> Ham Burger </p>
                                <p className="subtext"> Orders : <span  className="color--secondary"> 138 </span></p>
                            </div>
                        </div>
                    <div className="h-line"></div>
                    <div className="h-line"></div>
                        <div className="d-flex ai-center  w-100">
                        <img src={tendersIcon} className="imageicon"/>
                            <div>
                                <p> Chicken Tenders</p>
                                <p className="subtext"> Orders : <span  className="color--secondary"> 97 </span></p>
                            </div>
                        </div>
                    <div className="h-line"></div>
                    <div className="h-line"></div>
                        <div className="d-flex ai-center  w-100">
                            <img src={ pizzaIcon } className="imageicon"/>
                            <div>
                                <p> Pizza </p>
                                <p className="subtext"> Orders : <span  className="color--secondary"> 128 </span></p>
                            </div>
                        </div>
                    <div className="h-line"></div>
                    <div className="h-line"></div>
                        <div className="d-flex ai-center  w-100">
                            <img src={riceIcon} className="imageicon"/>
                            <div>
                                <p> Fried Rice </p>
                                <p className="subtext"> Orders : <span className="color--secondary"> 18 </span></p>
                            </div>
                        </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Dashboard;
