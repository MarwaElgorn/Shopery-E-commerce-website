import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Mainlayout from "./Layout/Mainlayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Mainlayout;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mainlayout />
  </StrictMode>,
);
