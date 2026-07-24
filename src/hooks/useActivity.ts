import {useContext} from "react";
import { ActivityContext } from "../components/context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context) {
        throw new Error('el hook useActivity debe ser utilizado en un ActivityProvider')
    }
    return context
}