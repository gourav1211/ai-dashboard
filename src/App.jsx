import Header from './components/Header';
import AvatarList from './components/AvatarList';
import CreateAvatarButton from './components/CreateAvatarButton';

// import './App.css';

function App() {
  return (
    <div className="dark min-h-screen bg-custom-dark text-custom-text-primary antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AvatarList />
      </main>
      <CreateAvatarButton />
    </div>
  );
}

export default App
