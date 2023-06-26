import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import "../App.css"
import "../css/contactForm.css"
import "../css/Buttons.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

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
    <div data-aos="zoom-in">
    <Grid sx={{
      height: { xs: 530, sm: 540, md: 550 },
      width: { xs: 350, sm: 550, md: 550 },
      margin: "auto",
      backgroundColor: "#141c3a",
      borderRadius: 5,
      zIndex: 1
    }}>
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">
        <Grid
          id="contacto">
          <Grid>
            <Grid
              sx={{
                borderRadius: 3,
                height: { xs: 600, sm: 550, md: 550 },
                width: { xs: 350, sm: 550, md: 550 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
              <Grid
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
                        fontWeight: 500,
                        color: "white"
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      color="third"
                      type="text"
                      name="user_email"
                      placeholder="email@example.com"
                      sx={{ width: { xs: 250, sm: 280, md: 320 }, backgroundColor: "white", borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid margin={4}>
                    <Typography
                      sx={{
                        fontFamily: "Varela Round",
                        fontSize: 17,
                        marginTop: 2,
                        fontWeight: 500,
                        color: "white"
                      }}
                    >
                      {(esp == true) ? "Nombre" : "Name"}
                    </Typography>
                    <TextField
                      color="third"
                      type="text"
                      name="user_name"
                      placeholder={(esp == true) ? "Nombre" : "Name"}
                      sx={{ width: { xs: 250, sm: 280, md: 320 }, backgroundColor: "white", borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid margin={4}>
                    <Typography
                      sx={{
                        fontFamily: "Varela Round",
                        fontSize: 17,
                        marginTop: 2,
                        fontWeight: 500,
                        color: "white"
                      }}
                      className="form-label"
                    >
                      {(esp == true) ? "Escriba su mensaje aqui" : "Your message"}
                    </Typography>
                    <TextField
                      color="third"
                      name="message"
                      multiline
                      sx={{ width: { xs: 250, sm: 280, md: 320 }, backgroundColor: "white", borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid margin={4}>
                    <button
                      className="buttonsNav"
                      onClick={sweetAlert}
                      type="submmit"
                    >
                      {(esp == true) ? "Enviar" : "Send"}
                    </button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
    </div>
    

  );
};

export default ContactUs;
