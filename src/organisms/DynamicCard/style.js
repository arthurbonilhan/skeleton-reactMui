import styled from 'styled-components'
import { Button as MuiButton } from '@mui/material'
import theme from '../../theme/designTokens'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-top: 1rem;
  background-color: #fff;
  padding: 2.5rem;
  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CardIcon = styled.div`
  margin-bottom: 10px;
  width: 2rem;
  margin-bottom: 1rem;
`

const CardTitle = styled.h4`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: left;
`

const CardText = styled.p`
  margin-bottom: 15px;
  text-align: left;
  font-size: 0.93rem;
`

const Button = styled(MuiButton)`
  &.MuiButton-root {
    background-color: ${theme.palette.yellow.yellow};
    color: #fff;
    cursor: pointer;
    text-align: left;
  }
`

export { CardContainer, CardIcon, CardTitle, CardText, Button, Section }
