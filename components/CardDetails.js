import React from 'react'
import { ModalArea, Modal } from './MiscStyles'
import ListDetail from './ListDetail'

export default function CardDetails({ openItem, setIsModalOpen }) {
  const keys = Object.keys(openItem).map(item => item.split('_').join(' '))
  const values = Object.values(openItem)

  return (
    <ModalArea>
      <Modal>
        <button onClick={() => setIsModalOpen(false)}>&times;</button>
        <ul>
          {keys.map((label, index) => (
            <li key={index} className="listItem">
              <label>{label.toUpperCase()}</label>
              {typeof(values?.[index]) === 'string' || typeof(values?.[index]) === 'number' || !values?.[index] ?
                <p>{values?.[index]}</p> ?? <p>'Unknown'</p>
               : 
                <ul className="listDetails">{values?.[index].map((item, i) => <ListDetail key={i} item={item} />)}</ul>
              } 
            </li>
          ))}
        </ul>
      </Modal>
    </ModalArea>
  )
}

