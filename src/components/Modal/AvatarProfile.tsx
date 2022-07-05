import { useDisclosure } from "@chakra-ui/react";
import { AvatarEditor } from "../AvatarProfile/AvatarEditor";
import AvatarProfileButton from "../AvatarProfile/AvatarProfileButton";
import AvatarProfileModal from "../AvatarProfile/AvatarProfileModal";

export function AvatarProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AvatarProfileButton
        src="https://i.pravatar.cc/400?img=11"
        onClick={onOpen}
      />
      <AvatarProfileModal isOpen={isOpen} onClose={onClose}>
        <AvatarEditor />
      </AvatarProfileModal>
    </>
  );
}
