import { useId } from 'react'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { Card } from '../components/Card.jsx'

export function MyRecepies() {
  const idText = useId()

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
          <svg height='24px' width='24px' viewBox="0 0 24 24" fill="none" >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#E07A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
          <input
            type="text"
            name={idText}
            placeholder='Search by dish'
            autoComplete='off'
            onChange={handleChange}
            value={query}
          />
        </div>
      </form>

      <button type='button' className='reset_btn' onClick={handleReset}>Show all</button>

      <div className='wrapper'>
        <p className='gap_x'>Your recepies <span className='pill small_text'>{filteredRecepies.length}</span></p>
        <hr />
      </div>

      <div className="wrapper list">
        {
          filteredRecepies.length === 0 && <p className='pill small_text text_center'>The recipes you save will be displayed here</p>
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
    </main>
  )
}