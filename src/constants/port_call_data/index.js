const ONE_HOUR = 3600000;

export default [
  {
    id: '0',
    name: 'ABC',
    vessel: 'Seas the Day',
    location: {
      lat: 33.643922,
      lng: -118.376684,
    },
    eta: Date.now() + ONE_HOUR,
    etd: Date.now() + 5 * ONE_HOUR,
    containers: 200,
    dwellTime: 2,
  },
  {
    id: '1',
    name: 'DEF',
    vessel: 'Happy Ours',
    location: {
      lat: 33.541256,
      lng: -118.09708,
    },
    eta: Date.now() + 2 * ONE_HOUR,
    etd: Date.now() + 7 * ONE_HOUR,
    containers: 258,
    dwellTime: 2,
  },
  {
    id: '2',
    name: 'GHI',
    vessel: 'Endless Summer',
    location: {
      lat: 33.53527,
      lng: -118.696989,
    },
    eta: Date.now() + 2 * ONE_HOUR,
    etd: Date.now() + 9 * ONE_HOUR,
    containers: 343,
    dwellTime: 2,
  },
  {
    id: '3',
    name: 'JKL',
    vessel: 'Legacy',
    location: {
      lat: 33.477024,
      lng: -119.923088,
    },
    eta: Date.now() + 5 * ONE_HOUR,
    etd: Date.now() + 15 * ONE_HOUR,
    containers: 381,
    dwellTime: 2,
  },
  {
    id: '4',
    name: 'MNO',
    vessel: 'Restless',
    location: {
      lat: 33.631132,
      lng: -120.795536,
    },
    eta: Date.now() + 10 * ONE_HOUR,
    etd: Date.now() + 17 * ONE_HOUR,
    containers: 600,
    dwellTime: 2,
  },
];
