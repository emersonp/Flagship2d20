export const FLAGSHIP2D20 = {};

FLAGSHIP2D20.attributes = {
  "foc": "Flagship2d20.AbilityFoc",
  "ner": "Flagship2d20.AbilityNer",
  "phy": "Flagship2d20.AbilityPhy",
  "pre": "Flagship2d20.AbilityPre",
  "sha": "Flagship2d20.AbilitySha",
};

FLAGSHIP2D20.abilityAbbreviations = {
  "foc": "Flagship2d20.AbilityFocAbr",
  "ner": "Flagship2d20.AbilityNerAbr",
  "phy": "Flagship2d20.AbilityPhyAbr",
  "pre": "Flagship2d20.AbilityPreAbr",
  "sha": "Flagship2d20.AbilityShaAbr",
};

FLAGSHIP2D20.SKILLS = [
  {
    'label': 'CHARM',
    'key': "Charm",
    'focuses': ['Flirt', 'Perform', 'Revel']
  },
  {
    'label': 'CONNECTIONS',
    'key': "Connections",
    'focuses': ['Bureaucracy', 'Criminal', 'High', 'Low']
  },
  {
    'label': 'COOL',
    'key': "Nerves",
    'focuses': ['Discipline', 'Initiative']
  },
  {
    'label': 'FIGHT',
    'key': "Fight",
    'focuses': ['Hand-to-Hand', 'Improvised Weapons', 'Melee Weapons']
  },
  {
    'label': 'FIX',
    'key': "Fix",
    'focuses': ['Electronics', 'Explosives', 'Mechanical']
  },
  {
    'label': 'FORCE',
    'key': "Force",
    'focuses': ['Breaking', 'Lifting', 'Throwing']
  },
  {
    'label': 'HEAL',
    'key': "Heal",
    'focuses': ['Diagnosis', 'First Aid', 'Psychiatry', 'Surgery']
  },
  {
    'label': 'INVESTIGATE',
    'key': "Investigate",
    'focuses': ['Forensics', 'Research', 'Searching']
  },
  {
    'label': 'KNOW',
    'key': "Know",
    'focuses': ['Business', 'History', 'Language', 'Law', 'Science']
  },
  {
    'label': 'LEAD',
    'key': "Lead",
    'focuses': ['Command', 'Inspire', 'Rhetoric']
  },
  {
    'label': 'PERSUADE',
    'key': "Persuade",
    'focuses': ['Bargain', 'Deceive', 'Intimidate']
  },
  {
    'label': 'PILOT',
    'key': "Pilot",
    'focuses': [  'Operations', 'Personal Craft', 'Shuttlecraft', 'Watercraft', 'Wheeled']
  },
  {
    'label': 'RESIST',
    'key': "Resist",
    'focuses': ['Endure', 'Immunity', 'Pain']
  },
  {
    'label': 'RESOURCEFULNESS',
    'key': "Resourcefulness",
    'focuses': ['Acquisitions', 'Forgery', 'Preparedness', 'Wealth']
  },
  {
    'label': 'SENSE',
    'key': "Sense",
    'focuses': ['Hearing', 'Sight', 'Smell and Taste', 'Vigilance']
  },
  {
    'label': 'SHOOT',
    'key': "Shoot",
    'focuses': ['Ancient Weapons', 'Close Quarters', 'Heavy Weapons', 'Pistols', 'Rifles']
  },
  {
    'label': 'STEALTH',
    'key': "Stealth",
    'focuses': ['Camoflage', 'Disguise', 'Wilderness Stealth', 'Urban Stealth']
  },
  {
    'label': 'STUNT',
    'key': "Stunt",
    'focuses': ['Climbing', 'Jumping', 'Running', 'Swimming', 'Zero-G']
  },
  {
    'label': 'SURVIVAL',
    'key': "Survival",
    'focuses': ['Animal Handling', 'Foraging', 'Hunting', 'Navigation', 'Tracking']
  },
  {
    'label': 'THIEVERY',
    'key': "Thievery",
    'focuses': ['Appraisal', 'Locks and Traps', 'Sleight of Hand']
  }  
];

FLAGSHIP2D20.Size = ["Trivial", "Minor", "Major"];

FLAGSHIP2D20.WEAPONS = {
  "range": {
    "reach": "Flagship2d20.RANGE.reach",
    "close": "Flagship2d20.RANGE.close",
    "medium": "Flagship2d20.RANGE.medium",
    "long": "Flagship2d20.RANGE.long",
    "extreme": "Flagship2d20.RANGE.extreme"
  },
  "weaponTypes": [
    {
      'label': "Melee",
      'bonusAttribute': 'pre'
    },
    {
      'label': "Ranged",
      'bonusAttribute': 'ner'
    },
    {
      'label': "Mental",
      'bonusAttribute': 'foc'
    }
  ]
}

FLAGSHIP2D20.spellcastingTypes = {
  "traditional":"traditional",
  "researcher":"researcher",
  "dabbler":"dabbler"
}



