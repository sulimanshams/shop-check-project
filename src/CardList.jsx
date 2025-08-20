import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Divider,
  List,
  ListItem,
  IconButton,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import iphone from "./assets/Gold.png";
import mac from "./assets/iMac.png";
import watch from "./assets/Apple-watchx2.png";

const items = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    color: "Golden",
    price: 999,
    qty: 1,
    img: iphone,
  },
  { id: 2, name: "Apple Watch", color: "Blue", price: 399, qty: 1, img: watch },
  { id: 3, name: "iMac", color: "Green", price: 1199, qty: 1, img: mac },
];

const money = (n) => `$${n.toFixed(2)}`;

function Row({ label, value, bold }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
      <Typography
        sx={{ fontWeight: bold ? 700 : 500, color: "text.secondary" }}
      >
        {label}
      </Typography>
      <Typography sx={{ fontWeight: bold ? 800 : 700 }}>{value}</Typography>
    </Box>
  );
}

export default function CartList() {
  return (
    <Box sx={{maxWidth:500}}>
      <List disablePadding>
        {items.map((it) => (
          <ListItem
            key={it.id}
            sx={{
              px: 0,
              py: 1.5,
              alignItems: "flex-start",
              gap: 2.5,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
            secondaryAction={
              <IconButton edge="end" aria-label="remove" size="small" sx={{display:"block" , mt:12}}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          >
            <Avatar
                    variant="rounded"
                    src={it.img}
                    alt={it.name}
                    sx={{
                        width: 95,
                        height: 95,
                        bgcolor: "#fff",
                        border: "1px solid",
                        borderColor: "grey.300",
                        p:1,
                        "& .MuiAvatar-img": {
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        },
                    }}
                    />

            <Box sx={{ flexGrow:1}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent:"space-between",
                  // gap: 1,
                  // width:"100px"
                }}
              >
                <Typography sx={{fontFamily:"Inter , sans-serif" , fontWeight:700 , fontSize:"1.5rem"}}>
                    {it.name}
                    </Typography>
                <Typography sx={{fontFamily:"Inter , sans-serif" , fontWeight:400 , fontSize:"1rem" , mt:1}}>
                  {money(it.price)}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{fontFamily:"Inter , sans-serif" , fontWeight:400, fontSize:"1rem"}}>
                {it.color}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt:4, fontFamily:"Inter , sans-serif", fontWeight:200, fontSize:"1rem"}}>
                x {it.qty}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: "flex", gap: 1.5, mt:2 }}>
        <TextField
          fullWidth
          placeholder="Enter coupon code"
          size="medium"
          InputProps={{ sx: { borderRadius:"10px" ,  bgcolor:"white" , width:"500px"}}}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#111",
            "&:hover": { bgcolor: "#000" },
            borderRadius:"10px",
            px: 2.5,
            width:"210px",
            height:"55px",
            mr:"-7px",
            fontFamily:"Inter , sans-serif",
            fontSize:"1rem"
          }}
        >
          Apply Coupon
        </Button>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Row label="Sub total" value={money(2597)} />
        <Row label="Tax" value={money(623.28)} />
        <Divider sx={{ my: 1.25 }} />
        <Row label="Total" value={money(3220.28)} bold />
      </Box>
    </Box>
  );
}
