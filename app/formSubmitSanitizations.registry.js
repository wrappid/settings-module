import { queryBuilder } from "@wrappid/core";

import { communicationTypes } from "./types/communicationTypes";

export function SanContactEmailsCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.MAIL },
  };
}
  
export function SanContactsRead(data) {
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
}
  
export function SanContactsReadUrlChange(formData, apiMeta, state, others) {
  // -- console.log("SANITING", apiMeta, others);
  let endUrl = apiMeta.endpoint?.includes("?") ? apiMeta.endpoint : queryBuilder(apiMeta.endpoint, { _defaultFilter: encodeURIComponent(JSON.stringify({ personId: state.profile.basic.id })) });

  return {
    endpoint : endUrl,
    reduxData: apiMeta.reduxData,
    values   : apiMeta.values,
  };
}
export function SanContactPhonesCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.SMS },
  };
}
  
export function SanContactWapCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.WHATSAPP },
  };
}
  
export function SanChangePrimaryContact(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data.data, id: formData.data.id },
  };
}
  
export function SanReadPrimaryPhone(data) {
  // -- console.log("SANITING", apiMeta, others);
  return {
    data    : data.phone,
    verified: data.phoneVerified,
  };
}
  
export function SanReadPrimaryEmail(data) {
  // -- console.log("SANITING", apiMeta, others);
  return {
    data    : data.email,
    verified: data.emailVerified,
  };
}
  