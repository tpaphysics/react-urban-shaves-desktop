import { UseFormRegister } from "react-hook-form";
import 

interface BarberInputProps extends InputProps {
  isPassword?: boolean;
  id: string;
  iconType: "user" | "email" | "lock";
  errors?: {
    [x: string]: any;
  };
  register: UseFormRegister<any>;
  eyerIconColor?: boolean;
}
