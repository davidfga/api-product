const productMock = [{
    "id": 1,
    "product_kind": "Anacardiaceae",
    "product_name": "Rengas",
    "product_price": "$17.03",
    "product_description": "Gluta renghas L."
  }, {
    "id": 2,
    "product_kind": "Araceae",
    "product_name": "Goldenclub",
    "product_price": "$40.82",
    "product_description": "Orontium L."
  }, {
    "id": 3,
    "product_kind": "Illiciaceae",
    "product_name": "Florida Anisetree",
    "product_price": "$45.80",
    "product_description": "Illicium floridanum Ellis"
  }, {
    "id": 4,
    "product_kind": "Rosaceae",
    "product_name": "Kingston Dewberry",
    "product_price": "$4.96",
    "product_description": "Rubus particeps L.H. Bailey"
  }, {
    "id": 5,
    "product_kind": "Brassicaceae",
    "product_name": "Western Bladderpod",
    "product_price": "$18.51",
    "product_description": "Lesquerella occidentalis S. Watson ssp. occidentalis"
  }, {
    "id": 6,
    "product_kind": "Fabaceae",
    "product_name": "Peashrub",
    "product_price": "$3.28",
    "product_description": "Caragana Fabr."
  }, {
    "id": 7,
    "product_kind": "Malvaceae",
    "product_name": "Moth Fanpetals",
    "product_price": "$21.20",
    "product_description": "Sida santaremensis Monteiro"
  }, {
    "id": 8,
    "product_kind": "Annonaceae",
    "product_name": "Xylopia",
    "product_price": "$1.51",
    "product_description": "Xylopia L."
  }, {
    "id": 9,
    "product_kind": "Chenopodiaceae",
    "product_name": "Beach Saltbush",
    "product_price": "$22.49",
    "product_description": "Atriplex leucophylla (Moq.) D. Dietr."
  }, {
    "id": 10,
    "product_kind": "Parmeliaceae",
    "product_name": "Flavoparmelia Lichen",
    "product_price": "$21.60",
    "product_description": "Flavoparmelia rutidota (Hook. f. & Taylor) Hale"
  }, {
    "id": 11,
    "product_kind": "Celastraceae",
    "product_name": "Desert Yaupon",
    "product_price": "$12.17",
    "product_description": "Schaefferia cuneifolia A. Gray"
  }, {
    "id": 12,
    "product_kind": "Hydrocharitaceae",
    "product_name": "Hydrilla",
    "product_price": "$4.52",
    "product_description": "Hydrilla Rich."
  }, {
    "id": 13,
    "product_kind": "Scrophulariaceae",
    "product_name": "Bastard Speedwell",
    "product_price": "$37.28",
    "product_description": "Pseudolysimachion spurium (L.) Rauschert"
  }, {
    "id": 14,
    "product_kind": "Myrtaceae",
    "product_name": "Argyle Apple",
    "product_price": "$41.19",
    "product_description": "Eucalyptus cinerea F. Muell. ex Benth."
  }, {
    "id": 15,
    "product_kind": "Fabaceae",
    "product_name": "Ticktrefoil",
    "product_price": "$19.63",
    "product_description": "Desmodium umbellatum (L.) DC."
  }, {
    "id": 16,
    "product_kind": "Rosaceae",
    "product_name": "Sawtooth Hawthorn",
    "product_price": "$43.85",
    "product_description": "Crataegus viburnifolia Sarg."
  }, {
    "id": 17,
    "product_kind": "Malvaceae",
    "product_name": "Mokulei Rosemallow",
    "product_price": "$18.08",
    "product_description": "Hibiscus brackenridgei A. Gray ssp. mokuleianus (M.J. Roe) D.M. Bates"
  }, {
    "id": 18,
    "product_kind": "Asteraceae",
    "product_name": "Pinnate Prairie Coneflower",
    "product_price": "$24.20",
    "product_description": "Ratibida pinnata (Vent.) Barnhart"
  }, {
    "id": 19,
    "product_kind": "Hippocastanaceae",
    "product_name": "Buckeye",
    "product_price": "$39.01",
    "product_description": "Aesculus ×hybrida DC. (pro sp.)"
  }, {
    "id": 20,
    "product_kind": "Fabaceae",
    "product_name": "Indian Milkvetch",
    "product_price": "$43.57",
    "product_description": "Astragalus australis (L.) Lam."
  }, {
    "id": 21,
    "product_kind": "Poaceae",
    "product_name": "Oriental Pennisetum",
    "product_price": "$48.31",
    "product_description": "Pennisetum orientale (Willd.) Rich."
  }, {
    "id": 22,
    "product_kind": "Uncertain Ascomycota Family",
    "product_name": "Arthothelium Lichen",
    "product_price": "$5.29",
    "product_description": "Arthothelium distendens (Nyl.) Müll. Arg."
  }, {
    "id": 23,
    "product_kind": "Cyperaceae",
    "product_name": "Harper's Beaksedge",
    "product_price": "$2.44",
    "product_description": "Rhynchospora harperi Small"
  }, {
    "id": 24,
    "product_kind": "Cactaceae",
    "product_name": "Mountain Ball Cactus",
    "product_price": "$30.30",
    "product_description": "Pediocactus simpsonii (Engelm.) Britton & Rose var. robustior (J.M. Coult.) L.D. Benson"
  }, {
    "id": 25,
    "product_kind": "Scrophulariaceae",
    "product_name": "Cutleaf Beardtongue",
    "product_price": "$17.60",
    "product_description": "Penstemon richardsonii Douglas ex Lindl. var. curtiflorus (D.D. Keck) Cronquist"
  }, {
    "id": 26,
    "product_kind": "Apiaceae",
    "product_name": "Purple Springparsley",
    "product_price": "$42.63",
    "product_description": "Cymopterus purpureus S. Watson"
  }, {
    "id": 27,
    "product_kind": "Asteraceae",
    "product_name": "Shining Fleabane",
    "product_price": "$45.50",
    "product_description": "Erigeron barbellulatus Greene"
  }, {
    "id": 28,
    "product_kind": "Crassulaceae",
    "product_name": "Sierra Stonecrop",
    "product_price": "$13.37",
    "product_description": "Sedum obtusatum A. Gray ssp. obtusatum"
  }, {
    "id": 29,
    "product_kind": "Araliaceae",
    "product_name": "'ohe Mauka",
    "product_price": "$17.72",
    "product_description": "Tetraplasandra oahuensis (A. Gray) Harms"
  }, {
    "id": 30,
    "product_kind": "Crassulaceae",
    "product_name": "Ledge Stonecrop",
    "product_price": "$41.52",
    "product_description": "Rhodiola integrifolia Raf. ssp. integrifolia"
  }, {
    "id": 31,
    "product_kind": "Asteraceae",
    "product_name": "Roughleaf Aster",
    "product_price": "$47.06",
    "product_description": "Eurybia radulina (A. Gray) G.L. Nesom"
  }, {
    "id": 32,
    "product_kind": "Onagraceae",
    "product_name": "Red Ribbons",
    "product_price": "$22.91",
    "product_description": "Clarkia concinna (Fisch. & C.A. Mey.) Greene"
  }, {
    "id": 33,
    "product_kind": "Myrtaceae",
    "product_name": "Geraldton Wax",
    "product_price": "$13.85",
    "product_description": "Chamelaucium uncinatum Schauer"
  }, {
    "id": 34,
    "product_kind": "Apiaceae",
    "product_name": "Hairyfruit Chervil",
    "product_price": "$49.70",
    "product_description": "Chaerophyllum tainturieri Hook."
  }, {
    "id": 35,
    "product_kind": "Liliaceae",
    "product_name": "Foothill Triteleia",
    "product_price": "$11.53",
    "product_description": "Triteleia lilacinum Greene"
  }, {
    "id": 36,
    "product_kind": "Araliaceae",
    "product_name": "Algerian Ivy",
    "product_price": "$10.22",
    "product_description": "Hedera helix L. ssp. canariensis (Willd.) Cout."
  }, {
    "id": 37,
    "product_kind": "Asteraceae",
    "product_name": "Rutter's False Goldenaster",
    "product_price": "$35.53",
    "product_description": "Heterotheca rutteri (Rothr.) Shinners"
  }, {
    "id": 38,
    "product_kind": "Cactaceae",
    "product_name": "Devil Cholla",
    "product_price": "$6.24",
    "product_description": "Grusonia emoryi (Engelm.) Pinkava"
  }, {
    "id": 39,
    "product_kind": "Fabaceae",
    "product_name": "Lesser Rushy Milkvetch",
    "product_price": "$1.28",
    "product_description": "Astragalus convallarius Greene var. margaretiae Barneby"
  }, {
    "id": 40,
    "product_kind": "Dioscoreaceae",
    "product_name": "Rajania",
    "product_price": "$33.53",
    "product_description": "Rajania L."
  }, {
    "id": 41,
    "product_kind": "Poaceae",
    "product_name": "Buckley's Fluffgrass",
    "product_price": "$27.73",
    "product_description": "Tridens buckleyanus (L.H. Dewey) Nash"
  }, {
    "id": 42,
    "product_kind": "Acarosporaceae",
    "product_name": "Dakota Sarcogyne Lichen",
    "product_price": "$42.92",
    "product_description": "Sarcogyne dakotensis H. Magn."
  }, {
    "id": 43,
    "product_kind": "Marantaceae",
    "product_name": "Zebraplant",
    "product_price": "$40.46",
    "product_description": "Calathea zebrina (Sims) Lindl."
  }, {
    "id": 44,
    "product_kind": "Cyperaceae",
    "product_name": "Swampforest Beaksedge",
    "product_price": "$1.41",
    "product_description": "Rhynchospora decurrens Chapm."
  }, {
    "id": 45,
    "product_kind": "Potamogetonaceae",
    "product_name": "Illinois Pondweed",
    "product_price": "$31.88",
    "product_description": "Potamogeton illinoensis Morong"
  }, {
    "id": 46,
    "product_kind": "Parmeliaceae",
    "product_name": "Melanelia Lichen",
    "product_price": "$28.07",
    "product_description": "Melanelia panniformis (Nyl.) Essl."
  }, {
    "id": 47,
    "product_kind": "Lecideaceae",
    "product_name": "Lecidea Lichen",
    "product_price": "$31.54",
    "product_description": "Lecidea violascens H. Magn."
  }, {
    "id": 48,
    "product_kind": "Asteraceae",
    "product_name": "Na'ena'e 'ula",
    "product_price": "$37.88",
    "product_description": "Dubautia raillardioides Hillebr."
  }, {
    "id": 49,
    "product_kind": "Orchidaceae",
    "product_name": "Huachuca Mountain Adder's-mouth Orchid",
    "product_price": "$11.26",
    "product_description": "Malaxis corymbosa (S. Watson) Kuntze"
  }, {
    "id": 50,
    "product_kind": "Isoetaceae",
    "product_name": "Texas Quillwort",
    "product_price": "$34.30",
    "product_description": "Isoetes texana Singhurst, Rushing & W.C. Holmes"
  }, {
    "id": 51,
    "product_kind": "Rosaceae",
    "product_name": "Cinnamon Rose",
    "product_price": "$48.58",
    "product_description": "Rosa cinnamomea L."
  }, {
    "id": 52,
    "product_kind": "Fabaceae",
    "product_name": "Bearded Prairie Clover",
    "product_price": "$21.62",
    "product_description": "Dalea pogonathera A. Gray var. pogonathera"
  }, {
    "id": 53,
    "product_kind": "Asteraceae",
    "product_name": "Common Yarrow",
    "product_price": "$6.68",
    "product_description": "Achillea millefolium L. var. millefolium"
  }, {
    "id": 54,
    "product_kind": "Pinaceae",
    "product_name": "Bishop Pine",
    "product_price": "$17.19",
    "product_description": "Pinus muricata D. Don"
  }, {
    "id": 55,
    "product_kind": "Crassulaceae",
    "product_name": "San Gabriel River Dudleya",
    "product_price": "$4.33",
    "product_description": "Dudleya cymosa (Lem.) Britton & Rose ssp. crebrifolia K.M. Nakai & Verity"
  }, {
    "id": 56,
    "product_kind": "Onagraceae",
    "product_name": "Whitney's Clarkia",
    "product_price": "$7.65",
    "product_description": "Clarkia amoena (Lehm.) A. Nelson & J.F. Macbr. ssp. whitneyi (A. Gray) F.H. Lewis & M.E. Lewis"
  }, {
    "id": 57,
    "product_kind": "Fabaceae",
    "product_name": "Grassleaf Pea",
    "product_price": "$38.92",
    "product_description": "Lathyrus graminifolius (S. Watson) T.G. White"
  }, {
    "id": 58,
    "product_kind": "Asteraceae",
    "product_name": "California Balsamroot",
    "product_price": "$28.16",
    "product_description": "Balsamorhiza macrolepis Sharp var. macrolepis"
  }, {
    "id": 59,
    "product_kind": "Brachytheciaceae",
    "product_name": "Brachythecium Moss",
    "product_price": "$5.92",
    "product_description": "Brachythecium populeum (Hedw.) Schimp."
  }, {
    "id": 60,
    "product_kind": "Bixaceae",
    "product_name": "Mexican Yellowshow",
    "product_price": "$9.29",
    "product_description": "Amoreuxia palmatifida Moc. & Sessé ex DC."
  }, {
    "id": 61,
    "product_kind": "Lycopodiaceae",
    "product_name": "Clubmoss",
    "product_price": "$0.50",
    "product_description": "Lycopodiella ×brucei Cranfill"
  }, {
    "id": 62,
    "product_kind": "Gentianaceae",
    "product_name": "Fourpart Dwarf Gentian",
    "product_price": "$47.32",
    "product_description": "Gentianella propinqua (Richardson) J.M. Gillett ssp. propinqua"
  }, {
    "id": 63,
    "product_kind": "Acarosporaceae",
    "product_name": "Lapland Polysporina Lichen",
    "product_price": "$1.83",
    "product_description": "Polysporina lapponica (Ach. ex Schaerer) Degel."
  }, {
    "id": 64,
    "product_kind": "Boraginaceae",
    "product_name": "Hound's Tongue",
    "product_price": "$49.78",
    "product_description": "Cynoglossum L."
  }, {
    "id": 65,
    "product_kind": "Amblystegiaceae",
    "product_name": "Sanionia Moss",
    "product_price": "$1.21",
    "product_description": "Sanionia Loeske"
  }, {
    "id": 66,
    "product_kind": "Poaceae",
    "product_name": "Sand Timothy",
    "product_price": "$46.80",
    "product_description": "Phleum arenarium L."
  }, {
    "id": 67,
    "product_kind": "Rosaceae",
    "product_name": "Fort Sheridan Hawthorn",
    "product_price": "$39.12",
    "product_description": "Crataegus apiomorpha Sarg."
  }, {
    "id": 68,
    "product_kind": "Rubiaceae",
    "product_name": "Day's Bedstraw",
    "product_price": "$7.10",
    "product_description": "Galium serpenticum Dempster ssp. dayense Dempster & Ehrend."
  }, {
    "id": 69,
    "product_kind": "Asteraceae",
    "product_name": "Coastal Plain Palafox",
    "product_price": "$26.41",
    "product_description": "Palafoxia integrifolia (Nutt.) Torr. & A. Gray"
  }, {
    "id": 70,
    "product_kind": "Cyperaceae",
    "product_name": "Starrush Whitetop",
    "product_price": "$39.56",
    "product_description": "Rhynchospora colorata (L.) H. Pfeiffer"
  }, {
    "id": 71,
    "product_kind": "Physciaceae",
    "product_name": "Rosette Lichen",
    "product_price": "$34.19",
    "product_description": "Physcia tenella (Scop.) DC. var. marina (A. Nyl.) D. Hawksw."
  }, {
    "id": 72,
    "product_kind": "Chenopodiaceae",
    "product_name": "Fremont's Goosefoot",
    "product_price": "$21.38",
    "product_description": "Chenopodium fremontii S. Watson"
  }, {
    "id": 73,
    "product_kind": "Cyperaceae",
    "product_name": "Savannah Beaksedge",
    "product_price": "$10.64",
    "product_description": "Rhynchospora debilis Gale"
  }, {
    "id": 74,
    "product_kind": "Vitaceae",
    "product_name": "California Wild Grape",
    "product_price": "$48.73",
    "product_description": "Vitis californica Benth."
  }, {
    "id": 75,
    "product_kind": "Uncertain Ascomycota Family",
    "product_name": "Usnea Lichenoconium Lichen",
    "product_price": "$14.60",
    "product_description": "Lichenoconium usneae (Anzi) D. Hawksw."
  }, {
    "id": 76,
    "product_kind": "Capnodiaceae",
    "product_name": "Reticulate Echinothecium Lichen",
    "product_price": "$40.07",
    "product_description": "Echinothecium reticulatum Zopf"
  }, {
    "id": 77,
    "product_kind": "Poaceae",
    "product_name": "Slimspike Threeawn",
    "product_price": "$7.09",
    "product_description": "Aristida longespica Poir."
  }, {
    "id": 78,
    "product_kind": "Papaveraceae",
    "product_name": "California Bearpoppy",
    "product_price": "$42.81",
    "product_description": "Arctomecon californica Torr. & Frém."
  }, {
    "id": 79,
    "product_kind": "Clusiaceae",
    "product_name": "Cedarglade St. Johnswort",
    "product_price": "$5.20",
    "product_description": "Hypericum frondosum Michx."
  }, {
    "id": 80,
    "product_kind": "Ranunculaceae",
    "product_name": "Globeflower",
    "product_price": "$32.54",
    "product_description": "Trollius L."
  }, {
    "id": 81,
    "product_kind": "Lamiaceae",
    "product_name": "Reverchon's False Pennyroyal",
    "product_price": "$5.34",
    "product_description": "Hedeoma reverchonii (A. Gray) A. Gray"
  }, {
    "id": 82,
    "product_kind": "Baeomycetaceae",
    "product_name": "Peppermint Drop Lichen",
    "product_price": "$49.84",
    "product_description": "Icmadophila ericetorum (L.) Zahlbr."
  }, {
    "id": 83,
    "product_kind": "Chenopodiaceae",
    "product_name": "Crescent Bugseed",
    "product_price": "$48.00",
    "product_description": "Corispermum navicula Mosyakin"
  }, {
    "id": 84,
    "product_kind": "Polygonaceae",
    "product_name": "Sprawling Wirevine",
    "product_price": "$48.05",
    "product_description": "Muehlenbeckia axillaris (Hook. f.) Walp."
  }, {
    "id": 85,
    "product_kind": "Asteraceae",
    "product_name": "Short Woollyheads",
    "product_price": "$4.75",
    "product_description": "Psilocarphus brevissimus Nutt. var. brevissimus"
  }, {
    "id": 86,
    "product_kind": "Asclepiadaceae",
    "product_name": "Arrowleaf Milkvine",
    "product_price": "$4.71",
    "product_description": "Matelea sagittifolia (A. Gray) Woodson"
  }, {
    "id": 87,
    "product_kind": "Cactaceae",
    "product_name": "Intermediate Fishhook Cactus",
    "product_price": "$28.30",
    "product_description": "Sclerocactus parviflorus Clover & Jotter ssp. intermedius (Peebles) K.D. Heil & J.M. Porter"
  }, {
    "id": 88,
    "product_kind": "Fabaceae",
    "product_name": "Torrey's Milkvetch",
    "product_price": "$17.29",
    "product_description": "Astragalus calycosus Torr. ex S. Watson var. calycosus"
  }, {
    "id": 89,
    "product_kind": "Liliaceae",
    "product_name": "Chequered Lily",
    "product_price": "$5.03",
    "product_description": "Fritillaria meleagris L."
  }, {
    "id": 90,
    "product_kind": "Lecideaceae",
    "product_name": "Lecidea Lichen",
    "product_price": "$29.16",
    "product_description": "Lecidea umbonata (Hepp) Mudd"
  }, {
    "id": 91,
    "product_kind": "Flacourtiaceae",
    "product_name": "Vanderbilt's Palo De Ramon",
    "product_price": "$42.68",
    "product_description": "Banara vanderbiltii Urb."
  }, {
    "id": 92,
    "product_kind": "Brassicaceae",
    "product_name": "Northwestern Thelypody",
    "product_price": "$20.87",
    "product_description": "Thelypodium paniculatum A. Nelson"
  }, {
    "id": 93,
    "product_kind": "Lamiaceae",
    "product_name": "Appalachian Hedgenettle",
    "product_price": "$38.20",
    "product_description": "Stachys appalachiana D.B. Poind. & J.B. Nelson"
  }, {
    "id": 94,
    "product_kind": "Ranunculaceae",
    "product_name": "Desert Columbine",
    "product_price": "$9.52",
    "product_description": "Aquilegia desertorum (M.E. Jones) Cockerell ex A. Heller"
  }, {
    "id": 95,
    "product_kind": "Rosaceae",
    "product_name": "Kern Plateau Horkelia",
    "product_price": "$42.51",
    "product_description": "Horkelia tularensis (J.T. Howell) Munz"
  }, {
    "id": 96,
    "product_kind": "Polemoniaceae",
    "product_name": "Whiskerbrush",
    "product_price": "$48.36",
    "product_description": "Leptosiphon ciliatus (Benth.) Jeps. ssp. neglectus (Greene) J.M. Porter & L.A. Johnson"
  }, {
    "id": 97,
    "product_kind": "Teloschistaceae",
    "product_name": "Orange Lichen",
    "product_price": "$42.63",
    "product_description": "Caloplaca microthallina (Wedd.) Zahlbr."
  }, {
    "id": 98,
    "product_kind": "Linaceae",
    "product_name": "Woodland Flax",
    "product_price": "$19.20",
    "product_description": "Linum virginianum L."
  }, {
    "id": 99,
    "product_kind": "Asteraceae",
    "product_name": "Engelmann's False Goldenweed",
    "product_price": "$34.20",
    "product_description": "Oonopsis engelmannii (A. Gray) Greene"
  }, {
    "id": 100,
    "product_kind": "Caryophyllaceae",
    "product_name": "Nuttall's Sandwort",
    "product_price": "$34.65",
    "product_description": "Minuartia nuttallii (Pax) Briq."
  }]

function filterProductMock(kind) {
  return productMock.filter( product => product.kind = kind)
}

class ProductServiceMock {
  async getProduct (){ 
    return Promise.resolve(productMock) 
  }
  async getProduct (){ 
    return Promise.resolve(productMock[0]) 
  }

}

module.exports = {
  productMock,
  filterProductMock,
  ProductServiceMock
}