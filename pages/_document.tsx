import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

function createEmotionCache(){
  return createCache({key:'css'})
}

export default class MyDocument extends Document {
  render(){
    return(
      <Html lang="en">
        <Head>
          <meta charSet="utf-8"/>
          <link
            href='https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap'
            rel="stylesheet"
          />
          <meta 
            name="description" 
            content="Example project description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  
  const {extractCriticalToChunks} = createEmotionServer(cache);
  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => (
      <CacheProvider value={cache}>
        <App {...props}/>
      </CacheProvider>
    ),
  });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{__html: style.css}}
    />
  ));

  return{
    ...initialProps,
    emotionStyleTags,
  }
}