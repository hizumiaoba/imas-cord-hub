import { fansiteType } from "./fansite.interface";
import { serverType } from "./server.interface";

export const dummyServer: Array<serverType> = [
  {
    id: 1,
    name: "Server 1",
    ip: '765as',
    waifu: [
      'Amami Haruka',
      'Kisaragi Chihaya',
      'Hoshii Miki',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nunc ultricies nunc, sed ultricies',
    invite: 'https://example.com/invite/1',
    splash: 'https://dummyimage.com/100x100/4e4886.png'
  },
  {
    id: 2,
    name: "Server 2",
    ip: 'cinderella',
    waifu: [
      'Shibuya Rin',
      'Shimamura Uzuki',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nunc ultricies nunc, sed ultricies',
    invite: 'https://example.com/invite/2',
    splash: 'https://dummyimage.com/100x100/4e4886.png'
  }
];

export const dummyFansite: Array<fansiteType> = [
  {
    id: 1,
    name: "Fansite 1",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nunc ultricies nunc, sed ultricies',
    waifu: 'Amami Haruka',
    link: 'https://example.com/fansite/1'
  },
  {
    id: 2,
    name: "Fansite 2",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nunc ultricies nunc, sed ultricies',
    waifu: 'Kisaragi Chihaya',
    link: 'https://example.com/fansite/2'
  }
];
