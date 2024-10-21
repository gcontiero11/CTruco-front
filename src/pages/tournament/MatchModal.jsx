import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";
import "./MatchModal.css";

const MatchModal = ({ isOpen, onClose, match }) => {
  const { winnerName, p1Name, p1Score, p2Name, p2Score, timeToExecute } = match;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxH="220px" height={"90%"} maxW="520px" width="100%">
        {" "}
        {/* Aqui você ajusta o tamanho */}
        <ModalHeader>
          {winnerName ? "Resultado" : "Simulando Partidas"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {winnerName ? (
            <div id="result">
              <p className="p1Name">{p1Name}</p>
              <p
                style={{ textAlign: "center" }}
                className={p2Score > p1Score ? "loser " : "winner "}
              >
                {p1Score}
              </p>
              <p style={{ textAlign: "center" }}>X</p>
              <p
                style={{ textAlign: "center" }}
                className={p1Score > p2Score ? "loser " : "winner "}
              >
                {p2Score}
              </p>
              <p className="p2Name">{p2Name}</p>
              <p className="executionTime">
                tempo de execução: {timeToExecute}ms
              </p>
              <p className="executionTime">
                tempo de execução: {timeToExecute}ms
              </p>
            </div>
          ) : (
            <div id="match-modal-spinner">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="black"
                size="xl"
                className="spinner"
              />
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MatchModal;