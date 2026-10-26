import { useId, useEffect } from 'react'
import { useApi } from '../hooks/useApi.jsx'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { useSearchForm } from '../hooks/useSearchForm.jsx'
import { useScroll } from '../hooks/useScroll.jsx'
import { Card } from '../components/Card.jsx'
import { InputSearch } from '../components/InputSearch.jsx'
import { Loader } from '../components/Loader.jsx'
import { FloatingButton } from '../components/FloatingButton.jsx'
import { Footer } from '../components/Footer.jsx'
import { APP_ICONS } from '../config/constants.js'

export function Home() {
  const idText = useId()
  const { showButton } = useScroll()
  const { SearchIcon } = APP_ICONS

  const {
    searchRecepie,
    getRandomRecepies,
    isLoading,
    error: { error },
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

  if (error) return <p className='not_available'>{error}</p>

  return (
    <>
      <main>
        <div className='wrapper'>
          <h1>What do you want to cook today?</h1>
          <p className='small_text'>Find easy recipes by name or by what you have in the fridge.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='field'>
            <SearchIcon />
            <InputSearch
              name={idText}
              query={query}
              isDisabled={isLoading}
              handleChange={handleChange}
            />
          </div>
        </form>

        <button
          type='button'
          className='button reset_btn'
          onClick={handleReset}
          disabled={isLoading}
        >
          Show all
        </button>

        {
          !isLoading && (
            <p className='gap_x'>Featured Recipes <span className='pill small_text bold'>{data?.length}</span></p>
          )
        }

        <div className="wrapper list">
          {
            isLoading
              ? <Loader />
              : data?.map(recepie => (
                <Card
                  key={recepie.id}
                  recepie={recepie}
                  toogleRecepie={toogleRecepie}
                  isSaved={savedRecepies.some(saved => saved.id === recepie.id)}
                />
              ))
          }
        </div>

        {showButton && <FloatingButton />}
      </main>

      {!isLoading && <Footer />}
    </>
  )
}