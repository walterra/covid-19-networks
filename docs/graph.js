var rawNodes = [
  {
    id: 'jb',
    label: "Jay Bhattacharya",
    shape: "circularImage",
    image: "img/person-jay-bhattacharya.jpg"
  },
  {
    id: 'ch',
    label: "Carl Heneghan",
    shape: "circularImage",
    image: "img/person-carl-heneghan.jpg"
  },
  {
    id: 'mk',
    label: "Martin Kulldorff",
    shape: "circularImage",
    image: "img/person-martin-kulldorff.jpg"
  },
  {
    id: 'sg',
    label: 'Sunetra Gupta',
    shape: "circularImage",
    image: "img/person-sunetra-gupta.jpg"
  },
  {
    id: 'GBD',
    label: "Great Barrington Declaration",
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'CG',
    label: 'Collateral Global Ltd.',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },

  {
    id: 'AIER',
    label: 'AIER',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'CKF',
    label: 'Charles Koch Foundation',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },

  {
    id: 'at',
    label: "Anders Tegnell",
    shape: "circularImage",
    image: "img/person-anders-tegnell.jpg"
  },
  {
    id: 'jg',
    label: "Johan Giesecke",
    shape: "circularImage",
    image: "img/person-johan-giesecke.jpg"
  },
  {
    id: 'jc',
    label: "Johan Carlson",
    shape: "circularImage",
    image: "img/person-johan-carlson.jpg"
  },
  {
    id: 'fa',
    label: "Franz Allerberger",
    shape: "circularImage",
    image: "img/person-franz-allerberger.jpg"
  },

  {
    id: 'ECDC',
    label: 'ECDC',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },

  {
    id: 'ESB',
    label: 'Embassy of Sweden in Brazil',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'AGES',
    label: 'AGES',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'rds',
    label: 'Ron DeSantis',
    shape: "circularImage",
    image: "img/person-ron-desantis.jpg"
  },
  {
    id: 'florida',
    label: 'Florida',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'cm',
    label: 'Cody Meissner',
    shape: "circularImage",
    image: "img/person-cody-meissner.jpg"
  },
  {
    id: 'mcd',
    label: 'Mark McDonald',
    shape: "circularImage",
    image: "img/person-mark-mcdonald.jpg"
  }
];



var rawEdges = [
  { from: 'jb', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'jb', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },
  { from: 'jb', to: 'rds', title: 'Roundtable 27.07.2021', font: { align: "middle" } },

  { from: 'mk', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'mk', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },
  { from: 'mk', to: 'at', title: '"Thank you"-E-Mail', font: { align: "middle" } },
  { from: 'mk', to: 'jg', title: '"Thank you"-E-Mail', font: { align: "middle" } },

  { from: 'sg', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'sg', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },

  { from: 'ch', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },

  { from: 'AIER', to: 'GBD', title: 'sponsored by', font: { align: "middle" } },
  { from: 'CKF', to: 'AIER', title: 'AIER received $68,100 from Charles Koch Foundation', font: { align: "middle" } },


  { from: 'jg', to: 'at', title: 'predecessor of', font: { align: "middle" } },

  { from: 'jg', to: 'jc', title: 'hired', font: { align: "middle" } },

  { from: 'jc', to: 'ECDC', title: 'Management Board Member', font: { align: "middle" } },


  { from: 'at', to: 'ESB', title: 'Webinar', font: { align: "middle" } },
  { from: 'at', to: 'AGES', title: 'Webinar', font: { align: "middle" } },

  { from: 'fa', to: 'AGES', title: 'Head of Division Public Health', font: { align: "middle" } },
  { from: 'fa', to: 'ECDC', title: 'Advisory Forum Alternate', font: { align: "middle" } },

  { from: 'rds', to: 'florida', title: 'Governor of Florida', font: { align: "middle" } },

  { from: 'cm', to: 'GBD', title: 'Co-signer', font: { align: "middle" } },
  { from: 'cm', to: 'rds', title: 'Roundtable 27.07.2021', font: { align: "middle" } },

  { from: 'mcd', to: 'rds', title: 'Roundtable 27.07.2021', font: { align: "middle" } },
];

// global for node scripts
getRawNodes = () => rawNodes;
getRawEdges = () => rawEdges;

