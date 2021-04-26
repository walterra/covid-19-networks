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
    label: 'Collateral Global',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },

  {
    id: 'AIER',
    label: 'AIER - American Institute for Economic Research',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'CKF',
    label: 'Charles Koch Foundation',
    shape: "circularImage",
    image: "img/icon-institution.png"
  }
];



var rawEdges = [
  { from: 'jb', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'jb', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },

  { from: 'mk', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'mk', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },

  { from: 'sg', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'sg', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },

  { from: 'ch', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },

  { from: 'CKF', to: 'AIER', title: 'sponsored by', font: { align: "middle" } },
  { from: 'AIER', to: 'GBD', title: 'AIER received $68,100 from Charles Koch Foundation', font: { align: "middle" } },
];

// global for node scripts
getRawNodes = () => rawNodes;
getRawEdges = () => rawEdges;

