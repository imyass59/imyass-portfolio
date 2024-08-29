import Head from "next/head"
import React from "react"

interface ISEOProps {
  title: string
  description?: string
}

interface IProps {
  SEOdata: ISEOProps
}
const DefaultSEO = (props: IProps) => {
  const { title, description } = props.SEOdata

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/meta_logo.svg" type="image/x-icon" />
        <title>{title}</title>
        <meta name="title" content={`${title}`} />
        <meta name="description" content={`${description}`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.APP_URL} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${description}`} />
        <meta property="og:image" content="/meta_logo.svg" />

        <meta property="twitter:card" content="/meta_logo.svg" />
        <meta property="twitter:url" content={process.env.APP_URL} />
        <meta property="twitter:title" content={`${title}`} />
        <meta property="twitter:description" content={`${title}`} />
        <meta property="twitter:image" content="/meta_logo.svg" />
      </Head>
    </>
  )
}

export default DefaultSEO
