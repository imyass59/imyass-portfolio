import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default function Home({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <main>
      <h1>Imyass Portfolio</h1>
    </main>
  )
}
