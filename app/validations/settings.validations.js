import {object} from "yup";

export const changePrimaryContact = object ({ data: object().required() });