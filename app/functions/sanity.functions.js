/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
import { queryBuilder } from "@wrappid/core";

import { communicationTypes } from "../types/communicationTypes";

export const SanChangePrimaryContact = (formData, apiMeta, state, others) => {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data.data, id: formData.data.id },
  };
};

export const SanContactEmailsCreate = (formData, apiMeta, state, others) => {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.MAIL },
  };
};

export const SanContactPhonesCreate = (formData, apiMeta, state, others) => {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.SMS },
  };
};

export const SanContactWapCreate = (formData, apiMeta, state, others) => {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.WHATSAPP },
  };
};

export const SanContactsRead = (data) => {
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
};

export const SanContactsReadUrlChange = (formData, apiMeta, state, others) => {
  // -- console.log("SANITING", apiMeta, others);
  let endUrl = apiMeta.endpoint?.includes("?") ? apiMeta.endpoint : queryBuilder(apiMeta.endpoint, { _defaultFilter: encodeURIComponent(JSON.stringify({ personId: state.profile.basic.id })) });
      
  return {
    endpoint : endUrl,
    reduxData: apiMeta.reduxData,
    values   : apiMeta.values,
  };
};

export const SanReadPrimaryEmail = (data) => {
  // -- console.log("SANITING", apiMeta, others);
  return {
    data    : data.email,
    verified: data.emailVerified,
  };
};

export const SanReadPrimaryPhone = (data) => {
  // -- console.log("SANITING", apiMeta, others);
  return {
    data    : data.phone,
    verified: data.phoneVerified,
  };
};