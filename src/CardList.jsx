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
        return(
            <Box>
                <List disablePadding>
                        {items.map((it)=> (
                            <ListItem key={it.id} 
                            sx={{
                                px:0,
                                py:1.5,
                                alignItems:"flex-start",
                                gap:"1.5",
                                borderBottom:"1px solid",
                                borderColor:"divider"
                            }}
                            secondaryAction={
                                <IconButton size="small" edge="end" aria-label="remove">
                                    <CloseIcon  fontSize="small"/>
                                </IconButton>
                            }
                            >
                                <Avatar 
                                variant="rounded"
                                src={it.img}
                                alt={it.name}
                                sx={{
                                    height:56,
                                    width:56,
                                    bgcolor:"gray.200"
                                }}
                                />
                                <Box sx={{flexGrow:1}}>
                                        <Box sx={{display:"flex" , justifyContent:"space-between" , gap:1}}>
                                                <Typography sx={{fontWeight:700}}>{it.name}</Typography>
                                                <Typography sx={{fontWeight:800}}>{it.price.toFixed(2)}</Typography>

                                               
                                                    <Typography variant="body2" color="text.secondary">{it.color}</Typography>

                                                    <Typography variant="caption" color="text.secondary">{it.qty}</Typography>
                                               
                                        </Box>
                                </Box>
                            </ListItem>
                        ))}
                </List>
                <Box sx={{display:"flex" ,  gap:1.5 , mt:2}}>
                    <TextField 
                    fullWidth
                    placeholder="Enter Coupon code"
                    size="medium"
                    InputProps={{sx:{borderRadius:2}}}
                    />
                    <Button variant="contained" 
                    sx={{bgcolor:"#111", 
                        "&:hover": { bgcolor: "#000" },
                              borderRadius: 2,
                               px: 2.5,
                    }}  
                    >
                        Apply coupon
                    </Button>
                </Box>
                <Box sx={{mt:2}}>
                            <Row label="Sub total" value="$2597.00" />
                            <Row label="Tax" value="$623.28" />
                            <Divider sx={{ my: 1.25 }} />
                            <Row label="Total" value="$3220.28" bold />
                </Box>
            </Box>
        )
}