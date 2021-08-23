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
  },
  {
    id: 'ji',
    label: 'John Ioannidis',
    shape: "circularImage",
    image: "img/person-john-ioannidis.jpg"
  },
  {
    id: 'scs',
    label: '"Santa Clara Study"',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'fox',
    label: 'Fox News',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'dn',
    label: 'David Neeleman',
    shape: "circularImage",
    image: "img/person-david-neeleman.jpg"
  },
  {
    id: 'servustv',
    label: 'ServusTV',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'jat',
    label: 'Jeffrey A. Tucker',
    shape: "circularImage",
    image: "img/person-jeffrey-tucker.jpg"
  },
  {
    id: 'JLF',
    label: 'John Locke Foundation',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'FDA',
    label: 'FDA',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'BI',
    label: 'Brownstone Institute',
    shape: "circularImage",
    image: "img/icon-institution.png"
  },
  {
    id: 'TGCP',
    label: 'The Great COVID Panic',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'spiked',
    label: 'sp!ked',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'RM',
    label: 'Reason Magazine',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'lj',
    label: 'Lucy Johnston',
    shape: "circularImage",
    image: "img/person-lucy-johnston.jpg"
  },
  {
    id: 'SE',
    label: 'Sunday Express',
    shape: "circularImage",
    image: "img/icon-media.png"
  },
  {
    id: 'SNO',
    label: 'Sketch notes on ...',
    shape: "circularImage",
    image: "img/icon-media.png"
  }
];



var rawEdges = [
  { from: 'jb', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'jb', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },
  { from: 'jb', to: 'rds', title: 'Roundtable 27.07.2021', font: { align: "middle" } },
  { from: 'jb', to: 'scs', title: 'Co-Author', font: { align: "middle" } },
  { from: 'jb', to: 'fox', title: 'The Next Revolution 12.04.2020', font: { align: "middle" } },
  { from: 'jb', to: 'servustv', title: 'Interview "Auf der Suche nach der Wahrheit"', font: { align: "middle" } },
  { from: 'jb', to: 'BI', title: 'Senior Scholar', font: { align: "middle" } },
  // https://www.express.co.uk/comment/expresscomment/1480182/covid-war-over-no-more-lockdowns-coronavirus-comment
  { from: 'jb', to: 'SE', title: 'Op-ed', font: { align: "middle" } },

  { from: 'mk', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'mk', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },
  { from: 'mk', to: 'at', title: '"Thank you"-E-Mail', font: { align: "middle" } },
  { from: 'mk', to: 'jg', title: '"Thank you"-E-Mail', font: { align: "middle" } },
  { from: 'mk', to: 'BI', title: 'Senior Scholar', font: { align: "middle" } },
  { from: 'mk', to: 'TGCP', title: 'testimonial', font: { align: "middle" } },
  { from: 'mk', to: 'RM', title: 'SOHO Forum 13.12.2020', font: { align: "middle" } },

  { from: 'sg', to: 'GBD', title: 'Co-Author', font: { align: "middle" } },
  { from: 'sg', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },
  // https://twitter.com/thelucyjohnston/status/1376110858133250049
  { from: 'sg', to: 'SE', title: '"Exclusive" Article', font: { align: "middle" } },

  { from: 'ch', to: 'CG', title: 'Scientific Advisory Board', font: { align: "middle" } },
  // https://www.spiked-online.com/2021/07/23/the-harm-done-by-lockdown-will-last-for-decades/
  { from: 'ch', to: 'spiked', title: 'Interview 23.07.2021', font: { align: "middle" } },

  { from: 'AIER', to: 'GBD', title: 'sponsored by', font: { align: "middle" } },
  { from: 'CKF', to: 'AIER', title: 'received $68,100 from Charles Koch Foundation', font: { align: "middle" } },
  // https://www.desmog.com/2018/12/04/spiked-lm-dark-money-koch-brothers/
  { from: 'CKF', to: 'spiked', title: 'received $300,000 from the Charles Koch Foundation', font: { align: "middle" } },
  { from: 'CKF', to: 'RM', title: 'received $1 million from the Charles Koch Foundation', font: { align: "middle" } },


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
  { from: 'cm', to: 'FDA', title: 'FDA Advisory Committee Member', font: { align: "middle" } },

  { from: 'mcd', to: 'rds', title: 'Roundtable 27.07.2021', font: { align: "middle" } },

  { from: 'ji', to: 'scs', title: 'Co-Author', font: { align: "middle" } },
  // https://en.wikipedia.org/wiki/Life,_Liberty_%26_Levin
  // https://www.washingtonpost.com/dc-md-va/2020/12/16/john-ioannidis-coronavirus-lockdowns-fox-news/
  { from: 'ji', to: 'fox', title: 'Life, Liberty & Levin 19.04.2020\n(numerous other appearances on Fox News)', font: { align: "middle" } },
  { from: 'ji', to: 'servustv', title: 'Interview with Michael Fleischhacker', font: { align: "middle" } },

  // https://www.buzzfeednews.com/article/stephaniemlee/stanford-coronavirus-neeleman-ioannidis-whistleblower
  { from: 'dn', to: 'scs', title: '"funded in part by"', font: { align: "middle" } },
  { from: 'dn', to: 'fox', title: '"funded in part by"', font: { align: "middle" } },

  // https://www.aier.org/staffs/jeffrey-tucker/
  { from: 'jat', to: 'AIER', title: 'independent editorial consultant\nwho served as Editorial Director', font: { align: "middle" } },
  // https://www.youtube.com/watch?v=I5gXS6z6NGY
  { from: 'jat', to: 'JLF', title: 'Interview for the John Locke Foundation\'s "HeadLocke" podcast', font: { align: "middle" } },
  { from: 'jat', to: 'BI', title: 'Founder and President', font: { align: "middle" } },

  { from: 'BI', to: 'TGCP', title: 'Publisher', font: { align: "middle" } },

  // https://www.lucyjohnstonjournalist.com/
  { from: 'at', to: 'lj', title: 'Interview', font: { align: "middle" } },
  { from: 'lj', to: 'SE', title: 'Health and Social Affairs Editor', font: { align: "middle" } },
  { from: 'lj', to: 'SNO', title: 'Podcast Host', font: { align: "middle" } },
  { from: 'mk', to: 'SNO', title: 'Podcast Guest 10.08.2021', font: { align: "middle" } },
  { from: 'sg', to: 'SNO', title: 'Podcast Guest 10.08.2021', font: { align: "middle" } },


];

// global for node scripts
getRawNodes = () => rawNodes;
getRawEdges = () => rawEdges;

