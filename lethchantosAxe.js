var iFileName = "lethchantosAxe.js";
RequiredSheetVersion("13.2.0");

MagicItemsList["Lethchantos Axe"] = { 
	name : "Lethchantos Axe",
	source : [["HB", 0]],
	type : "wondrous item",
    rarity : "Rare",
	attunement : true,
	description : "+2 axe, 120ft darkvision, fly 30ft as bonus action and make attack",
	descriptionFull : desc([
        "+2 to attack and damage rolls. 120ft of darkvision.",
        "Dancing Axe: you can use a bonus action to toss this magic axe into the air and speak the command word. When you do so, the axe begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The axe uses your attack roll and ability score modifier to damage rolls. While the axe hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the axe to attack one creature within 5 feet of it. After the hovering axe attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the axe has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
    ]),
	weight : 1,
    action : [
	    ["bonus action", "Dancing Axe"]
    ],
    chooseGear : {
	    type : "weapon",
	    prefixOrSuffix : "suffix",
	    descriptionChange : ["replace", "axe"],
    },
    calcChanges : {
	atkCalc : [
	  function (fields, v, output) {
		  if ((/^(?=.*greataxe).*$/i).test(v.WeaponText) && !v.isSpell) {
		    output.magic += 2;
		}
	  }, ''
	]
    },
    vision: [
        ["Darkvision", 120]
    ],
}