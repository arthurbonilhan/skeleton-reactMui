import styled from 'styled-components'
import { Button as MuiButton } from '@mui/material'
import theme from '../../theme/designTokens'

const Container = styled.div`
  text-align: center;
  padding: 6rem;
  background-color: ${theme.palette.primary.white};
`

const BoxText = styled.div`
  margin: 10px;
`
const Title = styled.h2`
  font-size: 2.5rem;
`
const Text = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`
const Aside = styled.div`
  background-image: url('https://images.squarespace-cdn.com/content/v1/642ba344982a13657b8f1b64/17704ff4-6f08-4126-9f6d-86c72b8a690f/WSDC+collage+2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
`

const Section = styled.div`
  width: 50%;
  text-align: center;
`

const SectionTitle = styled.h2`
  color: ${theme.palette.primary.white};
  font-size: 3rem;
`

const Button = styled(MuiButton)`
  &.MuiButton-root {
    background-color: ${theme.palette.yellow.yellow};
    color: ${theme.palette.primary.white};
    cursor: pointer;
    text-align: left;
    width: 13rem;
  }
`

export { Container, BoxText, Title, Text, Aside, Section, Button, SectionTitle }
