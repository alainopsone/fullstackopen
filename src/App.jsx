const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello its {now.toString()}</h1>
      <p>{a} plus {b} is {a + b}</p>
    </>
  )
}

export default App
