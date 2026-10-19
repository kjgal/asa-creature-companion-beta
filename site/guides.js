// Original short factual summaries. No external guide prose or calculator data imported.
// Basic method and food facts checked against the linked community references on 2026-09-30.
// No quantities, times, trap guarantees, variant or event-specific mechanics are claimed.
const tamingGuides = {
  Rex: {
    method: 'knockout',
    overview: 'Rex uses a knockout tame. Raise its torpor until it is unconscious, then put taming food in its inventory and allow it to eat. Keep an eye on torpor while the tame progresses.',
    food: 'Exceptional Kibble is the preferred kibble for a Rex. This build does not yet calculate how many pieces your level and rate require.',
    preparation: 'Plan a safe position for the knockout, bring a torpor weapon and taming food, and have a way to maintain torpor. Protect the unconscious Rex while you monitor the tame.',
    steps: ['Prepare a safe knockout position and supplies', 'Knock out the Rex and place taming food in its inventory', 'Monitor torpor and protect the unconscious creature', 'Confirm the tame has completed in game'],
    sources: [['ARK Official Community Wiki: Rex', 'https://ark.wiki.gg/wiki/Rex'], ['Preferred kibble reference', 'https://ark.wiki.gg/wiki/Exceptional_Kibble'], ['Knockout method reference', 'https://ark.wiki.gg/wiki/Taming']]
  },
  Otter: {
    method: 'passive',
    overview: 'Otter uses a passive corpse-feeding tame. Kill a fish, drag the unharvested body to the Otter, and use its feed interaction while holding the body. Repeat with fresh fish until the tame finishes.',
    food: 'Bring whole dead fish for the taming interaction. Larger fish can contribute more progress, so there is no single reliable fish count without knowing the fish you use. Loose fish meat is not the corpse-feeding interaction.',
    preparation: 'Locate the Otter and nearby fish first. Keep the fish body intact so you can drag it. Get close enough for the Otter’s feed prompt, and keep the surrounding area safe while you collect more fish.',
    steps: ['Locate the Otter and nearby fish', 'Kill a fish and keep its body intact', 'Drag the body to the Otter and use the feed prompt', 'Repeat with fresh fish and check progress in game'],
    sources: [['ARK Official Community Wiki: Otter', 'https://ark.wiki.gg/wiki/Otter'], ['Fish-corpse reference', 'https://ark.wiki.gg/wiki/Dead_Fish']]
  },
  Jerboa: {
    method: 'knockout',
    overview: 'Jerboa uses a knockout tame. Carefully knock it unconscious, place suitable taming food in its inventory, and monitor its torpor as it eats. Its small torpor reserve makes watching for wake-up especially useful.',
    food: 'Plant Species Y Seeds are its preferred taming food. Mejoberries are another option. Quantities and time estimates are still being verified for ASA.',
    preparation: 'Bring your taming food and torpor supplies. Take care with the knockout so you do not kill this small creature. In ASA, do not assume the old level-1-only rule applies when planning your tame.',
    steps: ['Bring taming food and torpor supplies', 'Carefully knock out the Jerboa', 'Place taming food in its inventory', 'Watch torpor and confirm completion in game'],
    sources: [['ARK Official Community Wiki: Jerboa', 'https://ark.wiki.gg/wiki/Jerboa']]
  }
};

// New original summaries from separately reviewed species references.
Object.assign(tamingGuides, {
  "Ankylosaurus": {
    "method": "knockout",
    "overview": "Ankylosaurus is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Regular Kibble is its preferred kibble. Alternatives include crops. Quantities and times are not calculated in this build.",
    "preparation": "Bring a torpor weapon, food and supplies to maintain torpor.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Ankylosaurus without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Ankylosaurus",
        "https://ark.wiki.gg/wiki/Ankylosaurus"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Argentavis": {
    "method": "knockout",
    "overview": "Argentavis is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Superior Kibble is its preferred kibble. Alternatives include raw mutton or raw prime meat. Quantities and times are not calculated in this build.",
    "preparation": "Plan how to keep this flyer within reach during the knockout, and protect it after it lands.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Argentavis without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Argentavis",
        "https://ark.wiki.gg/wiki/Argentavis"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Triceratops": {
    "method": "knockout",
    "overview": "Triceratops is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Simple Kibble is its preferred kibble. Alternatives include crops. Quantities and times are not calculated in this build.",
    "preparation": "Aim at the body rather than its protected head and keep clear of its charge.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Triceratops without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Triceratops",
        "https://ark.wiki.gg/wiki/Triceratops"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Pteranodon": {
    "method": "knockout",
    "overview": "Pteranodon is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Regular Kibble is its preferred kibble. Alternatives include raw mutton or raw prime meat. Quantities and times are not calculated in this build.",
    "preparation": "Prepare to restrain it while it is on the ground; watch its health during the knockout.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Pteranodon without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Pteranodon",
        "https://ark.wiki.gg/wiki/Pteranodon"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Doedicurus": {
    "method": "knockout",
    "overview": "Doedicurus is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Regular Kibble is its preferred kibble. Alternatives include crops or Mejoberries. Quantities and times are not calculated in this build.",
    "preparation": "Bring food and torpor supplies. Avoid assuming a curled-up animal is already unconscious.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Doedicurus without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Doedicurus",
        "https://ark.wiki.gg/wiki/Doedicurus"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Therizinosaurus": {
    "method": "knockout",
    "overview": "Therizinosaurus is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Exceptional Kibble is its preferred kibble. Alternatives include crops. Quantities and times are not calculated in this build.",
    "preparation": "Keep a safe distance during the knockout and monitor torpor closely throughout the tame.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Therizinosaurus without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Therizinosaur",
        "https://ark.wiki.gg/wiki/Therizinosaur"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Baryonyx": {
    "method": "knockout",
    "overview": "Baryonyx is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Regular Kibble is its preferred kibble. Alternatives include raw prime fish meat. Quantities and times are not calculated in this build.",
    "preparation": "Prepare the knockout away from dangerous water and bring fish-based food if you are not using kibble.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Baryonyx without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Baryonyx",
        "https://ark.wiki.gg/wiki/Baryonyx"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Parasaur": {
    "method": "knockout",
    "overview": "Parasaur is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Basic Kibble is its preferred kibble. Alternatives include crops or Mejoberries. Quantities and times are not calculated in this build.",
    "preparation": "A bola can restrain it while you knock it out. Stop attacking once it is unconscious.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Parasaur without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Parasaur",
        "https://ark.wiki.gg/wiki/Parasaur"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Raptor": {
    "method": "knockout",
    "overview": "Raptor is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Simple Kibble is its preferred kibble. Alternatives include raw mutton or raw prime meat. Quantities and times are not calculated in this build.",
    "preparation": "Separate it from its pack if possible. A bola can hold it while you apply torpor.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Raptor without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Raptor",
        "https://ark.wiki.gg/wiki/Raptor"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Castoroides": {
    "method": "knockout",
    "overview": "Castoroides is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Superior Kibble is its preferred kibble. Alternatives include crops. Quantities and times are not calculated in this build.",
    "preparation": "Keep torpor supplies ready and monitor it closely; its torpor falls quickly.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Castoroides without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Castoroides",
        "https://ark.wiki.gg/wiki/Castoroides"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Stegosaurus": {
    "method": "knockout",
    "overview": "Stegosaurus is a knockout tame. Make it unconscious with torpor, put taming food in its inventory, then monitor it until the tame completes. Stop damaging it after the knockout.",
    "food": "Regular Kibble is its preferred kibble. Alternatives include crops. Quantities and times are not calculated in this build.",
    "preparation": "Bring a torpor weapon and food, and give its tail plenty of space during the knockout.",
    "steps": [
      "Prepare food, a torpor weapon and a safe position",
      "Knock out the Stegosaurus without killing it",
      "Add taming food and maintain torpor as needed",
      "Protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Stegosaurus",
        "https://ark.wiki.gg/wiki/Stegosaurus"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Ichthyosaurus": {
    "method": "passive",
    "overview": "Ichthyosaurus uses hand-feeding, not a knockout. Put suitable food in the final hotbar slot, approach for the feed prompt, and repeat when it is ready to eat again.",
    "food": "Simple Kibble; raw mutton and raw prime meat are alternatives.",
    "preparation": "Check nearby sea predators and keep track of it if it swims away.",
    "steps": [
      "Put taming food in the final hotbar slot",
      "Approach and use the feed interaction",
      "Wait for the next feeding prompt",
      "Repeat until the tame completes"
    ],
    "sources": [
      [
        "ARK Community Wiki: Ichthyosaurus",
        "https://ark.wiki.gg/wiki/Ichthyosaurus"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Lystrosaurus": {
    "method": "passive",
    "overview": "Lystrosaurus uses hand-feeding, not a knockout. Put suitable food in the final hotbar slot, approach for the feed prompt, and repeat when it is ready to eat again.",
    "food": "Rare Flowers are preferred; Mejoberries are an alternative.",
    "preparation": "Keep nearby predators away and wait for the next feeding prompt.",
    "steps": [
      "Put taming food in the final hotbar slot",
      "Approach and use the feed interaction",
      "Wait for the next feeding prompt",
      "Repeat until the tame completes"
    ],
    "sources": [
      [
        "ARK Community Wiki: Lystrosaurus",
        "https://ark.wiki.gg/wiki/Lystrosaurus"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Armadoggo": {
    "method": "special",
    "overview": "Drop taming food on the ground near the Armadoggo. Let it find and eat the food, then pet it promptly before it burrows away. Follow it and repeat until tamed.",
    "food": "Regular Kibble is preferred. This is a dropped-food interaction followed by petting, rather than ordinary hotbar feeding.",
    "preparation": "Bring food and keep enough space to follow it when it burrows and reappears. Be ready for the pet interaction as soon as it finishes eating.",
    "steps": [
      "Drop taming food nearby",
      "Wait while it finds and eats the food",
      "Pet it before it burrows away",
      "Follow and repeat until tamed"
    ],
    "sources": [
      [
        "ARK Community Wiki: Armadoggo",
        "https://ark.wiki.gg/wiki/Armadoggo"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Veilwyn": {
    "method": "special",
    "overview": "Crouch and approach from behind without being noticed. Use the claim interaction when you are close enough. Being spotted can cause it to create clones.",
    "food": "The initial claim interaction does not use a normal kibble-feeding sequence. Its later evolution is a separate process.",
    "preparation": "Approach quietly from behind. If several clones appear, leave the immediate area and try again after they disappear; a large group can turn aggressive.",
    "steps": [
      "Find a Veilwyn",
      "Crouch and approach from behind",
      "Use the claim prompt",
      "If detected, withdraw and try again after clones disappear"
    ],
    "sources": [
      [
        "ARK Community Wiki: Veilwyn",
        "https://ark.wiki.gg/wiki/Veilwyn"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Concavenator": {
    "method": "special",
    "overview": "Find a buried Concavenator in desert dunes. An explosion nearby forces it out and stuns it. Mount during the stun, jump when riding, and match the displayed direction sequence. Repeat the stun-and-ride stages after it throws you off.",
    "food": "This tame progresses through the riding minigame rather than a standard inventory-food tame.",
    "preparation": "Bring explosives such as C4 or rockets, clear the area and watch the on-screen controls. Direction prompts require the matching movement input to be pressed twice.",
    "steps": [
      "Locate a buried creature in the dunes",
      "Use a nearby explosion to expose and stun it",
      "Mount quickly, jump and match the direction prompts",
      "Repeat after dismounts until the taming bar is full"
    ],
    "sources": [
      [
        "ARK Community Wiki: Concavenator",
        "https://ark.wiki.gg/wiki/Concavenator"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  },
  "Helicoprion": {
    "method": "special",
    "overview": "Drop looted equipment near it, then mount after it takes the item. Complete the displayed riding prompts. The final dismount interaction feeds Little Ratfish Treats; repeat the equipment, riding and feeding stages after it recovers.",
    "food": "Bring Little Ratfish Treats and looted equipment. Player-crafted equipment does not start this interaction.",
    "preparation": "Prepare for underwater travel and keep other tames away from its thrashing. Failed riding inputs can throw you off and provoke an attack.",
    "steps": [
      "Drop looted equipment nearby",
      "Mount and follow the displayed inputs",
      "Use the final dismount/feeding prompt with Ratfish Treats",
      "Wait for recovery, then repeat until tamed"
    ],
    "sources": [
      [
        "ARK Community Wiki: Helicoprion",
        "https://ark.wiki.gg/wiki/Helicoprion"
      ]
    ],
    "checked": "2026-09-30",
    "scope": "Basic method and food; calculations pending"
  }
});

// Original species summaries reviewed October 9, 2026.
Object.assign(tamingGuides, {
  "Thylacoleo": {
    method: "knockout",
    overview: "Thylacoleo uses a knockout tame. Apply torpor until it is unconscious, then let it eat from its inventory while protected.",
    food: "Extraordinary Kibble is preferred; Cooked Lamb Chop is another documented food. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "Bring a torpor weapon, food and a secure ground trap or safe shooting position. Check redwood trunks and nearby threats before approaching.",
    steps: ["Choose a clear ground area and prepare food", "Lure or contain it, then apply torpor", "Stop attacking once it falls unconscious", "Add food, protect it and confirm completion in game"],
    specialAction: "Wild Thylacoleos can wait on redwood trunks and pounce. Bring the target to controlled ground before committing to the knockout.",
    tips: "Wild Thylacoleos can wait on redwood trunks and pounce. Bring the target to controlled ground before committing to the knockout.",
    sources: [["ARK Community Wiki: Thylacoleo","https://ark.wiki.gg/wiki/Thylacoleo"],["Extraordinary Kibble","https://ark.wiki.gg/wiki/Extraordinary_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Base-species knockout method, preferred kibble and food reviewed; current species material includes ASA-specific body-multiplier information. Redwood and badlands habitat examples were compared with Biomes.",
      comparisonLimitations: "Exhaustive ASA map and variant comparison, revision history, exact pounce behavior and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Woolly Rhino": {
    method: "knockout",
    overview: "Woolly Rhino uses a knockout tame. Apply torpor until it is unconscious, then let it eat from its inventory while protected.",
    food: "Superior Kibble or crops are documented foods. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "Prepare food, torpor supplies and a sturdy trap or safe raised firing position. Clear other rhinos and predators from the area.",
    steps: ["Prepare a secure trap or safe shooting position", "Lure and contain the rhino", "Apply torpor and stop attacking when it drops", "Add food, protect it and confirm completion in game"],
    specialAction: "Avoid standing in its charge path. Containment keeps its acceleration from turning the knockout into a chase.",
    tips: "Avoid standing in its charge path. Containment keeps its acceleration from turning the knockout into a chase.",
    sources: [["ARK Community Wiki: Woolly Rhino","https://ark.wiki.gg/wiki/Woolly_Rhino"],["Superior Kibble","https://ark.wiki.gg/wiki/Superior_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Knockout classification, preferred kibble, crops and trap strategy reviewed; the species page includes ASA body-multiplier information. Snow habitat was corroborated by Biomes and Spawn entries.",
      comparisonLimitations: "Exhaustive ASA map and variant comparison, trap dimensions and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Thorny Dragon": {
    method: "knockout",
    overview: "Thorny Dragon uses a knockout tame. Apply torpor until it is unconscious, then let it eat from its inventory while protected.",
    food: "Regular Kibble or Raw Mutton are documented foods. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "Bring food, a torpor weapon and a safe rock or trap. Be ready to dodge its ranged thorn attack and pursue if it flees.",
    steps: ["Prepare food and a safe firing position", "Contain it or keep cover between attacks", "Apply torpor until unconscious, then stop attacking", "Add food, protect it and confirm completion in game"],
    specialAction: "Use cover or change position when it fires thorns. Keep the final knockout away from cliffs and other desert threats.",
    tips: "Use cover or change position when it fires thorns. Keep the final knockout away from cliffs and other desert threats.",
    sources: [["ARK Community Wiki: Thorny Dragon","https://ark.wiki.gg/wiki/Thorny_Dragon"],["Regular Kibble","https://ark.wiki.gg/wiki/Regular_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Knockout method, foods and ranged-attack strategy reviewed. Desert, arid mountain and badlands examples were compared with Biomes and Spawn entries; legacy numerical tables were excluded.",
      comparisonLimitations: "Exhaustive ASA map and variant comparison and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Megalodon": {
    method: "knockout",
    overview: "Megalodon uses an underwater knockout tame. Apply torpor while it remains submerged, then let it eat from its inventory while protected.",
    food: "Superior Kibble, Raw Mutton and Raw Prime Meat are documented foods. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "Bring an underwater-capable mount or a safe shoreline position, torpor supplies, food and protection from other sea creatures.",
    steps: ["Clear nearby water and prepare food", "Lure the target into manageable submerged water", "Apply torpor and stop attacking when it drops", "Add food, guard the area and confirm completion in game"],
    specialAction: "Shallow water can make torpor shots easier, but keep the Megalodon submerged and watch for additional predators.",
    tips: "Shallow water can make torpor shots easier, but keep the Megalodon submerged and watch for additional predators.",
    sources: [["ARK Community Wiki: Megalodon","https://ark.wiki.gg/wiki/Megalodon"],["Superior Kibble","https://ark.wiki.gg/wiki/Superior_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; Astral, X, event, cave and mod variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Base-species knockout, current foods, shallow-water strategy and ASA body-multiplier section reviewed. Variant and numerical combat information was excluded.",
      comparisonLimitations: "Exhaustive ASA map, depth and variant comparison and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Snow Owl": {
    method: "knockout",
    overview: "Snow Owl uses a knockout tame. Apply torpor until it is unconscious, then let it eat from its inventory while protected.",
    food: "Superior Kibble or Raw Mutton are documented foods. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "Prepare a flyer trap or other enclosure, taming food and a torpor weapon. Check its health if it has recently fought wild creatures.",
    steps: ["Prepare food and a secure flyer trap", "Lure or contain the owl", "Apply torpor carefully and stop when it drops", "Add food, protect it and confirm completion in game"],
    specialAction: "A trap helps prevent escape. The species reference warns that its health can be low after combat, so avoid unnecessary damage while applying torpor.",
    tips: "A trap helps prevent escape. The species reference warns that its health can be low after combat, so avoid unnecessary damage while applying torpor.",
    sources: [["ARK Community Wiki: Snow Owl","https://ark.wiki.gg/wiki/Snow_Owl"],["Superior Kibble","https://ark.wiki.gg/wiki/Superior_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; R, event and mod variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Knockout method, foods, trap strategy and low-health warning reviewed. Snow Dome habitat was corroborated by Biomes and Spawn entries; legacy numerical counts were excluded.",
      comparisonLimitations: "Exhaustive ASA map and variant comparison and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Managarmr": {
    method: "knockout",
    overview: "Managarmr uses a knockout tame. Contain it before applying torpor, then let it eat from its inventory while protected.",
    food: "Exceptional Kibble or Raw Mutton are documented foods. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "Bring a large-creature restraint or trap, food, torpor supplies and cold-weather protection appropriate to the map.",
    steps: ["Prepare food and a secure containment area", "Wait for a controlled landing or restrain the target", "Apply torpor and stop attacking when it drops", "Add food, protect it and confirm completion in game"],
    specialAction: "Its rapid jumps make an open-field knockout unreliable. Contain or restrain it before spending torpor ammunition.",
    tips: "Its rapid jumps make an open-field knockout unreliable. Contain or restrain it before spending torpor ammunition.",
    sources: [["ARK Community Wiki: Managarmr","https://ark.wiki.gg/wiki/Managarmr"],["Exceptional Kibble","https://ark.wiki.gg/wiki/Exceptional_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; mission, event and mod variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Base-species knockout, foods and restraint options reviewed. Snow-region habitat was corroborated by Biomes and Spawn entries. A search result containing competitor text was deliberately excluded.",
      comparisonLimitations: "Exhaustive ASA map and variant comparison, preferred trap design and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Quetzal": {
    method: "knockout",
    overview: "Quetzal uses a knockout tame, but a wild one remains airborne. Apply torpor while following it, then let it eat after it lands unconscious.",
    food: "Exceptional Kibble, Raw Mutton and Raw Prime Meat are documented foods. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    preparation: "If you have access to a Griffin, bring it with a torpor weapon, taming food and supplies for a moving target. Plan a safe landing area and enough stamina to keep following the Quetzal.",
    steps: ["Prepare taming food and a Griffin if one is available", "Follow the Quetzal toward a route away from deep water and major hazards", "Fire your torpor weapon from the Griffin while pursuing the Quetzal", "Secure the landing area, add food and confirm completion in game"],
    specialAction: "A documented solo method is to pursue the Quetzal on a Griffin and fire a torpor weapon while mounted. Use this approach where Griffins are available, and do not knock it unconscious over water. Suggested alternative: players report dropping Giant Bee Honey ahead of a Quetzal to draw it toward the ground, then trapping it with dinosaur gates before applying torpor. Honey luring and the trap setup still need confirmation on current ASA official PvE servers.",
    tips: "A documented solo method is to pursue the Quetzal on a Griffin and fire a torpor weapon while mounted. Use this approach where Griffins are available, and do not knock it unconscious over water. Suggested alternative: players report dropping Giant Bee Honey ahead of a Quetzal to draw it toward the ground, then trapping it with dinosaur gates before applying torpor. Honey luring and the trap setup still need confirmation on current ASA official PvE servers.",
    sources: [["ARK Community Wiki: Quetzal","https://ark.wiki.gg/wiki/Quetzal"],["ARK Community Wiki: Griffin","https://ark.wiki.gg/wiki/Griffin"],["ASA player report: honey lure","https://www.reddit.com/r/ARK/comments/18dirvi"],["Exceptional Kibble","https://ark.wiki.gg/wiki/Exceptional_Kibble"],["Biomes","https://ark.wiki.gg/wiki/Biomes"],["Spawn entries","https://ark.wiki.gg/wiki/Spawn_entries"]],
    checked: "2026-10-09",
    scope: "ASA base species on official PvE; Tek, R, mission, event and mod variants excluded. Numerical requirements and unverified mechanics pending.",
    provenance: {
      access: "Search-indexed individual species and habitat passages reviewed; full direct article access was unavailable for page-wide comparison.",
      asa: "Base-species knockout classification, foods, continuous flight and over-water warning reviewed. Wiki documents Griffin mounted weapon pursuit; Griffin exists in ASA. Honey lure is an ASA player-reported suggestion, not independently verified current official PvE behavior. No claim that either method is the most common.",
      comparisonLimitations: "Exact official-PvE solo loadouts, exhaustive ASA map and variant comparison and numerical requirements remain pending. No source prose, competitor data, artwork or calculator code imported."
    }
  }
});

// Original base-species summaries reviewed 2026-10-05; see audit for source-access limits.
Object.assign(tamingGuides, {
  "Dunkleosteus": {
    "method": "knockout",
    "overview": "Dunkleosteus uses a knockout tame. Apply torpor underwater, then place taming food in its inventory and protect it while it eats.",
    "food": "Superior Kibble is its preferred kibble. Numerical quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring underwater breathing support, a suitable torpor weapon and a safe way to manage nearby ocean threats. Plan the knockout where you can continue monitoring it.",
    "steps": ["Prepare underwater gear, taming food and a torpor weapon", "Clear nearby threats and apply torpor", "Add food after the Dunkleosteus is unconscious", "Monitor torpor and protect it until completion"],
    "specialAction": "This is an underwater knockout tame; do not leave the unconscious creature unprotected on the ocean floor.",
    "sources": [["ARK Community Wiki: Dunkleosteus", "https://ark.wiki.gg/wiki/Dunkleosteus"], ["ARK Community Wiki: Superior Kibble", "https://ark.wiki.gg/wiki/Superior_Kibble"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Species page fetch was blocked; indexed species and kibble passages were reviewed individually.","asa":"Base knockout method and preferred kibble reviewed; legacy numerical tables excluded.","comparisonLimitations":"Full article, revision history, contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  },
  "Electrophorus": {
    "method": "passive",
    "overview": "Electrophorus is a passive tame despite its aggression. Wait for its electrical discharge, then feed during the recharge opening and retreat to safety.",
    "food": "Bio Toxin is its preferred food. Other foods and all numerical requirements remain pending independent ASA checks.",
    "preparation": "Clear nearby water threats and bring Bio Toxin. A Basilosaurus provides a shock-immune mount for creating the feeding opening; plan a quick dismount, feed and remount.",
    "steps": [
      "Prepare Bio Toxin and clear nearby threats",
      "Stay mounted on a Basilosaurus while the eel discharges its electrical attack",
      "Dismount and feed during the recharge opening when the feed prompt is available",
      "Remount and repeat after another discharge until completion"
    ],
    "specialAction": "Time each feeding for the recharge after its electrical attack. Watch for the feed prompt before approaching; do not knock it out.",
    "sources": [
      [
        "ARK Community Wiki: Electrophorus",
        "https://ark.wiki.gg/wiki/Electrophorus"
      ],
      [
        "ARK Community Wiki: Bio Toxin",
        "https://ark.wiki.gg/wiki/Bio_Toxin"
      ]
    ],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed indexed species passages.",
      "asa": "Indexed species strategy supports feeding after electrical discharge while recharging, using Basilosaurus protection. The stronger claim that fleeing/recharging is the only mechanically valid state remains unverified.",
      "comparisonLimitations": "Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported.",
      "userNotes": "User supplied reference notes on 2026-10-05; these were not described as firsthand gameplay testing. Incorporated core interaction tips; unresolved specifics retained in the follow-up audit."
    },
    "tips": "Time each feeding for the recharge after its electrical attack. Watch for the feed prompt before approaching; do not knock it out."
  },
  "Giganotosaurus": {
    "method": "knockout",
    "overview": "Giganotosaurus uses a knockout tame. Raise its torpor until it is unconscious, then add taming food and continue maintaining torpor while it eats.",
    "food": "Exceptional Kibble is its preferred kibble. Raw Mutton and Raw Prime Meat are documented alternatives. Quantities and times remain pending independent ASA checks.",
    "preparation": "Plan secure containment and a safe firing position before engaging. Bring substantial torpor supplies and enough food; this creature can wake quickly if it is not monitored.",
    "steps": ["Prepare containment, food and substantial torpor supplies", "Apply torpor from a protected position", "Add food after the Giganotosaurus is unconscious", "Maintain torpor and protect it until completion"],
    "specialAction": "Its torpor can fall rapidly. Treat monitoring and torpor maintenance as essential rather than leaving the tame unattended.",
    "sources": [["ARK Community Wiki: Giganotosaurus", "https://ark.wiki.gg/wiki/Giganotosaurus"], ["ARK Community Wiki: Exceptional Kibble", "https://ark.wiki.gg/wiki/Exceptional_Kibble"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Individually reviewed indexed species and kibble passages.","asa":"Base knockout classification and foods reviewed; mission, mod and special variants excluded.","comparisonLimitations":"Full article comparison, revision/contributor history, TLC changes and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  },
  "Gigantopithecus": {
    "method": "passive",
    "overview": "Gigantopithecus is a passive tame. Keep it conscious, place taming food in the last hotbar slot and feed from behind without bumping into it.",
    "food": "Regular Kibble is its preferred kibble. Alternative foods and numerical requirements remain pending independent ASA checks.",
    "preparation": "Wear quiet gear if available, clear nearby threats and approach carefully from behind. Leave room to back away after each feeding.",
    "steps": ["Put Regular Kibble in the last hotbar slot", "Approach the conscious creature carefully from behind", "Feed when the prompt appears without touching it", "Back away and repeat when prompted"],
    "specialAction": "Contact can make it aggressive. Do not crowd or collide with it during the passive feeding sequence.",
    "sources": [["ARK Community Wiki: Gigantopithecus", "https://ark.wiki.gg/wiki/Gigantopithecus"], ["ARK Community Wiki: Regular Kibble", "https://ark.wiki.gg/wiki/Regular_Kibble"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Species page fetch was blocked; indexed species and kibble passages were reviewed individually.","asa":"Base passive method and preferred kibble reviewed; exact feed intervals excluded.","comparisonLimitations":"Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  },
  "Hesperornis": {
    "method": "passive",
    "overview": "Hesperornis uses a passive corpse-feeding tame. Kill a fish, drag the intact body to the bird and use its feed interaction while holding the fish.",
    "food": "Use whole dead fish for the taming interaction. Fish species and size affect progress, so quantities are not estimated here.",
    "preparation": "Find the Hesperornis and nearby fish first. Keep each fish body unharvested and consider containing the bird so it does not wander while you collect another fish.",
    "steps": ["Locate the Hesperornis and nearby fish", "Kill a fish and keep the body intact", "Drag the fish to the bird and use the feed prompt", "Repeat with fresh fish until completion"],
    "specialAction": "Loose fish meat is not the interaction. Drag an intact fish body to the conscious Hesperornis and feed it through the prompt.",
    "sources": [["ARK Community Wiki: Hesperornis", "https://ark.wiki.gg/wiki/Hesperornis"], ["ARK Community Wiki: Dead Fish", "https://ark.wiki.gg/wiki/Dead_Fish"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Individually reviewed indexed species and dead-fish passages.","asa":"Corpse-feeding method reviewed; legacy percentage claims and platform-specific controls excluded.","comparisonLimitations":"Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  },
  "Hyaenodon": {
    "method": "passive",
    "overview": "Hyaenodon is a passive tame that uses petting rather than food. Separate the target from its pack leader, crouch close enough for the pet prompt and repeat without frightening it.",
    "food": "No taming food is used. Progress comes from petting the conscious Hyaenodon when the interaction is available.",
    "preparation": "Separate the target from its pack leader and reduce your visibility with ghillie clothing or Cactus Broth if available. Crouch carefully and avoid frightening it.",
    "steps": [
      "Separate the target from its pack leader",
      "Crouch and approach without alarming it",
      "Pet promptly whenever the interaction returns, usually around every 30 seconds",
      "Stay hidden and keep responding to pet prompts until completion"
    ],
    "specialAction": "Keep it calm and respond promptly to each petting prompt. Frightening it or missing petting opportunities can cost substantial progress, potentially the whole tame. Watch the bar and do not rely on a fixed percentage penalty.",
    "sources": [
      [
        "ARK Community Wiki: Hyaenodon",
        "https://ark.wiki.gg/wiki/Hyaenodon"
      ],
      [
        "ARK Community Wiki: Taming",
        "https://ark.wiki.gg/wiki/Taming"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed indexed species and taming passages.",
      "asa": "Passive petting method reviewed; exact intervals and decay rates excluded.",
      "comparisonLimitations": "Indexed wiki supports petting, substantial fright-related progress loss and rapid loss after missed prompts. Exact spooked-state continuous decay/reset and reliable 1x1 pen concealment remain unverified for current ASA. No flat percentage or effectiveness-decay rate asserted.",
      "userNotes": "Reference notes revised on 2026-10-06: earlier flat 30% penalty withdrawn in favor of rapid continuing loss. Small 1x1 doorframe/window pen retained as an anonymous suggested method, not guaranteed concealment or firsthand official PvE testing."
    },
    "tips": "Keep it calm and respond promptly to each petting prompt. Frightening it or missing petting opportunities can cost substantial progress, potentially the whole tame. Watch the bar and do not rely on a fixed percentage penalty.\n\nSuggested method: use a small pen with doorframes or window openings so you can crouch outside and reach the pet prompt. A 1×1 pen is a reported option, but wall openings do not guarantee it cannot see you. Check its reaction and move out of sight if it becomes alarmed; keep wild attackers away. Reports describe rapid continuing progress loss while spooked, but the exact current ASA decay and reset mechanics remain unconfirmed."
  },
  "Ichthyornis": {
    "method": "knockout",
    "overview": "Ichthyornis uses a knockout tame. Bring the flying bird down, apply torpor carefully, then place taming food in its inventory.",
    "food": "Regular Kibble is its preferred kibble. Raw Prime Fish Meat is a documented alternative. Quantities and times remain pending independent ASA checks.",
    "preparation": "Prepare to stop or ground a small moving flyer and watch its health while applying torpor. Clear nearby predators before it becomes unconscious.",
    "steps": ["Prepare Regular Kibble or fish and a torpor weapon", "Ground or restrain the Ichthyornis", "Knock it out carefully and add food", "Protect it and monitor torpor until completion"],
    "specialAction": "Its small moving target makes the knockout the main challenge; stop dealing damage as soon as it becomes unconscious.",
    "sources": [["ARK Community Wiki: Ichthyornis", "https://ark.wiki.gg/wiki/Ichthyornis"], ["ARK Community Wiki: Regular Kibble", "https://ark.wiki.gg/wiki/Regular_Kibble"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Individually reviewed indexed species and kibble passages.","asa":"Base knockout classification and foods reviewed; old patch-specific harvesting behavior excluded.","comparisonLimitations":"Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  },
  "Kairuku": {
    "method": "knockout",
    "overview": "Kairuku uses a knockout tame. Apply torpor carefully to the small bird, then place taming food in its inventory and keep it safe.",
    "food": "Basic Kibble is its preferred kibble. Alternative foods, quantities and times remain pending independent ASA checks.",
    "preparation": "Bring Basic Kibble and a Longneck Rifle with Shocking Tranquilizer Darts if available, or standard Tranquilizer Darts. Its low health makes damaging torpor weapons risky; prefer darts over arrows and clear nearby predators.",
    "steps": [
      "Prepare Basic Kibble and a Longneck Rifle with tranquilizer darts",
      "Clear nearby threats and aim carefully at the body",
      "Allow torpor to build between shots; stop immediately when it falls unconscious and add food",
      "Protect it and monitor torpor until completion"
    ],
    "specialAction": "Aim for the body and monitor health throughout the knockout. Shocking Tranquilizer Darts provide more torpor for the same base impact damage than standard darts. Weapon quality and the individual bird's health still affect survival; no shot is guaranteed safe.",
    "sources": [
      [
        "ARK Community Wiki: Kairuku",
        "https://ark.wiki.gg/wiki/Kairuku"
      ],
      [
        "ARK Community Wiki: Kairuku Egg",
        "https://ark.wiki.gg/wiki/Kairuku_Egg"
      ],
      [
        "ARK Community Wiki: Weapons",
        "https://ark.wiki.gg/wiki/Weapons"
      ]
    ],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Species page fetch was blocked; indexed base-species and egg/kibble passages were reviewed individually.",
      "asa": "Dart recommendation supported by indexed species passages; weapon reference supports greater torpor per base impact damage for shocking darts. User body-shot caution incorporated without claiming headshots always kill or any method guarantees survival.",
      "comparisonLimitations": "Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported.",
      "userNotes": "User supplied reference notes on 2026-10-05; these were not described as firsthand gameplay testing. Incorporated core interaction tips; unresolved specifics retained in the follow-up audit."
    },
    "tips": "Aim for the body and monitor health throughout the knockout. Shocking Tranquilizer Darts provide more torpor for the same base impact damage than standard darts. Weapon quality and the individual bird's health still affect survival; no shot is guaranteed safe."
  },
  "Kaprosuchus": {
    "method": "knockout",
    "overview": "Kaprosuchus uses a knockout tame. Control its aggressive approach, apply torpor and place taming food in its inventory once it is unconscious.",
    "food": "Regular Kibble is its preferred kibble. Raw Mutton and Raw Prime Meat are documented alternatives. Quantities and times remain pending independent ASA checks.",
    "preparation": "Clear as much of the swamp as possible and choose open ground or a protected position. Watch for additional Kaprosuchus and other predators during the knockout.",
    "steps": ["Prepare food, torpor supplies and a clear position", "Draw the Kaprosuchus away from other threats", "Knock it out and add taming food", "Protect it and monitor torpor until completion"],
    "specialAction": "Its leap can disrupt the setup. Control the approach before applying torpor and keep other swamp creatures away from the unconscious tame.",
    "sources": [["ARK Community Wiki: Kaprosuchus", "https://ark.wiki.gg/wiki/Kaprosuchus"], ["ARK Community Wiki: Regular Kibble", "https://ark.wiki.gg/wiki/Regular_Kibble"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Individually reviewed indexed species and kibble passages.","asa":"Base knockout classification and foods reviewed; legacy numerical tables excluded.","comparisonLimitations":"Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  },
  "Kentrosaurus": {
    "method": "knockout",
    "overview": "Kentrosaurus uses a knockout tame. Apply torpor while avoiding its spikes, then add taming food after it becomes unconscious.",
    "food": "Regular Kibble is its preferred kibble. Crops are documented alternatives. Quantities and times remain pending independent ASA checks.",
    "preparation": "Choose a position that keeps you away from its spiked body and possible herd mates. Bring food, a torpor weapon and supplies to monitor the tame.",
    "steps": ["Prepare Regular Kibble or crops and torpor supplies", "Separate it from nearby threats or herd mates", "Apply torpor from a safe distance", "Add food, protect it and monitor torpor until completion"],
    "specialAction": "Avoid close contact with its spikes during the knockout; use distance and stop attacking once it is unconscious.",
    "sources": [["ARK Community Wiki: Kentrosaurus", "https://ark.wiki.gg/wiki/Kentrosaurus"], ["ARK Community Wiki: Regular Kibble", "https://ark.wiki.gg/wiki/Regular_Kibble"]],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {"access":"Individually reviewed indexed species and kibble passages.","asa":"Base knockout classification, preferred kibble and crop alternative reviewed; legacy numerical tables excluded.","comparisonLimitations":"Full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical table or calculator code imported."}
  }
});

Object.assign(tamingGuides, {
  "Archelon": {
    "method": "passive",
    "overview": "Put Superior Kibble or Bio Toxin in the final hotbar slot and use its feeding prompt. Repeat as it becomes ready to eat. Do not knock it out.",
    "food": "Superior Kibble is preferred; Bio Toxin also works.",
    "preparation": "Clear nearby sea predators and plan a safe route for following it.",
    "steps": [
      "Prepare kibble or Bio Toxin",
      "Put the food in the final hotbar slot",
      "Approach and use the feeding prompt",
      "Repeat when ready until tamed"
    ],
    "checked": "2026-09-30",
    "sources": [
      [
        "ARK Community Wiki: Archelon",
        "https://ark.wiki.gg/wiki/Archelon"
      ]
    ]
  },
  "Deinosuchus": {
    "method": "passive",
    "overview": "Wait until it is basking with its mouth open. Approach carefully and use the food interaction at its mouth, then withdraw and wait for another opportunity.",
    "food": "Superior Kibble is preferred; raw mutton or raw prime meat can also be used.",
    "preparation": "Ghillie helps with approaching, but getting too close can still alert it.",
    "steps": [
      "Find a basking Deinosuchus",
      "Wait for its mouth to open",
      "Approach carefully and feed",
      "Withdraw and repeat at the next opportunity"
    ],
    "checked": "2026-09-30",
    "sources": [
      [
        "ARK Community Wiki: Deinosuchus",
        "https://ark.wiki.gg/wiki/Deinosuchus"
      ]
    ]
  },
  "Xiphactinus": {
    "method": "knockout",
    "overview": "Knock it unconscious, add taming food to its inventory and maintain torpor until it is tamed.",
    "food": "Superior Kibble is preferred; raw mutton and raw prime meat are alternatives.",
    "preparation": "Prepare for an underwater knockout, bring torpor supplies and avoid exposing small mounts to its grab attack.",
    "steps": [
      "Prepare food and underwater torpor supplies",
      "Restrain or safely position the fish",
      "Knock it out and add food",
      "Monitor torpor and protect it until tamed"
    ],
    "checked": "2026-09-30",
    "sources": [
      [
        "ARK Community Wiki: Xiphactinus",
        "https://ark.wiki.gg/wiki/Xiphactinus"
      ]
    ]
  },
  "Gigantoraptor": {
    "method": "special",
    "overview": "Tame the baby at its nest, rather than knocking out the adult. Distract the adult with a fertilized egg and copy the baby\u2019s displayed actions while it is safe to approach.",
    "food": "A fertilized egg distracts the adult; the baby\u2019s interaction sequence earns its trust.",
    "preparation": "Keep both parent and baby alive and remain near the nest.",
    "steps": [
      "Find an occupied nest",
      "Distract the parent with a fertilized egg",
      "Approach and match the baby\u2019s actions",
      "Repeat until the baby can be claimed"
    ],
    "checked": "2026-09-30",
    "sources": [
      [
        "ARK Community Wiki: Gigantoraptor",
        "https://ark.wiki.gg/wiki/Gigantoraptor"
      ],
      [
        "Nest workflow reference",
        "https://ark.wiki.gg/wiki/Taming"
      ]
    ]
  },
  "Moschops": {
    "method": "passive",
    "overview": "Read its current food request and use the feeding interaction with that item. Check the next request before feeding again.",
    "food": "Requests vary. Examples include berries, honey, Organic Polymer, rare flowers or mushrooms, and several meat types. Bring the item actually requested.",
    "preparation": "Prepare varied foods instead of assuming every feed needs the same item.",
    "steps": [
      "Read the food request",
      "Bring that item",
      "Feed when prompted",
      "Check the next request and repeat"
    ],
    "checked": "2026-09-30",
    "sources": [
      [
        "Requested-food reference",
        "https://ark.wiki.gg/wiki/Taming"
      ]
    ]
  }
});
// Anonymous suggested method; retained separately from reference facts.
tamingGuides.Concavenator.playerTip='Suggested method: use a Tek Rifle for the explosive stun stage when you have one available, rather than using rockets. This tip has not been independently tested for this build.';
tamingGuides.Concavenator.preparation+=' '+tamingGuides.Concavenator.playerTip;

// Original base-species summaries reviewed 2026-10-01; numerical tables excluded.
Object.assign(tamingGuides, {
  "Carbonemys": {
    "method": "knockout",
    "overview": "Carbonemys is tamed after a knockout. Apply torpor until it falls unconscious, stop attacking, and place taming food in its inventory. Keep it safe and maintain torpor while it eats.",
    "food": "Regular Kibble is the recommended taming food. Food amounts, duration and effectiveness are still pending independent ASA calculation checks.",
    "preparation": "Use a ranged torpor weapon and keep away from its bite. Aim toward the exposed head rather than the armored shell.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor and stop when the creature is unconscious",
      "Place taming food in its inventory",
      "Watch torpor, protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Carbonemys",
        "https://ark.wiki.gg/wiki/Carbonemys"
      ],
      [
        "Preferred kibble reference",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ]
    ],
    "checked": "2026-10-01",
    "scope": "Basic base-species method, kibble and preparation; special variants, map coverage and calculations pending",
    "specialAction": "No separate minigame is documented for this base-species knockout workflow.",
    "provenance": {
      "access": "Indexed individual species passages; full article fetch blocked",
      "asa": "ASA species sections identify applicability; legacy numerical food tables excluded. No in-game testing performed.",
      "comparisonLimitations": "Original concise factual summary; full article similarity and rights clearance remain unresolved."
    }
  },
  "Dimetrodon": {
    "method": "knockout",
    "overview": "Dimetrodon is tamed after a knockout. Apply torpor until it falls unconscious, stop attacking, and place taming food in its inventory. Keep it safe and maintain torpor while it eats.",
    "food": "Regular Kibble is the recommended taming food. Food amounts, duration and effectiveness are still pending independent ASA calculation checks.",
    "preparation": "Choose torpor equipment carefully: its low health makes a damaging knockout risky. Have torpor supplies ready and watch closely for waking; its torpor drops rapidly. Clear swamp threats without relying on carrying a wild creature.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor and stop when the creature is unconscious",
      "Place taming food in its inventory",
      "Watch torpor, protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Dimetrodon",
        "https://ark.wiki.gg/wiki/Dimetrodon"
      ],
      [
        "Preferred kibble reference",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ]
    ],
    "checked": "2026-10-01",
    "scope": "Basic base-species method, kibble and preparation; special variants, map coverage and calculations pending",
    "specialAction": "No separate minigame is documented for this base-species knockout workflow.",
    "provenance": {
      "access": "Indexed individual species passages; full article fetch blocked",
      "asa": "ASA species sections identify applicability; legacy numerical food tables excluded. No in-game testing performed.",
      "comparisonLimitations": "Original concise factual summary; full article similarity and rights clearance remain unresolved."
    }
  },
  "Carnotaurus": {
    "method": "knockout",
    "overview": "Carnotaurus is tamed after a knockout. Apply torpor until it falls unconscious, stop attacking, and place taming food in its inventory. Keep it safe and maintain torpor while it eats.",
    "food": "Regular Kibble is the recommended taming food. Food amounts, duration and effectiveness are still pending independent ASA calculation checks.",
    "preparation": "Bring ranged torpor equipment, food and torpor supplies. Allow room to retreat, avoid cliff edges, and check for other predators before drawing its attention. Its headbutt can knock you back and cause bleeding.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor and stop when the creature is unconscious",
      "Place taming food in its inventory",
      "Watch torpor, protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Carnotaurus",
        "https://ark.wiki.gg/wiki/Carnotaurus"
      ],
      [
        "Preferred kibble reference",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ]
    ],
    "checked": "2026-10-01",
    "scope": "Basic base-species method, kibble and preparation; special variants, map coverage and calculations pending",
    "specialAction": "No separate minigame is documented for this base-species knockout workflow.",
    "provenance": {
      "access": "Indexed individual species passages; full article fetch blocked",
      "asa": "ASA species sections identify applicability; legacy numerical food tables excluded. No in-game testing performed.",
      "comparisonLimitations": "Original concise factual summary; full article similarity and rights clearance remain unresolved."
    }
  },
  "Sarco": {
    "method": "knockout",
    "overview": "Sarco is tamed after a knockout. Apply torpor until it falls unconscious, stop attacking, and place taming food in its inventory. Keep it safe and maintain torpor while it eats.",
    "food": "Regular Kibble is the recommended taming food. Food amounts, duration and effectiveness are still pending independent ASA calculation checks.",
    "preparation": "Arrange the knockout on land, clear nearby threats and use ranged torpor equipment from a safe position. A fleeing Sarco is much harder to follow through water.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor and stop when the creature is unconscious",
      "Place taming food in its inventory",
      "Watch torpor, protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Sarco",
        "https://ark.wiki.gg/wiki/Sarco"
      ],
      [
        "Preferred kibble reference",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ]
    ],
    "checked": "2026-10-01",
    "scope": "Basic base-species method, kibble and preparation; special variants, map coverage and calculations pending",
    "specialAction": "No separate minigame is documented for this base-species knockout workflow.",
    "provenance": {
      "access": "Indexed individual species passages; full article fetch blocked",
      "asa": "ASA species sections identify applicability; legacy numerical food tables excluded. No in-game testing performed.",
      "comparisonLimitations": "Original concise factual summary; full article similarity and rights clearance remain unresolved."
    }
  },
  "Dimorphodon": {
    "method": "knockout",
    "overview": "Dimorphodon is tamed after a knockout. Apply torpor until it falls unconscious, stop attacking, and place taming food in its inventory. Keep it safe and maintain torpor while it eats.",
    "food": "Simple Kibble is the recommended taming food. Food amounts, duration and effectiveness are still pending independent ASA calculation checks.",
    "preparation": "Bring a bola and torpor equipment, then look for an isolated target. Nearby Dimorphodons may join an attack, and they can hit a rider directly. Keep torpor supplies ready after the knockout.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor and stop when the creature is unconscious",
      "Place taming food in its inventory",
      "Watch torpor, protect it and confirm completion in game"
    ],
    "sources": [
      [
        "ARK Community Wiki: Dimorphodon",
        "https://ark.wiki.gg/wiki/Dimorphodon"
      ],
      [
        "Preferred kibble reference",
        "https://ark.wiki.gg/wiki/Simple_Kibble"
      ]
    ],
    "checked": "2026-10-01",
    "scope": "Basic base-species method, kibble and preparation; special variants, map coverage and calculations pending",
    "specialAction": "No separate minigame is documented for this base-species knockout workflow.",
    "provenance": {
      "access": "Indexed individual species passages; full article fetch blocked",
      "asa": "ASA species sections identify applicability; legacy numerical food tables excluded. No in-game testing performed.",
      "comparisonLimitations": "Original concise factual summary; full article similarity and rights clearance remain unresolved."
    }
  }
});

// Incremental species review, 2026-10-02. Numerical calculations reviewed separately.
Object.assign(tamingGuides,{
  "Achatina": {
    "method": "knockout",
    "overview": "Achatina uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Sweet Vegetable Cake. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Choose a safe spot and use controlled torpor damage; its health can be fragile. Bring cakes and supplies to keep it unconscious.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Achatina",
        "https://ark.wiki.gg/wiki/Achatina"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  },
  "Allosaurus": {
    "method": "knockout",
    "overview": "Allosaurus uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Superior Kibble. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Check for nearby pack members and secure an isolated target before applying torpor. Keep food and torpor supplies ready.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Allosaurus",
        "https://ark.wiki.gg/wiki/Allosaurus"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  },
  "Anglerfish": {
    "method": "knockout",
    "overview": "Anglerfish uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Regular Kibble. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Prepare underwater torpor equipment, an air supply and a safe retreat. Watch its health closely: excessive damage can kill it before the knockout.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Anglerfish",
        "https://ark.wiki.gg/wiki/Anglerfish"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  },
  "Archaeopteryx": {
    "method": "knockout",
    "overview": "Archaeopteryx uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Simple Kibble or Chitin. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Bring a bola and controlled torpor equipment. Its low health makes heavy damage risky. Look on the forest floor as well as in trees; keep Chitin for feeding after taming.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Archaeopteryx",
        "https://ark.wiki.gg/wiki/Archaeopteryx"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  },
  "Beelzebufo": {
    "method": "knockout",
    "overview": "Beelzebufo uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Regular Kibble. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Prepare food and torpor supplies before approaching. Clear nearby swamp threats and protect the unconscious target during feeding.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Beelzebufo",
        "https://ark.wiki.gg/wiki/Beelzebufo"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  },
  "Brontosaurus": {
    "method": "knockout",
    "overview": "Brontosaurus uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Exceptional Kibble; berries are an alternative. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Allow room to work around its large body. Prepare torpor equipment, food and a protected feeding area before starting.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Brontosaurus",
        "https://ark.wiki.gg/wiki/Brontosaurus"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  },
  "Compy": {
    "method": "knockout",
    "overview": "Compy uses a knockout tame. Apply torpor until it is unconscious, stop attacking, and place taming food in its inventory. Protect it and maintain torpor while it feeds.",
    "food": "Raw Prime Meat or Raw Prime Fish Meat. Quantities, duration and effectiveness are outside this guide review.",
    "preparation": "Have fresh food ready before the knockout and watch torpor closely: it can wake quickly. Check for nearby Compys before beginning.",
    "steps": [
      "Prepare food, torpor supplies and a safe approach",
      "Apply torpor; stop attacking once it is unconscious",
      "Place suitable food in its inventory",
      "Protect it, monitor torpor and confirm completion in game"
    ],
    "specialAction": "No separate taming minigame is documented for the base-species knockout method.",
    "sources": [
      [
        "ARK Community Wiki: Compy",
        "https://ark.wiki.gg/wiki/Compy"
      ]
    ],
    "checked": "2026-10-02",
    "scope": "ASA base species on official PvE; special variants, mission creatures and mod behavior excluded",
    "provenance": {
      "access": "Indexed individual species passages; direct full-page access blocked",
      "asa": "ASA species applicability checked; legacy numerical tables excluded. No firsthand gameplay test.",
      "comparisonLimitations": "Original factual summary; full-article comparison, revision/contributor verification and rights clearance remain unresolved."
    }
  }
});
Object.assign(tamingGuides.Therizinosaurus,{"preparation": "The September 30 TLC gives wild Therizinos a warning before attacking. Back away and keep your distance if you are not ready; approaching further or attacking during the warning can trigger a fight. Prepare knockout equipment, food and torpor supplies before committing.", "checked": "2026-10-02", "behaviorReview": {"source": "https://survivetheark.com/index.php?/forums/topic/774248-therizino-tlc-cerberax-and-gargantar-are-out-now/", "scope": "Wild warning behavior only; earlier method and food summaries retained"}});
tamingGuides.Therizinosaurus.sources.push(["Studio Wildcard: September 30 release and Therizino TLC","https://survivetheark.com/index.php?/forums/topic/774248-therizino-tlc-cerberax-and-gargantar-are-out-now/"]);

// Cerberax: original summary of user-supplied video transcripts, reviewed 2026-10-02.
tamingGuides.Cerberax = {
  "method": "special",
  "overview": "Cerberax combines repeated knockouts with three head trials. The heads appear in a random order. Complete every trial, then knock it out again for the final feeding stage.",
  "food": "Bring Extraordinary Kibble (the cyan tier). Keep it in your last hotbar slot for the green head’s feeding trial. After all three trials, place it in the unconscious Cerberax’s inventory for the final tame.",
  "preparation": "Bring a Longneck Rifle, tranquilizer darts, Extraordinary Kibble and healing supplies. Choose an area with room to move and nearby prey for the fire trial. Watch its health during the repeated knockouts, retreat safely after each dismount, and protect it during the final feeding stage.\n\nFor an optional escape approach, use smoke grenades to help break aggro between trials. Focal Chili can help with retreating, and an Extinguisher Grenade can put out flames. Keep a safe retreat route ready in case the smoke does not give you enough cover.",
  "steps": [
    "Use tranquilizers until a head becomes available, then approach and mount the active head promptly. Follow the trial shown in game; the first head is not fixed.",
    "Fire head: find the marked wild prey and kill three targets before the on-screen timer ends. If the next target does not appear, try harvesting the defeated creature’s body.",
    "Green head: have Extraordinary Kibble in your last hotbar slot. Wait for the biting animation and use the displayed feed interaction. Follow your platform’s prompt rather than pressing the hotbar-slot button.",
    "Blue/middle head: move the controlled indicator to stay aligned with the moving target until the progress bar fills. Use the left/right controls shown in game.",
    "After a trial, expect to be dismounted. Retreat safely, wait for the temporary protection to end, and tranquilize it again for another head. If a trial fails, repeat the knockout and retry it. Check the head checkmarks to see which trials are complete.",
    "Once all three heads have checkmarks, tranquilize it for a final knockout. Place Extraordinary Kibble in its inventory, stop attacking and protect it while it feeds. Keep watching torpor and have supplies ready to maintain it if needed."
  ],
  "specialAction": "Random-order fire, green and blue head trials, followed by a final knockout feeding stage.",
  "sources": [
    [
      "YPou: How to Tame Cerberax! 4 Knockouts & Head Trials Explained",
      "https://www.youtube.com/watch?v=p0Qgb6s2jQw"
    ],
    [
      "How to TAME Cerberax and Abilities in ARK Survival Ascended!",
      "https://www.youtube.com/watch?v=c1iiyx3NR2E"
    ]
  ],
  "checked": "2026-10-02",
  "scope": "ASA head-trial sequence based on two user-provided video transcripts; no quantity, duration or shot calculator.",
  "provenance": {
    "access": "User pasted Gemini-produced notes and transcripts for both linked videos; direct video retrieval was blocked. No firsthand gameplay test by this app.",
    "officialContext": "User identifies YPou as an official-server player. The second transcript explicitly mentions 3x rates and boosted stats.",
    "foodClarification": "User confirms cyan kibble means Extraordinary Kibble. Exceptional Kibble is not recommended because the two transcripts disagree on its use in the green trial.",
    "comparison": "Both transcripts describe random head order, the three trial types, repeated tranquilizing and a final feeding knockout. The second prose summary incorrectly claimed an automatic final knockout; its transcript describes further tranquilizing.",
    "optionalStrategy": "Smoke/Focal Chili/Extinguisher method and corpse-harvest workaround remain creator-reported optional advice."
  }
};

// Conversational copy pass; mechanics, calculations and reference metadata retained.
const guideCopyEdits = {
  "Rex": {
    "overview": "You’ll need to knock out a Rex before feeding it. Once it’s down, put the food in its inventory and keep it safe while it eats.",
    "food": "Exceptional Kibble is the preferred kibble for a Rex.",
    "preparation": "Pick a spot where you can shoot safely and have a way to retreat. Bring your tranquilizer weapon, food and supplies to keep it unconscious.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Jerboa": {
    "overview": "Knock the Jerboa out carefully, then put food in its inventory. Watch its torpor closely so it doesn’t wake up before you’re done.",
    "food": "Plant Species Y Seeds are its preferred taming food. Mejoberries are another option.",
    "preparation": "Have food and torpor supplies ready. Go easy during the knockout so you don’t kill it, and plan for the level you actually find rather than assuming it will be level 1.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Ankylosaurus": {
    "overview": "Knock the Anky out, then put its food in the inventory. Stop attacking once it’s down and keep an eye on it while it eats.",
    "food": "Regular Kibble is the preferred kibble. You can also use crops.",
    "preparation": "Bring your tranquilizer weapon, food and supplies to keep it unconscious. Choose a safe spot before you start.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Argentavis": {
    "overview": "You’ll need to knock the Argy out first. Once it lands, put food in its inventory and keep it safe while it eats.",
    "food": "Superior Kibble is the preferred kibble. You can also use raw mutton or raw prime meat.",
    "preparation": "Plan how you’ll keep the Argy within reach while you shoot. Check where it will land and clear anything that could attack it there.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Triceratops": {
    "overview": "Knock the Trike out, then add food to its inventory. Aim for its body while you’re working on the knockout and stay clear of its charge.",
    "food": "Simple Kibble is the preferred kibble. You can also use crops.",
    "preparation": "Aim for the body instead of its armored head, and leave yourself room to avoid its charge.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Pteranodon": {
    "overview": "Get the Pteranodon down safely, then put food in its inventory. Watch its health during the knockout so you don’t accidentally kill it.",
    "food": "Regular Kibble is the preferred kibble. You can also use raw mutton or raw prime meat.",
    "preparation": "Plan to hold it still while it’s on the ground. Keep an eye on its health as you knock it out.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Doedicurus": {
    "overview": "Knock the Doedicurus out before adding food to its inventory. Curling into a ball doesn’t mean it’s unconscious—check before you move in.",
    "food": "Regular Kibble is the preferred kibble. You can also use crops or Mejoberries.",
    "preparation": "Bring food and torpor supplies. Check that it’s actually unconscious before moving in; curling up isn’t the same thing.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Therizinosaurus": {
    "overview": "Knock the Theri out, then put food in its inventory. Keep your distance while it’s awake and watch its torpor once it’s down.",
    "food": "Exceptional Kibble is the preferred kibble. You can also use crops.",
    "preparation": "A wild Theri may warn you before attacking. Back away if you aren’t ready—getting closer or attacking can start a fight. Have food, knockout gear and torpor supplies ready before you commit.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Baryonyx": {
    "overview": "Knock the Baryonyx out somewhere you can reach it safely, then add food to its inventory. Bring fish-based food if you aren’t using kibble.",
    "food": "Regular Kibble is the preferred kibble. You can also use raw prime fish meat.",
    "preparation": "Choose a spot away from dangerous water. If you aren’t bringing kibble, make sure you have the right fish-based food.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Parasaur": {
    "overview": "A bola can hold the Parasaur still while you knock it out. Once it’s down, stop attacking and put food in its inventory.",
    "food": "Basic Kibble is the preferred kibble. You can also use crops or Mejoberries.",
    "preparation": "Bring a bola to hold it still during the knockout. Stop attacking as soon as it’s unconscious.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Raptor": {
    "overview": "Try to separate the Raptor from its pack before starting. Knock it out, add food to its inventory, and keep the other predators away.",
    "food": "Simple Kibble is the preferred kibble. You can also use raw mutton or raw prime meat.",
    "preparation": "Look for one you can separate from its pack. A bola can hold it still while you knock it out.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Castoroides": {
    "overview": "Knock the Castoroides out, then add food to its inventory. Keep your torpor supplies handy and check it often—it can wake up quickly.",
    "food": "Superior Kibble is the preferred kibble. You can also use crops.",
    "preparation": "Have torpor supplies ready before you start. Check it often once it’s down, because its torpor falls quickly.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Stegosaurus": {
    "overview": "Knock the Stego out from a safe distance, keeping clear of its tail. Once it’s down, add food and keep it safe while it eats.",
    "food": "Regular Kibble is the preferred kibble. You can also use crops.",
    "preparation": "Bring food and a tranquilizer weapon, and stay well clear of its tail while you shoot.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Xiphactinus": {
    "overview": "You’ll need to knock it out underwater, then put food in its inventory. Have your food and torpor supplies ready before you start.",
    "food": "Superior Kibble is preferred; raw mutton and raw prime meat are alternatives.",
    "preparation": "Plan for the underwater knockout and bring torpor supplies. Keep small mounts away from its grab attack.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Carbonemys": {
    "overview": "Knock the Carbonemys out, then put food in its inventory. Use a ranged weapon and keep clear of its bite while it’s awake.",
    "food": "Regular Kibble is the recommended food.",
    "preparation": "Use a ranged tranquilizer weapon and keep away from its bite. Aim for the exposed head rather than the shell.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Dimetrodon": {
    "overview": "Knock the Dimetrodon out carefully, then add food. Its low health makes the knockout tricky, and its torpor drops quickly once it’s down.",
    "food": "Regular Kibble is the recommended food.",
    "preparation": "Choose gear that won’t do too much damage to its low health. Clear nearby swamp threats and have plenty of torpor supplies ready—it wakes quickly. Plan your approach without relying on carrying a wild one.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Carnotaurus": {
    "overview": "Knock the Carno out, then put food in its inventory. Give yourself room to back away and protect it while it eats.",
    "food": "Regular Kibble is the recommended food.",
    "preparation": "Bring a ranged tranquilizer weapon, food and torpor supplies. Leave room to retreat, watch for other predators, and avoid cliff edges: its headbutt can knock you back and cause bleeding.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Sarco": {
    "overview": "Try to knock the Sarco out on land so it’s easier to reach. Once it’s down, add food and keep an eye on its torpor.",
    "food": "Regular Kibble is the recommended food.",
    "preparation": "Set up the knockout on land and clear nearby threats. Leave yourself a safe place to shoot; following a fleeing Sarco through water is much harder.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Dimorphodon": {
    "overview": "Find a Dimorphodon away from the others and knock it out. Add food once it’s down, and keep its torpor up while it eats.",
    "food": "Simple Kibble is the recommended food.",
    "preparation": "Bring a bola and tranquilizer gear, and choose one away from the others. Nearby Dimorphodons may join the fight, and they can hit you directly while you’re riding. Have torpor supplies ready once it’s down.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Achatina": {
    "overview": "Knock the Achatina out carefully, then put Sweet Vegetable Cakes in its inventory. Keep it safe and watch its torpor while it eats.",
    "food": "Sweet Vegetable Cake.",
    "preparation": "Bring cakes and torpor supplies before you start. Choose a safe spot and be careful with the knockout—it doesn’t have much health to spare.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Allosaurus": {
    "overview": "Separate the Allo from its pack before knocking it out. Once it’s down, put food in its inventory and keep the others away.",
    "food": "Superior Kibble.",
    "preparation": "Check for pack members and try to get one on its own. Have food and torpor supplies ready before drawing its attention.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Anglerfish": {
    "overview": "Knock the Anglerfish out underwater, then put food in its inventory. Watch its health as you go so the knockout doesn’t kill it.",
    "food": "Regular Kibble.",
    "preparation": "Bring underwater knockout gear, an air supply and a way to retreat. Watch its health closely while you shoot.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Archaeopteryx": {
    "overview": "Knock the Archaeopteryx out carefully, then add food to its inventory. It doesn’t have much health, so avoid doing more damage than you need to.",
    "food": "Simple Kibble or Chitin.",
    "preparation": "Bring a bola and knockout gear that won’t do too much damage. Look in the trees and on the forest floor, and keep Chitin ready for feeding it after the tame.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Beelzebufo": {
    "overview": "Knock the Beelzebufo out, then add food to its inventory. Clear the nearby swamp threats so it can eat safely.",
    "food": "Regular Kibble.",
    "preparation": "Have food and torpor supplies ready before approaching. Clear nearby swamp threats and keep them away while it eats.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Brontosaurus": {
    "overview": "Give yourself plenty of room to knock the Bronto out. Once it’s down, add food and keep it safe while it eats.",
    "food": "Exceptional Kibble; berries are an alternative.",
    "preparation": "Leave plenty of room to work around it. Have your knockout gear, food and torpor supplies ready, and check the area where it will fall.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Compy": {
    "overview": "Have fresh food ready before you knock the Compy out. Add it straight away and watch its torpor closely—it can wake up quickly.",
    "food": "Raw Prime Meat or Raw Prime Fish Meat.",
    "preparation": "Have fresh food ready to add as soon as it’s down. Watch its torpor closely, and check for other Compys before you start.",
    "steps": [
      "Have your food, knockout gear and torpor supplies ready.",
      "Knock it out, then stop attacking.",
      "Put the food in its inventory and keep its torpor up as needed.",
      "Keep threats away while it eats, and wait until it’s tamed."
    ]
  },
  "Otter": {
    "overview": "Otter is a passive corpse-feeding tame. Kill a fish and bring the whole body to the Otter. Use the feed prompt while you’re holding it, then repeat with fresh fish until it’s tamed.",
    "food": "Bring whole dead fish and leave the bodies unharvested. Larger fish can give more progress, so the number you need will vary. Loose fish meat won’t work for this feeding interaction.",
    "preparation": "Find the Otter and a nearby supply of fish first. Keep the area safe while you collect them, and leave each body intact so you can drag it.",
    "steps": [
      "Find the Otter and nearby fish.",
      "Kill a fish without harvesting its body.",
      "Drag it to the Otter and use the feed prompt.",
      "Bring more fresh fish and repeat until it’s tamed."
    ]
  },
  "Ichthyosaurus": {
    "overview": "Ichthyosaurus is a passive tame. Put food in your last hotbar slot, get close enough for the feed prompt, and wait between feeds.",
    "food": "Simple Kibble is preferred. Raw Mutton and Raw Prime Meat also work.",
    "preparation": "Check for nearby sea predators and be ready to follow it if it swims away.",
    "steps": [
      "Put food in your last hotbar slot.",
      "Approach and use the feed prompt.",
      "Wait until it’s ready to eat again.",
      "Follow it and repeat until it’s tamed."
    ]
  },
  "Lystrosaurus": {
    "overview": "Lystrosaurus is a passive tame. Put food in your last hotbar slot and feed it when prompted. Let it get hungry again before the next feed—you don’t need to knock it out.",
    "food": "Rare Flowers are preferred; Mejoberries also work.",
    "preparation": "Keep nearby predators away and wait for the next feed prompt.",
    "steps": [
      "Put food in your last hotbar slot.",
      "Walk up and feed it when prompted.",
      "Wait until it’s hungry again.",
      "Repeat until it’s tamed."
    ]
  },
  "Armadoggo": {
    "overview": "Drop food near the Armadoggo and let it eat. As soon as it finishes, pet it before it burrows away. Follow it and repeat until you’ve won it over.",
    "food": "Regular Kibble is preferred. Drop it on the ground for the Armadoggo, then be ready to pet it after it eats.",
    "preparation": "Bring food and leave yourself room to follow it when it burrows and reappears. Stay ready for the pet prompt once it finishes eating.",
    "steps": [
      "Drop food nearby.",
      "Let it find and eat the food.",
      "Pet it before it burrows away.",
      "Follow it and repeat until it’s tamed."
    ]
  },
  "Veilwyn": {
    "overview": "Crouch and sneak up behind the Veilwyn, then use the claim prompt when you’re close enough. Try not to let it spot you—it may create clones.",
    "food": "You claim it rather than feeding it kibble. Evolving it comes later and is a separate process.",
    "preparation": "Approach quietly from behind. If clones appear, back away and wait for them to disappear before trying again; a large group can become aggressive.",
    "steps": [
      "Find a Veilwyn.",
      "Crouch and approach from behind.",
      "Use the claim prompt when you’re close enough.",
      "If it spots you, back away and wait for the clones to disappear before retrying."
    ]
  },
  "Concavenator": {
    "overview": "Look for a Concavenator buried in the desert dunes. Use an explosion nearby to bring it out and stun it, then hop on, jump and follow the direction prompts. Repeat after it throws you off.",
    "food": "This one is tamed through the riding minigame rather than by putting food in its inventory.",
    "preparation": "Bring explosives such as C4 or rockets, and clear the area before you start. Follow the on-screen controls; each direction prompt needs two presses of the matching movement input. A Tek Rifle has also been suggested for the stun, but that tip hasn’t been independently checked.",
    "steps": [
      "Find one buried in the dunes.",
      "Use an explosion nearby to bring it out and stun it.",
      "Mount quickly, jump and follow the direction prompts.",
      "Repeat after it throws you off until the taming bar fills."
    ]
  },
  "Helicoprion": {
    "overview": "Drop looted equipment near the Helicoprion. Once it takes the item, mount it and follow the riding prompts. Use the final feeding prompt with Little Ratfish Treats, then let it recover before repeating.",
    "food": "Bring looted equipment and Little Ratfish Treats. Player-crafted equipment won’t start the interaction.",
    "preparation": "Prepare for underwater travel and keep your other tames away from its thrashing. Missed riding inputs can throw you off and trigger an attack.",
    "steps": [
      "Drop looted equipment near it.",
      "Mount it and follow the riding prompts.",
      "Use the final dismount and feeding prompt with Little Ratfish Treats.",
      "Let it recover, then repeat until it’s tamed."
    ]
  },
  "Archelon": {
    "overview": "Archelon is a passive tame. Put food in your last hotbar slot and feed it when prompted. Wait until it’s ready for another bite, then repeat. You don’t need to knock it out.",
    "food": "Superior Kibble is preferred; Bio Toxin also works.",
    "preparation": "Clear nearby sea predators and plan how you’ll follow it safely.",
    "steps": [
      "Check for nearby predators.",
      "Put food in your last hotbar slot.",
      "Use the feed prompt when it’s ready.",
      "Follow it and repeat until it’s tamed."
    ]
  },
  "Deinosuchus": {
    "overview": "Deinosuchus is a passive tame. Wait for it to bask with its mouth open. Approach carefully, feed it at its mouth, then back away and wait for the next chance.",
    "food": "Superior Kibble is preferred. Raw Mutton or Raw Prime Meat also work.",
    "preparation": "Ghillie can help you get close, but you can still alert it if you move too close.",
    "steps": [
      "Wait for it to bask with its mouth open.",
      "Approach carefully and use the feed prompt at its mouth.",
      "Back away after feeding.",
      "Wait for another chance and repeat until it’s tamed."
    ]
  },
  "Gigantoraptor": {
    "overview": "You’re taming the baby at the nest, not knocking out the parent. Use a fertilized egg to distract the adult, then approach the baby and copy the actions it shows you.",
    "food": "Bring a fertilized egg to distract the parent. Copying the baby’s actions is how you earn its trust.",
    "preparation": "Keep the parent and baby alive, and stay near the nest.",
    "steps": [
      "Find a nest with a parent and baby.",
      "Distract the parent with a fertilized egg.",
      "Approach the baby and copy its actions.",
      "Repeat until you can claim it."
    ]
  },
  "Moschops": {
    "overview": "Moschops is a passive tame. Check what it wants to eat, bring that item and feed it when prompted. Check again before the next feed—the request can change.",
    "food": "It can ask for different foods, including berries, honey, Organic Polymer, Rare Flowers, Rare Mushrooms and several kinds of meat. Bring what it’s asking for at that moment.",
    "preparation": "Bring a variety of foods if you can. Don’t assume it will want the same thing for every feed.",
    "steps": [
      "Check its food request.",
      "Bring the requested item.",
      "Feed it when prompted.",
      "Check the next request and repeat."
    ]
  },
  "Cerberax": {
    "overview": "This one takes a few rounds. Knock it out to start a head trial, then repeat until all three heads are done. The order is random. After that, knock it out once more and feed it to finish the tame.",
    "food": "Bring Extraordinary Kibble—the cyan one. Keep it in your last hotbar slot for the green head’s trial. For the final feeding stage, put it in the Cerberax’s inventory.",
    "preparation": "Bring a Longneck Rifle, tranquilizer darts, Extraordinary Kibble and healing supplies. Pick an area with room to move and nearby prey for the fire trial. Watch its health through the repeated knockouts, and have somewhere safe to retreat after it throws you off.\n\nSmoke grenades can help you break aggro between trials. Focal Chili can help you get away, and an Extinguisher Grenade can put out the flames. Keep another escape route ready in case the smoke doesn’t give you enough cover.",
    "steps": [
      "Knock it out, then mount whichever head is ready. Move in promptly and follow the trial shown on screen.",
      "Fire head: find and kill three marked wild creatures before the timer runs out. If the next target doesn’t appear, try harvesting the body of the one you just killed.",
      "Green head: keep Extraordinary Kibble in your last hotbar slot. Wait for the bite animation, then press the feed button shown on screen—not the hotbar-slot button.",
      "Blue head: use the left and right controls to keep your indicator lined up with the moving target until the bar fills.",
      "After each trial, get clear, wait for its temporary protection to end, then knock it out again. If you fail a trial, you can retry after another knockout. The checkmarks show which heads you’ve finished.",
      "Once all three heads have checkmarks, knock it out one last time. Put Extraordinary Kibble in its inventory and let it eat. Keep it safe, watch its torpor and use supplies to keep it unconscious if needed."
    ]
  }
};
for (const [name,copy] of Object.entries(guideCopyEdits)) Object.assign(tamingGuides[name],copy);

// Gargantar: original wording from user-supplied guide notes, October 2, 2026.
tamingGuides.Gargantar = {
  "method": "special",
  "overview": "Gargantar’s tame is a repeating cycle: let it swallow you, drop tools inside its stomach, then ride it to gather the resource it asks for. Each successful round adds taming progress.",
  "food": "Bring weapons or tools you’re willing to lose. Drop them from your inventory while you’re inside its stomach to build torpor; higher-quality items do more, while Metal Picks are a craftable option. Once you’re riding it, gather the resource shown on screen. It may ask for wood, stone, metal, meat or keratin. For meat or keratin, kill a suitable wild creature and inhale its body.",
  "preparation": "Bring spare armor, a durable Riot Shield and plenty of Medical Brews. The acid can wreck your gear, so keep replacements handy and give yourself plenty of health to work with. Pack extra weapons or tools for the stomach phase, and choose an area with nearby resource nodes and wild prey.\n\nA tribemate with a Daeodon can help you stay healed. Avoid support that removes the acid debuff—you need to build those stacks to get swallowed. You’ll need Dragontopia access to interact with Gargantar.",
  "steps": [
    "Approach on foot with your shield ready and get its attention. Keep an eye on your health as you let its acid attacks build the debuff. Use Medical Brews as needed; the bite alone isn’t what you’re waiting for.",
    "Watch the acid icon on your HUD. At three stacks, it can swallow you and start the stomach phase. Avoid clearing the debuff before this happens.",
    "Inside its stomach, open your inventory and drop the weapons or tools you brought. Keep going until the torpor bar fills. It will spit you out and fall unconscious.",
    "Walk up to it and use the mount prompt. You don’t need a saddle for this part. It wakes up and asks for a resource—check the request before heading off.",
    "You have two minutes for the resource hunt. Find the requested material and hold the inhale control shown in game to fill the meter. If it asks for meat or keratin, kill a suitable wild creature first and inhale the corpse. Fast movement can help you reach the next target.",
    "When the resource meter fills, it throws you off and adds taming progress. Repeat the acid, stomach and resource-hunt stages until the tame finishes. If the timer runs out, prepare for another round and check the progress shown in game."
  ],
  "checked": "2026-10-02",
  "sources": [
    [
      "Gargantar taming reference 1",
      "https://www.youtube.com/watch?v=_bnwO719S7k"
    ],
    [
      "Gargantar taming reference 2",
      "https://www.youtube.com/watch?v=NhYa67lFW-M"
    ]
  ],
  "provenance": {
    "access": "Original source URLs supplied on 2026-10-06 for the earlier user-provided guide notes. Direct video retrieval failed; titles, channels and full transcript comparison remain unverified. Supplied URLs are retained without claiming independent review of the video content.",
    "scope": "Original wording based on supplied notes; not firsthand official-server testing.",
    "withheld": [
      "1000 HP recommendation",
      "armor instantly breaking regardless of quality",
      "exact Fortress Mode damage percentage",
      "exact PC flight key mapping",
      "saddle level 52",
      "no taming-effectiveness loss on failed trial",
      "guaranteed Dragon Horn award timing"
    ],
    "pending": [
      "Video titles/channel attribution and full-content comparison",
      "Official PvE confirmation of complete taming sequence"
    ],
    "sourceLinksAdded": "2026-10-06"
  }
};

// October 3, 2026: concise ASA base-species guides reviewed from individual
// ARK Community Wiki species pages. Quantities and time estimates are withheld.
Object.assign(tamingGuides, {
  "Araneo": {
    "method": "knockout",
    "overview": "In ASA, the Araneo uses a standard knockout tame. Apply torpor, stop attacking when it falls unconscious, then place food in its inventory and keep it protected while it eats.",
    "food": "Spoiled Meat is its documented taming food. Exact amounts, timing and effectiveness are still pending independent ASA calculation checks.",
    "preparation": "Bring controlled torpor equipment, food and protection from cave threats. Araneo often gather in groups, and their web and venom can make retreat difficult, so isolate the target before starting.",
    "steps": ["Separate the target from nearby cave creatures", "Apply torpor and stop when it is unconscious", "Place Spoiled Meat in its inventory", "Protect it and monitor torpor until the tame finishes"],
    "specialAction": "This is the ASA knockout method. The older passive Bug Repellant method belongs to the ASE section of the source and is not used for this ASA guide.",
    "sources": [["ARK Community Wiki: Araneo", "https://ark.wiki.gg/wiki/Araneo"]],
    "checked": "2026-10-03",
    "scope": "ASA base Araneo on official PvE; ASE passive method, event forms and cave-only untameable variants excluded",
    "provenance": {"access":"Indexed current species page with separate ASA and ASE taming text; direct page retrieval remained limited.","asa":"The current page identifies ASA Araneo as a standard knockout tame.","comparisonLimitations":"Original concise summary; complete revision history, full-article similarity review and firsthand gameplay confirmation remain pending."}
  },
  "Arthropluera": {
    "method": "passive",
    "overview": "Arthropluera is a passive tame. Use Bug Repellant, keep it calm and feed it from the last hotbar slot when the prompt appears.",
    "food": "Broth of Enlightenment is the preferred food; Spoiled Meat is a documented alternative. Quantities and intervals are still pending independent ASA checks.",
    "preparation": "Bring Bug Repellant, food and spare protection for the cave. Remove corpses and hostile distractions, because an Arthropluera that is attacking or feeding cannot accept a tame feed.",
    "steps": ["Apply Bug Repellant and put the food in the last hotbar slot", "Clear enemies and corpses from the immediate area", "Approach carefully and feed when prompted", "Back away, wait for the next prompt and repeat"],
    "specialAction": "Passive feed; do not use a knockout checklist. Avoid touching or provoking it between feeds.",
    "sources": [["ARK Community Wiki: Arthropluera", "https://ark.wiki.gg/wiki/Arthropleura"], ["ARK Community Wiki: Taming", "https://ark.wiki.gg/wiki/Taming"]],
    "checked": "2026-10-03",
    "scope": "Base passive tame for official PvE; corrupted, mission and mod variants excluded",
    "provenance": {"access":"Indexed individual species and taming passages; numerical tables excluded.","asa":"Species is present in ASA; the reviewed passive method is retained for the base creature.","comparisonLimitations":"No firsthand official-server test or exhaustive version-by-version comparison."}
  },
  "Basilosaurus": {
    "method": "passive",
    "overview": "Basilosaurus is a passive tame. Swim close with food in the last hotbar slot, feed when prompted, then wait for it to become ready for another feed.",
    "food": "Exceptional Kibble is its preferred kibble. Raw Mutton and Raw Prime Meat are documented alternatives; quantities and intervals remain pending independent ASA checks.",
    "preparation": "Bring scuba or another reliable air plan, the food and a capable water mount. Clear or control the Manta that commonly surround it and watch for roaming ocean predators before beginning.",
    "steps": ["Make the surrounding water safe enough to approach", "Place the chosen food in the last hotbar slot", "Feed the Basilosaurus when prompted", "Keep pace, protect the area and repeat after each wait"],
    "specialAction": "Passive feed; do not tranquilize it. The surrounding Manta are the main approach hazard.",
    "sources": [["ARK Community Wiki: Basilosaurus", "https://ark.wiki.gg/wiki/Basilo"]],
    "checked": "2026-10-03",
    "scope": "Base Basilosaurus on official PvE; X, brute, event and mobile variants excluded",
    "provenance": {"access":"Indexed individual species page including method, food and ocean hazards; numerical tables excluded.","asa":"Base species applicability reviewed; legacy mobile and mission variants excluded.","comparisonLimitations":"No complete spawn-map comparison or firsthand official-server test."}
  },
  "Bulbdog": {
    "method": "passive",
    "overview": "Bulbdog is a passive tame. Put suitable food in the last hotbar slot, approach, feed when prompted and repeat when it becomes hungry again.",
    "food": "Plant Species Z Seed is the documented preferred food. Aquatic Mushrooms are a common alternative; exact amounts and intervals remain pending independent ASA checks.",
    "preparation": "Gather the food before approaching and make the area safe. It is a small shoulder creature, so keep nearby predators away while waiting between feeds.",
    "steps": ["Put the food in the last hotbar slot", "Approach the Bulbdog without attacking it", "Feed when the prompt appears", "Protect it and repeat after the feeding wait"],
    "specialAction": "Passive feed; no knockout or separate minigame is documented for the base creature.",
    "sources": [["ARK Community Wiki: Bulbdog", "https://ark.wiki.gg/wiki/Bulbdog"], ["ARK Community Wiki: Aquatic Mushroom", "https://ark.wiki.gg/wiki/Aquatic_Mushroom"]],
    "checked": "2026-10-03",
    "scope": "Base Bulbdog passive tame; event and mission variants excluded",
    "provenance": {"access":"Indexed individual species and food pages; numerical tables excluded.","asa":"Method and food reviewed for the base creature; map-by-map ASA availability is not claimed.","comparisonLimitations":"No firsthand official-server test or exhaustive platform comparison."}
  },
  "Daeodon": {
    "method": "knockout",
    "overview": "Daeodon uses a normal knockout tame. Apply torpor until it is unconscious, stop attacking, then add food and maintain torpor while it eats.",
    "food": "Superior Kibble is its preferred kibble. Raw Mutton and Raw Prime Meat are documented alternatives; exact quantities and duration remain pending independent ASA calculations.",
    "preparation": "Daeodon travel in aggressive groups. Separate one from its pack or use a secure trap, then bring controlled torpor equipment, food and supplies for the unconscious stage.",
    "steps": ["Separate or safely trap the target", "Apply torpor and stop when it is unconscious", "Place suitable food in its inventory", "Protect it and monitor torpor until completion"],
    "specialAction": "No separate taming minigame is documented for the base knockout method.",
    "sources": [["ARK Community Wiki: Daeodon", "https://ark.wiki.gg/wiki/Daeodon"]],
    "checked": "2026-10-03",
    "scope": "Base Daeodon on official PvE; R, summoned and mission variants excluded",
    "provenance": {"access":"Indexed individual species page with method and preferred foods; numerical tables excluded.","asa":"Base species knockout applicability reviewed.","comparisonLimitations":"No torpor formula, shot count, timing or firsthand test imported."}
  },
  "Dilophosaur": {
    "method": "knockout",
    "overview": "Dilophosaur uses a normal knockout tame. Apply controlled torpor, stop attacking once it is unconscious, then feed it from its inventory.",
    "food": "Basic Kibble is its preferred kibble. Meat alternatives are possible, but quantities and timing remain pending independent ASA calculations.",
    "preparation": "Bring food and light torpor equipment. Watch for nearby Dilophosaurs and avoid its slowing, blinding spit while you line up the knockout.",
    "steps": ["Clear nearby threats and prepare the food", "Apply torpor without continuing after the knockout", "Place suitable food in its inventory", "Protect it and check torpor until completion"],
    "specialAction": "No separate taming minigame is documented for the base knockout method.",
    "sources": [["ARK Community Wiki: Dilophosaur", "https://ark.wiki.gg/wiki/Dilo"], ["ARK Community Wiki: Basic Kibble", "https://ark.wiki.gg/wiki/Basic_Kibble"]],
    "checked": "2026-10-03",
    "scope": "ASA base Dilophosaur; event, VR, mobile and mod variants excluded",
    "provenance": {"access":"Indexed individual species and kibble pages; numerical tables excluded.","asa":"The species page explicitly includes ASA and identifies the base knockout method.","comparisonLimitations":"No independent numerical or firsthand gameplay verification."}
  },
  "Diplocaulus": {
    "method": "knockout",
    "overview": "Diplocaulus uses a knockout tame. Restrain or safely contain the skittish target, apply torpor, then feed it while unconscious.",
    "food": "Simple Kibble is its preferred kibble. Meat alternatives are documented, but quantities and duration remain pending independent ASA calculations.",
    "preparation": "Bring a bola, controlled torpor equipment and food. Swamps contain many predators, so clear a safe space or move the target into a protected pen before the knockout.",
    "steps": ["Secure a safe area and restrain the fleeing target", "Apply torpor and stop when it is unconscious", "Place suitable food in its inventory", "Protect it from swamp threats and monitor torpor"],
    "specialAction": "No separate minigame is documented; its skittish movement and dangerous habitat are the main complications.",
    "sources": [["ARK Community Wiki: Diplocaulus", "https://ark.wiki.gg/wiki/Diplocaulus"], ["ARK Community Wiki: Simple Kibble", "https://ark.wiki.gg/wiki/Simple_Kibble"]],
    "checked": "2026-10-03",
    "scope": "Base Diplocaulus on official PvE; aberrant, mission and mobile variants excluded",
    "provenance": {"access":"Indexed individual species passages and preferred-kibble reference; numerical tables excluded.","asa":"Base knockout method reviewed; exhaustive map availability is not claimed.","comparisonLimitations":"No shot count, torpor formula, timer or firsthand test."}
  },
  "Diplodocus": {
    "method": "passive",
    "overview": "Diplodocus is a passive tame. Put food in the last hotbar slot, stay close enough for the feed prompt and repeat when it is ready again. The wiki also documents a knockout alternative.",
    "food": "Regular Kibble is the preferred passive food. Mejoberries and other berries are alternatives; exact quantities and intervals remain pending independent ASA checks.",
    "preparation": "Bring the food and choose open, level ground. Its shove does not deal direct damage, but it can move you a long way, so avoid cliffs, hazards and nearby predators during the feeding cycle.",
    "steps": ["Put Regular Kibble or berries in the last hotbar slot", "Approach on safe, open ground", "Feed when prompted", "Stay nearby and repeat after each wait"],
    "specialAction": "Passive feeding is recommended here. A knockout route exists, but its separate quantities and tradeoffs have not been reviewed for this guide.",
    "sources": [["ARK Community Wiki: Diplodocus", "https://ark.wiki.gg/wiki/Diplodocus"], ["ARK Community Wiki: Regular Kibble", "https://ark.wiki.gg/wiki/Regular_Kibble"]],
    "checked": "2026-10-03",
    "scope": "Base passive method on official PvE; aberrant, mobile and mission variants excluded",
    "provenance": {"access":"Indexed individual species page showing both methods and the preferred passive food; numerical tables excluded.","asa":"ASA body-multiplier note and base species page reviewed; this guide deliberately selects the passive route.","comparisonLimitations":"Knockout-route comparison, numerical effectiveness and firsthand testing remain pending."}
  },
  "Dire Bear": {
    "method": "knockout",
    "overview": "Dire Bear uses a knockout tame. Apply torpor carefully, stop when it falls unconscious, then feed and protect it while it eats.",
    "food": "Superior Kibble is its preferred kibble; Giant Bee Honey is a documented food alternative. Exact quantities and duration remain pending independent ASA calculations.",
    "preparation": "Use a secure trap or protected firing position and bring controlled torpor equipment. Dire Bears have limited health compared with the torpor needed, so avoid unnecessary damage and pause between hits when appropriate.",
    "steps": ["Secure the target or reach a protected firing position", "Apply torpor carefully and stop at the knockout", "Place suitable food in its inventory", "Protect it and monitor torpor until completion"],
    "specialAction": "No separate taming minigame is documented; careful damage control is the important part of the knockout.",
    "sources": [["ARK Community Wiki: Dire Bear", "https://ark.wiki.gg/wiki/Dire_Bear"], ["ARK Community Wiki: Superior Kibble", "https://ark.wiki.gg/wiki/Superior_Kibble"]],
    "checked": "2026-10-03",
    "scope": "Base Dire Bear on official PvE; polar, R, spirit, event and mod variants excluded",
    "provenance": {"access":"Indexed individual species page with method, food and damage-risk guidance; numerical tables excluded.","asa":"Base knockout applicability reviewed.","comparisonLimitations":"No health/torpor formula, shot count or firsthand server test."}
  },
  "Direwolf": {
    "method": "knockout",
    "overview": "Direwolf uses a normal knockout tame. Separate the chosen wolf, apply torpor, stop when it is unconscious, then feed it from its inventory.",
    "food": "Superior Kibble is its preferred kibble. Raw Mutton and Raw Prime Meat are documented alternatives; exact quantities and duration remain pending independent ASA calculations.",
    "preparation": "Direwolves commonly travel in fast, aggressive packs. Use terrain, a trap or a bola to isolate the target, and bring cold-weather protection for snowy habitats.",
    "steps": ["Separate or restrain the target away from its pack", "Apply torpor and stop when it is unconscious", "Place suitable food in its inventory", "Protect it and monitor torpor until completion"],
    "specialAction": "No separate taming minigame is documented for the base knockout method.",
    "sources": [["ARK Community Wiki: Direwolf", "https://ark.wiki.gg/wiki/Direwolf"], ["ARK Community Wiki: Superior Kibble", "https://ark.wiki.gg/wiki/Superior_Kibble"]],
    "checked": "2026-10-03",
    "scope": "Base Direwolf on official PvE; R, astral, revenant, spirit, event and mission variants excluded",
    "provenance": {"access":"Indexed individual species page with method, food, pack and restraint details; numerical tables excluded.","asa":"Base knockout applicability reviewed; current ASA variants excluded from this summary.","comparisonLimitations":"No numerical formula, timing, effectiveness or firsthand gameplay verification."}
  }
});

// Original species summaries reviewed 2026-10-04; see audit for access limitations.
Object.assign(tamingGuides, {
  "Dodo": {
    "method": "knockout",
    "overview": "Dodo uses a knockout tame. Carefully make it unconscious, then place taming food in its inventory.",
    "food": "Basic Kibble is the preferred kibble; crops or Mejoberries are alternatives. Quantities and times remain pending independent ASA checks.",
    "preparation": "Bring food and gentle torpor equipment, such as a club or slingshot. Its low health makes excessive damage dangerous.",
    "steps": [
      "Prepare a safe area and supplies",
      "Apply controlled torpor and stop at the knockout",
      "Place food in its inventory and maintain torpor as needed",
      "Protect it until the tame completes"
    ],
    "specialAction": "Use controlled hits and stop immediately at the knockout.",
    "sources": [
      [
        "ARK Community Wiki: Dodo",
        "https://ark.wiki.gg/wiki/Dodo"
      ]
    ],
    "checked": "2026-10-04",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. ",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported."
    }
  },
  "Gallimimus": {
    "method": "knockout",
    "overview": "Gallimimus uses a knockout tame. Secure the fast-moving target, apply torpor carefully and feed it while unconscious.",
    "food": "Simple Kibble is the preferred kibble; crops or Mejoberries are alternatives. Quantities and times remain pending independent ASA checks.",
    "preparation": "Bring a secure pen or bear trap, tranquilizer darts, food and torpor supplies. Its low health makes arrows risky, and torpor drops quickly after the knockout.",
    "steps": [
      "Secure the target in a suitable pen or trap",
      "Apply controlled torpor and stop at the knockout",
      "Place food in its inventory and watch torpor closely",
      "Protect it until the tame completes"
    ],
    "specialAction": "A regular bola does not restrain Gallimimus. Keep torpor supplies ready before you begin.",
    "sources": [
      [
        "ARK Community Wiki: Gallimimus",
        "https://ark.wiki.gg/wiki/Gallimimus"
      ]
    ],
    "checked": "2026-10-04",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. ",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported."
    }
  },
  "Iguanodon": {
    "method": "knockout",
    "overview": "Iguanodon uses a knockout tame. Restrain the target, make it unconscious and place taming food in its inventory.",
    "food": "Simple Kibble is the preferred kibble; crops are an alternative. Quantities and times remain pending independent ASA checks.",
    "preparation": "Bring a bola, controlled torpor equipment, food and torpor supplies. Allow room for nearby herd members.",
    "steps": [
      "Prepare a safe area and supplies",
      "Apply controlled torpor and stop at the knockout",
      "Place food in its inventory and maintain torpor as needed",
      "Protect it until the tame completes"
    ],
    "specialAction": "It can flee rapidly as torpor rises; restraint helps keep it within reach.",
    "sources": [
      [
        "ARK Community Wiki: Iguanodon",
        "https://ark.wiki.gg/wiki/Iguanodon"
      ]
    ],
    "checked": "2026-10-04",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. ",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported."
    }
  },
  "Dung Beetle": {
    "method": "passive",
    "overview": "Dung Beetle is a passive tame. Approach a calm beetle and use the feeding prompt, repeating when it is ready again.",
    "food": "Large Animal Feces are the preferred taming food. Smaller feces are alternatives; Massive Animal Feces are not accepted. Quantities and times remain pending independent ASA checks.",
    "preparation": "Bring taming food and clear nearby cave threats before feeding. Keep the beetle calm and follow its interaction prompt.",
    "steps": [
      "Prepare food and clear nearby threats",
      "Approach the conscious creature cautiously",
      "Feed when its interaction prompt is available",
      "Wait and repeat until completion"
    ],
    "specialAction": "Feed the conscious beetle rather than knocking it out. Cave-specific eligibility and relocation tactics remain pending ASA checks.",
    "sources": [
      [
        "ARK Community Wiki: Dung Beetle",
        "https://ark.wiki.gg/wiki/Dung_Beetle"
      ],
      [
        "ARK Community Wiki: Massive Animal Feces",
        "https://ark.wiki.gg/wiki/Massive_Animal_Feces"
      ]
    ],
    "checked": "2026-10-04",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. ",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported."
    }
  },
  "Mesopithecus": {
    "method": "passive",
    "overview": "Mesopithecus is a passive tame. Put food in the last hotbar slot and approach only far enough to see its feed prompt. Repeat when it is ready.",
    "food": "Basic Kibble is the preferred kibble; Mejoberries are an alternative. Quantities and times remain pending independent ASA checks.",
    "preparation": "Bring food and approach cautiously. Clear nearby predators and avoid crowding this small creature while you wait.",
    "steps": [
      "Prepare food and clear nearby threats",
      "Approach the conscious creature cautiously",
      "Feed when its interaction prompt is available",
      "Wait and repeat until completion"
    ],
    "specialAction": "Getting too close can scare it into running away; back off after feeding.",
    "sources": [
      [
        "ARK Community Wiki: Mesopithecus",
        "https://ark.wiki.gg/wiki/Mesopithecus"
      ]
    ],
    "checked": "2026-10-04",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. ",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported."
    }
  },
  "Equus": {
    "method": "special",
    "overview": "Equus uses a passive riding tame. Approach quietly, feed it from the last hotbar slot and mount it. Continue soothing it with food when the bucking prompt appears.",
    "food": "Rockarrot and Simple Kibble are documented taming foods. Numerical food requirements and intervals remain pending.",
    "preparation": "Bring food and consider ghillie clothing for the approach. Clear predators and hazards from the area before mounting.",
    "steps": [
      "Put Rockarrot or Simple Kibble in the last hotbar slot",
      "Approach quietly, feed and mount",
      "Watch the bottom-right Feed prompt as bucking starts; press once: E on PC, Triangle on PlayStation or Y on Xbox with default controls",
      "Wait for each new bucking prompt; do not hold or spam the button"
    ],
    "specialAction": "The feed control also dismounts you outside the feeding prompt. A missed prompt can throw you off and cost taming progress and effectiveness. Player-reported console workaround: if the correct prompt still dismounts you, try E on a connected USB keyboard; this workaround has not been independently verified.",
    "sources": [
      [
        "ARK Community Wiki: Equus",
        "https://ark.wiki.gg/wiki/Equus"
      ],
      [
        "ARK Community Wiki: Ragnarok Highlands",
        "https://ark.wiki.gg/wiki/Highlands_(Ragnarok)"
      ]
    ],
    "checked": "2026-10-05",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. Riding interactions classified as special so they do not enter the knockout timer.",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported.",
      "userNotes": "User supplied reference notes on 2026-10-05; these were not described as firsthand gameplay testing. Incorporated core interaction tips; unresolved specifics retained in the follow-up audit."
    },
    "tips": "The feed control also dismounts you outside the feeding prompt. A missed prompt can throw you off and cost taming progress and effectiveness. Player-reported console workaround: if the correct prompt still dismounts you, try E on a connected USB keyboard; this workaround has not been independently verified."
  },
  "Ovis": {
    "method": "passive",
    "overview": "Ovis is a passive tame. Put Sweet Vegetable Cake in the last hotbar slot, approach and use its feed prompt. Confirm completion in game.",
    "food": "Sweet Vegetable Cake is the taming food. Berries are suitable after taming, rather than a substitute for the taming interaction. Quantities and times remain pending independent ASA checks.",
    "preparation": "Prepare the cake before searching, watch its spoilage and clear nearby predators. Bring cold protection when searching snowy areas and plan a safe route home.",
    "steps": [
      "Prepare Sweet Vegetable Cake",
      "Place it in the last hotbar slot",
      "Approach and use the feed prompt",
      "Confirm the tame and escort it to safety"
    ],
    "specialAction": "No knockout or riding minigame is needed; use the cake-feeding interaction.",
    "sources": [
      [
        "ARK Community Wiki: Ovis",
        "https://ark.wiki.gg/wiki/Ovis"
      ],
      [
        "ARK Community Wiki: Ragnarok Highlands",
        "https://ark.wiki.gg/wiki/Highlands_(Ragnarok)"
      ]
    ],
    "checked": "2026-10-04",
    "scope": "ASA base species on official PvE; mobile, event, mission, mod and distinct variants excluded",
    "provenance": {
      "access": "Individually reviewed search-indexed species passages; direct full-page access limited.",
      "asa": "Base method reviewed with current species page; version-specific and legacy numerical tables excluded. ",
      "comparisonLimitations": "Indexed passages only; full article comparison, revision/contributor history and firsthand official PvE testing remain pending. No numerical tables or calculator code imported."
    }
  }
});

// Original species summaries reviewed October 6, 2026.
Object.assign(tamingGuides, {
  "Lymantria": {
    "method": "knockout",
    "overview": "Lymantria uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Regular Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Prepare food, a torpor weapon and a way to keep the moth within reach. Leave room to retreat from its spores.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "It can fly upward and release spores when attacked. Avoid the cloud while applying torpor; no guaranteed tent or trap method is claimed.",
    "tips": "It can fly upward and release spores when attacked. Avoid the cloud while applying torpor; no guaranteed tent or trap method is claimed.",
    "sources": [
      [
        "ARK Community Wiki: Lymantria",
        "https://ark.wiki.gg/wiki/Lymantria"
      ],
      [
        "Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species knockout classification and spore behavior; Regular Kibble page corroborates food. ASA species imagery is indexed.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Mammoth": {
    "method": "knockout",
    "overview": "Mammoth uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Superior Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Bring cold protection and check the area for predators before beginning the knockout. Choose a position where you can safely watch the unconscious Mammoth.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Snow-biome weather and predators can interrupt the tame. Protect yourself from the cold and stop attacking once it falls unconscious.",
    "tips": "Snow-biome weather and predators can interrupt the tame. Protect yourself from the cold and stop attacking once it falls unconscious.",
    "sources": [
      [
        "ARK Community Wiki: Mammoth",
        "https://ark.wiki.gg/wiki/Mammoth"
      ],
      [
        "Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species method, current kibble field and snow-biome knockout warning; mobile and Primitive Plus foods excluded.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Megalania": {
    "method": "knockout",
    "overview": "Megalania uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Extraordinary Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Search cave walls and ceilings carefully. Bring torpor-maintaining supplies and prepare for the danger of Mega Rabies.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Watch its torpor closely after knockout: it can wake quickly. Avoid bites and do not assume every cave-spawned variant can be tamed.",
    "tips": "Watch its torpor closely after knockout: it can wake quickly. Avoid bites and do not assume every cave-spawned variant can be tamed.",
    "sources": [
      [
        "ARK Community Wiki: Megalania",
        "https://ark.wiki.gg/wiki/Megalania"
      ],
      [
        "Extraordinary Kibble",
        "https://ark.wiki.gg/wiki/Extraordinary_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species knockout/food fields, ceiling ambushes, disease and rapid torpor loss. Indexed Magalania redirect used; base page blocked.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Megaloceros": {
    "method": "knockout",
    "overview": "Megaloceros uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Simple Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Bring a torpor weapon and food, clear nearby predators and plan for a fleeing target. Prepare cold protection if searching snowy terrain.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Keep the target within reach without chasing it into predators or difficult terrain. After knockout, protect it while it eats.",
    "tips": "Keep the target within reach without chasing it into predators or difficult terrain. After knockout, protect it while it eats.",
    "sources": [
      [
        "ARK Community Wiki: Megaloceros",
        "https://ark.wiki.gg/wiki/Megaloceros"
      ],
      [
        "Simple Kibble",
        "https://ark.wiki.gg/wiki/Simple_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species Moose redirect supplies knockout classification and cold/redwood habitat; Simple Kibble page corroborates food.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Megalosaurus": {
    "method": "knockout",
    "overview": "Megalosaurus uses a knockout tame, but the base species wakes at nightfall even with torpor remaining. Plan around its wake-up before adding valuable food.",
    "food": "Superior Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Prepare secure containment, torpor supplies and replacement food. Watch the in-game clock and plan your cave exit. Wait until its nightfall wake-up has happened before knocking it out for the longest window before the next night.",
    "steps": [
      "Secure the area and watch for its nightfall wake-up",
      "Knock it out after it has woken; stop attacking when it falls unconscious",
      "For starve taming, wait until its food has dropped enough for the required meals before adding taming food; this does not make hunger drain faster",
      "Monitor torpor and the clock. Retrieve valuable food and spare supplies before the next nightfall if the tame is unfinished",
      "If it wakes, knock it out again, inspect its progress and replenish food as needed"
    ],
    "specialAction": "Nightfall can wake it regardless of torpor and clear its inventory. Recover valuable food and supplies before the wake-up.",
    "tips": "Nightfall can wake it regardless of torpor and clear its inventory. Recover valuable food and supplies before the wake-up. Starting after the actual wake-up gives you the rest of the night and the following day before the next one. Reports place the wake-up around 20:15–20:30 in-game, so watch the creature rather than relying on an exact minute. Starve taming can reduce food placed at risk, but only add the full batch if there is enough time for all feeding before nightfall. Progress retention in current ASA remains disputed: the Community Wiki says progress is retained, while supplied reference notes say it resets. Do not assume a guaranteed reset or guaranteed retention. Aberrant Megalosaurus (the variant native to Aberration) has no normal day/night sleep cycle and does not wake at nightfall during taming. Maintain its torpor normally; the nightfall wake-up and associated inventory-loss warning above apply to the regular Megalosaurus.",
    "sources": [
      [
        "ARK Community Wiki: Megalosaurus",
        "https://ark.wiki.gg/wiki/Megalosaurus"
      ],
      [
        "Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Nightfall waking regardless of torpor and inventory loss corroborated by Community Wiki indexed KO strategy. User-supplied reference notes inform food-protection advice. Exact 20:15 timing and complete progress reset remain unconfirmed for current official ASA PvE; wiki gives approximately 20:30 and retained progress with legacy patch context.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Megatherium": {
    "method": "knockout",
    "overview": "Megatherium uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Superior Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Choose a safe knockout position away from cliffs. Check for insects nearby before provoking it and bring food plus torpor supplies.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Killing an insect can make a wild Megatherium much more dangerous. Avoid beginning the knockout while it has its insect buff.",
    "tips": "Killing an insect can make a wild Megatherium much more dangerous. Avoid beginning the knockout while it has its insect buff.",
    "sources": [
      [
        "ARK Community Wiki: Megatherium",
        "https://ark.wiki.gg/wiki/Megatherium"
      ],
      [
        "Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species knockout and preferred-food fields, cliff warning and insect-buff behavior; no reliable ASA habitat passage retrieved.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Microraptor": {
    "method": "knockout",
    "overview": "Microraptor uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Rare Flowers and Rare Mushrooms are documented taming foods. Quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Bring bolas, a torpor weapon and food. Approach with an escape plan because it can stun and dismount a rider.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "A bola can hold it for the knockout, but it can still lunge at close range. Keep some distance and stop damaging it once unconscious.",
    "tips": "A bola can hold it for the knockout, but it can still lunge at close range. Keep some distance and stop damaging it once unconscious.",
    "sources": [
      [
        "ARK Community Wiki: Microraptor",
        "https://ark.wiki.gg/wiki/Microraptor"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species knockout, bola strategy and flower/mushroom food passages; ASA appearance is indexed. Legacy food quantities excluded.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Morellatops": {
    "method": "knockout",
    "overview": "Morellatops uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Simple Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Separate the target from its herd before applying torpor. Bring food and choose terrain that avoids cliffs and nearby carnivores.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "A group can retaliate when one member is attacked. Its knockback can push you into danger; a cornered lone animal can also fight back.",
    "tips": "A group can retaliate when one member is attacked. Its knockback can push you into danger; a cornered lone animal can also fight back.",
    "sources": [
      [
        "ARK Community Wiki: Morellatops",
        "https://ark.wiki.gg/wiki/Morellatops"
      ],
      [
        "Simple Kibble",
        "https://ark.wiki.gg/wiki/Simple_Kibble"
      ],
      [
        "Scorched Earth Ascended",
        "https://ark.wiki.gg/wiki/Scorched_Earth_Ascended"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species Camel redirect supplies knockout, food and herd strategy; Scorched Earth ASA page confirms presence.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Mosasaurus": {
    "method": "knockout",
    "overview": "Mosasaurus uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Exceptional Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Prepare underwater breathing equipment, a water-usable torpor weapon, food and a safe retreat route. Check for other ocean threats.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "This is an underwater knockout tame. Keep breathing supplies available throughout and protect the unconscious animal. Alpha, cave and mission variants are not covered.",
    "tips": "This is an underwater knockout tame. Keep breathing supplies available throughout and protect the unconscious animal. Alpha, cave and mission variants are not covered.",
    "sources": [
      [
        "ARK Community Wiki: Mosasaurus",
        "https://ark.wiki.gg/wiki/Mosasaurus"
      ],
      [
        "Exceptional Kibble",
        "https://ark.wiki.gg/wiki/Exceptional_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species knockout and kibble fields, deep-water dossier and ASA patch section; legacy quantities and movement advice excluded.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  },
  "Pachy": {
    "method": "knockout",
    "overview": "Pachy uses a knockout tame. Apply torpor until it is unconscious, place taming food in its inventory and protect it as it eats.",
    "food": "Simple Kibble is the documented preferred kibble. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Bring a torpor weapon, food and a safe position. Avoid letting its head attacks hit you during the knockout.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Apply torpor and stop attacking at knockout",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Its attacks can apply torpor. Keep enough distance to avoid being knocked unconscious yourself, then stop damaging it once it is down.",
    "tips": "Its attacks can apply torpor. Keep enough distance to avoid being knocked unconscious yourself, then stop damaging it once it is down.",
    "sources": [
      [
        "ARK Community Wiki: Pachy",
        "https://ark.wiki.gg/wiki/Pachy"
      ],
      [
        "Simple Kibble",
        "https://ark.wiki.gg/wiki/Simple_Kibble"
      ]
    ],
    "checked": "2026-10-06",
    "scope": "ASA base species on official PvE; mobile, mission, mod and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species passages reviewed.",
      "asa": "Species knockout field, torpor behavior and ASA appearance; Simple Kibble page corroborates food.",
      "comparisonLimitations": "Indexed excerpts only. Full article comparison, revision/contributor history, exhaustive ASA map coverage and firsthand official PvE checks remain pending. No external prose, numerical tables or calculator code imported."
    }
  }
});

// Original species summaries reviewed October 7, 2026.
Object.assign(tamingGuides, {
  "Oviraptor": {
    "method": "knockout",
    "overview": "Oviraptor uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Eggs are its taming food; larger eggs are generally preferred. Both fertilized and unfertilized eggs are documented. Ordinary meat is for feeding after taming. Numerical quantities and times are pending.",
    "preparation": "Prepare eggs and bolas before approaching. Choose a careful torpor method for this small, fragile animal.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Hold it within reach with a bola and monitor its health during knockout; excessive damage can kill it. Do not rely on carrying a wild one with a flyer on official PvE.",
    "tips": "Hold it within reach with a bola and monitor its health during knockout; excessive damage can kill it. Do not rely on carrying a wild one with a flyer on official PvE.",
    "sources": [
      [
        "ARK Community Wiki: Oviraptor",
        "https://ark.wiki.gg/wiki/Oviraptor"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species egg-feeding and bola knockout passages; ASA egg-collection and Aberrant variant patch notes were distinguished from taming. No PvP-only wild carrying advice included.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Pachyrhinosaurus": {
    "method": "knockout",
    "overview": "Pachyrhinosaurus uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Bug Repellant is the documented preferred taming food. Place it in the unconscious creature\u2019s inventory; using repellent on yourself is a different interaction. Numerical quantities and times are pending.",
    "preparation": "Bring food and supplies to maintain torpor, and choose a safe position before the knockout.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Watch torpor closely: it can drain quickly. Do not leave the unconscious animal unattended while waiting for it to feed.",
    "tips": "Watch torpor closely: it can drain quickly. Do not leave the unconscious animal unattended while waiting for it to feed.",
    "sources": [
      [
        "ARK Community Wiki: Pachyrhinosaurus",
        "https://ark.wiki.gg/wiki/Pachyrhinosaurus"
      ],
      [
        "Bug Repellant",
        "https://ark.wiki.gg/wiki/Bug_Repellant"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species knockout and Bug Repellant fields corroborated by item page; mobile, Primitive Plus and numerical food tables excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Paraceratherium": {
    "method": "knockout",
    "overview": "Paraceratherium uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Superior Kibble is its documented preferred kibble. Numerical food requirements remain pending independent ASA checks.",
    "preparation": "Bring a torpor weapon and food, and leave enough room to retreat from this large animal.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Do not underestimate its movement or reach. Apply torpor from a safe position and stop damaging it after knockout.",
    "tips": "Do not underestimate its movement or reach. Apply torpor from a safe position and stop damaging it after knockout.",
    "sources": [
      [
        "ARK Community Wiki: Paraceratherium",
        "https://ark.wiki.gg/wiki/Paraceratherium"
      ],
      [
        "Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ],
      [
        "The Writhing Swamps",
        "https://ark.wiki.gg/wiki/The_Writhing_Swamps"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Base-species Paracer redirect supplies knockout and food passages with ASA multipliers; Writhing Swamps supplies habitat context. Variant and old food quantities excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Pelagornis": {
    "method": "knockout",
    "overview": "Pelagornis uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Regular Kibble is documented for taming. Raw Fish Meat and Raw Prime Fish Meat are food alternatives; do not substitute ordinary land-animal meat. Numerical quantities and times are pending.",
    "preparation": "Prepare food and a safe landing area before applying torpor. Scout nearby predators and avoid losing the target over dangerous water.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "It can take flight when attacked. Plan how to keep it within reach and protect it after it becomes unconscious.",
    "tips": "It can take flight when attacked. Plan how to keep it within reach and protect it after it becomes unconscious.",
    "sources": [
      [
        "ARK Community Wiki: Pelagornis",
        "https://ark.wiki.gg/wiki/Pelagornis"
      ],
      [
        "Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ],
      [
        "Raw Prime Fish Meat",
        "https://ark.wiki.gg/wiki/Raw_Prime_Fish_Meat"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species-indexed knockout and current kibble facts were checked with fish-food pages and biome/spawn entries. Eerie redirect text mixes versions; only base-species facts retained, quantities and old bugs excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Phiomia": {
    "method": "knockout",
    "overview": "Phiomia uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Basic Kibble is its documented preferred kibble. Berry alternatives are documented; quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Prepare a torpor weapon and food. Plan for a fleeing target and clear nearby predators.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Keep it within reach without pursuing it into danger. After knockout, stop attacking and monitor it while it eats.",
    "tips": "Keep it within reach without pursuing it into danger. After knockout, stop attacking and monitor it while it eats.",
    "sources": [
      [
        "ARK Community Wiki: Phiomia",
        "https://ark.wiki.gg/wiki/Phiomia"
      ],
      [
        "Basic Kibble",
        "https://ark.wiki.gg/wiki/Basic_Kibble"
      ],
      [
        "Southern Jungle",
        "https://ark.wiki.gg/wiki/Southern_Jungle"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Individual species knockout and skittish behavior plus Basic Kibble and Southern Jungle passages; Primitive Plus meat-harvesting facts and numerical tables excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Plesiosaur": {
    "method": "knockout",
    "overview": "Plesiosaur uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Superior Kibble is documented for taming. Food quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Bring underwater breathing supplies, a torpor weapon usable in water and taming food. Prepare an escape route and check nearby ocean threats.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Remain equipped to breathe while applying torpor and monitoring the unconscious animal. Exact depth-boundary or trapping strategies remain pending ASA checks.",
    "tips": "Remain equipped to breathe while applying torpor and monitoring the unconscious animal. Exact depth-boundary or trapping strategies remain pending ASA checks.",
    "sources": [
      [
        "ARK Community Wiki: Plesiosaur",
        "https://ark.wiki.gg/wiki/Plesiosaur"
      ],
      [
        "Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species Plesio redirect supplies knockout and deep-water habitat, corroborated by preferred-kibble references. Legacy movement/stat and numerical tables excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Procoptodon": {
    "method": "knockout",
    "overview": "Procoptodon uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Rare Mushrooms are documented taming food; Plant Species X Seeds are another documented option. Do not assume berries or ordinary kibble can replace them. Numerical quantities and times are pending.",
    "preparation": "Collect suitable food first, bring a torpor weapon and plan a position that limits its escape.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "It can escape quickly; keep the animal within reach while applying torpor. Stop attacking when unconscious and monitor its feeding.",
    "tips": "It can escape quickly; keep the animal within reach while applying torpor. Stop attacking when unconscious and monitor its feeding.",
    "sources": [
      [
        "ARK Community Wiki: Procoptodon",
        "https://ark.wiki.gg/wiki/Procoptodon"
      ],
      [
        "Rare Mushroom",
        "https://ark.wiki.gg/wiki/Rare_Mushroom"
      ],
      [
        "Plant Species X Seed",
        "https://ark.wiki.gg/wiki/Plant_Species_X_Seed"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species Proctodon redirect supplies knockout and food facts with ASA patch notes; precise food quantities and variant-specific mechanics excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Pulmonoscorpius": {
    "method": "knockout",
    "overview": "Pulmonoscorpius uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Regular Kibble and Spoiled Meat are documented taming foods. Raw Prime Meat is not a substitute for the scorpion\u2019s documented taming diet. Numerical quantities and times are pending.",
    "preparation": "Bring a bola, a torpor weapon and food. Clear nearby threats and keep an escape route available.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "A bola can restrain it, but its sting can apply torpor. Keep out of stinging reach during knockout, then protect it while it feeds.",
    "tips": "A bola can restrain it, but its sting can apply torpor. Keep out of stinging reach during knockout, then protect it while it feeds.",
    "sources": [
      [
        "ARK Community Wiki: Pulmonoscorpius",
        "https://ark.wiki.gg/wiki/Pulmonoscorpius"
      ],
      [
        "Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ],
      [
        "Spoiled Meat",
        "https://ark.wiki.gg/wiki/Spoiled_Meat"
      ],
      [
        "Far%27s Peak",
        "https://ark.wiki.gg/wiki/Far%27s_Peak"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species Scorpion redirect supplies knockout strategy, food and ASA multiplier passages; mountain-region entries corroborate habitat. PvP carrying advice and numerical tables excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Purlovia": {
    "method": "knockout",
    "overview": "Purlovia uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Regular Kibble is documented for taming; Raw Mutton is another documented food. Quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Prepare a torpor weapon and a safe shooting position. Watch the ground for a buried ambush and clear other threats.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Use a safe position when it emerges; a buried Purlovia can ambush a rider. Cave and Polar variants are outside this base-species guide and may not be tameable.",
    "tips": "Use a safe position when it emerges; a buried Purlovia can ambush a rider. Cave and Polar variants are outside this base-species guide and may not be tameable.",
    "sources": [
      [
        "ARK Community Wiki: Purlovia",
        "https://ark.wiki.gg/wiki/Purlovia"
      ],
      [
        "Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Base species knockout, kibble and ASA-specific no-redwood note compared with biome cold-region listings. Polar/cave/mission variants and legacy numerical tables excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  },
  "Ravager": {
    "method": "knockout",
    "overview": "Ravager uses a knockout tame. Apply torpor until it is unconscious, add suitable taming food to its inventory and protect it while it eats.",
    "food": "Cooked Lamb Chop and Raw Prime Meat are documented foods. Exact food rankings, quantities and feeding times remain pending independent ASA checks.",
    "preparation": "Bring bolas, food and a torpor weapon. Separate the target from its pack and prepare to defend the knockout area.",
    "steps": [
      "Prepare food, torpor supplies and a safe position",
      "Knock it unconscious and stop attacking",
      "Put taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Restrain the target with a bola and keep its packmates away before applying torpor. Pack support makes an isolated target easier to handle.",
    "tips": "Restrain the target with a bola and keep its packmates away before applying torpor. Pack support makes an isolated target easier to handle.",
    "sources": [
      [
        "ARK Community Wiki: Ravager",
        "https://ark.wiki.gg/wiki/Ravager"
      ],
      [
        "Cooked Lamb Chop",
        "https://ark.wiki.gg/wiki/Cooked_Lamb_Chop"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ],
      [
        "Spawn entries",
        "https://ark.wiki.gg/wiki/Spawn_entries"
      ]
    ],
    "checked": "2026-10-07",
    "scope": "ASA base species on official PvE; distinct variants, mobile and mod mechanics excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Direct species page returned 403; individual search-indexed species, food and habitat passages reviewed.",
      "asa": "Species knockout, pack/bola strategy and foods reviewed independently; current species has ASA imagery. Fertile Chamber biome identifies native Ravager; no invented Aberrant variant.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. No source prose, external numerical tables or competitor code imported."
    }
  }
});

// Original species summaries reviewed October 8, 2026.
Object.assign(tamingGuides, {
  "Sabertooth": {
    "method": "knockout",
    "overview": "Sabertooth uses a knockout tame: apply torpor, then let it eat from its inventory while unconscious.",
    "food": "Regular Kibble or Raw Mutton. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring bolas, a torpor weapon and taming food; clear nearby predators.",
    "steps": [
      "Secure a safe knockout area and prepare food",
      "Apply torpor until unconscious, then stop attacking",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Restrain it with a bola or shoot from a safe elevated position.",
    "tips": "Restrain it with a bola or shoot from a safe elevated position.",
    "sources": [
      [
        "ARK Community Wiki: Sabertooth",
        "https://ark.wiki.gg/wiki/Sabertooth"
      ],
      [
        "Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ],
      [
        "Spawn entries",
        "https://ark.wiki.gg/wiki/Spawn_entries"
      ]
    ],
    "checked": "2026-10-08",
    "scope": "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Search-indexed individual species passages reviewed; direct Sabertooth access returned 403, limiting full-article comparison.",
      "asa": "Species knockout, food, bola strategy and ASA body-multiplier section reviewed; mountain habitat compared with Spawn entries.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. Original summaries only; no source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Spino": {
    "method": "knockout",
    "overview": "Spino uses a knockout tame: apply torpor, then let it eat from its inventory while unconscious.",
    "food": "Exceptional Kibble or Raw Prime Fish Meat. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Prepare torpor supplies, food and a dry knockout area away from deep water.",
    "steps": [
      "Secure a safe knockout area and prepare food",
      "Apply torpor until unconscious, then stop attacking",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Keep the knockout on dry ground: a fleeing Spino can enter water and drown after falling unconscious.",
    "tips": "Keep the knockout on dry ground: a fleeing Spino can enter water and drown after falling unconscious.",
    "sources": [
      [
        "ARK Community Wiki: Spino",
        "https://ark.wiki.gg/wiki/Spino"
      ],
      [
        "Exceptional Kibble",
        "https://ark.wiki.gg/wiki/Exceptional_Kibble"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ],
      [
        "Spawn entries",
        "https://ark.wiki.gg/wiki/Spawn_entries"
      ]
    ],
    "checked": "2026-10-08",
    "scope": "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Search-indexed individual species passages reviewed; direct Sabertooth access returned 403, limiting full-article comparison.",
      "asa": "Species redirects resolve to the base Spino article with ASA sections; knockout and food facts corroborated by Exceptional Kibble. Variant-specific combat and numerical tables excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. Original summaries only; no source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Tapejara": {
    "method": "knockout",
    "overview": "Tapejara uses a knockout tame: apply torpor, then let it eat from its inventory while unconscious.",
    "food": "Superior Kibble or Raw Mutton. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring bolas, a torpor weapon, food and Ghillie Armor for a cautious approach.",
    "steps": [
      "Secure a safe knockout area and prepare food",
      "Apply torpor until unconscious, then stop attacking",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Approach quietly and bola it before applying torpor. Be ready if restraint ends before the knockout.",
    "tips": "Approach quietly and bola it before applying torpor. Be ready if restraint ends before the knockout.",
    "sources": [
      [
        "ARK Community Wiki: Tapejara",
        "https://ark.wiki.gg/wiki/Tapejara"
      ],
      [
        "Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ],
      [
        "Spawn entries",
        "https://ark.wiki.gg/wiki/Spawn_entries"
      ]
    ],
    "checked": "2026-10-08",
    "scope": "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Search-indexed individual species passages reviewed; direct Sabertooth access returned 403, limiting full-article comparison.",
      "asa": "Species knockout, food, skittish behavior and ASA color section reviewed. Biomes forest listings and Scorched Earth mountain Spawn entries support general habitat examples.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. Original summaries only; no source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Terror Bird": {
    "method": "knockout",
    "overview": "Terror Bird uses a knockout tame: apply torpor, then let it eat from its inventory while unconscious.",
    "food": "Regular Kibble or Raw Mutton. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring bolas, food and torpor maintenance supplies; keep nearby threats away.",
    "steps": [
      "Secure a safe knockout area and prepare food",
      "Apply torpor until unconscious, then stop attacking",
      "Place taming food in its inventory",
      "Monitor torpor, protect it and confirm completion in game"
    ],
    "specialAction": "Use a bola to hold the target for torpor shots. Watch its torpor closely after the knockout.",
    "tips": "Use a bola to hold the target for torpor shots. Watch its torpor closely after the knockout.",
    "sources": [
      [
        "ARK Community Wiki: Terror Bird",
        "https://ark.wiki.gg/wiki/Terror_Bird"
      ],
      [
        "Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ],
      [
        "Spawn entries",
        "https://ark.wiki.gg/wiki/Spawn_entries"
      ]
    ],
    "checked": "2026-10-08",
    "scope": "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Search-indexed individual species passages reviewed; direct Sabertooth access returned 403, limiting full-article comparison.",
      "asa": "Species bola strategy, food, rapid torpor loss and ASA animation note reviewed. General forest/redwood habitat compared with Biomes and Spawn entries; wild carrying advice excluded for official PvE.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. Original summaries only; no source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Shinehorn": {
    "method": "passive",
    "overview": "Shinehorn uses passive feeding. Approach while it is awake and offer food through the interaction prompt.",
    "food": "Plant Species Z Seed or Aggeravic Mushroom. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Prepare food in the far-right hotbar slot and secure the nearby area before approaching.",
    "steps": [
      "Place taming food in the far-right hotbar slot",
      "Approach and use the feeding prompt",
      "Wait for another prompt before feeding again",
      "Protect it until taming completes"
    ],
    "specialAction": "Feed through the interaction prompt, then wait for the next feeding prompt. Do not use a knockout.",
    "tips": "Feed through the interaction prompt, then wait for the next feeding prompt. Do not use a knockout.",
    "sources": [
      [
        "ARK Community Wiki: Shinehorn",
        "https://ark.wiki.gg/wiki/Shinehorn"
      ],
      [
        "Plant Species Z Seed",
        "https://ark.wiki.gg/wiki/Plant_Species_Z_Seed"
      ],
      [
        "Aggeravic Mushroom",
        "https://ark.wiki.gg/wiki/Aggeravic_Mushroom"
      ],
      [
        "Taming",
        "https://ark.wiki.gg/wiki/Taming"
      ],
      [
        "Aberration",
        "https://ark.wiki.gg/wiki/Aberration"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ]
    ],
    "checked": "2026-10-08",
    "scope": "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Search-indexed individual species passages reviewed; direct Sabertooth access returned 403, limiting full-article comparison.",
      "asa": "Species non-violent taming, foods, Bioluminescent habitat and explicit ASA Valguero note reviewed. Legacy numerical tables and other-map claims excluded.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. Original summaries only; no source prose, competitor data, artwork or calculator code imported."
    }
  },
  "Featherlight": {
    "method": "passive",
    "overview": "Featherlight uses passive feeding. Approach while it is awake and offer food through the interaction prompt.",
    "food": "Plant Species Z Seed or Auric Mushroom. Quantities, feeding times and effectiveness remain pending independent ASA checks.",
    "preparation": "Prepare hotbar food and a safe approach. For radioactive Aberration areas, bring radiation protection and charge-light support.",
    "steps": [
      "Place taming food in the far-right hotbar slot",
      "Approach and use the feeding prompt",
      "Wait for another prompt before feeding again",
      "Protect it until taming completes"
    ],
    "specialAction": "Feed through the interaction prompt and return when it is ready again. Avoid attacking: it can fly away.",
    "tips": "Feed through the interaction prompt and return when it is ready again. Avoid attacking: it can fly away.",
    "sources": [
      [
        "ARK Community Wiki: Featherlight",
        "https://ark.wiki.gg/wiki/Featherlight"
      ],
      [
        "Plant Species Z Seed",
        "https://ark.wiki.gg/wiki/Plant_Species_Z_Seed"
      ],
      [
        "Auric Mushroom",
        "https://ark.wiki.gg/wiki/Auric_Mushroom"
      ],
      [
        "Taming",
        "https://ark.wiki.gg/wiki/Taming"
      ],
      [
        "Aberration",
        "https://ark.wiki.gg/wiki/Aberration"
      ],
      [
        "Biomes",
        "https://ark.wiki.gg/wiki/Biomes"
      ],
      [
        "The Lost Roads (Aberration)",
        "https://ark.wiki.gg/wiki/The_Lost_Roads_(Aberration)"
      ]
    ],
    "checked": "2026-10-08",
    "scope": "ASA base species on official PvE; mobile, mods and distinct variants excluded. Numerical requirements and unverified mechanics pending.",
    "provenance": {
      "access": "Search-indexed individual species passages reviewed; direct Sabertooth access returned 403, limiting full-article comparison.",
      "asa": "Species base-article redirect supplies food, passive behavior and ASA color sections; non-violent method corroborated by Taming and the Japanese species article. Lost Roads and Aberration region references support native Element habitat; no invented Aberrant variant.",
      "comparisonLimitations": "Full article, revision/contributor history and exhaustive ASA map comparison unavailable. Firsthand official PvE testing and numerical estimates pending. Original summaries only; no source prose, competitor data, artwork or calculator code imported."
    }
  }
});
// Original passive/special summaries reviewed October 10, 2026.
Object.assign(tamingGuides, {
  "Glowtail": {
    "method": "passive",
    "overview": "Keep the Glowtail conscious and hand-feed it from the last hotbar slot when its feeding prompt appears.",
    "food": "Plant Species Z Seed is preferred; Ascerbic Mushroom is another taming food. Quantities and feeding times remain pending.",
    "preparation": "Bring food and equipment suited to the cave. Check for nearby threats and find a safe, dry approach.",
    "steps": [
      "Place taming food in the last hotbar slot",
      "Approach the conscious Glowtail on dry ground",
      "Feed when prompted",
      "Wait for the next prompt and repeat"
    ],
    "specialAction": "A Glowtail in water cannot be fed; use a dry feeding position.",
    "tips": [
      "A Glowtail in water cannot be fed; use a dry feeding position."
    ],
    "sources": [
      [
        "ARK Community Wiki: Glowtail",
        "https://ark.wiki.gg/wiki/Glowtail"
      ],
      [
        "ARK Community Wiki: Plant Species Z Seed",
        "https://ark.wiki.gg/wiki/Plant_Species_Z_Seed"
      ],
      [
        "ARK Community Wiki: Ascerbic Mushroom",
        "https://ark.wiki.gg/wiki/Ascerbic_Mushroom"
      ]
    ],
    "checked": "2026-10-10",
    "scope": "ASA base species for official PvE; mods, mobile and distinct variants excluded. Numerical requirements pending.",
    "provenance": {
      "access": "Individually indexed species and food passages reviewed; direct Glowtail article access returned 403.",
      "asa": "Base passive feeding, food and ASA color sections reviewed; cave habitats compared with Biomes, Spawn entries and Old Railway Cave.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive ASA map/variant comparison and firsthand official PvE testing remain pending. No numerical tables, source prose, competitor datasets, artwork or calculator code imported."
    }
  },
  "Roll Rat": {
    "method": "special",
    "overview": "Roll Rat uses a special honey tame: throw honey into its hole during a genuine burrow.",
    "food": "Giant Bee Honey is its taming food. Its later herbivore diet does not replace honey for taming. Numerical requirements remain pending.",
    "preparation": "Bring honey and clear threats without starting a fight near the rat. Watch its digging before committing food.",
    "steps": [
      "Put one Giant Bee Honey in the last hotbar slot",
      "Watch for the tail-up burrowing animation and aim at the hole as it goes underground",
      "Activate that hotbar slot to throw honey into the hole; on PlayStation or Xbox, use the controller shortcut shown for the slot",
      "Repeat during later burrows while keeping it out of combat"
    ],
    "specialAction": "Throw honey from the hotbar into the burrow, rather than dropping an inventory package. Some digging attempts only uncover food, so avoid throwing at every digging motion. Leave its unearthed gems alone: taking them makes it aggressive, and entering combat resets the tame. Player-reported visual cue: a feeding opportunity leaves the rat underground at a visible hole; a brief head-down rooting motion may be a false dig. This exact visual distinction still needs current ASA official PvE confirmation.",
    "tips": [
      "Throw honey from the hotbar into the burrow, rather than dropping an inventory package. Some digging attempts only uncover food, so avoid throwing at every digging motion. Leave its unearthed gems alone: taking them makes it aggressive, and entering combat resets the tame. Player-reported visual cue: a feeding opportunity leaves the rat underground at a visible hole; a brief head-down rooting motion may be a false dig. This exact visual distinction still needs current ASA official PvE confirmation."
    ],
    "sources": [
      [
        "ARK Community Wiki: Roll Rat",
        "https://ark.wiki.gg/wiki/Roll_Rat"
      ],
      [
        "ARK Community Wiki: Giant Bee Honey",
        "https://ark.wiki.gg/wiki/Giant_Bee_Honey"
      ]
    ],
    "checked": "2026-10-10",
    "scope": "ASA base species for official PvE; mods, mobile and distinct variants excluded. Numerical requirements pending.",
    "provenance": {
      "access": "Individually indexed species and food passages reviewed; direct Glowtail article access returned 403.",
      "asa": "Base honey-burrow method, false digs, gem aggression and combat reset reviewed in indexed wiki passages. User-supplied PlayStation/Xbox hotbar advice summarized without unverified exact bindings. ASA PS5 player report corroborates hotbar throwing. Exact feeding-versus-foraging visual cues remain player-reported, not firsthand official PvE verified. Last slot is recommended; no hardcoded exclusivity claim, since Honey wiki says any hotbar slot can throw.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive ASA map/variant comparison and firsthand official PvE testing remain pending. No numerical tables, source prose, competitor datasets, artwork or calculator code imported."
    }
  },
  "Chalicotherium": {
    "method": "passive",
    "overview": "Feed a conscious Chalicotherium cautiously from the last hotbar slot, then give it room while waiting for the next prompt.",
    "food": "Beer Jar is the preferred taming food. Stimberries are a much slower alternative. Quantities and feeding intervals remain pending.",
    "preparation": "Prepare Beer Jars, clear nearby threats and approach from behind. Ghillie gear can help with a quiet approach.",
    "steps": [
      "Place Beer Jars in the last hotbar slot",
      "Approach from behind without crowding it",
      "Feed at the prompt",
      "Back away and repeat when it is ready"
    ],
    "specialAction": "Getting too close can provoke it. Allow space between feeds and wait for the prompt.",
    "tips": [
      "Getting too close can provoke it. Allow space between feeds and wait for the prompt."
    ],
    "sources": [
      [
        "ARK Community Wiki: Chalicotherium",
        "https://ark.wiki.gg/wiki/Chalicotherium"
      ],
      [
        "ARK Community Wiki: Beer Jar",
        "https://ark.wiki.gg/wiki/Beer_Jar"
      ]
    ],
    "checked": "2026-10-10",
    "scope": "ASA base species for official PvE; mods, mobile and distinct variants excluded. Numerical requirements pending.",
    "provenance": {
      "access": "Individually indexed species and food passages reviewed; direct Glowtail article access returned 403.",
      "asa": "Base passive Beer Jar feeding compared with the species ASA notes; post-tame beer consumption is distinct from taming. Corrupted and mod variants excluded.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive ASA map/variant comparison and firsthand official PvE testing remain pending. No numerical tables, source prose, competitor datasets, artwork or calculator code imported."
    }
  },
  "Vulture": {
    "method": "passive",
    "overview": "Keep the Vulture conscious and feed it through the prompt using food in the last hotbar slot.",
    "food": "Spoiled Meat is preferred; Raw Meat is also accepted. Quantities and feeding times remain pending.",
    "preparation": "Bring Spoiled Meat and choose an area without nearby corpses. Avoid killing creatures beside the Vulture during the attempt.",
    "steps": [
      "Place Spoiled Meat in the last hotbar slot",
      "Approach a calm Vulture",
      "Feed when prompted",
      "Wait for its next feeding prompt and repeat"
    ],
    "specialAction": "Nearby corpses can make it aggressive, so keep the feeding area clear of fresh kills.",
    "tips": [
      "Nearby corpses can make it aggressive, so keep the feeding area clear of fresh kills."
    ],
    "sources": [
      [
        "ARK Community Wiki: Vulture",
        "https://ark.wiki.gg/wiki/Vulture"
      ],
      [
        "ARK Community Wiki: Spoiled Meat",
        "https://ark.wiki.gg/wiki/Spoiled_Meat"
      ]
    ],
    "checked": "2026-10-10",
    "scope": "ASA base species for official PvE; mods, mobile and distinct variants excluded. Numerical requirements pending.",
    "provenance": {
      "access": "Individually indexed species and food passages reviewed; direct Glowtail article access returned 403.",
      "asa": "Base passive method and food reviewed with ASA-specific body-multiplier notes; desert habitats compared with Biomes and Spawn entries. Mission and mod variants excluded.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive ASA map/variant comparison and firsthand official PvE testing remain pending. No numerical tables, source prose, competitor datasets, artwork or calculator code imported."
    }
  }
});
const gigaTlcNotice="Upcoming change: Wildcard announced a Giganotosaurus TLC for November 6, 2026. The preview describes a different taming challenge; practical steps and official-live rollout remain pending. This guide retains the current knockout method.";
tamingGuides.Giganotosaurus.tips=[...(tamingGuides.Giganotosaurus.tips||[]),gigaTlcNotice];
tamingGuides.Giganotosaurus.upcomingChange={announced:true,targetDate:"2026-11-06",status:"Upcoming; not substituted for the current live method",checked:"2026-10-10",source:"https://survivetheark.com/index.php?/forums/topic/774274-community-crunch-527-trial-by-fury/"};
tamingGuides.Giganotosaurus.announcementReviewed="2026-10-10";
tamingGuides.Giganotosaurus.sources.push(["Studio Wildcard: Community Crunch 527","https://survivetheark.com/index.php?/forums/topic/774274-community-crunch-527-trial-by-fury/"]);
// Original guide review, October 11, 2026.
Object.assign(tamingGuides,{
  "Griffin": {
    "method": "knockout",
    "overview": "Knock the Griffin unconscious with torpor weapons, then feed it and protect it while it tames.",
    "food": "Extraordinary Kibble is preferred. Food quantities, duration and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring tranqs, kibble and torpor supplies. Plan a protected firing position and room to contain a flying creature.",
    "steps": [
      "Prepare food, torpor supplies and a protected position",
      "Apply torpor until the Griffin falls unconscious",
      "Place taming food in its inventory",
      "Monitor torpor and protect the tame"
    ],
    "specialAction": "Stone doorframes can provide a barrier for shooting. A suitable layout and safe approach still need to be checked at the chosen location.",
    "tips": [
      "Stone doorframes can provide a barrier for shooting. A suitable layout and safe approach still need to be checked at the chosen location."
    ],
    "sources": [
      [
        "ARK Community Wiki: Griffin",
        "https://ark.wiki.gg/wiki/Griffin"
      ],
      [
        "ARK Community Wiki: Extraordinary Kibble",
        "https://ark.wiki.gg/wiki/Extraordinary_Kibble"
      ]
    ],
    "checked": "2026-10-11",
    "scope": "ASA base species for official PvE, where encounter eligibility allows taming; mobile, mod and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food and habitat passages reviewed. Direct Manta article returned 403.",
      "asa": "Base knockout, current kibble and ASA material distinguished from Mobile Royal Griffin respect and special-kibble mechanics; rocky habitat compared with Biomes.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive official ASA map/variant comparison, firsthand testing and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Velonasaur": {
    "method": "knockout",
    "overview": "Velonasaur uses a knockout tame. Apply torpor from cover, then feed it once unconscious.",
    "food": "Regular Kibble is preferred; Raw Mutton is also accepted. Quantities, duration and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring tranqs, food, torpor supplies and protection against its ranged quills. Clear other nearby threats before engaging.",
    "steps": [
      "Choose cover and a clear approach",
      "Apply torpor while avoiding its quills",
      "Add taming food after it is unconscious",
      "Maintain torpor and protect it until completion"
    ],
    "specialAction": "Its quill barrage can damage both you and your armor. Use terrain or prepared cover while applying torpor.",
    "tips": [
      "Its quill barrage can damage both you and your armor. Use terrain or prepared cover while applying torpor."
    ],
    "sources": [
      [
        "ARK Community Wiki: Velonasaur",
        "https://ark.wiki.gg/wiki/Velonasaur"
      ],
      [
        "ARK Community Wiki: Regular Kibble",
        "https://ark.wiki.gg/wiki/Regular_Kibble"
      ]
    ],
    "checked": "2026-10-11",
    "scope": "ASA base species for official PvE, where encounter eligibility allows taming; mobile, mod and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food and habitat passages reviewed. Direct Manta article returned 403.",
      "asa": "Base knockout and food passages with ASA sections reviewed; R and mission variants excluded. Desert Dome habitat compared with Biomes.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive official ASA map/variant comparison, firsthand testing and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Yutyrannus": {
    "method": "knockout",
    "overview": "Knock the Yutyrannus unconscious, then provide taming food and monitor it until the tame finishes.",
    "food": "Extraordinary Kibble is preferred; Raw Mutton is another option. Quantities, duration and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring tranqs, food, torpor supplies and clothing suited to the region. Deal with accompanying Carnos before focusing on the Yutyrannus.",
    "steps": [
      "Prepare a protected position and clear nearby threats",
      "Apply torpor until it is unconscious",
      "Put taming food in its inventory",
      "Watch torpor and keep attackers away"
    ],
    "specialAction": "Its fear roar and nearby Carnos can disrupt the attempt. Plan containment and an escape route before the first shot.",
    "tips": [
      "Its fear roar and nearby Carnos can disrupt the attempt. Plan containment and an escape route before the first shot."
    ],
    "sources": [
      [
        "ARK Community Wiki: Yutyrannus",
        "https://ark.wiki.gg/wiki/Yutyrannus"
      ],
      [
        "ARK Community Wiki: Extraordinary Kibble",
        "https://ark.wiki.gg/wiki/Extraordinary_Kibble"
      ]
    ],
    "checked": "2026-10-11",
    "scope": "ASA base species for official PvE, where encounter eligibility allows taming; mobile, mod and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food and habitat passages reviewed. Direct Manta article returned 403.",
      "asa": "Base knockout, foods, Carno warning and ASA notes reviewed; X, mission, Revenant and other distinct variants excluded. Cold habitats corroborated by Biomes.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive official ASA map/variant comparison, firsthand testing and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Manta": {
    "method": "passive",
    "overview": "Manta is a passive tame. Keep it conscious and approach carefully for feeding opportunities.",
    "food": "Use AnglerGel for taming. Its post-tame meat diet does not replace this taming food. Quantities and feeding times remain pending.",
    "preparation": "Bring AnglerGel, Bug Repellant and swimming equipment. Pick a manageable stretch of water with a route away from threats.",
    "steps": [
      "Prepare AnglerGel for passive feeding",
      "Apply Bug Repellant and approach from behind",
      "Feed the conscious Manta when prompted",
      "Wait for the next feeding opportunity and repeat"
    ],
    "specialAction": "Bug Repellant helps the approach, but contact can still provoke it. Watch for other Mantas and retreat if the group becomes aggressive.",
    "tips": [
      "Bug Repellant helps the approach, but contact can still provoke it. Watch for other Mantas and retreat if the group becomes aggressive."
    ],
    "sources": [
      [
        "ARK Community Wiki: Manta",
        "https://ark.wiki.gg/wiki/Manta"
      ],
      [
        "ARK Community Wiki: AnglerGel",
        "https://ark.wiki.gg/wiki/AnglerGel"
      ],
      [
        "ARK Community Wiki: Bug Repellant",
        "https://ark.wiki.gg/wiki/Bug_Repellant"
      ]
    ],
    "checked": "2026-10-11",
    "scope": "ASA base species for official PvE, where encounter eligibility allows taming; mobile, mod and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food and habitat passages reviewed. Direct Manta article returned 403.",
      "asa": "Base passive method and AnglerGel confirmed in species/item passages with ASA sections; Mobile forms and numerical legacy tables excluded. Ocean habitat compared with Biomes and Spawn entries.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive official ASA map/variant comparison, firsthand testing and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Onyc": {
    "method": "passive",
    "overview": "A tameable Onyc is fed non-violently while conscious. Use Bug Repellant and wait for the feeding prompt.",
    "food": "Raw Mutton is accepted for taming. Other food priorities, quantities and feeding intervals remain pending independent ASA checks.",
    "preparation": "Bring food and Bug Repellant. Check the in-game player-level requirement and the encounter’s tameability; clear combat and corpse distractions.",
    "steps": [
      "Apply Bug Repellant and place food in the last hotbar slot",
      "Approach a calm, tameable Onyc without touching it",
      "Feed at the prompt",
      "Back away and repeat when hungry again"
    ],
    "specialAction": "Touching it can trigger aggression despite repellent. An Onyc fighting another creature or feeding on a corpse cannot be fed; not every cave encounter is eligible.",
    "tips": [
      "Touching it can trigger aggression despite repellent. An Onyc fighting another creature or feeding on a corpse cannot be fed; not every cave encounter is eligible."
    ],
    "sources": [
      [
        "ARK Community Wiki: Onyc",
        "https://ark.wiki.gg/wiki/Onyc"
      ],
      [
        "ARK Community Wiki: Raw Mutton",
        "https://ark.wiki.gg/wiki/Raw_Mutton"
      ],
      [
        "ARK Community Wiki: Bug Repellant",
        "https://ark.wiki.gg/wiki/Bug_Repellant"
      ]
    ],
    "checked": "2026-10-11",
    "scope": "ASA base species for official PvE, where encounter eligibility allows taming; mobile, mod and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food and habitat passages reviewed. Direct Manta article returned 403.",
      "asa": "Species passive feeding and ASA body-multiplier sections reviewed; cave and castle spawn types compared with Spawn entries. Mission/VR and restricted cave encounters excluded; exact ASA cave eligibility remains pending.",
      "comparisonLimitations": "Full article, revision/contributor history, exhaustive official ASA map/variant comparison, firsthand testing and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});
// Original guide review, October 12, 2026.
Object.assign(tamingGuides,{
  "Gasbags": {
    "method": "knockout",
    "overview": "Gasbags uses a knockout tame. Apply torpor until it is unconscious, then feed it and keep it protected.",
    "food": "Superior Kibble is preferred. Alternative foods, quantities, duration and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring tranqs, kibble and torpor supplies. If available, a Snow Owl offers a documented way to freeze and deflate it. Choose a safe area and plan containment before it can launch away.",
    "steps": [
      "Prepare a protected position and supplies",
      "Apply torpor until the Gasbags is unconscious",
      "Add taming food to its inventory",
      "Monitor torpor and protect it until completion"
    ],
    "specialAction": "A documented option is to use a Snow Owl freeze to deflate the Gasbags, then continue the knockout while it is deflated. Plan containment because it can move or reinflate when released. Freezing does not itself apply knockout torpor. Exact freeze-to-shot timing and current ASA official PvE reliability remain unconfirmed.",
    "tips": [
      "A documented option is to use a Snow Owl freeze to deflate the Gasbags, then continue the knockout while it is deflated. Plan containment because it can move or reinflate when released. Freezing does not itself apply knockout torpor. Exact freeze-to-shot timing and current ASA official PvE reliability remain unconfirmed."
    ],
    "sources": [
      ["ARK Community Wiki: Snow Owl", "https://ark.wiki.gg/wiki/Snow_Owl"],
      [
        "ARK Community Wiki: Gasbags",
        "https://ark.wiki.gg/wiki/Gasbags"
      ],
      [
        "ARK Community Wiki: Superior Kibble",
        "https://ark.wiki.gg/wiki/Superior_Kibble"
      ]
    ],
    "checked": "2026-10-12",
    "scope": "ASA base species for official PvE where eligible; mobile, mods and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food, Biomes and Spawn entries passages reviewed; direct Gasbags article returned 403.",
      "asa": "Base knockout and Superior Kibble reviewed in species passages with ASA sections. R and mission variants excluded; wasteland/sulfur habitat compared with Biomes and Spawn entries. Gasbags and Snow Owl indexed passages document freezing as a deflation technique. User mentioned it as a heard-of method, not a firsthand test; current ASA official PvE freeze-to-shot timing remains unconfirmed.",
      "comparisonLimitations": "Full article and revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Liopleurodon": {
    "method": "passive",
    "overview": "Liopleurodon is hand-fed while conscious and becomes a temporary tame rather than a permanent addition.",
    "food": "Giant Bee Honey is its taming food. Feed quantities, intervals and exact temporary-tame duration remain pending independent ASA checks.",
    "preparation": "Bring honey and diving equipment, and check for nearby ocean predators. Plan around its temporary availability.",
    "steps": [
      "Put honey in the last hotbar slot",
      "Approach the conscious Liopleurodon",
      "Use the feeding prompt to hand-feed",
      "Repeat at later prompts until tamed"
    ],
    "specialAction": "Use the creature’s feeding prompt rather than throwing honey. Its temporary tame and loot-related buff have separate durations; exact current ASA timings and effects remain pending.",
    "tips": [
      "Use the creature’s feeding prompt rather than throwing honey. Its temporary tame and loot-related buff have separate durations; exact current ASA timings and effects remain pending."
    ],
    "sources": [
      [
        "ARK Community Wiki: Liopleurodon",
        "https://ark.wiki.gg/wiki/Liopleurodon"
      ],
      [
        "ARK Community Wiki: Giant Bee Honey",
        "https://ark.wiki.gg/wiki/Giant_Bee_Honey"
      ]
    ],
    "checked": "2026-10-12",
    "scope": "ASA base species for official PvE where eligible; mobile, mods and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food, Biomes and Spawn entries passages reviewed; direct Gasbags article returned 403.",
      "asa": "Base passive honey feeding and temporary outcome reviewed with ASA species sections. Mobile kibble, permanent-tame mods and mission variants excluded; ocean Spawn entries reviewed.",
      "comparisonLimitations": "Full article and revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Mantis": {
    "method": "passive",
    "overview": "Keep the Mantis conscious and feed it cautiously from the last hotbar slot while using Bug Repellant.",
    "food": "Deathworm Horn is preferred; Woolly Rhino Horn is also accepted. Quantities, intervals and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring taming horns and Bug Repellant. Clear nearby threats and leave room to withdraw after feeding.",
    "steps": [
      "Apply Bug Repellant",
      "Place a taming horn in the last hotbar slot",
      "Approach carefully and feed at the prompt",
      "Withdraw and repeat when prompted"
    ],
    "specialAction": "Repellent reduces its aggression range but does not protect you if you bump into it or attack it.",
    "tips": [
      "Repellent reduces its aggression range but does not protect you if you bump into it or attack it."
    ],
    "sources": [
      [
        "ARK Community Wiki: Mantis",
        "https://ark.wiki.gg/wiki/Mantis"
      ],
      [
        "ARK Community Wiki: Deathworm Horn",
        "https://ark.wiki.gg/wiki/Deathworm_Horn"
      ],
      [
        "ARK Community Wiki: Woolly Rhino Horn",
        "https://ark.wiki.gg/wiki/Woolly_Rhino_Horn"
      ],
      [
        "ARK Community Wiki: Bug Repellant",
        "https://ark.wiki.gg/wiki/Bug_Repellant"
      ]
    ],
    "checked": "2026-10-12",
    "scope": "ASA base species for official PvE where eligible; mobile, mods and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food, Biomes and Spawn entries passages reviewed; direct Gasbags article returned 403.",
      "asa": "Base horn feeding, repellent behavior and ASA body-multiplier passages reviewed. Ghost, mission and mod variants excluded; desert/cave habitat compared with Biomes and Spawn entries.",
      "comparisonLimitations": "Full article and revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Titanoboa": {
    "method": "special",
    "overview": "Titanoboa uses a special non-violent egg tame: let a calm, eligible snake eat a fertilized egg dropped nearby.",
    "food": "Use fertilized eggs for taming. Unfertilized eggs used after taming are a separate diet. Egg preferences, quantities and timings remain pending independent ASA checks.",
    "preparation": "Bring fertilized eggs you can spare, clear distractions and plan a position outside its aggression. Confirm the encounter is tameable before committing valuable eggs.",
    "steps": [
      "Find a calm Titanoboa without a combat target",
      "Drop a fertilized egg near it",
      "Stay out of its aggression while it eats the egg",
      "Repeat without provoking or distracting it"
    ],
    "specialAction": "This is dropped-egg feeding, not a hand-feed prompt. If it is attacking you or another creature, it will not progress through the egg-feeding sequence.",
    "tips": [
      "This is dropped-egg feeding, not a hand-feed prompt. If it is attacking you or another creature, it will not progress through the egg-feeding sequence."
    ],
    "sources": [
      [
        "ARK Community Wiki: Titanoboa",
        "https://ark.wiki.gg/wiki/Titanoboa"
      ],
      [
        "ARK Community Wiki: Eggs",
        "https://ark.wiki.gg/wiki/Eggs"
      ]
    ],
    "checked": "2026-10-12",
    "scope": "ASA base species for official PvE where eligible; mobile, mods and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species, food, Biomes and Spawn entries passages reviewed; direct Gasbags article returned 403.",
      "asa": "Wiki labels the method passive; app special classification distinguishes dropped fertilized eggs from hotbar hand-feeding. Base ASA passages reviewed; Mobile non-tameability and mission variants excluded. Swamp/cave habitat corroborated by Biomes and Spawn entries.",
      "comparisonLimitations": "Full article and revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical formulas remain pending. Original summaries only; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});
// Original guide summaries reviewed October 13, 2026.
Object.assign(tamingGuides,{
  "Karkinos": {
    "method": "knockout",
    "overview": "Karkinos needs a siege-weapon knockout, followed by food placed in its inventory while unconscious.",
    "food": "Exceptional Kibble is preferred. Alternative foods, quantities, duration and effectiveness remain pending independent ASA checks.",
    "preparation": "Prepare a Catapult Turret, ammunition and a safe firing position. Clear nearby threats, including creatures in the water.",
    "steps": [
      "Prepare the siege weapon and a clear view of the main body",
      "Apply knockout hits to the main body",
      "Stop firing once it is unconscious",
      "Add food and protect it until tamed"
    ],
    "specialAction": "Ordinary tranq arrows, darts and animal torpor attacks do not knock it out. Aim the catapult at the main body; cannon setups and splash-damage precautions need separate practical verification.",
    "tips": [
      "Ordinary tranq arrows, darts and animal torpor attacks do not knock it out. Aim the catapult at the main body; cannon setups and splash-damage precautions need separate practical verification."
    ],
    "sources": [
      [
        "ARK Community Wiki: Karkinos",
        "https://ark.wiki.gg/wiki/Karkinos"
      ],
      [
        "ARK Community Wiki: Exceptional Kibble",
        "https://ark.wiki.gg/wiki/Exceptional_Kibble"
      ],
      [
        "ARK Community Wiki: Catapult Turret",
        "https://ark.wiki.gg/wiki/Catapult_Turret"
      ]
    ],
    "checked": "2026-10-13",
    "scope": "ASA base species on official PvE where encounters allow taming; numerical requirements and unverified methods pending.",
    "provenance": {
      "access": "Individually indexed species, item, biome and spawn passages reviewed; direct Karkinos article returned 403.",
      "asa": "Base body-hit siege knockout and foods reviewed in current species passages with ASA material. Alpha and mission encounters excluded. Native water habitat compared with Biomes.",
      "comparisonLimitations": "Full article, revision/contributor comparison, exhaustive official ASA map and variant eligibility, firsthand techniques and numerical verification pending. Original wording only; no competitor prose, datasets, assets or calculator code imported."
    }
  },
  "Rock Elemental": {
    "method": "knockout",
    "overview": "Rock Elemental needs a special weapon-based knockout. Use cannon hits to its head, then feed it once unconscious.",
    "food": "Extraordinary Kibble is preferred. Alternative foods, quantities, duration and effectiveness remain pending independent ASA checks.",
    "preparation": "Bring a cannon, ammunition and food. Prepare a protected firing position that gives a clear line to the head.",
    "steps": [
      "Prepare a safe cannon position and food",
      "Align shots with the head",
      "Stop firing when it falls unconscious",
      "Put food in its inventory and protect the tame"
    ],
    "specialAction": "Standard tranquilizers do not work. Head placement matters; avoid continuing damaging shots after knockout. Exact trap geometry and splash-damage mitigation remain pending.",
    "tips": [
      "Standard tranquilizers do not work. Head placement matters; avoid continuing damaging shots after knockout. Exact trap geometry and splash-damage mitigation remain pending."
    ],
    "sources": [
      [
        "ARK Community Wiki: Rock Elemental",
        "https://ark.wiki.gg/wiki/Rock_Elemental"
      ],
      [
        "ARK Community Wiki: Extraordinary Kibble",
        "https://ark.wiki.gg/wiki/Extraordinary_Kibble"
      ],
      [
        "ARK Community Wiki: Cannon",
        "https://ark.wiki.gg/wiki/Cannon"
      ]
    ],
    "checked": "2026-10-13",
    "scope": "ASA base species on official PvE where encounters allow taming; numerical requirements and unverified methods pending.",
    "provenance": {
      "access": "Individually indexed species, item, biome and spawn passages reviewed; direct Karkinos article returned 403.",
      "asa": "Base head-hit cannon method, kibble and ASA-specific species notes reviewed. Rubble, arena, Ice and Chalk variants excluded from this guide; habitat compared with arid-biome references.",
      "comparisonLimitations": "Full article, revision/contributor comparison, exhaustive official ASA map and variant eligibility, firsthand techniques and numerical verification pending. Original wording only; no competitor prose, datasets, assets or calculator code imported."
    }
  },
  "Pegomastax": {
    "method": "special",
    "overview": "Pegomastax is tamed through theft: let it steal taming berries from you while it remains conscious.",
    "food": "Mejoberries are the checked taming food. Stack requirements, quantities and progress-loss timing remain pending independent ASA checks.",
    "preparation": "Place Mejoberries in the last hotbar slot and store valuables safely before approaching. Clear threats and leave room to follow it.",
    "steps": [
      "Prepare Mejoberries in the last hotbar slot",
      "Allow the conscious Pegomastax to steal them",
      "Refill the berries as needed",
      "Repeat thefts until it is tamed"
    ],
    "specialAction": "This uses pickpocketing rather than a hand-feed prompt. Follow its retreat after each theft; exact containment layouts and progress-loss rates remain pending.",
    "tips": [
      "This uses pickpocketing rather than a hand-feed prompt. Follow its retreat after each theft; exact containment layouts and progress-loss rates remain pending."
    ],
    "sources": [
      [
        "ARK Community Wiki: Pegomastax",
        "https://ark.wiki.gg/wiki/Pegomastax"
      ],
      [
        "ARK Community Wiki: Mejoberry",
        "https://ark.wiki.gg/wiki/Mejoberry"
      ]
    ],
    "checked": "2026-10-13",
    "scope": "ASA base species on official PvE where encounters allow taming; numerical requirements and unverified methods pending.",
    "provenance": {
      "access": "Individually indexed species, item, biome and spawn passages reviewed; direct Karkinos article returned 403.",
      "asa": "Base theft sequence and berries distinguished from ordinary passive feeding. ASA crystal-collection notes establish current species context; Mobile/event forms excluded. Coastal species and spawn references reviewed.",
      "comparisonLimitations": "Full article, revision/contributor comparison, exhaustive official ASA map and variant eligibility, firsthand techniques and numerical verification pending. Original wording only; no competitor prose, datasets, assets or calculator code imported."
    }
  },
  "Gacha": {
    "method": "special",
    "overview": "Gacha is tamed by letting it collect and eat suitable items dropped in front of it while conscious.",
    "food": "Stone and crafted structures are documented options. Cooking Pots are an effective structure option and a player-tested recommendation. Exact ASA item rankings, stack sizes, amounts and effectiveness formulas remain pending independent checks.",
    "preparation": "Bring crafted Cooking Pots or other expendable structures you can afford to lose. Find a calm Gacha, clear predators and observe whether it is willing to collect drops.",
    "steps": [
      "Choose Cooking Pots or another expendable documented taming item",
      "Drop it in front of the conscious Gacha",
      "Allow it to pick up and eat the item",
      "Repeat while monitoring taming progress"
    ],
    "specialAction": "Drop crafted structure items from your inventory in front of the Gacha so it can collect and eat them; do not place the structures in the world. This is not a hotbar hand-feed prompt. Suggested option: Cooking Pots have worked well in player testing and are documented as effective taming food. A universal fastest-item ranking remains unconfirmed. Post-tame crystal-production advice is a separate topic.",
    "tips": [
      "Drop crafted structure items from your inventory in front of the Gacha so it can collect and eat them; do not place the structures in the world. This is not a hotbar hand-feed prompt. Suggested option: Cooking Pots have worked well in player testing and are documented as effective taming food. A universal fastest-item ranking remains unconfirmed. Post-tame crystal-production advice is a separate topic."
    ],
    "sources": [
      ["ARK Community Wiki: Cooking Pot", "https://ark.wiki.gg/wiki/Cooking_Pot"],
      [
        "ARK Community Wiki: Gacha",
        "https://ark.wiki.gg/wiki/Gacha"
      ],
      [
        "ARK Community Wiki: Stone",
        "https://ark.wiki.gg/wiki/Stone"
      ]
    ],
    "checked": "2026-10-13",
    "scope": "ASA base species on official PvE where encounters allow taming; numerical requirements and unverified methods pending.",
    "provenance": {
      "access": "Individually indexed species, item, biome and spawn passages reviewed; direct Karkinos article returned 403.",
      "asa": "Base dropped-item taming separated from post-tame Snow Owl Pellet and crystal-production advice. ASA Sunken Forest patch material reviewed; GachaClaus/event forms excluded. Cooking Pot effectiveness corroborated in indexed Gacha preferred-food passages. User reports structures work and Cooking Pots were fastest in personal testing; anonymous suggestion retained without universal fastest or every-structure guarantee.",
      "comparisonLimitations": "Full article, revision/contributor comparison, exhaustive official ASA map and variant eligibility, firsthand techniques and numerical verification pending. Original wording only; no competitor prose, datasets, assets or calculator code imported."
    }
  }
});
// Original acquisition and encounter summaries reviewed October 14, 2026.
Object.assign(tamingGuides,{
  "Enforcer": {
    "method": "acquisition",
    "overview": "Acquire an Enforcer by crafting its unassembled item, rather than knocking out or feeding a roaming one.",
    "food": "No taming food is used. Element Dust is its operational energy source; recipes and consumption quantities remain pending.",
    "preparation": "Secure a blueprint and its listed materials, with access to a City Terminal or Tek Replicator. Choose a safe deployment area.",
    "steps": [
      "Obtain the desired Enforcer blueprint",
      "Check its recipe and gather the listed materials",
      "Craft at a City Terminal or Tek Replicator",
      "Deploy the crafted unassembled item"
    ],
    "specialAction": "Destroying a roaming Enforcer can yield a blueprint. The blueprint is consumed during crafting; confirm its recipe before committing materials.",
    "tips": [
      "Destroying a roaming Enforcer can yield a blueprint. The blueprint is consumed during crafting; confirm its recipe before committing materials."
    ],
    "sources": [
      [
        "ARK Community Wiki: Enforcer",
        "https://ark.wiki.gg/wiki/Enforcer"
      ],
      [
        "ARK Community Wiki: Unassembled Enforcer",
        "https://ark.wiki.gg/wiki/Unassembled_Enforcer"
      ],
      [
        "ARK Community Wiki: Element Dust",
        "https://ark.wiki.gg/wiki/Element_Dust"
      ]
    ],
    "checked": "2026-10-14",
    "scope": "ASA official PvE acquisition or base wild encounter; mods, admin commands and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species/item passages reviewed; direct Enforcer article returned 403.",
      "asa": "Species ASA sections and ASA blueprint-cap patch context reviewed; base crafted acquisition distinguished from malfunctioned/mission forms. Sanctuary habitat corroborated by Biomes.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map eligibility, platform interactions, firsthand checks and numerical verification pending. Original wording only; no competitor text, datasets, assets or calculator code imported."
    }
  },
  "Scout": {
    "method": "acquisition",
    "overview": "Acquire a Scout by crafting and deploying a Scout Remote rather than taming a roaming drone.",
    "food": "No taming food is used. The remote uses Element Dust from your inventory; exact costs and consumption remain pending.",
    "preparation": "Bring a blueprint, its listed crafting materials and Element Dust. Use a City Terminal or Tek Replicator and plan an open deployment area.",
    "steps": [
      "Obtain a Scout blueprint from a destroyed roaming Scout",
      "Check the recipe and gather materials",
      "Craft the Scout Remote at an appropriate terminal or replicator",
      "Use the remote to deploy and control the Scout"
    ],
    "specialAction": "The remote controls the deployed Scout. Exact current console exit behavior, especially with a shoulder pet equipped, remains pending verification.",
    "tips": [
      "The remote controls the deployed Scout. Exact current console exit behavior, especially with a shoulder pet equipped, remains pending verification."
    ],
    "sources": [
      [
        "ARK Community Wiki: Scout",
        "https://ark.wiki.gg/wiki/Scout"
      ],
      [
        "ARK Community Wiki: Scout Remote",
        "https://ark.wiki.gg/wiki/Scout_Remote"
      ],
      [
        "ARK Community Wiki: Element Dust",
        "https://ark.wiki.gg/wiki/Element_Dust"
      ]
    ],
    "checked": "2026-10-14",
    "scope": "ASA official PvE acquisition or base wild encounter; mods, admin commands and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species/item passages reviewed; direct Enforcer article returned 403.",
      "asa": "Base blueprint/remote acquisition and ASA Scout blueprint patch context reviewed. Sanctuary sources distinguished from mission and mod drones; old console shoulder-pet warning not asserted as a confirmed current ASA bug.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map eligibility, platform interactions, firsthand checks and numerical verification pending. Original wording only; no competitor text, datasets, assets or calculator code imported."
    }
  },
  "Mek": {
    "method": "acquisition",
    "overview": "Craft an Unassembled Mek and deploy it to acquire a Mek; it does not use wild-creature feeding or knockout.",
    "food": "No taming food is used. Element is its operational fuel; recipe amounts and fuel duration remain pending.",
    "preparation": "Secure access to a Tek Replicator and the chosen recipe or blueprint. Gather its listed materials and select a safe open deployment area.",
    "steps": [
      "Choose the Unassembled Mek recipe or blueprint",
      "Gather the materials shown in game",
      "Craft the item in a Tek Replicator",
      "Deploy the Unassembled Mek in a suitable area"
    ],
    "specialAction": "Deploying the unassembled item creates the Mek. Base Mek acquisition is separate from Exo-Mek and Mega Mek procedures.",
    "tips": [
      "Deploying the unassembled item creates the Mek. Base Mek acquisition is separate from Exo-Mek and Mega Mek procedures."
    ],
    "sources": [
      [
        "ARK Community Wiki: Mek",
        "https://ark.wiki.gg/wiki/Mek"
      ],
      [
        "ARK Community Wiki: Unassembled Mek",
        "https://ark.wiki.gg/wiki/Unassembled_Mek"
      ]
    ],
    "checked": "2026-10-14",
    "scope": "ASA official PvE acquisition or base wild encounter; mods, admin commands and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species/item passages reviewed; direct Enforcer article returned 403.",
      "asa": "Base crafted/deployed method reviewed with ASA species sections and Mek blueprint-cap patch context; Exo-Mek, Mega Mek, mission and mod procedures excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map eligibility, platform interactions, firsthand checks and numerical verification pending. Original wording only; no competitor text, datasets, assets or calculator code imported."
    }
  },
  "Ammonite": {
    "method": "not-tameable",
    "overview": "Ammonite cannot be tamed through normal official PvE methods.",
    "food": "No taming food or feeding sequence applies.",
    "preparation": "For an encounter, bring diving equipment and a safe escape route. Check nearby marine predators before approaching.",
    "steps": [
      "Treat the Ammonite as a wild encounter",
      "Check surrounding threats",
      "Avoid provoking it unnecessarily"
    ],
    "specialAction": "Attacking it can draw nearby sea creatures into aggression. Modded tameable versions and admin commands do not establish official-server tameability.",
    "tips": [
      "Attacking it can draw nearby sea creatures into aggression. Modded tameable versions and admin commands do not establish official-server tameability."
    ],
    "sources": [
      [
        "ARK Community Wiki: Ammonite",
        "https://ark.wiki.gg/wiki/Ammonite"
      ],
      [
        "ARK Community Wiki: Taming",
        "https://ark.wiki.gg/wiki/Taming"
      ]
    ],
    "checked": "2026-10-14",
    "scope": "ASA official PvE acquisition or base wild encounter; mods, admin commands and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species/item passages reviewed; direct Enforcer article returned 403.",
      "asa": "Base non-tameability corroborated by species and Taming references; ASA species sections reviewed. Mobile and No Untameables mod forms excluded; ocean habitat compared with Biomes/Spawn entries.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map eligibility, platform interactions, firsthand checks and numerical verification pending. Original wording only; no competitor text, datasets, assets or calculator code imported."
    }
  },
  "Cnidaria": {
    "method": "not-tameable",
    "overview": "Cnidaria cannot be tamed through normal official PvE methods.",
    "food": "No taming food or feeding sequence applies.",
    "preparation": "For travel near it, plan a route around the jellyfish and check the suitability of your aquatic mount.",
    "steps": [
      "Treat Cnidaria as an untameable encounter",
      "Keep clear of its tentacles",
      "Choose a route that avoids contact"
    ],
    "specialAction": "Its electrical attacks can immobilize players and mounts. Exact current ASA stun behavior and mount-specific protections remain pending; do not rely on an unverified immunity.",
    "tips": [
      "Its electrical attacks can immobilize players and mounts. Exact current ASA stun behavior and mount-specific protections remain pending; do not rely on an unverified immunity."
    ],
    "sources": [
      [
        "ARK Community Wiki: Cnidaria",
        "https://ark.wiki.gg/wiki/Cnidaria"
      ],
      [
        "ARK Community Wiki: Taming",
        "https://ark.wiki.gg/wiki/Taming"
      ],
      [
        "ARK Community Wiki: Aberration",
        "https://ark.wiki.gg/wiki/Aberration"
      ]
    ],
    "checked": "2026-10-14",
    "scope": "ASA official PvE acquisition or base wild encounter; mods, admin commands and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species/item passages reviewed; direct Enforcer article returned 403.",
      "asa": "Base species and ASA-specific spawn-change notes reviewed; non-tameability supported by species/dossier and Taming references. Aberrant habitat kept distinct from regular ocean populations; modded tameability excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map eligibility, platform interactions, firsthand checks and numerical verification pending. Original wording only; no competitor text, datasets, assets or calculator code imported."
    }
  },
  "Leedsichthys": {
    "method": "not-tameable",
    "overview": "Leedsichthys cannot be tamed through normal official PvE methods.",
    "food": "No taming food or feeding sequence applies.",
    "preparation": "For an encounter, bring suitable swimming or diving equipment. Avoid relying on a raft for a close approach.",
    "steps": [
      "Treat Leedsichthys as a wild encounter",
      "Check nearby predators and your escape route",
      "Use the fish-meat interaction only when safe"
    ],
    "specialAction": "Fish meat can be scraped through an interaction without taming it. This does not create ownership; quantities and repeat timing remain pending.",
    "tips": [
      "Fish meat can be scraped through an interaction without taming it. This does not create ownership; quantities and repeat timing remain pending."
    ],
    "sources": [
      [
        "ARK Community Wiki: Leedsichthys",
        "https://ark.wiki.gg/wiki/Leedsichthys"
      ]
    ],
    "checked": "2026-10-14",
    "scope": "ASA official PvE acquisition or base wild encounter; mods, admin commands and distinct variants excluded. Unverified details pending.",
    "provenance": {
      "access": "Individually indexed species/item passages reviewed; direct Enforcer article returned 403.",
      "asa": "Species explicitly states non-tameability and fish-meat collection in ASA/ASE article context; Alpha and mod forms excluded. Ocean habitat compared with Biomes/Spawn entries.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map eligibility, platform interactions, firsthand checks and numerical verification pending. Original wording only; no competitor text, datasets, assets or calculator code imported."
    }
  }
});
// Original egg acquisition/special summaries reviewed October 15, 2026.
Object.assign(tamingGuides,{
  "Rock Drake": {
    "method": "acquisition",
    "overview": "Acquire a Rock Drake by collecting a fertilized nest egg, hatching it and raising the baby. Wild adults are not normal knockout tames.",
    "food": "Prepare Nameless Venom for the baby. Raw Meat does not replace its checked juvenile food; quantities and feeding times remain pending.",
    "preparation": "Prepare an escape route, incubation setup and baby food before entering the nesting region. On Aberration, plan for radiation and hostile creatures.",
    "steps": [
      "Locate a fertilized Rock Drake nest egg",
      "Collect it and leave the guarded nesting area",
      "Incubate it under suitable conditions",
      "Claim and raise the baby with its required food"
    ],
    "specialAction": "Egg theft can provoke nearby Rock Drakes. Verify incubation conditions and food supplies before hatching; no hatch-time or temperature estimate is provided.",
    "tips": [
      "Egg theft can provoke nearby Rock Drakes. Verify incubation conditions and food supplies before hatching; no hatch-time or temperature estimate is provided."
    ],
    "sources": [
      [
        "ARK Community Wiki: Rock Drake",
        "https://ark.wiki.gg/wiki/Rock_Drake"
      ],
      [
        "ARK Community Wiki: Rock Drake Egg",
        "https://ark.wiki.gg/wiki/Rock_Drake_Egg"
      ],
      [
        "ARK Community Wiki: Nameless Venom",
        "https://ark.wiki.gg/wiki/Nameless_Venom"
      ]
    ],
    "checked": "2026-10-15",
    "scope": "ASA official PvE base species and specified variant where eligible; mobile, mods and distinct forms excluded. Numerical values and unverified mechanics pending.",
    "provenance": {
      "access": "Individually indexed species/item, biome and spawn passages reviewed; direct Rock Drake article returned 403.",
      "asa": "Adult non-tameability, egg acquisition and Nameless Venom feeding reviewed with ASA species material. Corrupted/mod forms excluded. Red nesting habitat corroborated by species and Biomes.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical verification pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Deinonychus": {
    "method": "acquisition",
    "overview": "Acquire a Deinonychus by stealing a fertilized nest egg, hatching it and raising the baby. The wild adult is not directly tameable.",
    "food": "Prepare meat for the hatchling. Exact feeding amounts, growth times and imprint requests remain pending independent ASA checks.",
    "preparation": "Prepare incubation and food before the nest run. Plan an escape from nearby packs and leave room to recover if a rider is pounced.",
    "steps": [
      "Locate a fertilized Deinonychus egg in a nest",
      "Collect it and escape the guarding creatures",
      "Incubate the egg under suitable conditions",
      "Claim and feed the hatchling through maturation"
    ],
    "specialAction": "Taking an egg can draw the nearby pack; adults can pounce riders. Avoid treating egg collection as a knockout or hand-feeding attempt.",
    "tips": [
      "Taking an egg can draw the nearby pack; adults can pounce riders. Avoid treating egg collection as a knockout or hand-feeding attempt."
    ],
    "sources": [
      [
        "ARK Community Wiki: Deinonychus",
        "https://ark.wiki.gg/wiki/Deinonychus"
      ],
      [
        "ARK Community Wiki: Deinonychus Egg",
        "https://ark.wiki.gg/wiki/Deinonychus_Egg"
      ],
      [
        "ARK Community Wiki: Deinonychus Nest",
        "https://ark.wiki.gg/wiki/Deinonychus_Nest"
      ]
    ],
    "checked": "2026-10-15",
    "scope": "ASA official PvE base species and specified variant where eligible; mobile, mods and distinct forms excluded. Numerical values and unverified mechanics pending.",
    "provenance": {
      "access": "Individually indexed species/item, biome and spawn passages reviewed; direct Rock Drake article returned 403.",
      "asa": "Egg-only acquisition and meat diet reviewed with ASA species sections. Legacy Extraordinary-Kibble egg claims excluded because ASA differs; no modded Aberrant form imported.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical verification pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Magmasaur": {
    "method": "acquisition",
    "overview": "Acquire a Magmasaur by collecting a fertilized nest egg, incubating it and raising the baby. Wild adults are not directly tameable.",
    "food": "Baby Magmasaurs accept Ambergris or Sulfur. Quantities, feeding intervals and current food comparisons remain pending independent ASA checks.",
    "preparation": "Prepare protection suited to the volcanic area, a route out, incubation and baby food. Do not assume every map’s lava behaves the same way.",
    "steps": [
      "Find a fertilized Magmasaur egg in an eligible nesting area",
      "Collect it and escape the adults",
      "Incubate under suitable conditions",
      "Claim and raise the hatchling with suitable baby food"
    ],
    "specialAction": "Keep the egg-collection route separate from lava and adult attacks. Exact map-specific nesting eligibility and incubation values remain pending.",
    "tips": [
      "Keep the egg-collection route separate from lava and adult attacks. Exact map-specific nesting eligibility and incubation values remain pending."
    ],
    "sources": [
      [
        "ARK Community Wiki: Magmasaur",
        "https://ark.wiki.gg/wiki/Magmasaur"
      ],
      [
        "ARK Community Wiki: Magmasaur Egg",
        "https://ark.wiki.gg/wiki/Magmasaur_Egg"
      ],
      [
        "ARK Community Wiki: Ambergris",
        "https://ark.wiki.gg/wiki/Ambergris"
      ],
      [
        "ARK Community Wiki: Sulfur",
        "https://ark.wiki.gg/wiki/Sulfur"
      ]
    ],
    "checked": "2026-10-15",
    "scope": "ASA official PvE base species and specified variant where eligible; mobile, mods and distinct forms excluded. Numerical values and unverified mechanics pending.",
    "provenance": {
      "access": "Individually indexed species/item, biome and spawn passages reviewed; direct Rock Drake article returned 403.",
      "asa": "Adult non-tameability, stolen-egg route and baby Ambergris/Sulfur reviewed with ASA species sections. Legacy breeding-location claims not generalized to current maps; exact official-map comparison pending.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical verification pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Fire Wyvern": {
    "method": "acquisition",
    "overview": "Acquire a Fire Wyvern by collecting a fertilized Fire Wyvern nest egg, hatching it and raising the baby. Wild adults are not normal knockout tames.",
    "food": "Wyvern Milk is the checked baby food. Prepare a supply plan before hatching; quantities, feeding intervals and alternative ASA feeding mechanics remain pending.",
    "preparation": "Prepare a fast escape route, incubation and a way to obtain milk safely. Check that the nest egg is the Fire variant.",
    "steps": [
      "Locate a fertilized Fire Wyvern egg",
      "Collect it and escape nearby adults",
      "Incubate the egg under suitable conditions",
      "Claim and raise the baby with suitable food"
    ],
    "specialAction": "Knocking out a wild female to collect milk is a resource-gathering step, not adult taming. Crystal, Forest, Alpha and event Wyvern methods are excluded.",
    "tips": [
      "Knocking out a wild female to collect milk is a resource-gathering step, not adult taming. Crystal, Forest, Alpha and event Wyvern methods are excluded."
    ],
    "sources": [
      [
        "ARK Community Wiki: Fire Wyvern",
        "https://ark.wiki.gg/wiki/Fire_Wyvern"
      ],
      [
        "ARK Community Wiki: Wyvern",
        "https://ark.wiki.gg/wiki/Wyvern"
      ],
      [
        "ARK Community Wiki: Fire Wyvern Egg",
        "https://ark.wiki.gg/wiki/Fire_Wyvern_Egg"
      ],
      [
        "ARK Community Wiki: Wyvern Milk",
        "https://ark.wiki.gg/wiki/Wyvern_Milk"
      ]
    ],
    "checked": "2026-10-15",
    "scope": "ASA official PvE base species and specified variant where eligible; mobile, mods and distinct forms excluded. Numerical values and unverified mechanics pending.",
    "provenance": {
      "access": "Individually indexed species/item, biome and spawn passages reviewed; direct Rock Drake article returned 403.",
      "asa": "Fire variant reviewed through the shared Wyvern species article/redirect and Fire egg references, with ASA article material. Crystal passive taming and non-Fire/event variants excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical verification pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Basilisk": {
    "method": "special",
    "overview": "Basilisk uses dropped fertilized eggs for a non-violent tame while it remains above ground.",
    "food": "Fertilized Rock Drake Eggs and Fertilized Magmasaur Eggs are checked options. Other egg options, quantities and feeding intervals remain pending independent ASA checks.",
    "preparation": "Bring suitable eggs, clear nearby threats and choose a safe route away from its attacks. Watch its burrowing before committing food.",
    "steps": [
      "Wait for the Basilisk to be above ground",
      "Drop a suitable fertilized egg near it",
      "Give it space to notice and eat the egg",
      "Repeat while keeping the attempt calm"
    ],
    "specialAction": "This is dropped-egg feeding rather than a hand-feed prompt. An unburrowed, less distracted Basilisk is easier to feed; trap geometry and exact placement techniques remain pending.",
    "tips": [
      "This is dropped-egg feeding rather than a hand-feed prompt. An unburrowed, less distracted Basilisk is easier to feed; trap geometry and exact placement techniques remain pending."
    ],
    "sources": [
      [
        "ARK Community Wiki: Basilisk",
        "https://ark.wiki.gg/wiki/Basilisk"
      ],
      [
        "ARK Community Wiki: Rock Drake Egg",
        "https://ark.wiki.gg/wiki/Rock_Drake_Egg"
      ],
      [
        "ARK Community Wiki: Magmasaur Egg",
        "https://ark.wiki.gg/wiki/Magmasaur_Egg"
      ]
    ],
    "checked": "2026-10-15",
    "scope": "ASA official PvE base species and specified variant where eligible; mobile, mods and distinct forms excluded. Numerical values and unverified mechanics pending.",
    "provenance": {
      "access": "Individually indexed species/item, biome and spawn passages reviewed; direct Rock Drake article returned 403.",
      "asa": "Base dropped-egg sequence, accepted egg types and ASA-specific species context reviewed. Wiki passive classification mapped to special here to distinguish ground feeding; Alpha/Ghost/mod forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand methods and numerical verification pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});

// Original special-method summaries reviewed October 16, 2026.
Object.assign(tamingGuides,{
  "Carcharodontosaurus": {
    "method": "special",
    "overview": "Build a wild Carcharodontosaurus’s trust with creature corpses, then ride it temporarily and hunt to advance the tame. This is not a knockout or inventory-food tame.",
    "food": "Dragged creature corpses build trust; kills made during the temporary ride advance taming. Corpse choices, required amounts and effectiveness comparisons remain pending.",
    "preparation": "Prepare a corpse you can drag, a clear approach and an escape route. Plan nearby hunting targets before accepting the temporary ride.",
    "steps": [
      "Drag a creature corpse into its attention",
      "Give it room to inspect and eat the corpse",
      "Mount only when the friendship prompt permits it",
      "Hunt during the temporary ride and repeat trust-building if needed"
    ],
    "specialAction": "Eating a corpse does not always grant enough trust to ride. If the friendship state ends, the creature can become hostile again; watch the prompt rather than assuming it is permanently friendly.",
    "sources": [
      [
        "ARK Community Wiki: Carcharodontosaurus",
        "https://ark.wiki.gg/wiki/Carcharodontosaurus"
      ],
      [
        "ARK Community Wiki: Taming techniques",
        "https://ark.wiki.gg/wiki/Taming_Techniques"
      ]
    ],
    "tips": [
      "Eating a corpse does not always grant enough trust to ride. If the friendship state ends, the creature can become hostile again; watch the prompt rather than assuming it is permanently friendly."
    ],
    "checked": "2026-10-16",
    "scope": "ASA official PvE base species where eligible. Map-specific availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individually indexed species and relevant item/technique passages reviewed.",
      "asa": "Base species trust/temporary riding sequence reviewed with ASA species context. No baby-corpse shortcut, trap guarantee or exact hunting quota imported.",
      "comparisonLimitations": "Indexed individual species passages only; direct Tusoteuthis access returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand techniques and numerical formulas remain pending. Original wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Desmodus": {
    "method": "special",
    "overview": "Allow a wild Desmodus to grab you and consume Blood Packs from your inventory. Its documented method is passive, but the grab-and-drain action is separated here from ordinary hand-feeding.",
    "food": "Blood Packs in the grabbed player’s inventory are the checked taming supply. Pack counts, effectiveness setup and Sanguine Elixir timing remain pending.",
    "preparation": "Carry Blood Packs, prepare for damage and falls, and reduce distractions around the chosen bat. Do not assume every cave creature or variant is eligible.",
    "steps": [
      "Approach the chosen Desmodus with Blood Packs in your inventory",
      "Allow it to grab you",
      "Let it consume the carried Blood Packs",
      "Recover safely after release and repeat as needed"
    ],
    "specialAction": "The bat takes the supply during a grab; this is not a normal hotbar feed prompt. The separate creature-carrying technique for improving effectiveness still needs a current ASA-specific practical check.",
    "sources": [
      [
        "ARK Community Wiki: Desmodus",
        "https://ark.wiki.gg/wiki/Desmodus"
      ],
      [
        "ARK Community Wiki: Taming techniques",
        "https://ark.wiki.gg/wiki/Taming_Techniques"
      ]
    ],
    "tips": [
      "The bat takes the supply during a grab; this is not a normal hotbar feed prompt. The separate creature-carrying technique for improving effectiveness still needs a current ASA-specific practical check."
    ],
    "checked": "2026-10-16",
    "scope": "ASA official PvE base species where eligible. Map-specific availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individually indexed species and relevant item/technique passages reviewed.",
      "asa": "Base Desmodus reviewed through shared species/Desmodus_Draculae redirect passages and ASA Lost Colony context. Legacy Fjordur locations not represented as universal ASA availability; Gigadesmodus excluded.",
      "comparisonLimitations": "Indexed individual species passages only; direct Tusoteuthis access returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand techniques and numerical formulas remain pending. Original wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Yi Ling": {
    "method": "special",
    "overview": "Yi Ling needs a special knockout sequence: stun its committed dive with Plant Species Z Fruit, use the narcotic feeding prompt, and repeat until unconscious. Ordinary tranquilizer shots are not a substitute.",
    "food": "After knockout, Exceptional Kibble is the checked preferred food. Narcotic or Bio Toxin serves the special stun-feeding step, not the final food stage. Quantities and timing remain pending.",
    "preparation": "Bring Plant Species Z Fruit, a suitable narcotic supply for the last hotbar slot, and food for the knockout stage. Leave room to watch and respond to the dive.",
    "steps": [
      "Let its feather attacks build toward the dive cue",
      "Watch for the red-wing glow and committed dive",
      "Use Plant Species Z Fruit during the dive to stun it",
      "Feed the narcotic through the prompt while stunned and repeat until knockout",
      "Place suitable food in its inventory after it becomes unconscious"
    ],
    "specialAction": "The fruit must interrupt the dive, not merely hit an idle Yi Ling. The narcotic prompt is available during the stun; exact feather thresholds, trap layouts and platform-specific input timing remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Yi Ling",
        "https://ark.wiki.gg/wiki/Yi_Ling"
      ],
      [
        "ARK Community Wiki: Plant Species Z Fruit",
        "https://ark.wiki.gg/wiki/Plant_Species_Z_Fruit"
      ]
    ],
    "tips": [
      "The fruit must interrupt the dive, not merely hit an idle Yi Ling. The narcotic prompt is available during the stun; exact feather thresholds, trap layouts and platform-specific input timing remain pending."
    ],
    "checked": "2026-10-16",
    "scope": "ASA official PvE base species where eligible. Map-specific availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individually indexed species and relevant item/technique passages reviewed.",
      "asa": "ASA-native Yi Ling knockout sequence reviewed through the Yiling redirect to the individual species article and Plant Species Z Fruit reference. Special label distinguishes this knockout from ordinary tranq weapons; Ghost/mod forms excluded.",
      "comparisonLimitations": "Indexed individual species passages only; direct Tusoteuthis access returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, firsthand techniques and numerical formulas remain pending. Original wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});

// Wild mount-grab tame corroborated by anonymous player report, 2026-10-16.
Object.assign(tamingGuides, {
  "Tusoteuthis": {
    "method": "special",
    "overview": "Tusoteuthis uses a passive tame with a grab-dependent feeding window. Let the wild squid hold a suitable mount, then approach its beak to feed it.",
    "food": "Black Pearls are the documented preferred taming food. Put them in the last hotbar slot before approaching; exact ASA quantities, feeding intervals and effectiveness remain pending numerical verification.",
    "preparation": "Bring Black Pearls, underwater breathing equipment and a durable mount that the squid can grab. Plan your escape and monitor the mount’s health. Do not use an ungrabbable mount for the feeding setup.",
    "steps": [
      "Prepare Black Pearls in the last hotbar slot and a suitable durable mount",
      "Approach while mounted and let the wild Tusoteuthis grab the mount",
      "Dismount, approach the beak and use the feed prompt",
      "Retreat safely, recover the mount after release and repeat when feeding is available"
    ],
    "specialAction": "Let the wild Tusoteuthis grab a suitable mount, then dismount and approach its beak to feed. A player has successfully used this method on official PvE; the test date and game version were not recorded. This report concerns a wild squid grabbing a mount during taming, not the carrying permissions of a tamed squid.",
    "tips": [
      "Let the wild Tusoteuthis grab a suitable mount, then dismount and approach its beak to feed. A player has successfully used this method on official PvE; the test date and game version were not recorded. This report concerns a wild squid grabbing a mount during taming, not the carrying permissions of a tamed squid."
    ],
    "sources": [
      [
        "ARK Community Wiki: Tusoteuthis",
        "https://ark.wiki.gg/wiki/Tusoteuthis"
      ],
      [
        "ARK Community Wiki: Black Pearl",
        "https://ark.wiki.gg/wiki/Black_Pearl"
      ]
    ],
    "checked": "2026-10-16",
    "scope": "ASA official PvE base species where eligible; Alpha, mission and special cave variants excluded. Numerical requirements pending.",
    "provenance": {
      "access": "Indexed species and food passages reviewed; full direct species article previously blocked.",
      "asa": "Owner supplied firsthand confirmation of successful wild Tusoteuthis mount-grab taming in response to the ASA official PvE question on 2026-10-16. Gameplay test date, map and game version unspecified. Anonymous player report corroborates the documented grab-and-beak-feed sequence; no claim of new independent testing.",
      "comparisonLimitations": "Shared wiki PvE carrying wording remains ambiguous; player report applies to wild taming grabs only. Exhaustive map/variant checks and numerical validation pending. No competitor prose or datasets imported."
    }
  }
});

// Original special/passive summaries reviewed October 17, 2026.
Object.assign(tamingGuides,{
  "Fasolasuchus": {
    "method": "special",
    "overview": "Fasolasuchus needs a special knockout: disturb its buried mound with an explosive, take the temporary ride and steer it into rock resources to build torpor.",
    "food": "Exceptional Kibble is the checked preferred food after knockout. The explosive and riding stages come first; food amounts, torpor supplies and duration remain pending.",
    "preparation": "Bring a grenade or C4, food for the knockout stage and protection suited to the region. Scout a route through rock resources that avoids cliffs.",
    "steps": [
      "Wait for it to bury itself",
      "Detonate a grenade or C4 at the mound",
      "Use the ride prompt while it is disoriented",
      "Steer into rock resources while maintaining control",
      "Feed it after it becomes unconscious"
    ],
    "specialAction": "Trees do not supply the required knockout progress. Losing control or falling can end the ride; regain distance and wait for another buried-mound opportunity. Suggested alternative from community research: place the explosive beside the buried mound rather than on top. This placement has not been independently verified as more reliable on current ASA official PvE; the wiki also documents C4 on top of the mound. Wait for the disoriented ride prompt before approaching.",
    "sources": [
      [
        "ARK Community Wiki: Fasolasuchus",
        "https://ark.wiki.gg/wiki/Fasolasuchus"
      ],
      [
        "ARK Community Wiki: Exceptional Kibble",
        "https://ark.wiki.gg/wiki/Exceptional_Kibble"
      ]
    ],
    "tips": [
      "Trees do not supply the required knockout progress. Losing control or falling can end the ride; regain distance and wait for another buried-mound opportunity. Suggested alternative from community research: place the explosive beside the buried mound rather than on top. This placement has not been independently verified as more reliable on current ASA official PvE; the wiki also documents C4 on top of the mound. Wait for the disoriented ride prompt before approaching."
    ],
    "checked": "2026-10-17",
    "scope": "ASA official PvE base species where eligible; map availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individual indexed species and relevant supporting passages reviewed.",
      "asa": "ASA-native species and special knockout reviewed. Owner supplied research-based advice on 2026-10-17 favoring explosive placement beside the mound over on top; not claimed as firsthand testing. Retained anonymously as an unverified suggested alternative because indexed wiki explicitly describes on-top C4 placement. No unsupported best-method claim. App special classification distinguishes rock-collision torpor from ordinary tranquilizer knockout. Aberration habitat refers to the Aberrant form; no numerical surface schedule or render-distance shortcut imported.",
      "comparisonLimitations": "Indexed individual species, item, biome and spawn passages reviewed; direct Giant Bee article returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, platform-specific techniques and numerical formulas remain pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Bloodstalker": {
    "method": "special",
    "overview": "Bloodstalker uses a non-violent grab-and-drain tame. Carry Blood Packs and allow the wild creature to reel you in and feed from your inventory.",
    "food": "Blood Packs in your inventory are the checked taming food; they do not need to be in a hotbar slot. Required amounts and spoilage planning remain pending numerical verification.",
    "preparation": "Prepare Blood Packs before approaching, plus fall protection and a safe way to recover from a failed grab. Bug Repellant can help with nearby insects.",
    "steps": [
      "Locate a suitable wild Bloodstalker",
      "Carry Blood Packs in your inventory",
      "Allow it to latch onto and reel you in",
      "Let it consume the packs while monitoring the attempt"
    ],
    "specialAction": "Its separate tame-sacrifice mechanic concerns effectiveness, not replacement food. Current ASA sacrifice choices, safety and effectiveness comparisons remain pending; this guide does not recommend sacrificing a particular tame.",
    "sources": [
      [
        "ARK Community Wiki: Bloodstalker",
        "https://ark.wiki.gg/wiki/Bloodstalker"
      ],
      [
        "ARK Community Wiki: Blood Pack",
        "https://ark.wiki.gg/wiki/Blood_Pack"
      ],
      [
        "ARK Community Wiki: Genesis Part 1",
        "https://ark.wiki.gg/wiki/Genesis:_Part_1"
      ],
      [
        "ARK Community Wiki: ASA patch 92.21",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/92.21"
      ]
    ],
    "tips": [
      "Its separate tame-sacrifice mechanic concerns effectiveness, not replacement food. Current ASA sacrifice choices, safety and effectiveness comparisons remain pending; this guide does not recommend sacrificing a particular tame."
    ],
    "checked": "2026-10-17",
    "scope": "ASA official PvE base species where eligible; map availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individual indexed species and relevant supporting passages reviewed.",
      "asa": "Shared base-species feeding sequence reviewed with the released ASA Genesis: Part 1 map and ASA patch context. Wiki passive mapped to special for its latch/drain requirement. Brute, VR, mission and mod forms excluded.",
      "comparisonLimitations": "Indexed individual species, item, biome and spawn passages reviewed; direct Giant Bee article returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, platform-specific techniques and numerical formulas remain pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Ferox": {
    "method": "special",
    "overview": "Feed Element to a small wild Ferox, escape its hostile transformation, then repeat after it returns to small form. The taming cycle is passive rather than a knockout.",
    "food": "Element is the checked taming supply. Transformation counts, amounts and timing remain pending; Element Dust is not substituted in this guide.",
    "preparation": "Bring Element and plan cover or an escape route before feeding. Clear nearby threats and avoid carrying another Ferox on your shoulder during the attempt.",
    "steps": [
      "Approach the small form with Element available",
      "Activate the Element to feed the intended Ferox",
      "Move to safety while it transforms and attacks",
      "Wait for the small form to return, then repeat until tamed"
    ],
    "specialAction": "The enlarged hostile form is not the normal feeding target. Watch the transformation cycle and the intended creature; exact controller inputs and trap or cloaking shortcuts remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Ferox",
        "https://ark.wiki.gg/wiki/Ferox"
      ],
      [
        "ARK Community Wiki: Genesis Part 1",
        "https://ark.wiki.gg/wiki/Genesis:_Part_1"
      ],
      [
        "ARK Community Wiki: ASA patch 89.24",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/89.24"
      ]
    ],
    "tips": [
      "The enlarged hostile form is not the normal feeding target. Watch the transformation cycle and the intended creature; exact controller inputs and trap or cloaking shortcuts remain pending."
    ],
    "checked": "2026-10-17",
    "scope": "ASA official PvE base species where eligible; map availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individual indexed species and relevant supporting passages reviewed.",
      "asa": "Shared base-species Element cycle reviewed with released ASA Genesis: Part 1 and its legacy-creature update. Wiki passive mapped to special to distinguish transformation handling. Brute, VR and mission forms excluded.",
      "comparisonLimitations": "Indexed individual species, item, biome and spawn passages reviewed; direct Giant Bee article returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, platform-specific techniques and numerical formulas remain pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Giant Bee": {
    "method": "passive",
    "overview": "Tame the Giant Queen Bee by non-violent feeding. Break a populated wild hive to release the queen, then approach carefully without killing or provoking her.",
    "food": "Simple Kibble and Rare Flowers are checked queen-taming options. Hive upkeep is a separate use of Rare Flowers; feeding amounts and food comparisons remain pending.",
    "preparation": "Bring taming food for the last hotbar slot, Bug Repellant and protective clothing such as ghillie. Plan safe hive access and control nearby threats.",
    "steps": [
      "Find a populated wild hive and prepare your approach",
      "Break the hive while avoiding harm to the released queen",
      "Approach the calm queen with food in the last hotbar slot",
      "Use the feed prompt and repeat when she is ready"
    ],
    "specialAction": "Target the queen, not the defending drones. Avoid touching her or continuing attacks after release. Some ASA queens are found outside hives; exact hive population, cage and lure techniques remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Giant Bee",
        "https://ark.wiki.gg/wiki/Giant_Bee"
      ],
      [
        "ARK Community Wiki: Bee Hive",
        "https://ark.wiki.gg/wiki/Bee_Hive"
      ],
      [
        "ARK Community Wiki: ASA patch 86.12",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/86.12"
      ]
    ],
    "tips": [
      "Target the queen, not the defending drones. Avoid touching her or continuing attacks after release. Some ASA queens are found outside hives; exact hive population, cage and lure techniques remain pending."
    ],
    "checked": "2026-10-17",
    "scope": "ASA official PvE base species where eligible; map availability and unverified numerical requirements remain pending.",
    "provenance": {
      "access": "Individual indexed species and relevant supporting passages reviewed.",
      "asa": "Queen passive feeding reviewed with explicit ASA species notes and ASA bee patch context. Giant Bee catalogue name covers the tameable queen; temporary defending drones are not treated as equivalent tame targets.",
      "comparisonLimitations": "Indexed individual species, item, biome and spawn passages reviewed; direct Giant Bee article returned 403. Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, platform-specific techniques and numerical formulas remain pending. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});

// Original basket-capture summaries reviewed October 18, 2026.
Object.assign(tamingGuides,{
  "Coelacanth": {
    "method": "special",
    "overview": "Use a Fish Basket to capture a live Coelacanth, then release it into water as a tame. This is a special capture method rather than a knockout or hand-feeding tame.",
    "food": "The documented capture uses a Fish Basket rather than a taming-food sequence. Post-capture diet and trough behavior need a separate current ASA check.",
    "preparation": "Bring a Fish Basket and choose a safe underwater placement and release area. Clear nearby predators without harming the target.",
    "steps": [
      "Place the basket on the bottom near the live target",
      "Wait for the basket’s capture prompt",
      "Interact with the basket while the target is in reach",
      "Use the filled basket to release the captured creature in water"
    ],
    "specialAction": "Capture the live fish, then release it in water. Catching fish for another creature’s taming food is a separate use of a filled basket; this guide is for keeping the Coelacanth.",
    "tips": [
      "Capture the live fish, then release it in water. Catching fish for another creature’s taming food is a separate use of a filled basket; this guide is for keeping the Coelacanth."
    ],
    "checked": "2026-10-18",
    "scope": "ASA official PvE base species where eligible; variant/cave eligibility and unverified numerical requirements remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Coelacanth",
        "https://ark.wiki.gg/wiki/Coelacanth"
      ],
      [
        "ARK Community Wiki: Fish Basket",
        "https://ark.wiki.gg/wiki/Fish_Basket"
      ],
      [
        "ARK Community Wiki: ASA patch 92.21",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/92.21"
      ]
    ],
    "provenance": {
      "access": "Indexed individual species/shared redirect and Fish Basket usage passages reviewed; direct Fish Basket and Aberration pages returned 403.",
      "asa": "Species ASA context and ASA Fish Basket patch reviewed. App special label separates live basket capture from knockout, ordinary passive feeding and crafted/egg acquisition. Mobile, mod and unverified special cave forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, current upkeep behavior, controller prompts and numerical formulas remain pending. Trilobite upkeep conflict retained explicitly. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Piranha": {
    "method": "special",
    "overview": "Use a Fish Basket to capture a live Piranha, then release it into water as a tame. This is a special capture method rather than a knockout or hand-feeding tame.",
    "food": "The documented capture uses a Fish Basket rather than a taming-food sequence. Post-capture diet and trough behavior need a separate current ASA check.",
    "preparation": "Bring a Fish Basket and choose a safe underwater placement and release area. Plan protection from the fish and its neighbors.",
    "steps": [
      "Place the basket on the bottom near the live target",
      "Wait for the basket’s capture prompt",
      "Interact with the basket while the target is in reach",
      "Use the filled basket to release the captured creature in water"
    ],
    "specialAction": "Watch for additional Piranhas while working at the basket. Capture does not require knocking the fish out; release it in water.",
    "tips": [
      "Watch for additional Piranhas while working at the basket. Capture does not require knocking the fish out; release it in water."
    ],
    "checked": "2026-10-18",
    "scope": "ASA official PvE base species where eligible; variant/cave eligibility and unverified numerical requirements remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Piranha",
        "https://ark.wiki.gg/wiki/Piranha"
      ],
      [
        "ARK Community Wiki: Fish Basket",
        "https://ark.wiki.gg/wiki/Fish_Basket"
      ],
      [
        "ARK Community Wiki: ASA patch 92.21",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/92.21"
      ]
    ],
    "provenance": {
      "access": "Indexed individual species/shared redirect and Fish Basket usage passages reviewed; direct Fish Basket and Aberration pages returned 403.",
      "asa": "Species ASA context and ASA Fish Basket patch reviewed. App special label separates live basket capture from knockout, ordinary passive feeding and crafted/egg acquisition. Mobile, mod and unverified special cave forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, current upkeep behavior, controller prompts and numerical formulas remain pending. Trilobite upkeep conflict retained explicitly. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Sabertooth Salmon": {
    "method": "special",
    "overview": "Use a Fish Basket to capture a live Sabertooth Salmon, then release it into water as a tame. This is a special capture method rather than a knockout or hand-feeding tame.",
    "food": "The documented capture uses a Fish Basket rather than a taming-food sequence. Post-capture diet and trough behavior need a separate current ASA check.",
    "preparation": "Bring a Fish Basket and choose a safe underwater placement and release area. Avoid provoking nearby salmon.",
    "steps": [
      "Place the basket on the bottom near the live target",
      "Wait for the basket’s capture prompt",
      "Interact with the basket while the target is in reach",
      "Use the filled basket to release the captured creature in water"
    ],
    "specialAction": "Avoid attacking it to position it: nearby salmon may retaliate. Use the basket’s capture prompt and release the fish in water.",
    "tips": [
      "Avoid attacking it to position it: nearby salmon may retaliate. Use the basket’s capture prompt and release the fish in water."
    ],
    "checked": "2026-10-18",
    "scope": "ASA official PvE base species where eligible; variant/cave eligibility and unverified numerical requirements remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Sabertooth Salmon",
        "https://ark.wiki.gg/wiki/Sabertooth_Salmon"
      ],
      [
        "ARK Community Wiki: Fish Basket",
        "https://ark.wiki.gg/wiki/Fish_Basket"
      ],
      [
        "ARK Community Wiki: ASA patch 92.21",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/92.21"
      ]
    ],
    "provenance": {
      "access": "Indexed individual species/shared redirect and Fish Basket usage passages reviewed; direct Fish Basket and Aberration pages returned 403.",
      "asa": "Species ASA context and ASA Fish Basket patch reviewed. App special label separates live basket capture from knockout, ordinary passive feeding and crafted/egg acquisition. Mobile, mod and unverified special cave forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, current upkeep behavior, controller prompts and numerical formulas remain pending. Trilobite upkeep conflict retained explicitly. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Trilobite": {
    "method": "special",
    "overview": "Use a Fish Basket to capture a live Trilobite, then release it into water as a tame. This is a special capture method rather than a knockout or hand-feeding tame.",
    "food": "The documented capture uses a Fish Basket rather than a taming-food sequence. Reliable post-capture feeding is pending because the species and basket references conflict.",
    "preparation": "Bring a Fish Basket and choose a safe underwater placement and release area. Choose a submerged target rather than relying on a stranded specimen.",
    "steps": [
      "Place the basket on the bottom near the live target",
      "Wait for the basket’s capture prompt",
      "Interact with the basket while the target is in reach",
      "Use the filled basket to release the captured creature in water"
    ],
    "specialAction": "Keep the capture and release in water. The species article lists berries for upkeep, but the Fish Basket article warns of starvation despite apparent feeding. Current ASA upkeep remains pending; a displayed full food bar is not confirmation that this is resolved.",
    "tips": [
      "Keep the capture and release in water. The species article lists berries for upkeep, but the Fish Basket article warns of starvation despite apparent feeding. Current ASA upkeep remains pending; a displayed full food bar is not confirmation that this is resolved."
    ],
    "checked": "2026-10-18",
    "scope": "ASA official PvE base species where eligible; variant/cave eligibility and unverified numerical requirements remain pending.",
    "sources": [
      [
        "ARK Community Wiki: Trilobite",
        "https://ark.wiki.gg/wiki/Trilobite"
      ],
      [
        "ARK Community Wiki: Fish Basket",
        "https://ark.wiki.gg/wiki/Fish_Basket"
      ],
      [
        "ARK Community Wiki: ASA patch 92.21",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended/Patch/92.21"
      ]
    ],
    "provenance": {
      "access": "Indexed individual species/shared redirect and Fish Basket usage passages reviewed; direct Fish Basket and Aberration pages returned 403.",
      "asa": "Species ASA context and ASA Fish Basket patch reviewed. App special label separates live basket capture from knockout, ordinary passive feeding and crafted/egg acquisition. Mobile, mod and unverified special cave forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive official ASA map/variant eligibility, current upkeep behavior, controller prompts and numerical formulas remain pending. Trilobite upkeep conflict retained explicitly. Original wording only; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});

// Original wild-encounter summaries reviewed October 19, 2026.
Object.assign(tamingGuides,{
  "Glowbug": {
    "method": "not-tameable",
    "overview": "Glowbug, also called Light Bug, is a wild charge source rather than a tameable pet in normal official play.",
    "food": "No taming food: this creature is not tameable in normal official play.",
    "preparation": "Check the surrounding cavern for threats before approaching. Bring a charge-capable pet or battery if you intend to use the bug’s charge.",
    "steps": [
      "Locate the wild bug and check nearby threats",
      "Approach for its available charge interaction",
      "Move on when the interaction is finished"
    ],
    "specialAction": "Drawing charge from a wild bug does not tame it. Exact current ASA interaction controls and charge amounts remain pending.",
    "tips": [
      "Drawing charge from a wild bug does not tame it. Exact current ASA interaction controls and charge amounts remain pending."
    ],
    "checked": "2026-10-19",
    "scope": "ASA official PvE base-species wild encounter where present; not a taming checklist.",
    "sources": [
      [
        "ARK Community Wiki: Glowbug",
        "https://ark.wiki.gg/wiki/Glowbug"
      ],
      [
        "ARK Community Wiki: ASA gameplay changes",
        "https://ark.wiki.gg/wiki/ARK:_Survival_Ascended"
      ]
    ],
    "provenance": {
      "access": "Individual indexed species and relevant biome/spawn/map passages reviewed; direct Seeker article returned 403.",
      "asa": "Individual base species and ASA Light Bug naming context reviewed. Catalogue key Glowbug retained, with light bug alias; charge interaction does not imply tameability.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive current official ASA map coverage, platform interactions and numerical claims remain pending. Original encounter wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Seeker": {
    "method": "not-tameable",
    "overview": "Seeker is a hostile wild encounter, not a tameable creature in normal official play.",
    "food": "No taming food: this creature is not tameable in normal official play.",
    "preparation": "Plan an escape route and assess nearby charge sources. Balance Seeker danger against the protection charge light provides from Nameless.",
    "steps": [
      "Notice nearby Seekers before entering combat",
      "Check whether charge light is strengthening them",
      "Retreat or engage with the surrounding threats in mind"
    ],
    "specialAction": "Charge light empowers Seekers. Removing it can weaken them, but can also leave you exposed to Nameless; there is no taming feed or knockout sequence.",
    "tips": [
      "Charge light empowers Seekers. Removing it can weaken them, but can also leave you exposed to Nameless; there is no taming feed or knockout sequence."
    ],
    "checked": "2026-10-19",
    "scope": "ASA official PvE base-species wild encounter where present; not a taming checklist.",
    "sources": [
      [
        "ARK Community Wiki: Seeker",
        "https://ark.wiki.gg/wiki/Seeker"
      ],
      [
        "ARK Community Wiki: Element Falls",
        "https://ark.wiki.gg/wiki/Element_Falls_(Aberration)"
      ]
    ],
    "provenance": {
      "access": "Individual indexed species and relevant biome/spawn/map passages reviewed; direct Seeker article returned 403.",
      "asa": "Base non-tameability and charge response reviewed with ASA species sections. Brute, summoned and mod-enabled taming forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive current official ASA map coverage, platform interactions and numerical claims remain pending. Original encounter wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Nameless": {
    "method": "not-tameable",
    "overview": "Nameless cannot be tamed in normal official play. Treat its emergence as an encounter hazard rather than the start of a taming attempt.",
    "food": "No taming food: this creature is not tameable in normal official play.",
    "preparation": "Bring a reliable charge-light source and an escape plan. Check its available charge before entering dangerous underground terrain.",
    "steps": [
      "Watch for emerging groups",
      "Use charge light to reduce the threat",
      "Leave the area or deal with the group before continuing"
    ],
    "specialAction": "Charge light helps keep Nameless at bay and weakens their defenses. The exact charge coverage and encounter timing are not quantified here.",
    "tips": [
      "Charge light helps keep Nameless at bay and weakens their defenses. The exact charge coverage and encounter timing are not quantified here."
    ],
    "checked": "2026-10-19",
    "scope": "ASA official PvE base-species wild encounter where present; not a taming checklist.",
    "sources": [
      [
        "ARK Community Wiki: Nameless",
        "https://ark.wiki.gg/wiki/Nameless"
      ],
      [
        "ARK Community Wiki: Aberration",
        "https://ark.wiki.gg/wiki/Aberration"
      ]
    ],
    "provenance": {
      "access": "Individual indexed species and relevant biome/spawn/map passages reviewed; direct Seeker article returned 403.",
      "asa": "Base species and ASA Aberration context reviewed. No pet acquisition, forcetame or mod process imported.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive current official ASA map coverage, platform interactions and numerical claims remain pending. Original encounter wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Eurypterid": {
    "method": "not-tameable",
    "overview": "Eurypterid is a wild aquatic hazard, not a tameable creature in normal official play.",
    "food": "No taming food: this creature is not tameable in normal official play.",
    "preparation": "Prepare underwater breathing, a way to keep your distance and an escape route. Account for its torpor-inducing attacks.",
    "steps": [
      "Scan the bottom before approaching",
      "Avoid close contact with its attacks",
      "Retreat before torpor prevents a safe escape"
    ],
    "specialAction": "A Fish Basket is not a verified taming route for Eurypterid. ASA land-beaching behavior differs from legacy accounts; no land trap or tame procedure is recommended.",
    "tips": [
      "A Fish Basket is not a verified taming route for Eurypterid. ASA land-beaching behavior differs from legacy accounts; no land trap or tame procedure is recommended."
    ],
    "checked": "2026-10-19",
    "scope": "ASA official PvE base-species wild encounter where present; not a taming checklist.",
    "sources": [
      [
        "ARK Community Wiki: Eurypterid",
        "https://ark.wiki.gg/wiki/Eurypterid"
      ]
    ],
    "provenance": {
      "access": "Individual indexed species and relevant biome/spawn/map passages reviewed; direct Seeker article returned 403.",
      "asa": "Base non-tameability, torpor threat and ASA land-death distinction reviewed through individual species sections. Mobile/Eerie and No Untameables mod behavior excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive current official ASA map coverage, platform interactions and numerical claims remain pending. Original encounter wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  },
  "Deathworm": {
    "method": "not-tameable",
    "overview": "Deathworm is a burrowing wild predator and cannot be tamed in normal official play.",
    "food": "No taming food: this creature is not tameable in normal official play.",
    "preparation": "Bring desert protection, a capable combat mount and a route away from the dunes. Scout for threats before dismounting.",
    "steps": [
      "Watch the sand for movement",
      "Keep room to react when it emerges",
      "Fight or withdraw without attempting a taming feed"
    ],
    "specialAction": "Its emergence is an attack, not a feeding or temporary-riding prompt. Alpha Deathworms, Iceworms and modded taming routes are outside this base-species guide.",
    "tips": [
      "Its emergence is an attack, not a feeding or temporary-riding prompt. Alpha Deathworms, Iceworms and modded taming routes are outside this base-species guide."
    ],
    "checked": "2026-10-19",
    "scope": "ASA official PvE base-species wild encounter where present; not a taming checklist.",
    "sources": [
      [
        "ARK Community Wiki: Deathworm",
        "https://ark.wiki.gg/wiki/Deathworm"
      ]
    ],
    "provenance": {
      "access": "Individual indexed species and relevant biome/spawn/map passages reviewed; direct Seeker article returned 403.",
      "asa": "Base Deathworm habitat and non-tameability reviewed with ASA species context and wild invertebrate classification. Alpha, Iceworm, Corrupted and mod forms excluded.",
      "comparisonLimitations": "Full article/revision/contributor comparison, exhaustive current official ASA map coverage, platform interactions and numerical claims remain pending. Original encounter wording; no competitor prose, datasets, artwork or calculator code imported."
    }
  }
});
