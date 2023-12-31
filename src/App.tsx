import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  const currentTrack = tracks[0];
  const AlbumCover = ({ currentTrack }: { currentTrack: SavedTrack }) => {
    const src = track.album.images[0].url; // A changer ;)
    return <img src={src} style={{ width: 400, height: 400 }} />;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur mon blind test</h1>
      </header>
      <div className="App-images">
        <AlbumCover track={currentTrack} />
        <p>BlindTest!</p>
      </div>
      <div className="App-buttons">
        <audio src={trackUrls[trackIndex]} autoPlay controls />
        <button onClick={goToNextTrack}>Next track</button>
      </div>
      <span>
        Il y a {tracks.length} morceau likés , Premier Morceaux liké :{' '}
        {tracks[0]?.track.name}{' '}
      </span>
    </div>
  );
};

export default App;

const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];
