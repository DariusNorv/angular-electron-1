interface ProviderModel {
  id: number;
  title: string;
  url: string;
  api?: string;
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
    api: 'SoundcloudComponent',
  },
];
