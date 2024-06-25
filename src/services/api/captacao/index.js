import axios from 'axios'

const baseURL = process.env.REACT_APP_API

export const captacaoForm = async (formData) => {
  try {
    const response = await axios.post(`${baseURL}/api/formulario/captacao`, formData)
    return response
  } catch (error) {
    throw error
  }
}
