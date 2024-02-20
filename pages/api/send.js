import sgMail from "@sendgrid/mail";
import ReactDOMServer from "react-dom/server";
import { EmailTemplate } from "../../src/app/components/EmailTemplate";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const {
      prenom,
      nom,
      email,
      telephone,
      entreprise,
      pays,
      message,
      newDate,
    } = req.body;

    console.log("Requête reçue avec les données:", req.body);

    if (!prenom) return res.status(400).json({ message: "Prénom manquant." });
    if (!nom) return res.status(400).json({ message: "Nom manquant." });
    if (!email || !/\S+@\S+\.\S+/.test(email))
      return res.status(400).json({ message: "Email manquant ou invalide." });
    if (!telephone || !/^[0-9]{10}$/.test(telephone))
      return res
        .status(400)
        .json({ message: "Téléphone manquant ou invalide." });
    if (!pays) return res.status(400).json({ message: "Pays manquant." });
    if (!newDate)
      return res.status(400).json({ message: "Date manquante ou invalide." });

    // Validation des champs obligatoires et formats
    if (
      !prenom ||
      !nom ||
      !email ||
      !telephone ||
      !pays ||
      !newDate ||
      !/\S+@\S+\.\S+/.test(email) ||
      !/^[0-9]{10}$/.test(telephone)
    ) {
      console.error("Validation échouée pour les données:", req.body);
      res.status(400).json({ message: "Données manquantes ou invalides." });
      return;
    }

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        prenom={prenom}
        nom={nom}
        email={email}
        telephone={telephone}
        entreprise={entreprise}
        pays={pays}
        message={message}
        date={newDate}
      />
    );

    const msg = {
      to: [
        "s.olivar@chateaudutruch.com",
        "contact@chateaudutruch.com",
        "t.bastide@chateaudutruch.com",
      ],
      from: "contact@chateaudutruch.com",
      subject: "Nouvelle demande reçue depuis votre site web !",
      html: emailContent,
    };

    await sgMail.send(msg);
    console.log("Email envoyé avec succès à:", msg.to);
    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error.response?.body);
    res.status(500).json({
      message: "Erreur lors de l'envoi de l'email.",
      details: error.response?.body,
    });
  }
};
