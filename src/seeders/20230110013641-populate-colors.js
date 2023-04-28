'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Colors', [
      {
        name: 'Salmon',
        value: '#FA8072',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightSalmon',
        value: '#FFA07A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crimson',
        value: '#DC143C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Red',
        value: '#FF0000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FireBrick',
        value: '#B22222',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'LightPink',
        value: '#FFC0CB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HotPink',
        value: '#FF69B4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumVioletRed',
        value: '#C71585',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PaleVioletRed',
        value: '#DB7093',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coral',
        value: '#FF7F50',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato',
        value: '#FF6347',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'OrangeRed',
        value: '#FF4500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkOrange',
        value: '#FF8C00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orange',
        value: '#FFA500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gold',
        value: '#FFD700',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moccasin',
        value: '#FFE4B5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Khaki',
        value: '#F0E68C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkKhaki',
        value: '#BDB76B',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Lavender',
        value: '#E6E6FA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thistle',
        value: '#D8BFD8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Plum',
        value: '#DDA0DD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Violet',
        value: '#EE82EE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orchid',
        value: '#DA70D6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Magenta',
        value: '#FF00FF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumOrchid',
        value: '#BA55D3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumPurple',
        value: '#9370DB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RebeccaPurple',
        value: '#663399',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BlueViolet',
        value: '#8A2BE2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkMagenta',
        value: '#8B008B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indigo',
        value: '#4B0082',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SlateBlue',
        value: '#6A5ACD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkSlateBlue',
        value: '#483D8B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumSlateBlue',
        value: '#7B68EE',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'GreenYellow',
        value: '#ADFF2F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LawnGreen',
        value: '#7CFC00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lime',
        value: '#00FF00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LimeGreen',
        value: '#32CD32',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PaleGreen',
        value: '#98FB98',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightGreen',
        value: '#90EE90',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumSpringGreen',
        value: '#00FA9A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SpringGreen',
        value: '#00FF7F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumSeaGreen',
        value: '#3CB371',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SeaGreen',
        value: '#2E8B57',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ForestGreen',
        value: '#228B22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkGreen',
        value: '#006400',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'YellowGreen',
        value: '#9ACD32',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OliveDrab',
        value: '#6B8E23',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Olive',
        value: '#808000',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'MediumAquamarine',
        value: '#66CDAA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkSeaGreen',
        value: '#8FBC8B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightSeaGreen',
        value: '#20B2AA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkCyan',
        value: '#008B8B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aqua',
        value: '#00FFFF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PaleTurquoise',
        value: '#AFEEEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Turquoise',
        value: '#40E0D0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MediumTurquoise',
        value: '#48D1CC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkTurquoise',
        value: '#00CED1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CadetBlue',
        value: '#5F9EA0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SteelBlue',
        value: '#4682B4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightSteelBlue',
        value: '#B0C4DE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PowderBlue',
        value: '#B0E0E6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightBlue',
        value: '#ADD8E6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SkyBlue',
        value: '#87CEEB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightSkyBlue',
        value: '#87CEFA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DodgerBlue',
        value: '#1E90FF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CornflowerBlue',
        value: '#6495ED',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RoyalBlue',
        value: '#4169E1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Navy',
        value: '#000080',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Cornsilk',
        value: '#FFF8DC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bisque',
        value: '#FFE4C4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'NavajoWhite',
        value: '#FFDEAD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BurlyWood',
        value: '#DEB887',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RosyBrown',
        value: '#BC8F8F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SandyBrown',
        value: '#F4A460',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Goldenrod',
        value: '#DAA520',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peru',
        value: '#CD853F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chocolate',
        value: '#D2691E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SaddleBrown',
        value: '#8B4513',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sienna',
        value: '#A0522D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brown',
        value: '#A52A2A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maroon',
        value: '#800000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'White',
        value: '#FFFFFF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HoneyDew',
        value: '#F0FFF0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AliceBlue',
        value: '#F0F8FF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beige',
        value: '#F5F5DC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LavenderBlush',
        value: '#FFF0F5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MistyRose',
        value: '#FFE4E1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gainsboro',
        value: '#DCDCDC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightGray',
        value: '#D3D3D3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Silver',
        value: '#C0C0C0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkGray',
        value: '#A9A9A9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gray',
        value: '#808080',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DimGray',
        value: '#696969',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LightSlateGray',
        value: '#778899',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SlateGray',
        value: '#708090',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DarkSlateGray',
        value: '#2F4F4F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black',
        value: '#000000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Colors', null, {});
  }
};
