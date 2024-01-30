import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  entreprise?: string; // '?' signifie que la prop est optionnelle
  pays: string;
  message?: string;
date: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  prenom,
  nom,
  email,
  telephone,
  entreprise,
  pays,
  message,
  date
}) => {
    return (
        <div>
            <h2>Nouveau Prospect:</h2>
            <h3>{date}</h3>
            <ul>
                <li>
                    Nom, Prenom: <span className="font-bold">{nom}, {prenom}</span>
                </li>
                <li>
                    Email: <span className="font-bold">{email}</span>
                </li>
                <li>
                    Téléphone: <span className="font-bold">{telephone}</span>
                </li>
                {entreprise && (
                    <li>
                        Entreprise: <span className="font-bold">{entreprise}</span>
                    </li>
                )}
                <li>
                    Pays: <span className="font-bold">{pays}</span>
                </li>
                {message && (
                    <li>
                        Message: <span className="font-bold">{message}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}