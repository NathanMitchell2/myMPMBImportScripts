var iFileName = "TitanForms.js";

RequiredSheetVersion("13.2.0");

SourceList["UAV26"] = {
    name: "UA 2026 Villainous Options",
    abbreviation: "UAV26",
    group: "Unearthed Arcana",
    url: "https://media.dndbeyond.com/compendium-images/ua/villainous-options/VRQr4YbETAgmpWRj/UA2026-VillainousOptions.pdf",
    date: "2026/04/07"
};


CreatureList["Behemoth"] = {
	name : "Behemoth",
	source : [["UAV26", 3]],
	size : [2,1,0],
	type : "Beast",
	alignment : "Unaligned",
	ac :  11 + What('Wis Mod'),
	hp : 1,
	hd : [1, 4],
	speed : "40 ft, Climb 40 ft",
	scores : [What('Wis'), What('Wis'), What('Con'), What('Int'), What('Wis'), What('Cha')],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	languages : "",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 2,	
	traits : [{
		name : "Rampager (Requires Druid Level 10+)",
		description : desc([
			"When you enter the space of an enemy that is at least one size smaller than you for the first time on a turn, that creature is subjected to the following effect. Strength Saving Throw: DC equals your spell save DC. Failure: The target has the Prone condition. If the target already has the Prone condition, it instead takes 2d6 Bludgeoning damage.",
		]),
	}, {
		name : "Siege Monster",
		description : desc([
			"You deal double damage to objects and structures.",
		]),
	},
    ],
	actions : [{
		name : "Multiattack (Requires Druid Level 5+)",
		description : desc([
			"You make two Rend attacks.",
		]),	
	}, {
		name : "Incandescent Breath",
		description : desc([
			"You expend a level 1+ spell slot. Dexterity Saving Throw: DC equals your spell save DC, each creature in a 5-foot-wide, 60-foot-long Line. Failure: 2d8 Radiant damage per level of the spell slot expended plus your Wisdom modifier. Success: Half damage.",
		]),
	}],	
	attacks : [{
		name : "Rend",
		ability : 5,
		damage : [1, 8, "slashing"],
		range : "Melee (10 ft). ",
		description : "",
        list: "Spell",
	}, ],

};

CreatureList["Levithan"] = {
	name : "Levithan",
	source : [["UAV26", 3]],
	size : [2,1,0],
	type : "Beast",
	alignment : "Unaligned",
	ac :  10 + What('Wis Mod'),
	hp : 1,
	hd : [1, 4],
	speed : "40 ft, Swim 40 ft",
	scores : [What('Wis'), What('Wis'), What('Con'), What('Int'), What('Wis'), What('Cha')],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	languages : "",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 2,	
	traits : [{
		name : "Toxic Stench (Requires Druid Level 10+)",
		description : desc([
			"Constitution Saving Throw: DC equals your spell save DC, each creature of your choice that starts its turn in a 10-foot Emanation originating from you. Failure: 2d4 Poison damage, and the target has the Poisoned condition until the start of its next turn.",
		]),
	}, {
		name : "Amphibious",
		description : desc([
			"You can breathe air and water.",
		]),
	},
    ],
	actions : [{
		name : "Multiattack (Requires Druid Level 5+)",
		description : desc([
			"You make two Rend attacks.",
		]),	
	}, {
		name : "Ink Cloud(reaction)",
		description : desc([
			"Trigger: You take damage. Response: You expend a level 1+ spell slot and release an inky cloud that fills a 15-foot-radius Cube centered on yourself, and you move up to your Speed. The Cube is Heavily Obscured. It lasts for 1 minute or until a strong current or wind (such as one created by Gust of Wind) disperses it.",
		]),
	}],	
	attacks : [{
		name : "Rend",
		ability : 5,
		damage : [1, 8, "bludgeoning"],
		range : "Melee (10 ft). ",
		description : "",
        list: "Spell",
	}, ],

};

CreatureList["Insectiod"] = {
	name : "Insectiod",
	source : [["UAV26", 3]],
	size : [2,1,0],
	type : "Beast",
	alignment : "Unaligned",
	ac :  8 + What('Wis Mod'),
	hp : 1,
	hd : [1, 4],
	speed : "40 ft, Fly 40 ft",
	scores : [What('Wis'), What('Wis'), What('Con'), What('Int'), What('Wis'), What('Cha')],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	languages : "",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 2,	
	traits : [{
		name : "Hive Mind (Requires Druid Level 10+)",
		description : desc([
			"When you assume this form, you forge a telepathic link with a number of creatures of your choice you can see and that can communicate in at least one language; the maximum number of creatures is equal to your Druid level. You and the chosen creatures can communicate telepathically with each other whether or not you share a language as long as you are on the same plane.",
		]),
	}, {
		name : "Flyby.",
		description : desc([
			"You don't provoke an Opportunity Attack when you fly out of an enemy's reach",
		]),
	},
    ],
	actions : [{
		name : "Multiattack (Requires Druid Level 5+)",
		description : desc([
			"You make two Rend attacks.",
		]),	
	}, {
		name : "Energizing Pollen",
		description : desc([
			"You expend a level 1+ spell slot and emit a cloud of healing pollen that can restore a number of Hit Points equal to 2d8 plus five times the expended spell slot's level. Choose any number of creatures within 15 feet of yourself, and divide those Hit Points among them.",
		]),
	}],	
	attacks : [{
		name : "Rend",
		ability : 5,
		damage : [1, 8, "piercing"],
		range : "Melee (10 ft). ",
		description : "",
        list: "Spell",
	}, ],

};