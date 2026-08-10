/*	-WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Pugilist" (v3.1) and the seven subclasses for it: "Club of the Arena Royale", "Club of the Bloodhound Bruisers", "Club of the Dog and Hound", "Club of the Piss and Vinegar", "Club of the Squared Circle", "Club of the Sweet Science" and "Club of the Whiskey Fist" from the Pugilist class PDF (2nd Anniversary Edition).
				This is taken from the DMs Guild website (http://www.dmsguild.com/product/184921/)
				This class and subclasses are made by Benjamin Huffman.
				The 2nd Anniversary Edition includes the "Additional Fight Clubs for the Pugilist Class" (v2), which have now been merged with the base class, originally taken from http://www.dmsguild.com/product/186640/.
	Code by:		Original script by tables-r-us & MorePurpleMoreBetter.
					Updated to Pugilist v3.1 by FishyFing.
	Code version:	v2
	Date:			2019-01-05 (sheet v12.999)
	Please support the creator of this content (Benjamin Huffman) and download his material from the DMs Guild website: http://www.dmsguild.com/browse.php?x=0&y=0&author=Benjamin%20Huffman
	Please take note that some features of the Pugilist class are unique and not supported by the character sheet, such as adding Constitution modifier to AC instead of Dexterity when wearing light armour.
*/

var iFileName = "5.5ePugilist.js";
RequiredSheetVersion(13.2);

ClassList["pugilist"] = {
	regExpSearch : /pugilist/i,
	name : "Pugilist",
	source : ["BH:PC", 3],
	primaryAbility : "\n \u2022 Pugilist: Strength;",
	prereqs : "\n \u2022 Pugilist: Strength 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Str", "Con"],
	toolProfs: [
        ["Gaming Set", 1]
    ],
	skills : ["\n\n" + toUni("Pugilist") + ": Choose two skills from Acrobatics, Athletics, Deception, Intimidation, Perception, Sleight of Hand, and Stealth."],
	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],
	weapons : [
		[true, false, ["improvised weapon"]],
		[false, false, ["improvised weapon"]]
	],
	equipment: "Pugilist starting equipment:" +
        "\n \u2022 Club;" +
        "\n \u2022 Handaxe;" +
        "\n \u2022 Gaming set;" +
        "\n \u2022 An Dungeoneer's Pack, and 31 gp." +
        "\n\nAlternatively, choose 50 gp worth of starting equipment instead of the class's starting equipment.",
    subclasses : ["Fight Club", ["club of the dog and hound", "club of piss and vinegar","club of the squared circle", "club of sweet science", "club of the hand of dread", "club of the street saint" ]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		 "fisticuffs": {
            name: "Fisticuffs",
            source: [
                ["P24", 101]
            ],
            minlevel: 1,
            action: [
                ["bonus action", "Unarmed Strike"]
            ],
            additional: levels.map(function(n) {
                if (n < 17){
                    return "1d" + (n < 5 ? 8 : n < 11 ? 10 : n < 17 ? 12: 12);
                }
                else {
                    return "2d6"
                }
                
            }),
            eval: function() {
                AddString('Extra.Notes', 'Pugilist features:\n\u25C6 If I wear  light armor/heavy armor/shield, I lose Fisticuffs and Iron Chin');
                show3rdPageNotes();
            },
            removeeval: function() {
                RemoveString('Extra.Notes', 'Pugilist features:\n\u25C6 If I wear  light armor/heavy armor/shield, I lose Fisticuffs and Iron Chin');
            },
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (classes.known.pugilist && classes.known.pugilist.level && ( v.baseWeaponName == "unarmed strike" || (/improvised/i).test(v.WeaponName + v.baseWeaponName) || (/improvised weapon/i).test(v.theWea.type) || (isMeleeWeapon && (/simple/i).test(theWea.type)))) {
                            //v.theWea.monkweapon = true;
                            var aPugilistDie = function(n) {
                                return n < 5 ? 8 : n < 11 ? 10 : n < 17 ? 12 : 6;
                            }(classes.known.pugilist.level);
                            try {
                                var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
                            } catch (e) {
                                var curDie = 'x';
                            }
                            if (isNaN(curDie) || curDie < aPugilistDie) {
                                if (aPugilistDie != 6){
                                    fields.Damage_Die = '1d' + aPugilistDie;
                                }
                                else {
                                    fields.Damage_Die = '2d6';
                                }
                                
                            }
                            fields.Mod = 1
                        }
                    },
                    5
                ]
            },
            description: desc([
                "Pugilist weapons: Simple Melee weapons, Improvised Weapons, Unarmed Strike",
                "While wielding Pugilist weapons and wearing Light or no armor and not wearing a shield I can make one unarmed strike as a bonus action",
                "All Improvised Weapons count as having the Sap mastery property for you.",
            ]),
        },
		"iron chin": {
            name: "Iron Chin",
            source: [
                ["P24", 101]
            ],
            minlevel: 1,
            armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Iron Chin (Con)",
                source: [
                    ["P24", 101]
                ],
                ac: "12+Con",
                selectNow: true
            }],
            description: desc([
                "While wearing Light or no armor and not wearing a shield my AC is 12 + Con mod",
            ]),
        },
		"moxie" : {
			name : "Moxie",
			source : ["BH:PC", 5],
			minlevel : 2,
			description : "\n   " + "I can spend moxie to fuel special actions (see third page)" + "\n   " + "I need to spar for at least 30 min of a short rest to restore moxie",
			usages : ["", 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 12],
			recovery : "short rest",
			extraname : "Moxie Feature",
			"brace up" : {
				name : "Brace up",
				source : ["BH:PC", 5],
				description : " [1 moxie point]" + "\n   " + "I can roll my fisticuffs die and gain temporary hit points equal to the number rolled + my pugilist level + my Constitution modifier.",
				action : ["bonus action", ""]
			},
			"the old one-two" : {
				name : "The Old One-Two",
				source : ["BH:PC", 5],
				description : " [1 moxie point]" + "\n   " + "I can make 2 unarmed attacks as a bonus action",
				action : ["bonus action", " (after Attack action)"]
			},
			"stick and move" : {
				name : "Stick and Move",
				source : ["BH:PC", 5],
				description : " [1 moxie point]" + "\n   " + "As a bonus action, I can make an Unarmed Strike and take the Dash or Disengage action.",
				action : ["bonus action", ""]
			},
			eval : "ClassFeatureOptions(['pugilist', 'moxie', 'brace up', 'extra']); ClassFeatureOptions(['pugilist', 'moxie', 'the old one-two', 'extra']); ClassFeatureOptions(['pugilist', 'moxie', 'stick and move', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'moxie', 'brace up', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'moxie', 'the old one-two', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'moxie', 'stick and move', 'extra'], 'remove');",
		},
		"swagger streak" : {
			name : "Swagger Streak",
			source : ["BH:PC", 5],
			minlevel : 2,
			description: desc([
                "When you fail a Strength, Dexterity, Constitution, or Charisma check, you can expend a Moxie Point to roll your Fisticuffs die and add the number rolled to the ability check, potentially turning it into a success.",
                "If the ability check still fails, you regain the expended Moxie Point and can't use this feature again until you finish a Short or Long Rest.",
            ]),
		},
		"bloodied but unbowed" : {
			name : "Bloody but Unbowed",
			source : ["BH:PC", 5],
			minlevel : 2,
			description : "\n   " + "When you take damage, take a Reaction to regain all expended moxie points. If you are Bloodied, you also gain Temporary Hit Points equal to 4 * your Pugilist level",
			action : ["reaction", ""],
            usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
		},
		"subclassfeature3" : {
			name : "Fight Club",
			source : ["BH:PC", 5],
			minlevel : 3,
			description : "\n   " + "Choose a Fight Club to train in and put it in the \"Class\" field on page 1" + "\n   " + "Choose either the Arena Royale, the Bloodhound Bruisers, the Piss and Vinegar, the Squared Circle, or the Sweet Science."
		},
        "heavy hitter" : {
			name : "Heavy Hitter",
			source : ["BH:PC", 5],
			minlevel : 3,
			description : "\n   " + "When you hit a creature with an Unarmed Strike, you can use both the Damage and your choice of the Grapple or Shove option.",
		},
		"dig deep" : {
			name : "Dig Deep",
			source : ["BH:PC", 5],
			minlevel : 4,
			description : "\n   " + "As a bonus action, I gain resistance to bludgeoning, piercing, and slashing damage and you ignore the effects of Exhaustion levels less than 6 for 10 minutes." + "\n   " + "Once you use this feature, you can't use it again until you finish a Long Rest unless you gain 1 Exhaustion level (no action required by you) to restore your use of it.",
			action : ["bonus action", ""],
			dmgres : [["Bludgeoning", "Bludgeon. (dig deep)"], ["Piercing", "Piercing (dig deep)"], ["Slashing", "Slashing (dig deep)"]]
		},
		"extra attack" : {
			name : "Extra Attack",
			source : ["BH:PC", 5],
			minlevel : 5,
			description : "\n   " + "I can attack twice, instead of once, whenever I take the Attack action on my turn."
		},
		"haymaker" : {
			name : "Haymaker",
			source : ["BH:PC", 5],
			minlevel : 5,
			description : "\n   " + "When you make an attack with an Unarmed Strike or Pugilist weapon, you can expend 1 Moxie Point to swing with wild abandon. On a hit, regain the expended Moxie Point and you deal maximum damage with that attack."
		},
		"moxie-fueled fists" : {
			name : "Moxie-Fueled Fists",
			source : ["BH:PC", 5],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes can deal your choice of Force damage or its normal damage type.",
		},
		"down but not out" : {
			name : "Down but Not Out",
			source : ["BH:PC", 5],
			minlevel : 7,
			description : "\n   " + "When you use your Bloodied But Unbowed while you are Bloodied, you can add a bonus to the damage of your Unarmed Strikes and attacks with Pugilist weapons for the next minute. This bonus equals your Con mod plus the number of levels of Exhaustion you have.",
			usages : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "long rest"
		},
		"school of hard knocks" : {
			name : "School of Hard Knocks",
			source : ["BH:PC", 6],
			minlevel : 9,
			description: desc([
                "Once per turn, you can deal an extra 1d12 damage when you hit with an Unarmed Strike or attack with a Pugilist weapon. This damage is the same type dealt by the weapon or Unarmed Strike. You can forgo this extra damage to apply one of the following effects.",
                "Endanger. The next time the creature is hit by an attack, the attack deals the maximum result of the attack's damage dice rather than rolling.",
                "Provoke. The creature has Disadvantage on attack rolls against creatures other than you until the end of your next turn.",
            ]),
		},
		"herculean" : {
			name : "Herculean",
			source : ["BH:PC", 6],
			minlevel : 10,
			description: desc([
                "You gain the following benefits. \n Heavy Lifter. Your Strength score is doubled when determining your carrying capacity.",
                "Pillar Breaker. When you hit an object with an Unarmed Strike, the hit is a Critical Hit.",
                "Unmatched Athlete. Your jump distance is doubled.",
            ]),
			carryingCapacity: 2
		},
		"shake it off" : {
			name : "Shake It Off",
			source : ["BH:PC", 6],
			minlevel : 10,
			description: desc([
                "With unflappable resolve, you can remove one of the following conditions from yourself at the start of each of your turns:",
                "Blinded, Charmed, Deafened, one level of Exhaustion, Frightened, Paralyzed, Poisoned, Restrained, or Stunned.",
                "Once you use this feature, you can't use it again until you finish a Long Rest unless you take a level of Exhaustion (no action required by you) to restore your use of it.",
            ]),
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "long rest"
		},
		"dig deeper" : {
			name : "Dig Deeper",
			source : ["BH:PC", 6],
			minlevel : 13,
			action : ["bonus action", ""],
			description : "\n   " + "You can use a Bonus Action to dig deeper. For 1 minute, you have all the benefits of your Dig Deep and can use your School of Hard Knocks twice per turn instead of once.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
			recovery : "long rest"
		},
		"unbreakable" : {
			name : "Unbreakable",
			source : ["BH:PC", 6],
			minlevel : 14,
			description : "\n   " + "I have advantage on Strength, Dexterity, and Constitution saving throws." + "\n   " + "I can reroll a failed save once by spending 1 moxie point"
		},
		"pugnacoius" : {
			name : "Pugnacious",
			source : ["BH:PC", 6],
			minlevel : 15,
			description : "\n   " + "When you roll Initiative, you can remove one level of Exhaustion on yourself and regain your uses of Down But Not Out, Dig Deep, and Shake It Off.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			recovery : "long rest"
		},
		"fighting spirit" : {
			name : "Fighting Spirit",
			source : ["BH:PC", 6],
			minlevel : 18,
			description : "\n   " + "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. When you do, you gain Temporary Hit Points equal to half of your maximum Hit Points, regain all your expended Moxie Points, and have Resistance to all damage except Force for the next minute.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest"
		},
		"peak physical condition" : {
			name : "Peak Physical Condition",
			source : ["BH:PC", 6],
			minlevel : 20,
			description: desc([
                "Your strength and resilience are the stuff of legends. You gain the following benefits. \n  Hale and Hearty. Your Strength and Constitution scores increase by 2, to a maximum of 23.",
                "Sleep It Off. When you finish a Long Rest and you have the Exhaustion condition, you lose all levels of Exhaustion.",
                "Vim and Vigor. When you finish a Short Rest, you regain Hit Points equal to twice your Pugilist level",
            ]),}
	}
};



AddSubClass("pugilist", "piss and vinegar", {
    regExpSearch : /^(((?=.*pugilist)(?=.*arena)(?=.*royale))|(?=.*luchador)).*$/i,
	subname: "Dog and Hound",
    source: [
        ["BH:PC", 6]
    ],
    features: {
        "subclassfeature3": {
            name: "bad attitude",
            source: [
                ["BH:PC", 6]
            ],
            minlevel: 3,
        	description: desc([
                "You gain proficiency in the Intimidation skill if you don't have it already. Additionally, you gain a bonus to checks using this skill equal to your Strength modifier (minimum bonus of +1).",
            ]),
			skills: ["Intimidation"],
			addMod: [
				{type: "skill", field: "Intimidation", mod: "Str", text: "you gain a bonus to checks using Intimidation equal to your Strength modifier (minimum bonus of +1)."}
			]
        },
        "subclassfeature3.1": {
            name: "Salty Salute",
            source: [
            	["BH:PC", 6]
            ],
            minlevel: 3,
            action: [
                ["bonus action", ""]
            ],
			description: desc([
                "You have mastered the art of the enraging insult. As a Bonus Action, you can provoke a creature within 60 feet that can see or hear you. ",
				"That creature must succeed on a Wisdom saving throw or take Psychic damage equal to a roll of your Fisticuffs die plus your Constitution modifier and have Disadvantage on any attack rolls it makes against creatures other than you until the start of your next turn.",
				"The saving throw DC for this and all other features from this subclass equals 8 plus your Constitution modifier and Proficiency Bonus."
            ]),
        },
        "subclassfeature7": {
            name: "Dirty Tricks",
            source: [
                ["BH:PC", 6]
            ],
            minlevel: 6,
			extraLimitedFeatures : [
				{
				name : "Heelstomper", 
				usages : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
				recovery : "short rest", 
				
				},
				{
				name : "Low Blow", 
				usages : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
				recovery : "short rest", 
				},
				{
				name : "Pocket Sand ", 
				usages : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
				recovery : "short rest", 
				action: [
                	["bonus action", ""]
				],
				},
			],
            description: desc([
                "You have a few tricks up your sleeve to even the odds when the going gets tough. You can use one of the following Dirty Tricks. You can use one Dirty Trick each turn, and once you use a dirty trick, you can't use that trick again until you finish a Short or Long Rest.",
				"Heelstomper. When you deal damage to a creature with an Unarmed Strike or Pugilist weapon, the creature must succeed on a Dexterity saving throw or its Speed is reduced to 0 for one minute. An affected creature can repeat this saving throw at the end of each of its turns, ending the effect on a success.",
				"Low Blow. When you deal damage to a creature with an Unarmed Strike or Pugilist weapon, you can hit the creature below the belt. When you do, the creature must succeed on a Strength saving throw or attacks against the creature have Advantage until the end of your next turn.",
				"Pocket Sand. As a Bonus Action, you toss detritus into the eyes of a creature within 10 feet. The creature must succeed on a Constitution saving throw or have the Blinded condition until the end of its next turn.",
            ]),
        },
        "subclassfeature11": {
            name: "Mean Old Cuss",
            source: [
                ["BH:PC", 6]
            ],
            minlevel: 11,
            usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			altResource : "3 Moxie Points",
    		recovery: "short rest",
            action: [
                ["bonus action", ""]
            ],
			description: desc([
                "You can offend every creature in the room with the flick of a wrist and a few curt words. As a Bonus Action, you can choose a number of targets within 30 feet of yourself that can see or hear you up to your level in this class. Each chosen creature must succeed on a Wisdom saving throw or take Psychic damage equal to a roll of your Fisticuffs die plus your Constitution modifier and have Disadvantage on attack rolls it makes against creatures other than you until the start of your next turn.",
				"Once you use this feature, you must finish a Short or Long Rest before you use it again. You can also restore your use of it by expending 3 Moxie Points (no action required)."
            ]),
        },
        "subclassfeature15": {
            name: "Dirtier Tricks",
            source: [
                ["BH:PC", 6]
            ],
            minlevel: 17,
            extraLimitedFeatures : [
				{
				name : "Rabbit Punch", 
				usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 
				recovery : "Rabbit Punch", 
				
				},
				{
				name : "Low Blow", 
				usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 
				recovery : "short rest", 
				},
				
			],
            description: desc([
                "You gain the following additional Dirty Tricks. You can use one Dirty Trick each turn, and once you use a dirty trick, you can't use that trick again until you finish a Short or Long Rest.",
                "Rabbit Punch. When you hit a creature with an Unarmed Strike or a Pugilist weapon, you strike its head. Until the end of your next turn, the creature loses Resistance to Psychic damage if it has it and has Disadvantage on saving throws.",
                "Rabbit Punch. When you hit a creature with an Unarmed Strike or Pugilist weapon, you can turn the hit into a Critical Hit. For this Critical Hit, you roll the attack's damage dice three times and add them together, instead of twice as normal.",
            ]),
        },
    },
});

// add additional equipment

WeaponsList["brass knuckles"] = {
	regExpSearch : /^^(?=.*(brass|(knuckles|knucks))|knuckleduster|knucklebuster).*$/i,
	name : "Brass Knuckles",
	source : ["BH:PC", 10],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	weight : 1,
	range : "Melee",
	description : "Light, unarmed",
	abilitytodamage : false
};
WeaponsList["katar"] = {
	regExpSearch : /^(?=.*(katar|dagger|knife)|(scissor|(knife|dagger))).*$/i,
	name : "Katar",
	source : ["BH:PC", 10],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	weight : 3,
	range : "Melee",
	description : "Light, unarmed",
	abilitytodamage : false
};
WeaponsList["knuckle knives"] = {
	regExpSearch : /^(?=.*(knuckle|(knives|claws))|(cat's|cats)|claws).*$/i,
	name : "Knuckle Knives",
	source : ["BH:PC", 10],
	list: "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "slashing"],
	weight : 2,
	range : "Melee",
	description : "Light, unarmed",
	abilitytodamage : false
};

SourceList["BH:PC"] = {
	name : "Benjamin Huffman: the Pugilist Class",
	abbreviation : "BH:PC",
	group : "Dungeon Master's Guild",
	url : "https://www.dmsguild.com/product/184921/"
};