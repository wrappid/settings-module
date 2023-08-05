/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
import { queryBuilder } from "@wrappid/core";

import { communicationTypes } from "./types/communicationTypes";
  
// asyncSelect and formSubmitSanitization

export const FunctionsRegistry = {
  SanChangePrimaryContact: (formData, apiMeta, state, others) => {
    return {
      endpoint : apiMeta.endpoint,
      reduxData: apiMeta.reduxData,
      values   : { data: formData.data.data, id: formData.data.id },
    };
  },
  SanContactEmailsCreate: (formData, apiMeta, state, others) => {
    return {
      endpoint : apiMeta.endpoint,
      reduxData: apiMeta.reduxData,
      values   : { data: formData.data, type: communicationTypes.MAIL },
    };
  },
        
  SanContactPhonesCreate: (formData, apiMeta, state, others) => {
    return {
      endpoint : apiMeta.endpoint,
      reduxData: apiMeta.reduxData,
      values   : { data: formData.data, type: communicationTypes.SMS },
    };
  },
  SanContactWapCreate: (formData, apiMeta, state, others) => {
    return {
      endpoint : apiMeta.endpoint,
      reduxData: apiMeta.reduxData,
      values   : { data: formData.data, type: communicationTypes.WHATSAPP },
    };
  },
  SanContactsRead: (data) => {
    // -- console.log("SANITING", apiMeta, others);
    return data?.rows
      ?.filter((d) => d.isActive)
      .map((m) => {
        return {
          data    : m.data,
          id      : m.id,
          verified: m.verified,
        };
      });
  },
        
  SanContactsReadUrlChange: (formData, apiMeta, state, others) => {
    // -- console.log("SANITING", apiMeta, others);
    let endUrl = apiMeta.endpoint?.includes("?") ? apiMeta.endpoint : queryBuilder(apiMeta.endpoint, { _defaultFilter: encodeURIComponent(JSON.stringify({ personId: state.profile.basic.id })) });
      
    return {
      endpoint : endUrl,
      reduxData: apiMeta.reduxData,
      values   : apiMeta.values,
    };
  },
        
  SanReadPrimaryEmail: (data) => {
    // -- console.log("SANITING", apiMeta, others);
    return {
      data    : data.email,
      verified: data.emailVerified,
    };
  },
        
  SanReadPrimaryPhone: (data) => {
    // -- console.log("SANITING", apiMeta, others);
    return {
      data    : data.phone,
      verified: data.phoneVerified,
    };
  },
        
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