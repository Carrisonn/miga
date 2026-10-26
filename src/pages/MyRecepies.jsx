import { useId } from 'react'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { useScroll } from '../hooks/useScroll.jsx'
import { Card } from '../components/Card.jsx'
import { InputSearch } from '../components/InputSearch.jsx'
import { FloatingButton } from '../components/FloatingButton.jsx'
import { APP_ICONS } from '../config/constants.js'

export function MyRecepies() {
  const idText = useId()
  const { showButton } = useScroll()
  const { SearchIcon } = APP_ICONS

  const {
    handleSubmit,
    handleChange,
    handleReset,
    toogleRecepie,
    query,
    filteredRecepies,
  } = useMyRecepies(idText)

  return (
    <main>
      <div className="wrapper">
        <h1>Explore your pantry</h1>
        <p className='small_text'>Your saved recipes are displayed here</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='field'>
          <SearchIcon />
          <InputSearch
            name={idText}
            query={query}
            handleChange={handleChange}
          />
        </div>
      </form>

      <button
        type='button'
        className='button reset_btn'
        onClick={handleReset}
      >
        Show all
      </button>

      <p className='gap_x'>Your recepies <span className='pill small_text bold'>{filteredRecepies.length}</span></p>

      <div className="wrapper list">
        {
          filteredRecepies.length === 0 && (
            <p className='pill small_text text_center'>The recipes you save will be displayed here</p>
          )
        }

        {
          filteredRecepies.map(recepie => (
            <Card
              key={recepie.id}
              recepie={recepie}
              toogleRecepie={toogleRecepie}
              isSaved={true}
            />
          ))
        }
      </div>

      {showButton && <FloatingButton />}
    </main>
  )
}