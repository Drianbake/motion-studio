function App() {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'Default Title';
  return (
    <div>
      <h1>{appTitle} MVP</h1>
    </div>
  );
}

export default App;
