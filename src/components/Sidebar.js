import React, {useState} from 'react';
import '../App.css';
import {SidebarData} from './SidebarData';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import {Link} from 'react-router-dom';

function Sidebar() {

    const [subData, setSubData] = useState(false);
    const showSubData = () => setSubData(!subData);

    const handleClick = (e,subData) => {
        if (subData) {
          e.preventDefault();
          showSubData();
        }
      };

    return (
        <div className="Sidebar">
        <ul className="SidebarList">
        <li className="SidebarTitle">
                <div id="icon"><AccountIcon/></div>
                <div id="title">
                <p className="color--primary" >Full</p>
                <p className="color--black" style={{marginLeft: "5px"}}>Name</p>
                </div>
        </li>
         {SidebarData.map((val,key)=>{
            return (
                <>
                    <Link className="row subtext" to={val.link} onClick={(e) => handleClick(e,val.subData)}>
                    <div className="imageicon" id="icon">{val.icon}</div>
                    <p id="title">{val.title}</p>
                    <div id="arrow">
                        {val.subData && subData
                         ? <ArrowUpIcon/>
                         : val.subData 
                         ? <ArrowDownIcon/>
                         : null}
                    </div>
                    </Link>
                       {subData && val.subData && (
                          <ul> 
                            {val.subData.map((data,keys)=> (
                                <Link className="row subtext" to={data.link}>
                                <p id="subTitle">{data.title}</p>
                                </Link>
                               ))}                         
                    </ul>            
            )}
            </>
            )})}
            </ul>
            </div>
            )}

export default Sidebar;