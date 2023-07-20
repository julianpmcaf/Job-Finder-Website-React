import { CardProps } from "@/models/Interfaces";
import { createContext } from "react";

export const CardContext = createContext<CardProps[] | undefined>(undefined);