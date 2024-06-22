import styled from 'styled-components'
import { Button as MuiButton } from '@mui/material'

const Container = styled.div`
  text-align: center;
  padding: 6rem;
  background-color: #f3f5f9;
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
  background-image: url('https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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
  color: #fff;
  font-size: 3rem;
`

const Button = styled(MuiButton)`
  &.MuiButton-root {
    background-color: #86b15b;
    color: #fff;
    cursor: pointer;
    text-align: left;
    width: 13rem;
  }
`

export { Container, BoxText, Title, Text, Aside, Section, Button, SectionTitle }
