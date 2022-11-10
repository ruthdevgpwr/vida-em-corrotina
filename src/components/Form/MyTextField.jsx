import { TextField } from '@mui/material';

export function MyTextField({required, id, label, defaultValue, color, maxRows, multiline, inputProps,  value, onChange, type, size}) {
  return (
    <TextField required={required} id={id} label={label} defaultValue={defaultValue} color={color} maxRows={maxRows} multiline={multiline} InputProps={inputProps} value={value} onChange={onChange} type={type} size={size} />
  );
}