import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalProps,
} from "@chakra-ui/react";

export default function AvatarProfileModal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="black.shape">
        <ModalHeader color="orangeFont">Select your image</ModalHeader>
        <ModalCloseButton color="black.inputs" />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            size="md"
            variant="outline"
            color="orange"
            borderColor="orange"
            mr={3}
            onClick={onClose}
            _hover={{ bg: "orange", color: "black.shape" }}
          >
            Close
          </Button>
          <Button size="md">Select</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
