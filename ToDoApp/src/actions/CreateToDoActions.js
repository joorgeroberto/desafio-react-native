import { Actions } from 'react-native-router-flux';
import {
    DIE_DATE,

} from "./types";

export const dieDate = ({prop, value}) => {
    return {
        type: DIE_DATE,
        payload: {prop, value}
    };
};