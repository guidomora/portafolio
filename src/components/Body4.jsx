import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const { esp } = useSelector(state => state.lang)


  const sweetAlert = () => {
    Swal.fire(
      "Correo enviado exitosamente!",
      "Recibirá respuesta a la brevedad",
      "success"
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iyquvgg",
        "template_6v6d7gr",
        form.current,
        "oAQFGK8B3XKQZAK0h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid
      id="contacto"
      marginBottom={7}
      marginTop={10}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid>
        <Grid
          
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 3,
            height:{ xs: 600, sm: 670, md: 670 } ,
            width: { xs: 350, sm: 600, md: 600 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding:{xs: 5, sm: 7, md: 9}
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Varela Round",
              fontSize: 24,
              color: "white",
              fontWeight: 500,
            }}
          >
            {(esp == true) ? "Contacto" : "Contact me!"}
          </Typography>
          <Paper
            elevation={3}
            sx={{
              width: { xs: 300, sm: 500, md: 500 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Grid margin={4} >
                <Typography
                  sx={{
                    fontFamily: "Varela Round",
                    fontSize: 17,
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  Email
                </Typography>
                <TextField
                  type="text"
                  name="user_email"
                  placeholder="email@example.com"
                  sx={{ width: { xs: 250, sm: 250, md: 320 } }}
                />
              </Grid>
              <Grid margin={4}>
                <Typography
                  sx={{
                    fontFamily: "Varela Round",
                    fontSize: 17,
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  {(esp == true) ? "Nombre" : "Name"}
                </Typography>
                <TextField
                  type="text"
                  name="user_name"
                  placeholder={(esp == true) ? "Nombre" : "Name"}
                  sx={{ width: { xs: 250, sm: 250, md: 320 } }}
                />
              </Grid>
              <Grid margin={4}>
                <Typography
                  sx={{
                    fontFamily: "Varela Round",
                    fontSize: 17,
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                  className="form-label"
                >
                  {(esp == true) ? "Escriba su mensaje aqui" : "Your message"}
                </Typography>
                <TextField
                  name="message"
                  multiline
                  sx={{ width: { xs: 250, sm: 250, md: 320 } }}
                />
              </Grid>
              <Grid margin={4}>
                <Button
                  onClick={sweetAlert}
                  variant="outlined"
                  type="submmit"
                  sx={{
                    fontFamily: "Varela Round",
                    fontSize: 17,
                    marginBottom: 3,
                    color: "primary.main",
                    
                    fontWeight: 600,
                  }}
                >
                   {(esp == true) ? "Enviar" : "Send"}
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
