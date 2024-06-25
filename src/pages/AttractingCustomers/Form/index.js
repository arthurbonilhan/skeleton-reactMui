import React, { useState } from 'react'
import { TextField, Button, Grid, Box, Typography, Container, Snackbar, Alert } from '@mui/material'
import { confirmRegister } from './services'

const Form = () => {
  const [formData, setFormData] = useState({
    tipoServico: '',
    nome: '',
    telefone: '',
    email: '',
    cidade: '',
    quantidadeMetros: '',
  })

  const [errors, setErrors] = useState({})
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openError, setOpenError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await confirmRegister({ formData, setOpenSuccess, setErrors, setFormData, setErrorMessage, setOpenError })
  }

  const handleCloseSuccess = () => {
    setOpenSuccess(false)
  }

  const handleCloseError = () => {
    setOpenError(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Formulário de Cadastro
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="tipoServico"
                label="Tipo de Serviço"
                name="tipoServico"
                autoComplete="tipoServico"
                value={formData.tipoServico}
                onChange={handleChange}
                error={!!errors.tipoServico}
                helperText={errors.tipoServico}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="nome"
                label="Nome"
                name="nome"
                autoComplete="nome"
                value={formData.nome}
                onChange={handleChange}
                error={!!errors.nome}
                helperText={errors.nome}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="telefone"
                label="Telefone"
                name="telefone"
                autoComplete="telefone"
                value={formData.telefone}
                onChange={handleChange}
                error={!!errors.telefone}
                helperText={errors.telefone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="cidade"
                label="Cidade"
                name="cidade"
                autoComplete="cidade"
                value={formData.cidade}
                onChange={handleChange}
                error={!!errors.cidade}
                helperText={errors.cidade}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="quantidadeMetros"
                label="Quantidade de Metros"
                name="quantidadeMetros"
                autoComplete="quantidadeMetros"
                value={formData.quantidadeMetros}
                onChange={handleChange}
                error={!!errors.quantidadeMetros}
                helperText={errors.quantidadeMetros}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Cadastrar
          </Button>
        </Box>
      </Box>

      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          Dados enviados com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Form
