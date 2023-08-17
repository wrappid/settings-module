/* eslint-disable no-unused-vars */
/* eslint-disable id-length */

import {
  SanChangePrimaryContact, SanContactEmailsCreate, SanContactPhonesCreate, SanContactWapCreate, SanContactsRead, SanContactsReadUrlChange, SanReadPrimaryEmail, SanReadPrimaryPhone 
} from "./functions/sanity.functions";
  
// asyncSelect and formSubmitSanitization

export const FunctionRegistry = {
  SanChangePrimaryContact: SanChangePrimaryContact,
  SanContactEmailsCreate : SanContactEmailsCreate,
        
  SanContactPhonesCreate: SanContactPhonesCreate,
  SanContactWapCreate   : SanContactWapCreate,
  SanContactsRead       : SanContactsRead,
        
  SanContactsReadUrlChange: SanContactsReadUrlChange,
        
  SanReadPrimaryEmail: SanReadPrimaryEmail,
        
  SanReadPrimaryPhone: SanReadPrimaryPhone,
        
  changePrimaryContact: {
    getOptionLabel: (data) => {
      return data?.data;
    },
    getOptionValue: (data) => {
      return data;
    },
    isOptionsEqualToValue: (option, value) => {
      return option?.id === value?.data;
    },
  },
};
