import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-image: url('https://source.unsplash.com/pZ-XFIrJMtE/3216x2136');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: contain;
`

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
`

export const Form = styled.form`
  width: 100%;
  h1 {
    text-align: center;
    font-variant: small-caps;
    margin-bottom: 25px;
  }
  label {
    font-size: 16px;
  }
  hr {
    margin: 10px 0 15px 0;
    color: rgba(0, 0, 0, 0.2);
  }
  select {
    display: block;
    width: 100%;
    margin-bottom: 25px;
    padding: 5px;
  }
  .bottom-section {
    margin-top: 50px;
  }
  input {
    display: block;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    border: 2px solid #d6d5d5;
    margin-top: 10px;
  }
  button {
    cursor: pointer;
    width: 50%;
    margin: 50px auto 5px auto;
    padding: 10px 5px;
    border: none;
    display: block;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  button:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 20px;
  margin-bottom: 25px;
`

export const CategoryCard = styled.div`
  width: 100px;
  height: 75px;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  background: #fff;
  border: ${props => props.active === true ? '2px solid #d8cb18' : 'none'};
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  p {
    text-align: center;
    font-size: 10px;
    text-transform: uppercase;
    padding: 15px 0 5px 0;
  }
  i {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`