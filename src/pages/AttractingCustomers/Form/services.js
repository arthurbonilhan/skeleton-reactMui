import { captacaoForm } from '../../../services/api/captacao'

const confirmRegister = async ({ formData, setOpenSuccess, setErrors, setFormData, setErrorMessage, setOpenError }) => {
  try {
    const response = await captacaoForm(formData)
    setOpenSuccess(true)
    setErrors({})
    setFormData({
      tipoServico: '',
      nome: '',
      telefone: '',
      email: '',
      cidade: '',
      quantidadeMetros: '',
    })
  } catch (error) {
    if (error.response && error.response.data.errors) {
      setErrors(error.response.data.errors.reduce((acc, err) => ({ ...acc, [err.param]: err.msg }), {}))
      setErrorMessage('Erro ao enviar os dados')
    } else {
      setErrorMessage('Erro desconhecido ao enviar os dados')
    }
    setOpenError(true)
  }
}

export { confirmRegister }
