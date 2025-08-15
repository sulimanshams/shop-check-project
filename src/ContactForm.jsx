import React from "react";
import {Box  , Typography , TextField , Stack , Select , MenuItem , InputLabel , FormControl, Button } from "@mui/material"



export default function ContactForm(){
     return (
        <Box>
            <Typography variant="h6" sx={{fontWeight:880, mb:2}}>Contact Information</Typography>
            <Stack spacing={2} sx={{width:"100%"}}>
                <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600}}>First & Last name</Typography>
                <TextField fullWidth  placeholder="Enter first & last name" sx={{minWidth:"500px"}} InputProps={{sx:{borderRadius:2 }}} />
                <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600}}>Email Address</Typography>
                <TextField fullWidth type="email" label="Email Address " placeholder="Enter Email Address" InputProps={{sx:{borderRadius:2}}} /> 
                


                <Box sx={{display:"grid" , gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } , gap:2}}>
                    <FormControl fullWidth >
                        {/* <InputLabel>Country</InputLabel> */}
                        <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600}}>Country</Typography>
                        <Select  defaultValue="Fenland" sx={{borderRadius:2}}>
                                <MenuItem value="Finland">Finland</MenuItem>
                                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                <MenuItem value="Iran">IR Iran</MenuItem>
                                <MenuItem value="Russia">Russia</MenuItem>
                        </Select>
                    </FormControl>
                    <Box>

                                <Typography variant="body2" sx={{mb:"0.5" , fontWeight:600}}>Postal Card</Typography>
                                <TextField  placeholder="00270" InputProps={{sx:{borderRadius:2}}} />
                    </Box>

                          
                </Box>
                 <Button variant="contained" size="large" sx={{mt:0.5 , width:"500px" , bgcolor:"#111" ,"&:hover": { bgcolor: "#000" } , borderRadius:2 , py:1.25 , fontWeight:700}}>
                               Continue
                           </Button>
            </Stack>
        </Box>
     )
}