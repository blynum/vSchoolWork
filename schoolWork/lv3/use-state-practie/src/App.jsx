import { useState } from 'react'
import './App.css'
import Star from "./Star.jsx"

function App() {
  const [contact, setContact] = useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
  })
  
  /**
   * Challenge: Move the star image into its own component
   * - It should receive a prop called `isFilled` that it
   *   uses to determine which icon it will display
   * - Import and render that component, passing the value of
   *   `isFavorite` to the new `isFilled` prop.
   * - Don't worry about the abiliity to flip this value quite yet.
   *   Instead, you can test if it's working by manually changing
   *   `isFavorite` in state above.
   */
  
  
  function toggleFavorite() {
      setContact(prevContact => ({
          ...prevContact,
          isFavorite: !prevContact.isFavorite
      }))
  }
  
  return (
      <main>
          <article className="card">
              <img src="./src/assets/user.png" className="card--image" />
              <div className="card--info">
            
                      <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
      
                  <h2 className="card--name">
                      {contact.firstName} {contact.lastName}
                  </h2>
                  <p className="card--contact">{contact.phone}</p>
                  <p className="card--contact">{contact.email}</p>
              </div>
              
          </article>
      </main>
  )
}

export default App
