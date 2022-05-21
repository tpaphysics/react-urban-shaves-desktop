import React from "react";
import { AvatarUserProfile } from "../components/Header/parts/AvatarUserProfile";

export default function Profile() {
  return (
    <AvatarUserProfile
      name="Thiago Pacheco"
      message="Bem vindo,"
      avatar="hhtp://github.com/tpaphysics"
      type="header"
    />
  );
}
