import { EmailTemplate } from "../../src/app/components/EmailTemplate";
import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé
import sgMail from "@sendgrid/mail";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(
  "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"
);

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

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        prenom={prenom}
        nom={nom}
        email={email}
        telephone={telephone}
        entreprise={entreprise}
        pays={pays}
        message={message}
        newDate={newDate}
        // Vous pouvez ajouter 'date' dans les props de EmailTemplate si nécessaire
      />
    );

    const msg = {
      to: "casteranicolas.contact@gmail.com", // Assurez-vous que cette adresse est valide
      from: "contact@maprimerenov-info.org",
      subject: "Nouvelle demande sur votre site web !",
      html: emailContent,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur SendGrid:", error.response?.body);
      res.status(400).json({
        message: "Erreur lors de l'envoi de l'email.",
        details: error.response?.body,
      });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error.message, stack: error.stack });
  }
};
