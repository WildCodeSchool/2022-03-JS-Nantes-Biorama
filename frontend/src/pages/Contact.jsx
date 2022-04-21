import React from "react";
import "./Contact.css";
import "../App.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="title">
        <h1>Nous contacter</h1>
      </div>
      <div className="paragraph">
        <p>
          Si vous avez une demande particulière ou voulez souhaitez etre
          référencé sur notre site, voici un petit formulaire pour nous joindre.
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom ou raison sociale"
            required
          />
          <input type="text" placeholder="Objet de la demande" required />
          <input type="email" placeholder="exemple@email.fr" />
          <textarea name="message" cols="30" rows="10" />
          <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
