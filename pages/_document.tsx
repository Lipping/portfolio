import Document, {
    Head,
    Html,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
  } from 'next/document';
  
  export default class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render(): JSX.Element {
      return (
        <Html lang="pt-BR">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;800&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }