import React from "react";
import {Box  , Typography , TextField , Stack , Select , MenuItem , InputLabel , FormControl, Button } from "@mui/material"



export default function ContactForm(){
     return (
        <Box>
            <Typography variant="h6" sx={{fontWeight:880, mb:2}}>Contact Information</Typography>
            <Stack spacing={2}>
                <TextField fullWidth label="First & last name " placeholder="Enter first & last name" InputProps={{sx:{borderRadius:2}}} />
                <TextField fullWidth type="email" label="Email Address " placeholder="Enter Email Address" InputProps={{sx:{borderRadius:2}}} /> 
                


                <Box sx={{display:"grid" , gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } , gap:2}}>
                    <FormControl fullWidth >
                        <InputLabel>Country</InputLabel>
                        <Select label="Country" defaultValue="Fenland" sx={{borderRadius:2}}>
                                <MenuItem value="Finland">Finland</MenuItem>
                                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                <MenuItem value="Iran">IR Iran</MenuItem>
                                <MenuItem value="Russia">Russia</MenuItem>
                        </Select>
                    </FormControl>
                           <TextField label="Postal Card" placeholder="00270" InputProps={{sx:{borderRadius:2}}} />

                           
                </Box>
            </Stack>
        </Box>
     )
}