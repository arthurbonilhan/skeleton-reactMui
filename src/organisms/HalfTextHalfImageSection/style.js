import styled from 'styled-components'
import { Button as MuiButton, Grid as MuiGrid, Box as MuiBox } from '@mui/material'
import theme from '../../theme/designTokens'

const Button = styled(MuiButton)`
  &.MuiButton-root {
    background-color: ${theme.palette.gray.secondaryLight};
    color: ${theme.palette.primary.balckLight};
    font-weight: 700;
    cursor: pointer;
    text-align: left;
  }
`
const Grid = styled(MuiGrid)`
  &.MuiGrid-root {
    background-color: ${theme.palette.gray.dark};
  }
`

const Box = styled(MuiBox)`
  &.MuiBox-root {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`

const CardTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
`

const CardText = styled.p`
  margin-bottom: 15px;
  text-align: left;
  font-size: 1.9rem;
  margin-bottom: 1rem;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`

export { Button, CardTitle, CardText, Section, Grid, Box }
