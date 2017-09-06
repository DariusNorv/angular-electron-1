interface ProviderModel {
  id: number;
  title: string;
  url: string;
  api?: string;
}

export const PROVIDERS: ProviderModel[] = [
  {
    id: 1,
    title: 'SoundCloud',
    url: 'soundcloud',
    api: 'https://api.soundcloud.com/?client_id=bd6e76466be344a1d89fd254acf50498',
  },
  {
    id: 2,
    title: 'HeartThis',
    url: 'heartthis',
    api: 'https://api-v2.hearthis.at/',
  },
];
