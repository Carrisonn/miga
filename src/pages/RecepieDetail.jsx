import { useEffect } from 'react'
import { useRouter } from '../hooks/useRouter.jsx'
import { useApi } from '../hooks/useApi.jsx'
import { Loader } from '../components/Loader.jsx'
import { CardDetail } from '../components/CardDetail.jsx'

export function RecepieDetail() {
  const { getSlug } = useRouter()
  const slug = getSlug()

  const {
    getRecepie,
    isLoading,
    apiResponse: { data }
  } = useApi()

  useEffect(() => {
    getRecepie(slug)
  }, [slug])

  return (
    <main>
      {
        isLoading
          ? <Loader />
          : <CardDetail recepie={data} />
      }
    </main>
  )
}