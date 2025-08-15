import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import ContactForm from "./ContactForm";
import CardList from "./CardList";
export default function CheckoutCard() {
  return (
    <Container
      maxWidth="md"
      sx={{
        position: "relative",
        zIndex: 2,
        mt: { xs: -4, md: -6 },
      }}
    >
      <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 3 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ bgcolor: "grey.100", p: { xs: 2, md: 3 } }}
          >
            <CardList />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ bgcolor: "#fff", p: { xs: 2, md: 3 } }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ height: 24 }} />
    </Container>
  );
}
