import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';

const Select = ({ label, value, disabled, onChange, renderValue, children, multiple }) => {
  const selectId = `${label.toLowerCase().replaceAll(' ', '-')}-select`
  const labelId = `${selectId}-label`

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={labelId}>{label}</InputLabel>
      <MuiSelect
        labelId={labelId}
        id={selectId}
        label={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
        renderValue={renderValue}
        multiple={multiple}
      >
        {/* <MenuItem value={'value'}>Value</MenuItem> */}
        {children}
      </MuiSelect>
    </FormControl>
  )
}

export default Select