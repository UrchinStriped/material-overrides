// Reference: https://mui.com/material-ui/api/input-label/#classes

export const MuiInputLabel: any = {
  defaultProps: {},
  styleOverrides: {
    root: {
      position: 'relative',
      transform: 'none',
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500,
      marginBottom: 4,

      '&.Mui-focused': {

      },

      '&.Mui-disabled': {

      },

      '&.Mui-error': {

      },

      '&.Mui-required': {
        '.MuiFormLabel-asterisk': {}
      }
    },
    standard: {},
    sizeSmall: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },
}
