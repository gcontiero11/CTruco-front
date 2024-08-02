import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const DeleteButtonModal = ({
  isOpen,
  onOpen,
  onClose,
  handleDeleteAction,
  botName,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>TEM CERTEZA?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p
            style={{
              fontSize: "30px",
              color: "red",
            }}
          >
            Se confirmar esta ação o bot será removido!!{"\n"}
          </p>
          <p>não será possível desfazer esta ação.</p>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="green"
            mr={3}
            onClick={() => {
              onClose();
              handleDeleteAction();
            }}
          >
            Confirmar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteButtonModal;