import React from "react";
import {Box , Button , Typography , TextField , Divider , List , ListItem , IconButton , Avatar} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";

import iphone from "./assets/Gold.png"
import mac from "./assets/iMac.png"
import watch from "./assets/Apple-watch.png"



const items = [
     { id: 1, name: "iPhone 12 Pro", color: "Golden", price: 999, qty: 1, img: iphone },
     { id: 2, name: "Apple Watch", color: "Blue", price: 399, qty: 1, img: watch },
     { id: 3, name: "iMac", color: "Green", price: 1199, qty: 1, img: mac },
]

function Row({label , value , bold}) {
    return(
        <Box sx={{justifyContent:"space-between" , my:1 , display:"flex"}}>
            <Typography sx={{fontWeight:bold ? 700 : 500 , color:"text.secondary"}}>{label}</Typography>
            <Typography sx={{fontWeight:bold ? 800: 700}}>{value}</Typography>
        </Box>
    )
}

export default function CardList(){
 
}