// Original sleeping-pose artwork; image rectangles preserve limbs and aspect ratios.
const sleepingCreatureSprites = {
  "Achatina": [
    1,
    31,
    143,
    272,
    139
  ],
  "Allosaurus": [
    1,
    332,
    168,
    282,
    111
  ],
  "Anglerfish": [
    1,
    665,
    146,
    243,
    144
  ],
  "Ankylosaurus": [
    1,
    970,
    143,
    256,
    147
  ],
  "Araneo": [
    1,
    52,
    456,
    215,
    132
  ],
  "Archaeopteryx": [
    1,
    316,
    482,
    298,
    97
  ],
  "Argentavis": [
    1,
    637,
    469,
    294,
    121
  ],
  "Baryonyx": [
    1,
    959,
    469,
    278,
    114
  ],
  "Beelzebufo": [
    1,
    31,
    747,
    257,
    131
  ],
  "Brontosaurus": [
    1,
    323,
    752,
    302,
    133
  ],
  "Carbonemys": [
    1,
    653,
    751,
    270,
    134
  ],
  "Carnotaurus": [
    1,
    949,
    747,
    277,
    132
  ],
  "Castoroides": [
    1,
    23,
    1020,
    284,
    133
  ],
  "Compy": [
    1,
    324,
    1080,
    286,
    77
  ],
  "Daeodon": [
    1,
    637,
    1017,
    291,
    138
  ],
  "Dilophosaur": [
    1,
    958,
    1002,
    272,
    156
  ],
  "Dimetrodon": [
    2,
    26,
    93,
    281,
    198
  ],
  "Dimorphodon": [
    2,
    329,
    178,
    283,
    115
  ],
  "Diplocaulus": [
    2,
    641,
    183,
    284,
    109
  ],
  "Dire Bear": [
    2,
    954,
    139,
    286,
    152
  ],
  "Direwolf": [
    2,
    20,
    475,
    272,
    130
  ],
  "Dodo": [
    2,
    340,
    482,
    272,
    117
  ],
  "Doedicurus": [
    2,
    642,
    462,
    280,
    142
  ],
  "Dunkleosteus": [
    2,
    960,
    475,
    275,
    124
  ],
  "Gallimimus": [
    2,
    29,
    764,
    264,
    133
  ],
  "Gasbags": [
    2,
    352,
    716,
    239,
    193
  ],
  "Giganotosaurus": [
    2,
    642,
    759,
    284,
    152
  ],
  "Griffin": [
    2,
    954,
    752,
    280,
    149
  ],
  "Ichthyornis": [
    2,
    23,
    1080,
    271,
    98
  ],
  "Iguanodon": [
    2,
    329,
    1061,
    279,
    125
  ],
  "Jerboa": [
    2,
    651,
    1047,
    271,
    133
  ],
  "Kairuku": [
    2,
    956,
    1072,
    276,
    105
  ],
  "Kaprosuchus": [
    3,
    30,
    152,
    274,
    112
  ],
  "Karkinos": [
    3,
    364,
    137,
    241,
    139
  ],
  "Kentrosaurus": [
    3,
    654,
    112,
    269,
    154
  ],
  "Lymantria": [
    3,
    989,
    138,
    222,
    128
  ],
  "Mammoth": [
    3,
    26,
    422,
    297,
    159
  ],
  "Managarmr": [
    3,
    357,
    428,
    247,
    148
  ],
  "Megalania": [
    3,
    649,
    451,
    281,
    131
  ],
  "Megaloceros": [
    3,
    964,
    407,
    262,
    174
  ],
  "Megalodon": [
    3,
    29,
    731,
    276,
    137
  ],
  "Megalosaurus": [
    3,
    340,
    762,
    267,
    109
  ],
  "Megatherium": [
    3,
    645,
    732,
    276,
    137
  ],
  "Microraptor": [
    3,
    977,
    757,
    240,
    108
  ],
  "Morellatops": [
    3,
    29,
    1010,
    275,
    164
  ],
  "Mosasaurus": [
    3,
    342,
    1034,
    267,
    137
  ],
  "Oviraptor": [
    3,
    651,
    1038,
    267,
    133
  ],
  "Pachy": [
    3,
    967,
    1056,
    257,
    111
  ],
  "Pachyrhinosaurus": [
    4,
    31,
    127,
    263,
    141
  ],
  "Paraceratherium": [
    4,
    340,
    156,
    292,
    117
  ],
  "Parasaur": [
    4,
    680,
    160,
    238,
    112
  ],
  "Pelagornis": [
    4,
    964,
    183,
    259,
    84
  ],
  "Phiomia": [
    4,
    39,
    443,
    251,
    138
  ],
  "Plesiosaur": [
    4,
    327,
    481,
    294,
    98
  ],
  "Procoptodon": [
    4,
    662,
    447,
    248,
    133
  ],
  "Pteranodon": [
    4,
    968,
    449,
    252,
    130
  ],
  "Pulmonoscorpius": [
    4,
    50,
    726,
    212,
    147
  ],
  "Purlovia": [
    4,
    349,
    749,
    243,
    125
  ],
  "Quetzal": [
    4,
    662,
    757,
    272,
    108
  ],
  "Raptor": [
    4,
    983,
    779,
    227,
    94
  ],
  "Ravager": [
    4,
    37,
    1021,
    262,
    139
  ],
  "Rex": [
    4,
    341,
    1027,
    279,
    129
  ],
  "Rock Elemental": [
    4,
    665,
    963,
    257,
    202
  ],
  "Sabertooth": [
    4,
    962,
    1036,
    258,
    120
  ],
  "Sarco": [
    5,
    39,
    160,
    281,
    110
  ],
  "Snow Owl": [
    5,
    376,
    166,
    204,
    105
  ],
  "Spino": [
    5,
    650,
    121,
    266,
    155
  ],
  "Stegosaurus": [
    5,
    956,
    117,
    276,
    155
  ],
  "Tapejara": [
    5,
    49,
    411,
    237,
    165
  ],
  "Terror Bird": [
    5,
    364,
    450,
    229,
    131
  ],
  "Therizinosaurus": [
    5,
    665,
    435,
    253,
    154
  ],
  "Thorny Dragon": [
    5,
    978,
    445,
    237,
    136
  ],
  "Thylacoleo": [
    5,
    42,
    755,
    246,
    114
  ],
  "Triceratops": [
    5,
    358,
    730,
    251,
    138
  ],
  "Velonasaur": [
    5,
    650,
    749,
    260,
    121
  ],
  "Woolly Rhino": [
    5,
    970,
    726,
    252,
    144
  ],
  "Yutyrannus": [
    5,
    29,
    1047,
    298,
    112
  ]
};
