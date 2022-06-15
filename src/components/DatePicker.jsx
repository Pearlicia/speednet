import React from 'react'
import TextField from '@material-ui/core/TextField';

const DatePicker = () => {
  return (
    <div style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content',
        marginTop: '10px',
      }}>
        
        <TextField
          id="date"
          type="date"
          defaultValue="Start Date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
  )
}

export default DatePicker
