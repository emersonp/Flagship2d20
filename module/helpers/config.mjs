export const Flagship2d20 = {};

Flagship2d20.attributes = {
  "agi": "Flagship2d20.AbilityAgi",
  "bra": "Flagship2d20.AbilityBra",
  "coo": "Flagship2d20.AbilityCoo",
  "ins": "Flagship2d20.AbilityIns",
  "rea": "Flagship2d20.AbilityRea",
  "wil": "Flagship2d20.AbilityWil",
};

Flagship2d20.abilityAbbreviations = {
  "agi": "Flagship2d20.AbilityAgiAbr",
  "bra": "Flagship2d20.AbilityBraAbr",
  "coo": "Flagship2d20.AbilityCooAbr",
  "ins": "Flagship2d20.AbilityInsAbr",
  "rea": "Flagship2d20.AbilityReaAbr",
  "wil": "Flagship2d20.AbilityWilAbr",
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
      'bonusAttribute': 'agi'
    },
    {
      'label': "Ranged",
      'bonusAttribute': 'coo'
    },
    {
      'label': "Mental",
      'bonusAttribute': 'wil'
    }
  ]
}

Flagship2d20.spellcastingTypes = {
  "traditional":"traditional",
  "researcher":"researcher",
  "dabbler":"dabbler"
}



