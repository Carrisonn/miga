import { useRouter } from '../hooks/useRouter.jsx'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { useApi } from '../hooks/useApi.jsx'
import { useScroll } from '../hooks/useScroll.jsx'
import { Loader } from '../components/Loader.jsx'
import { CardDetail } from '../components/CardDetail.jsx'
import { FloatingButton } from '../components/FloatingButton.jsx'
import { Footer } from '../components/Footer.jsx'

export function RecepieDetail() {
  const { getSlug } = useRouter()
  const { showButton } = useScroll()
  const slug = getSlug()

  const {
    savedRecepies,
    toogleRecepie
  } = useMyRecepies()

  const {
    isLoading,
    error: { error },
    apiResponse: { data }
  } = useApi(slug)

  if (error) return <p className='not_available'>{error}</p>

  return (
    <>
      <main>
        {
          isLoading
            ? <Loader />
            : <CardDetail
              recepie={data}
              toogleRecepie={toogleRecepie}
              isSaved={savedRecepies.some(saved => saved.id === data?.id)}
            />
        }

        {showButton && <FloatingButton />}
      </main>

      {!isLoading && <Footer />}
    </>
  )
}