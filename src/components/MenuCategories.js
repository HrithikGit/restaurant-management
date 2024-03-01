import Paper from '@mui/material/Paper'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Container, Button, Typography } from '@mui/material';
import { Modal } from '@mui/base/Modal';

import { categoriesData } from'./MenuCategoriesData';

function MenuCategories(){

    var categoryBoxStyle = { padding : "20px", width : "240px", borderRadius : "12px", marginBottom : "32px", marginRight : "32px"}
    
    var categories = categoriesData.categories;

    return (
        <div className="page-background">
            <div style={{marginBottom : "12px"}} className="d-flex jc-between w-100">
                <div></div>
                <Button sx={{ fontWeight : "bold" , color : "#572f89"}}> + New Category</Button>
            </div>
            <tbody className="d-flex flex-wrap">
                { categories.map(item => 
                    <Paper sx={ categoryBoxStyle}>
                        <div className="d-flex jc-between ai-center">
                        <h3 className="color--primary"> { item.name } </h3>
                        <Button sx={{ color : "#ff7d00"}}> <AddBoxIcon/> </Button>
                        </div>
                        <div className="h-line"></div>
                        {item.foods.length > 0 ? (
                            <ul>
                                {item.foods.map(food => (
                                    <li className="color--secondary" key={food}>
                                        {food}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center subtext"> There are no items currently in this Category</p>
                        )}
                    </Paper>
                )} 
            </tbody>
        </div>
    )
}

export default MenuCategories;