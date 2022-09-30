import './styles/main.css';

import logoImg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={2}
        />
        <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={1} />
        <GameBanner bannerUrl="/game-3.png" title="CS Go" adsCount={0} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
