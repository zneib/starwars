import styled from 'styled-components'
import DroidobeshDepot from '../DroidobeshDepot.otf'

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const Header = styled.div`
  width: 75%;
  margin: 10px auto 10px auto;
  display: flex;
  justify-content: space-between;
  button {
    background: transparent;
    border: none;
    text-transform: uppercase;
    padding: 10px 25px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
  };
  h1 {
    letter-spacing: 1px;
  }
`

export const Card = styled.div`
  height: 150px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  background-color: #333;
  border-radius: 5px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

export const CardText = styled.p`
  margin-left: 20px;
  font-size: 24px;
  color: #e0dfdc;
  letter-spacing: .1em;
  text-shadow: 
      0 -1px 0 #fff, 
      0 1px 0 #2e2e2e, 
      0 2px 0 #2c2c2c, 
      0 3px 0 #2a2a2a, 
      0 4px 0 #282828, 
      0 5px 0 #262626;
`

export const SideText = styled.p`
  position: absolute;
  margin: 0;
  height: 100%;
  padding: 5px 0;
  font-size: 12px;
  color: slategray;
  background: rgba(112, 128, 144, 0.2);
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  @font-face {
    font-family: 'DroidobeshDepot';
    src: url(${DroidobeshDepot}) format('opentype');
    font-style: normal;
  }
  font-family: 'DroidobeshDepot';
`

export const Hr = styled.hr`
  width: 75%;
  margin: 10px auto 15px auto;
  color: rgba(0, 0, 0, 0.2);
`

export const ModalArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  width: 600px;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  max-height: 75vh;
  overflow-y: auto;
  button {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: -10px;
    border: none;
    font-size: 2.5rem;
    background: transparent;
  }
  .listItem {
    list-style-type: none;
    label {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    p {
      margin: 5px 0 25px 20px;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }
  .listDetails {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 0 auto;
      margin: 0.5rem 0.5rem;
      padding: 5px;
      background: steelblue;
      color: white;
      border-radius: 5px;
    }
  }
`