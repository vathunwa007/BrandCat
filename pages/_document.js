import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
                        rel="stylesheet"
                    />
                    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

                    <link rel="stylesheet" href="/css/fontawesome.css" />
                    <link rel="stylesheet" href="/css/templatemo-style.css" />
                    <link rel="stylesheet" href="/css/owl.css" />
                    <link rel="stylesheet" href="/css/lightbox.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="/js/isotope.min.js"></script>
    <script src="/js/owl-carousel.js"></script>
    <script src="/js/lightbox.js"></script>
    <script src="/js/custom.js"></script>
    <script src="/js/function.js"></script>

                </body>
            </Html>
        )
    }
}

export default MyDocument