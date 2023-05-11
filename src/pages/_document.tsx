import { createGetInitialProps } from "@mantine/next";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
