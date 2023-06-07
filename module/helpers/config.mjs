export const Flagship2d20 = {};

Flagship2d20.attributes = {
  "foc": "Flagship2d20.AbilityFoc",
  "ner": "Flagship2d20.AbilityNer",
  "phy": "Flagship2d20.AbilityPhy",
  "pre": "Flagship2d20.AbilityPre",
  "sha": "Flagship2d20.AbilitySha",
};

Flagship2d20.abilityAbbreviations = {
  "foc": "Flagship2d20.AbilityFocAbr",
  "ner": "Flagship2d20.AbilityNerAbr",
  "phy": "Flagship2d20.AbilityPhyAbr",
  "pre": "Flagship2d20.AbilityPreAbr",
  "sha": "Flagship2d20.AbilityShaAbr",
};

Flagship2d20.SKILLS = [
  {
    'label': 'ACADEMIA',
    'key': "Academia",
    'focuses': ['Art', 'Cryptography', 'Finance', 'History', 'Linguistics', 'Occultism', 'Science']
  },
  {
    'label': 'ATHLETICS',
    'key': "Athletics",
    'focuses': ['Climbing', 'Lifting', 'Physical Training', 'Running', 'Swimming', 'Throwing']
  },
  {
    'label': 'ENGINEERING',
    'key': "Engineering",
    'focuses': ['Architecture', 'Combat Engineering', 'Electronics', 'Explosives', 'Mechanical Engineering']
  },
  {
    'label': 'FIGHTING',
    'key': "Fighting",
    'focuses': ['Close Quarters', 'Handguns', 'Hand-to-Hand', 'Heavy Weapons', 'Melee Weapons', 'Rifles',
      'Threat Awareness', 'Exotic']
  },
  {
    'label': 'MEDICINE',
    'key': "Medicine",
    'focuses': ['First Aid', 'Infectious Diseases', 'Pharmacology', 'Psychiatry', 'Surgery', 'Toxicology']
  },
  {
    'label': 'OBSERVATION',
    'key': "Observation",
    'focuses': ['Hearing', 'Instincts', 'Sight', 'Smell and Taste']
  },
  {
    'label': 'PERSUASION',
    'key': "Persuasion",
    'focuses': ['Charm', 'Innuendo', 'Intimidation', 'Negotiation', 'Rhetoric', 'Deceive', 'Invocation']
  },
  {
    'label': 'RESILIENCE',
    'key': "Resilience",
    'focuses': ['Fortitude', 'Discipline', 'Immunity']
  },
  {
    'label': 'STEALTH',
    'key': "Stealth",
    'focuses': ['Camouflage', 'Disguise', 'Rural Stealth', 'Urban Stealth']
  },
  {
    'label': 'SURVIVAL',
    'key': "Survival",
    'focuses': ['Animal Handling', 'Foraging', 'Hunting', 'Mysticism', 'Orienteering', 'Tracking']
  },
  {
    'label': 'TACTICS',
    'key': "Tactics",
    'focuses': ['Air Force', 'Army', 'Covert Operations', 'Leadership', 'Navy', 'Technical Projects']
  },
  {
    'label': 'VEHICLES',
    'key': "Vehicles",
    'focuses': ['Cars', 'Motorcycles', 'Heavy Vehicles', 'Tanks', 'Aircraft', 'Watercraft']
  }
];

Flagship2d20.Size = ["Trivial", "Minor", "Major"];

Flagship2d20.WEAPONS = {
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

Flagship2d20.spellcastingTypes = {
  "traditional":"traditional",
  "researcher":"researcher",
  "dabbler":"dabbler"
}



