/* eslint-disable no-unused-vars */
/* eslint-disable id-length */

import {
  SanChangePrimaryContact, SanContactEmailsCreate, SanContactPhonesCreate, SanContactWapCreate, SanContactsRead, SanContactsReadUrlChange, SanReadPrimaryEmail, SanReadPrimaryPhone 
} from "./functions/sanity.functions";
  
// asyncSelect and formSubmitSanitization

export const FunctionsRegistry = {
  SanChangePrimaryContact: SanChangePrimaryContact,
  SanContactEmailsCreate : SanContactEmailsCreate,
        
  SanContactPhonesCreate: SanContactPhonesCreate,
  SanContactWapCreate   : SanContactWapCreate,
  SanContactsRead       : SanContactsRead,
        
  SanContactsReadUrlChange: SanContactsReadUrlChange,
        
  SanReadPrimaryEmail: SanReadPrimaryEmail,
        
  SanReadPrimaryPhone: SanReadPrimaryPhone,
        
  __CHANGEPRIMARYCONTACT_GET_OPTION_LABEL: (data) => {
    return data?.data;
  },
  __CHANGEPRIMARYCONTACT_GET_OPTION_VALUE: (data) => {
    return data;
  },
  __CHANGEPRIMARYCONTACT_IS_OPTIONS_EQUAL_TO_VALUE: (option, value) => {
    return option?.id === value?.data;
  },
};
