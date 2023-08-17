
export const ValidationsRegistry = {
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
  } 
};