import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Person } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { Message } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
 

const App=()=>{

  const initialData= {
    name: "",
    email: "",
    message : ""
  }
  const [formData, setFormData] = useState(initialData);

  const handleChange=(event)=>{
    const {name ,  value} = event.target;
    setFormData( (prevFormData)=>({
      ...prevFormData, [name]:value 
    }));


  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message:${formData.message}`)
    setFormData(initialData);
  };
  return(
     <Card >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Carattere&family=Neucha&display=swap');
        `}
      </style>

      <Typography variant='h3' align='center' gutterBottom style={{fontFamily:'Carattere, sans-serif', color: '#92A91A'}}>
        Send Message
      </Typography>
      <form onSubmit={handleSubmit}>
       <TextField
        name='name'
        label='Name'
        variant='filled'
        value={formData.name}
        color='secondary'
        onChange={handleChange}
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'><Person/></InputAdornment>
          )
        }}
        fullWidth
        margin='normal'

        ></TextField>

        <TextField
          name='email'
          label='Email'
          variant='filled'
          value={formData.email}
          color='secondary'
          onChange={handleChange}
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'><Email/></InputAdornment>
            )
          }}
          fullWidth
          margin='normal'/>

        <TextField
          name='message'
          label='Message'
          variant='filled'
          value={formData.message}
          color='secondary'
          onChange={handleChange}
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'><Message/></InputAdornment>
            )
          }}
          fullWidth
          multiline
          rows={5}
          margin='normal'/>

        <Box textAlign="center">
        <Button type='submit' variant='contained' color='primary'>Submit</Button>
        </Box>

    </form>
 </Card>
  )
}
export default App;  

