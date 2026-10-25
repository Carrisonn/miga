import { useId, useEffect } from 'react'
import { useApi } from '../hooks/useApi.jsx'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { useSearchForm } from '../hooks/useSearchForm.jsx'
import { Card } from '../components/Card.jsx'
import { Loader } from '../components/Loader.jsx'
import { APP_ICONS } from '../config/constants.js'

// import recepies from '../recepies.json'

export function Home() {
  const idText = useId()
  const { SearchIcon } = APP_ICONS

  const {
    searchRecepie,
    getRandomRecepies,
    isLoading,
    apiResponse: { data }
  } = useApi()

  const {
    toogleRecepie,
    savedRecepies
  } = useMyRecepies()

  const {
    query,
    handleChange,
    handleReset,
    handleSubmit
  } = useSearchForm(idText, searchRecepie, getRandomRecepies)

  useEffect(() => {
    if (query) searchRecepie(query)
    else getRandomRecepies()
  }, [])

  return (
    <main>
      <div className='wrapper'>
        <h1>What do you want to cook today?</h1>
        <p className='small_text'>Find easy recipes by name or by what you have in the fridge.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='field'>
          <SearchIcon />
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

      <button
        type='button'
        className='button reset_btn'
        onClick={handleReset}
      >
        Show all
      </button>

      {
        !isLoading && (
          <p className='gap_x'>Featured Recipes <span className='pill small_text bold'>{data.length}</span></p>
        )
      }

      <div className="wrapper list">
        {
          isLoading
            ? <Loader />
            : data.map(recepie => (
              <Card
                key={recepie.id}
                recepie={recepie}
                toogleRecepie={toogleRecepie}
                isSaved={savedRecepies.some(savedRecepie => savedRecepie.id === recepie.id)}
              />
            ))
          // recepies.map(recepie => (
          //   <Card
          //     key={recepie.id}
          //     recepie={recepie}
          //     toogleRecepie={toogleRecepie}
          //     isSaved={savedRecepies.some(saved => saved.id === recepie.id)}
          //   />
          // ))
        }
      </div>
    </main>
  )
}