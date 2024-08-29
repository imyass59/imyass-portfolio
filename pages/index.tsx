import DefaultSEO from "@/components/DefaultSEO/DefaultSEO"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default function Home({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const SEO = {
    title: "Home",
    description: "This is the home page",
  }

  return (
    <>
      <DefaultSEO SEOdata={SEO} />
      <h1>Imyass Portfolio</h1>
    </>
  )
}
