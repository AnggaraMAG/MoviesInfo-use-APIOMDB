import React from "react";
import { ModalFooter } from "react-bootstrap";

function Info() {
  return (
    <div>
      <ModalFooter bg="primary" variant="dark">
        <p>
          <b>Developer @AnggaraMAG API</b>{" "}
          <a target_ href="http://www.omdbapi.com/">
            OMDBAPI
          </a>
        </p>
      </ModalFooter>
    </div>
  );
}

export default Info;
