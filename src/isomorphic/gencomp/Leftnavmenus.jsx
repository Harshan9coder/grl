import React from "react";

import {
  faEnvelope,
  faComments,
  faDumpster,
  faIdBadge,
  faGamepad,
  faFileInvoice,
  faSortNumericUpAlt,
  faNotEqual,
  faFunnelDollar,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import Leftnav from "./Leftnav";

const leftnavitmes = [
  { content: "Email", icon: faEnvelope },
  { content: "Chat", icon: faComments },
  { content: "Ecommerce", icon: faDumpster },
  { content: "Profile", icon: faIdBadge },
  { content: "Scrum Board", icon: faGamepad },
  { content: "invoice", icon: faFileInvoice },
  { content: "Youtube Search", icon: faSortNumericUpAlt },
  { content: "Calander", icon: faNotEqual },
  { content: "Note", icon: faFunnelDollar },
  { content: "Fire Storecrud", icon: faFileContract },
  { content: "Contact", icon: faFileContract },
  { content: "Shuffle", icon: faFileContract },
  { content: "Contact", icon: faFileContract },
  { content: "Phone", icon: faFileContract },
  { content: "Phone", icon: faFileContract },
];

function Leftnavmenus() {
  return (
    <div className="nav-box">
      {leftnavitmes.map((i) => {
          console.log(i);
        return <Leftnav icon={i.icon} content={i.content} />;
      })}
    </div>
  );
}

export default Leftnavmenus;
