export const FLAGSHIP2D20 = {};

FLAGSHIP2D20.attributes = {
  "int": "Flagship2d20.AbilityInt",
  "ner": "Flagship2d20.AbilityNer",
  "pre": "Flagship2d20.AbilityPre",
  "sha": "Flagship2d20.AbilitySha",
  "vig": "Flagship2d20.AbilityVig",
};

FLAGSHIP2D20.abilityAbbreviations = {
  "int": "Flagship2d20.AbilityIntAbr",
  "ner": "Flagship2d20.AbilityNerAbr",
  "pre": "Flagship2d20.AbilityPreAbr",
  "sha": "Flagship2d20.AbilityShaAbr",
  "vig": "Flagship2d20.AbilityVigAbr",
};

FLAGSHIP2D20.SKILLS = [
  {
    'label': 'ATHLETICS',
    'key': "Athletics",
    'focuses': ['Climbing', 'Jumping', 'Running', 'Swimming', 'Zero-G']
  },
  {
    'label': 'AWARENESS',
    'key': "Awareness",
    'focuses': ['Hearing', 'Insight', 'Sight', 'Smell and Taste', 'Vigilance']
  },
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
    'focuses': ['Discipline', 'Poise', 'Spirit']
  },
  {
    'label': 'ENDURANCE',
    'key': "Endurance",
    'focuses': ['Stamina', 'Immunity', 'Pain']
  },
  {
    'label': 'ENGINEERING',
    'key': "Engineering",
    'focuses': ['Electronics', 'Explosives', 'Mechanical', 'Software']
  },
  {
    'label': 'FIGHTING',
    'key': "Fighting",
    'focuses': ['Hand-to-Hand', 'Improvised Weapons', 'Melee Weapons', 'Power Armor']
  },
  {
    'label': 'HEALING',
    'key': "Heal",
    'focuses': ['Diagnosis', 'Psychiatry', 'Surgery', 'Treatment']
  },
  {
    'label': 'INVESTIGATE',
    'key': "Investigate",
    'focuses': ['Forensics', 'Research', 'Searching']
  },
  {
    'label': 'KNOWLEDGE',
    'key': "Knowledge",
    'focuses': ['Business', 'History', 'Language', 'Law', 'Science']
  },
  {
    'label': 'LEADERSHIP',
    'key': "Leadership",
    'focuses': ['Command', 'Inspire', 'Rhetoric']
  },
  {
    'label': 'PERSUASION',
    'key': "Persuasion",
    'focuses': ['Bargain', 'Deceive', 'Intimidate']
  },
  {
    'label': 'PILOTING',
    'key': "Piloting",
    'focuses': [  'Operations', 'Personal Craft', 'Shuttlecraft', 'Watercraft', 'Wheeled']
  },
  {
    'label': 'RESOURCES',
    'key': "Resources",
    'focuses': ['Acquisitions', 'Forgery', 'Preparedness', 'Wealth']
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
    'label': 'STRENGTH',
    'key': "Strength",
    'focuses': ['Breaking', 'Lifting', 'Throwing']
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
    "reach": "FLAGSHIP2D20.RANGE.reach",
    "close": "FLAGSHIP2D20.RANGE.close",
    "medium": "FLAGSHIP2D20.RANGE.medium",
    "long": "FLAGSHIP2D20.RANGE.long",
    "extreme": "FLAGSHIP2D20.RANGE.extreme"
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
      'bonusAttribute': 'int'
    }
  ]
}

FLAGSHIP2D20.spellcastingTypes = {
  "traditional":"traditional",
  "researcher":"researcher",
  "dabbler":"dabbler"
}



