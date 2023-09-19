import { SpotifyType } from 'spotify-types';
import { SavedTrack } from 'spotify-types/typings/track';

const apiToken: string =
  'BQC5SKVFu1pnLhT_3KIILMfKJDQnL30IGP_hxPBBKgpbLMhkCV1dIakw2WTmM9e2IDe3JarCJmtRkcT3qS7tv2ss7WDlMceD6TmGYfk4HDC0fWNFgWu3FcpvYJCnjvDyNRmFIOEjn31pO1qlECN7nkDcnQNJHhmKb0Fvq0Xjf7gNTH6Gm8NheCX7-uKHOHAgEJ3KVzEfkW7phZVB0e3DSUUqjJpciA';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SpotifyType[] };

  return data.items;
};
