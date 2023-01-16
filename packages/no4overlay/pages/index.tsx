import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>No4Overlay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="grid">
        <div className="top">Top</div>
        <aside className="left">Left</aside>
        <div className="center">Center</div>
        <aside className="right">Right</aside>
        <div className="bottom">Bottom</div>
      </main>
    </>
  )
}
