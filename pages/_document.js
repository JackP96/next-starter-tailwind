import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>{" "}
					<link
						href="https://fonts.googleapis.com/css2?family=Merriweather:wght@100;200;300;400;500;600;700;800;900&display=swap"
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

export default MyDocument;
