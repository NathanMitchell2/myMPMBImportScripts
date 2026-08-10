var iFileName = "hymnMaker.js";
RequiredSheetVersion("13.2.0");

MagicItemsList["Hymn Maker"] = { 
	name : "Hymn Maker",
	source : [["HB", 0]],
	type : "wondrous item",
    rarity : "Legendary Artifact",
	attunement : true,
	description : "",
	descriptionFull : desc([
        ""
    ]),
	weight : 1,
    weaponOptions : [{ 
        name: "Hymn Maker",
	    source: [["HB", 0]],
	    regExpSearch: /^(?=.*hymn)(?=.*maker).*$/i,
	    type: "Martial",
	    ability: 1,
	    abilitytodamage: true,
	    damage: [2, 6, "slashing"],
	    range: "Melee",
	    description: "Heavy, Two-Handed; Graze",
	    list: "Martial",
	    weight: 3,
        isAlwaysProf : true,
        
    }],
    chooseGear : {
	    type : "weapon",
	    prefixOrSuffix : "suffix",
	    descriptionChange : ["replace", "axe"],
    },
    calcChanges : {
	atkCalc : [
	  function (fields, v, output) {
		  if ((/^(?=.*hymn)(?=.*maker).*$/i).test(v.WeaponText) && !v.isSpell) {
		    output.magic += 3;
		}
	  }, ''
	]
    },
    extraLimitedFeatures : [
        {
	        name : "Verse of Oblivion", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "dawn", // REQUIRED //
	        additional : "DC 20 CON", // OPTIONAL //
        },
        {
	        name : "Echoes of Sorrow", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "long rest", // REQUIRED //
	        additional : "DC 20 WIS", // OPTIONAL //
        },
        {
	        name : "Shield of Grief", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "long rest", // REQUIRED //
            additional : "auto suc WIS save", // OPTIONAL //
        },
        {
	        name : "Verse of Wish", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "Century", // REQUIRED //
            additional: " must succeed DC 15 WIS"
        },
        {
	        name : "Crushing Pull", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "short rest", // REQUIRED //
	        additional : "DC 17 STR", // OPTIONAL //
        },
        {
	        name : "Cloud Rune", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "short rest", // REQUIRED //
	        additional : "DC 17 STR", // OPTIONAL //
        },
        {
	        name : "Wisp's Reprieve", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "long rest", // REQUIRED //
        },
        {
	        name : "Frost Rune", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "short rest", // REQUIRED //
	        additional : "+2 STR&CON", // OPTIONAL //
        },
        {
	        name : "Storm Rune", // REQUIRED //
	        usages : 1, // REQUIRED //
	        recovery : "long rest", // REQUIRED //
	        additional : "2d8 Thunder", // OPTIONAL //
        },
    ],
    dmgres : [
	    "Radiant",
        "Psychic",
    ],
    languageProfs : [
	"All Written",
    ],
    advantages : [
	    ["History", true],
        ["Arcana", true],
        ["Sleight of Hand", true],
        ["Deception", true],
        ["Acrobatics", true],
        ["Animal Handling", true],
        ["Intimidation", true],
    ],
    speed: {
        allModes : { bonus : "+5" }
    },
    carryingCapacity : 2,
}