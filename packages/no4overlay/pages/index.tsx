import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>No4Overlay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="grid">
        <div id="top">Top</div>
        <aside id="left">Left</aside>
        <div id="center">Center</div>
        <aside id="right">Right</aside>
        <div id="bottom">Bottom</div>
      </main>
    </>
  )
}
