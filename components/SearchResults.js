import React, { useState, useContext } from 'react'
import { Container, Header, Card, CardText, Hr, SideText } from './MiscStyles'
import GlobalContext from '../context/globalContext'
import CardDetails from './CardDetails'

export default function SeachResults({ activeCard, data }) {
  const [openItem, setOpenItem] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const globalState = useContext(GlobalContext)
  const { resetSearch, loading } = globalState

  const openCard = (item) => {
    setOpenItem(item)
    setIsModalOpen(true)
  }
  if (loading) {
    return 'Loading...'
  } else {
    return (
      <>
        <Header>
          <button onClick={resetSearch}>← Back</button>
          <h1>Search Results...</h1>
        </Header>
        <Hr />
        <Container>
          {data.length !== 0 && (
            data.map((item, index) => (
              <Card key={index} onClick={() => openCard(item)}>
                <SideText>{activeCard}</SideText>
                {activeCard === 'films' ? (
                  <CardText>{item.title.toUpperCase()}</CardText>
                ) : (
                  <CardText>{item.name.toUpperCase()}</CardText>
                )}
              </Card>
            ))
          )}
        </Container>
        {isModalOpen && <CardDetails openItem={openItem} setIsModalOpen={setIsModalOpen} />}
      </>
    )
  }
}