import styled from 'styled-components'
import { AppBar as MuiAppBar } from '@mui/material'

const AppBar = styled(MuiAppBar)`
  &.MuiAppBar-root {
    @media only screen and (max-width: 600px) {
    }
  }
`

export { AppBar }
