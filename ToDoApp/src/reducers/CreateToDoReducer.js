import {
    DIE_DATE
} from "../actions/types";

//Email inicial. Se a pessoa não enviar nada, ele retorna uma string vazia.
const INITIAL_STATE = {
    date: '',
    time: ''
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);

    switch(action.type) {
        case (DIE_DATE):
            //Crie um novo objeto, pegue o state atual, defina a propriedade email com action.payload e coloque no state.
            // Ou seja, crie um novo estado e sobrescreva o email com action.payload.
            //console.log("Email");
            return ({ ...state, [action.payload.prop]: action.payload.value });
        default:
            return (state);
    }
};