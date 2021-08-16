import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as fs from 'fs'
import * as path from 'path'

class InlineStylesHead extends Head {
  getCssLinks(files: any) {
    return files.sharedFiles
      .filter((file: any) => /\.css$/.test(file))
      .filter((file: any) =>
        fs.existsSync(path.join(process.cwd(), '.next', file))
      )
      .map((file: any) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${this.context.assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(
              path.join(process.cwd(), '.next', file),
              'utf-8'
            ),
          }}
        />
      ))
  }
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <InlineStylesHead>
          <link
            rel='preload'
            href='/fonts/Inter-roman.var-latin.woff2?3.13'
            as='font'
            type='font/woff2'
            crossOrigin='true'
          />
        </InlineStylesHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
