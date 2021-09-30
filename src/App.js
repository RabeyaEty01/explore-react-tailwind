import './App.css';

function App() {
  return (
    <div className="App">
      <p className="bg-yellow-200 text-4xl">This is my Text</p>
      <p className="text-primary">Hello my text</p>
      <p className="text-custom">This is my own tailwind class</p>

      <form>
        <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
        <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
          Sign up
        </button>
        <br />
        <button class="bg-red-500 hover:bg-red-700 ...">
          Hover me
        </button>
      </form>
    </div>
  );
}

export default App;
