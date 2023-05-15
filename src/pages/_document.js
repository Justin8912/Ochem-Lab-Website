import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <header>
        <title>Organic Chemistry Labs</title>
        <meta
          name='description'
          content = "This is the homepage for Dr. Fjetland's Organic Chemistry Labs at The University of Texas at Austin"
        />
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
