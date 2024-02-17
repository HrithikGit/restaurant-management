import React from 'react';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/MenuBookOutlined';
import OrderIcon from '@mui/icons-material/RestaurantMenuOutlined';
import CustomerIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AnalyticsIcon from '@mui/icons-material/BarChartOutlined';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon/>,
        link: "/"
    },
    {
        title: "Orders",
        icon: <OrderIcon/>,
        link: "/orders"
    },
    {
        title: "Menus",
        icon: <MenuIcon/>,
        link: "/menus",
        subData: [
            {
                title: "Add New Menu",
                link: "/addMenu"
            },
            {
                title: "Menu List",
                link: "/menuList"
            },
            {
                title: "Categories",
                link: "/categories"
            },
        ]
    },
    {
        title: "Customer",
        icon: <CustomerIcon/>,
        link: "/customer"
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon/>,
        link: "/analytics"
    },
    {
        title: "Settings",
        icon: <HomeIcon/>,
        link: "/settings"
    }
]