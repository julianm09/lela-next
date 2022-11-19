import Document, { Html, Head, Main, NextScript } from 'next/document'


import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <title>Le La Calgary: Vietnamese Restaurant - Pho Delivery Takeout</title>
        <meta property="og:title" content="Le La Calgary: Vietnamese Restaurant - Pho Delivery Takeout" key="title" />
        <meta name="description" content="Le La Vietnamese Restaurant Calgary | Authentic Pho, Vermicelli, Subs | Takeout and Delivery | SkipTheDishes." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument