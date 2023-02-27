// Each color combination in Magic has a name, and its constituent colors *always appear in the same order*.
// For this reason, we store color identities as the name, then use this constant to get the colors in their correct order.
// (For SDH, we only need to consider color combinations up to three colors.
export const colorsForName = {
  // First, colorless
  "Colorless": "c",
  // Then, monocolors
  "White": "W",
  "Blue": "U",
  "Black": "B",
  "Red": "R",
  "Green": "G",
  // Then, ally pairs
  "Azorius": "WU",
  "Dimir": "UB",
  "Rakdos": "BR",
  "Gruul": "RG",
  "Selesnya": "GW",
  // Then, enemy pairs
  "Orzhov": "WB",
  "Golgari": "BG",
  "Simic": "GU",
  "Izzet": "UR",
  "Boros": "RW",
  // Then, Shards
  "Bant": "GWU",
  "Esper": "WUB",
  "Grixis": "UBR",
  "Jund": "BRG",
  "Naya": "RGW",
  // Finally, Wedges
  "Abzan": "WBG",
  "Jeskai": "URW",
  "Sultai": "BGU",
  "Mardu": "RWB",
  "Temur": "GUR"
};

export const getColorsForName = (name) => {
  return colorsForName[name];
};
