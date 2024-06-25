import axios from 'axios'

export const captacaoForm = async (formData) => {
  const response = await axios.post('http://localhost:3001/formulario/captacao', {
    ...formData,
  })
  return response
}
