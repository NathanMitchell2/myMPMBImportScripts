var iFileName = "glimmeringPearl.js";
RequiredSheetVersion("13.2.0");

MagicItemsList["glimemering pearl"] = { 
	name : "glimemering pearl",
	source : [["HB", 0]],
	type : "wondrous item",
    rarity : "uncommon",
	attunement : false,
	description : "15ft cone, DC 14 CON - fail: 1d10 radiant + blind | success: half",
	descriptionFull : desc([
        "As an action, all creatures in a 15 ft cone must make a DC 14 CON save or be blinded for one minute and take 1d10 radiant damage on a failed save, or half damage and not getting blind on a successful save. While blinded in this way, the creature can repeat the save, ending the effect on a success. Once a creature succeeds in a saving throw, they instantly succeed against this affect for an hour. This item has 12 charges it gains 1d12+1 charges at dawn each day."
    ]),
	weight : 1,
	usages : 12,
    additional : "regains 1d12+1",
    recovery : "dawn",
    action : [
	["action", "glimmering pearl"]
    ],
}