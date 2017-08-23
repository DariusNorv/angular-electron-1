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
    api: 'SoundcloudComponent',
  },
  {
    id: 2,
    title: 'Mixcloud',
    url: 'mixcloud',
    api: 'MixcloudComponent',
  },
];
