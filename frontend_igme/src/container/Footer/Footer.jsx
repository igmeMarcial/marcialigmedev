import React, { useState } from "react";
import "./Footer.scss";
import { Button } from "../../components";
import { client } from "../../client";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { stateLogger } from "./stateLogger";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const initialForm = { name: "", email: "", message: "" };

function Footer() {
  const [form, setForm] = useState(initialForm);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = form;

  const btnRef = useRef(null);

  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (form.name !== "" || form.email !== "" || form.message !== "") {
      if (emailPattern.test(form.email)) {
        const contact = {
          _type: "contact",
          name: form.name,
          email: form.email,
          message: form.message,
        };
        client
          .create(contact)
          .then(() => {
            setIsFormSubmitted(true);
            fire();
            setForm(initialForm);
          })
          .catch((err) => console.log(err));
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 5000);
      } else {
        console.log("emailIncorrecto");
      }
    } else {
      console.log("Campos vacios");
    }
  };
  return (
    <div id="contacto" className="igme__footer">
      <div className="igme__footer-container">
        <div className="footer-wrapper">
          <Slide left>
            <div className="footer-title">
              {!isFormSubmitted ? (
                <h2>
                  Contactame <br />
                  <span>¡No seas tímido!</span>{" "}
                </h2>
              ) : (
                <h2>
                  Gracias por <br />
                  <span>estar en contacto!</span>{" "}
                </h2>
              )}
            </div>
          </Slide>
          {/* <Fade right> */}
          <div className="footer-form">
            <form onSubmit={handleClick}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                autoComplete="off"
                className="formText newsletter-form__input"
                required
                value={name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="formText newsletter-form__input"
                required
                value={email}
                onChange={handleChange}
              />
              <textarea
                id="message"
                name="message"
                maxLength="5000"
                data-name="Message"
                placeholder="Ingresa tu mensaje"
                required
                className="formText text-area w-input"
                value={message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="form-submit mrgBtn">
                Enviar mensaje
              </button>
              <ReactCanvasConfetti
                refConfetti={getInstance}
                style={canvasStyles}
              />
            </form>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
