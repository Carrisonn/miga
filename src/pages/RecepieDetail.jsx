import { useRouter } from '../hooks/useRouter.jsx'
import { useMyRecepies } from '../hooks/useMyRecepies.jsx'
import { useApi } from '../hooks/useApi.jsx'
import { Loader } from '../components/Loader.jsx'
import { CardDetail } from '../components/CardDetail.jsx'

// import recepies from '../recepies.json'

export function RecepieDetail() {
  const { getSlug } = useRouter()
  const slug = getSlug()

  const {
    savedRecepies,
    toogleRecepie
  } = useMyRecepies()

  const {
    isLoading,
    apiResponse: { data }
  } = useApi(slug)

  // const recepie = recepies.find(recepie => recepie.id.toString() === slug)

  return (
    <main>
      {
        isLoading
          ? <Loader />
          : <CardDetail
            recepie={data}
            toogleRecepie={toogleRecepie}
            isSaved={savedRecepies.some(saved => saved.id === data.id)}
          />
      }

      {
        // <CardDetail
        //   recepie={recepie}
        //   toogleRecepie={toogleRecepie}
        //   isSaved={savedRecepies.some(saved => saved.id === recepie.id)}
        // />
      }
    </main>
  )
}