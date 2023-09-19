import { SavedTrack } from 'spotify-types/typings/track';

const apiToken: string =
  'BQDH8bTshiD6pVYlXgzppNHT_pxFggfp61xprUr1J7Yz0fpZC7R6GdCqQ7UFMFLQDGUc3pdnfbLxuKb-amQcFl3iHxZaABRrgSs3w68WXoBYn3krgfv7uypuUoXdoKpwNZHei-_IIAJcx6TgGT62j9UDJKbCMZ1ZZh5LOA9joTQAz8gzuHMNzXJAcIKzqDtl9vsj8HSxZHVCzeiDZ5oHsbZq5BiBOw';

export const fetchTracks = async (id: SavedTrack) => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
