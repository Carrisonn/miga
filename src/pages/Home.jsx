import { useId, useEffect } from 'react'
import { useApi } from '../hooks/useApi.jsx'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { useSearchForm } from '../hooks/useSearchForm.jsx'
import { Card } from '../components/Card.jsx'
import { Loader } from '../components/Loader.jsx'


import recepies from '../recepies.json'

export function Home() {
  const idText = useId()

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

  // useEffect(() => {
  //   if (query) searchRecepie(query)
  //   else getRandomRecepies()
  // }, [])

  return (
    <main>
      <div className='wrapper'>
        <h1>What do you want to cook today?</h1>
        <p className='small_text'>Find easy recipes by name or by what you have in the fridge.</p>
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

      {
        // !isLoading && (
        <div className='wrapper'>
          <p className='gap_x'>Featured Recipes <span className='pill small_text'>{recepies.length}</span></p>
          <hr />
        </div>
        // )
      }

      <div className="wrapper list">
        {
          // isLoading
          //   ? <Loader />
          //   : data.map(recepie => (
          //     <Card
          //       key={recepie.id}
          //       recepie={recepie}
          //       toogleRecepie={toogleRecepie}
          //       isSaved={savedRecepies.some(savedRecepie => savedRecepie.id === recepie.id)}
          //     />
          //   ))
          recepies.map(recepie => (
            <Card
              key={recepie.id}
              recepie={recepie}
              toogleRecepie={toogleRecepie}
              isSaved={savedRecepies.some(saved => saved.id === recepie.id)}
            />
          ))
        }
      </div>
    </main>
  )
}
