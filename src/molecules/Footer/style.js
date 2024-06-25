import styled from 'styled-components'
import { Container as MuiContainer } from '@mui/material'

const Container = styled(MuiContainer)`
  &.MuiContainer-root {
    @media only screen and (max-width: 600px) {
      text-align: center;
    }
  }
`

export { Container }
