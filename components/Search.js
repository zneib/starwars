import React, { useState, useEffect, useContext } from 'react'
import GlobalContext from '../context/globalContext'
import { Wrapper, Container, Form, CategoryCard, CategoryWrapper } from './SearchStyles'
import SearchResults from './SearchResults'

export default function Search() {
  const [text, setText] = useState('')
  const [activeCard, setActiveCard] = useState()
  const globalContext = useContext(GlobalContext)
  const { search, searchResults, loading } = globalContext

  // Reset the form when the search results view is canceled.
  useEffect(() => {
    if (searchResults.length === 0) {
      setText('')
      setActiveCard(null)
    }
  }, [searchResults])

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '' || activeCard === null) {
      alert('A category or search term is missing')
    } else {
      search(`${activeCard}/?search=${text}`)
    }
  }

  const onCardClick = (category) => {
    setActiveCard(category)
  }
  
  if (loading) {
    return 'Loading...'
  } else {
    return (
      <Wrapper>
      {searchResults.length === 0 ? 
        (<Container>
          <Form onSubmit={onSubmit}>
            <h1>Search</h1>
              <label htmlFor="category">Category</label>
              <hr/>
              <CategoryWrapper>
                <CategoryCard active={activeCard === 'films'} onClick={() => onCardClick('films')}>
                  <p>Films</p>
                  <i className="swg swg-starwars swg-2x"></i>
                </CategoryCard>
                <CategoryCard active={activeCard === 'people'} onClick={() => onCardClick('people')}>
                  <p>People</p>
                  <i className="swg swg-darthvader-4 swg-2x"></i>
                </CategoryCard>
                <CategoryCard active={activeCard === 'starships'} onClick={() => onCardClick('starships')}>
                  <p>StarShips</p>
                  <i className="swg swg-ywing swg-2x"></i>
                </CategoryCard>
                <CategoryCard active={activeCard === 'vehicles'} onClick={() => onCardClick('vehicles')}>
                  <p>Vehicles</p>
                  <i className="swg swg-atat-2 swg-2x"></i>
                </CategoryCard>
                <CategoryCard active={activeCard === 'species'} onClick={() => onCardClick('species')}>
                  <p>Species</p>
                  <i className="swg swg-chewbacca swg-2x"></i>
                </CategoryCard>
                <CategoryCard active={activeCard === 'planets'} onClick={() => onCardClick('planets')}>
                  <p>Planets</p>
                  <i className="swg swg-deathstar-2 swg-2x"></i>
                </CategoryCard>
              </CategoryWrapper>
            <div className="bottom-section">
              <label htmlFor="text">Text</label>
              <input type="text" placeholder="Find Something..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Container>
        ) : (
          <SearchResults activeCard={activeCard} data={searchResults} />
        )}
      </Wrapper>
    )
  }
}