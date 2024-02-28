const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];

const traditionalAnimalColors = 'sheep pig cow';

const [black, pink, blackAndWhite] = traditionalAnimalColors.split(' ');

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

const [r, o, y, g, b, i, v] = rainbowColors;

const indg = "indigo";
const [myIndigo] = indg;

const { muppetName, color, song, job, partner } = muppet;

const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;