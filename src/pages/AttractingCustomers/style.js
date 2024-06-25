import styled from 'styled-components'
import { Button as MuiButton, Grid as MuiGrid } from '@mui/material'
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Aside = styled.div`
  background-color: ${theme.palette.primary.balckLight};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20rem;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`

const AsideSection = styled.div`
  width: 50%;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem;
  }
`

const AsideText = styled.p`
  color: ${theme.palette.primary.white};
  font-size: 1.4rem;
`

export { Button, Section, Grid, Aside, AsideText, AsideSection }
