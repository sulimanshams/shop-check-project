import React from "react";
import {Box  , Typography , TextField , Stack , Select , MenuItem , InputLabel , FormControl, Button } from "@mui/material"



export default function ContactForm(){
     return (
        <Box width="700px">
            <Typography variant="h6" sx={{fontWeight:700, mb:2, mt:"17px", fontFamily:"Inter , sans-serif", fontSize:"16px"}}>Contact Information</Typography>
            <Stack spacing={4} sx={{width:"100%"}}>
                <Box>
                <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600 , mt:"8px"}}>First & Last name</Typography>
                <TextField fullWidth  placeholder="Enter first & last name" sx={{minWidth:"500px" , bgcolor:"#F3F4F6" , mt:"14px"}} InputProps={{sx:{borderRadius:0.5 }}} />
                </Box>
                <Box>
                <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600 , mt:"8px"}}>Email Address</Typography>
                <TextField fullWidth type="email" placeholder="Enter Email Address" InputProps={{sx:{borderRadius:0.5 , bgcolor:"#F3F4F6"}}} sx={{marginTop:"14px"}} /> 
                </Box>

                


                <Box sx={{display:"grid" , gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } , gap:2}}>
                    <FormControl fullWidth >
                        {/* <InputLabel>Country</InputLabel> */}
                        <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600}}>Country</Typography>
                        <Select  defaultValue="Fenland" sx={{borderRadius:0.5 , bgcolor:"#F3F4F6" , mt:"5px"}}>
                                <MenuItem value="Finland">Finland</MenuItem>
                                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                <MenuItem value="Iran">IR Iran</MenuItem>
                                <MenuItem value="Russia">Russia</MenuItem>
                        </Select>
                    </FormControl>
                    <Box>

                                <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600}}>Postal Card</Typography>
                                <TextField  placeholder="00270" InputProps={{sx:{borderRadius:0.5, bgcolor:"#F3F4F6" , mt:"5px"}}} />
                    </Box>

                          
                </Box >
                <Box marginTop="20px">
                 <Button variant="contained" size="large" sx={{ width:"530px" , height:"60px",fontFamily:"Inter , sans-serif",
                            fontSize:"1rem" , bgcolor:"#111" ,"&:hover": { bgcolor: "#000" } , borderRadius:0.5 , py:1.25 , fontWeight:700}}>
                               Continue
                           </Button>
                                </Box>
            </Stack>
        </Box>
     )
}