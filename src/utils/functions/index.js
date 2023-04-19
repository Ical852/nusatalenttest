const {customColors} = require('../colors');

export const generateTypeColor = type => {
  switch (type) {
    case 'grass':
      return customColors.grass;
    case 'normal':
      return customColors.normal;
    case 'fighting':
      return customColors.fighting;
    case 'flying':
      return customColors.flying;
    case 'poison':
      return customColors.poison;
    case 'ground':
      return customColors.ground;
    case 'rock':
      return customColors.rock;
    case 'bug':
      return customColors.bug;
    case 'ghost':
      return customColors.ghost;
    case 'steel':
      return customColors.steel;
    case 'fire':
      return customColors.fire;
    case 'water':
      return customColors.water;
    case 'electric':
      return customColors.electric;
    case 'psychic':
      return customColors.psychic;
    case 'ice':
      return customColors.ice;
    case 'dragon':
      return customColors.dragon;
    case 'dark':
      return customColors.dark;
    case 'fairy':
      return customColors.fairy;
    default:
      return customColors.grass;
  }
};
