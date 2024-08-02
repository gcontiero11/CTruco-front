import { React, useState } from "react";
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
import RemoteBotForm from "../bot-info-form/RemoteBotForm";
import useAddRemote from "./useAddRemote";

const AddRemoteFormModal = ({
  isOpen,
  onClose,
  name,
  setName,
  url,
  setUrl,
  port,
  setPort,
}) => {
  const addBotHook = useAddRemote();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ADICIONAR BOT</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RemoteBotForm />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="green"
            mr={3}
            onClick={() => {
              console.log("passou aqui");
              onClose();
              addBotHook();
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

export default AddRemoteFormModal;
