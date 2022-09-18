import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import style from "../styles/Mobile.module.scss";

function DropDown({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.container}>
      <div>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      {open && children}
    </nav>
  );
}

export default DropDown;
