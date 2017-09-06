interface ProviderModel {
  id: number;
  title: string;
  url: string;
  api?: string;
  client_id?: string;
}

export const PROVIDERS: ProviderModel[] = [
  {
    id: 1,
    title: 'Mixcloud',
    url: 'mixcloud',
    api: 'https://api.mixcloud.com/',
  },
  {
    id: 2,
    title: 'SoundCloud',
    url: 'soundcloud',
    api: 'https://api.soundcloud.com/',
    client_id: 'bd6e76466be344a1d89fd254acf50498',
  },
];
