import React from 'react'
import CardLayers3d from './CardLayers3d'
import { Typography} from "@mui/material";
function TopCategory() {
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>Top Category</h1>
    </div>
    <div style={{display:"flex",justifyContent: "space-evenly", padding:"40px"}}>
        <CardLayers3d {...{title:"Leptop",images:"https://img.freepik.com/premium-photo/white-laptop-with-blank-screen-isolated_143683-3716.jpg?w=1380"}}/>
        <CardLayers3d {...{title:"Electronics",images:"https://img.freepik.com/premium-vector/set-household-appliances-microwave-oven-washing-machine-refrigerator-vacuum-cleaner-iron-stove-fan-air-conditionertv-dishwasher-kitchen-hood-realistic-3d-vector-isolated_545793-1095.jpg?w=1380"}}/>
        <CardLayers3d {...{title:"Smartphones",images:"https://img.freepik.com/free-vector/realistic-white-smartphone-design-with-three-cameras_23-2148374059.jpg?w=740&t=st=1700040454~exp=1700041054~hmac=6fa21cfe33de501ea7123afa0cafba9d26dd53ea1f2a21030643f468786d1456"}}/>
        <CardLayers3d {...{title:"leptop",images:"https://ksp.co.il/m_action_libs/img/topCategory/1.png?v=2029"}}/>
        <CardLayers3d {...{title:"leptop",images:"https://ksp.co.il/m_action_libs/img/topCategory/1.png?v=2029"}}/>
    </div>
    </>
  )
}

export default TopCategory