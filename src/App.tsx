import Link from "next/link";
function App() {
  return (
    <>
      <h1>Migrate react to next js</h1>
      <div>
        <button>count is</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Link href={"https://nextjs.org/"}>
        <p>Click on the Next logos to learn more</p>
      </Link>
    </>
  );
}

export default App;
