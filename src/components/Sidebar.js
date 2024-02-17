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
                <div id="title">User Name</div>
        </li>
         {SidebarData.map((val,key)=>{
            return (
                <>
                    <Link className="row" to={val.link} onClick={(e) => handleClick(e,val.subData)}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
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
                                <Link className="row" to={data.link}>
                                <div id="subTitle">{data.title}</div>
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