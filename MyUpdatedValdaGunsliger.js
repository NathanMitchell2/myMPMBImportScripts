/*-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://www.flapkan.com/download#charactersheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Gunslinger Class
	Effect:		This script adds the Gunslinger class published by Mage Hand Press in Valda's Spire of Secrets under the OGL.
	Sheet:		v13.1.12 and newer
    Remarks:    This script works best with u/AnasurimborInrilatas's Valda's Races, Equipment, Magic Items, and 
                Spells script, as it contains firearms intended to be used with the Gunslinger: https://pastebin.com/GwU8JnCM

	Code by:	Seaworld
	Date:       2024-02-03
*/

var iFileName = "myUpdatedValdaGunslinger.js";
RequiredSheetVersion("13.2.3");

//Create the source
SourceList["VSoS"] = {
	name: "Valda's Spire of Secrets",
	abbreviation: "VSoS",
	group: "Mage Hand Press",
	date: "2022/12/30"
};

// Gunslinger class
ClassList["gunslinger"] = {
    name: "Gunslinger",
    regExpSearch: /\bgunslinger\b/i,
    source: ["VSoS", 91],
    primaryAbility: "Dexterity",
    prereqs: "Dexterity 13",
    die: 8,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Dex", "Cha"],
    abilitySave: 2,
    skillstxt: {
        primary: "Choose two from Acrobatics, Animal Handling, Athletics, Deception, Insight, Intimidation, Perception, Persuasion, Sleight of Hand, and Stealth",
    },
    armorProfs: {
        primary: [true, false, false, false],
        secondary: [true, false, false, false]
    },
    weaponProfs: {
        primary: [false, false, ["firearm", "simple ranged", "martial ranged"]],
        secondary: [false, false, ["firearm", "simple ranged", "martial ranged"]],
    },
    toolProfs: {
        primary: ["One type of gaming set", 1]
    },
    equipment: "Gunslinger starting equipment: " +
        "\n \u2022 a handgun and 20 bullets -or- a revolver and 10 bullets;" +
        "\n \u2022 any two-handed firearm that isn't heavy and 30 bullets/shells;" +
        "\n \u2022 a dungeoneer's pack -or- an explorer's pack;" +
        "\n \u2022 leather armor, a longcoat, and a dagger",
    subclasses: ["Gunslinger's Creed", []],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: {
        "fighting style": {
			name: "Fighting Style",
			source: [["P24", 110]],
			minlevel: 2,
			description: desc([
				"You gain a Fighting Style feat of your choice. If you choose a feat, such as Great Weapon Fighting, that requires you to hold a Melee weapon in one or two hands, you can use that feat with Ranged weapons. Whenever you gain a Gunslinger level, you can replace the feat you chose with a different Fighting Style feat."
			]),
			choices: ["Fighting Style"],
			"fighting style": {
				name: "Fighting Style",
				eval: function () {
				AddString('Feat Note 2', 'Fighting Style feat', '; ');
				},
				removeeval: function () {
				RemoveString('Feat Note 2', 'Fighting Style feat');
				},
				description: desc([
				"I gain a 'Fighting Style' feat of my choice; use Choose Feature above.",
				]),
			},
        },
        "quickdraw": {
            name: "Quick Draw",
            source : ["VSoS", 93],
            minlevel: 1,
            description: desc([
                "Adv. on initiative rolls. I can draw/stow 2 weapons when I roll initiative as part of my action.",
            ]),
            advantages : [["Initiative", true]],
            
        },
        "weapon mastery": {
            name: "Weapon Mastery",
            source: [["P24", 91]],
            minlevel: 1,
            description: desc([
                "Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Ranged weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.",
            ]),
            additional: ["2 Weapon Masteries", "2 Weapon Masteries", "2 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries"],
            extraname: "Weapon Mastery",
            extrachoices: ["Dart", "Light Crossbow", "Shortbow", "Sling", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Musket", "Pistol", "Cannon", "2011", "Railgun", "Railgun Minigun"],
            extraTimes: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            "dart": {
                name: "Dart",
                description: desc([
                "I gain access to the Dart's 'Vex' Mastery feature",
                "Vex : If I hit a creature with this weapon and deal damage to the creature, I have Advantage on my next attack roll against the creature before the end of my next turn.",
                ]),
            },
            "light crossbow": {
                name: "Light Crossbow",
                description: desc([
                "I gain access to the Light Crossbow's 'Slow' Mastery feature",
                "Slow : If I hit a creature with this weapon and deal damage to it, I can reduce its Speed by 10 feet until the start of my next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
                ]),
            },
            "shortbow": {
                name: "Shortbow",
                description: desc([
                "I gain access to the Shortbow's 'Vex' Mastery feature",
                "Vex : If I hit a creature with this weapon and deal damage to the creature, I have Advantage on my next attack roll against the creature before the end of my next turn.",
                ]),
            },
            "sling": {
                name: "Sling",
                description: desc([
                "I gain access to the Sling's 'Slow' Mastery feature",
                "Slow : If I hit a creature with this weapon and deal damage to it, I can reduce its Speed by 10 feet until the start of my next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
                ]),
            },
            "blowgun": {
                name: "Blowgun",
                description: desc([
                "I gain access to the Blowgun's 'Vex' Mastery feature",
                "Vex : If I hit a creature with this weapon and deal damage to the creature, I have Advantage on my next attack roll against the creature before the end of my next turn.",
                ]),
            },
            "hand crossbow": {
                name: "Hand Crossbow",
                description: desc([
                "I gain access to the Hand Crossbow's 'Vex' Mastery feature",
                "Vex : If I hit a creature with this weapon and deal damage to the creature, I have Advantage on my next attack roll against the creature before the end of my next turn.",
                ]),
            },
            "heavy crossbow": {
                name: "Heavy Crossbow",
                description: desc([
                "I gain access to the Heavy Crossbow's 'Push' Mastery feature",
                "Push : If I hit a creature with this weapon, I can push the creature up to 10 feet straight away from me if it is Large or smaller.",
                ]),
            },
            "longbow": {
                name: "Longbow",
                description: desc([
                "I gain access to the Longbow's 'Slow' Mastery feature",
                "Slow : If I hit a creature with this weapon and deal damage to it, I can reduce its Speed by 10 feet until the start of my next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
                ]),
            },
            "musket": {
                name: "Musket",
                description: desc([
                "I gain access to the Musket's 'Slow' Mastery feature",
                "Slow : If I hit a creature with this weapon and deal damage to it, I can reduce its Speed by 10 feet until the start of my next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
                ]),
            },
            "pistol": {
                name: "Pistol",
                description: desc([
                "I gain access to the Pistol's 'Vex' Mastery feature",
                "Vex : If I hit a creature with this weapon and deal damage to the creature, I have Advantage on my next attack roll against the creature before the end of my next turn.",
                ]),
            },
            "cannon": {
                name: "Cannon",
                description: desc([
                "I gain access to the Cannons 'Explode' Mastery feature",
                "Explode : When you take the Attack action, you can replace one of your attacks with an explosion from this weapon’s projectile. This explosion is a 5-foot-radius Sphere centered on a point you choose within the weapon’s normal range. Each creature within the Sphere makes a Dexterity saving throw (DC 8 plus your Strength or Dexterity modifier and your Proficiency Bonus). On a failed save, a creature takes the weapon’s damage, but don’t add your ability modifier to that damage unless that modifier is negative. On a successful save, a creature takes half as much damage. You can create an explosion only once per turn.",
                ]),
            },
            "2011": {
                name: "2011",
                description: desc([
                "I gain access to the 2011's 'Vex' Mastery feature",
                "Vex : If I hit a creature with this weapon and deal damage to the creature, I have Advantage on my next attack roll against the creature before the end of my next turn.",
                ]),
            },
            "railgun": {
                name: "Railgun",
                description: desc([
                "I gain access to the Railgun's 'Overcharge' Mastery feature",
                "Overcharge: When I take the attack action, I can use a bonus action to overcharge the weapon. Every creature in a 5ft wide and weapons short range long line makes a DEX save(DC Gunslinger save DC). They take the weapons damage on a fail or half on a success. Once I make the attack roll a D20. on a 10 or lower, the weapon discharges too much energy in the attack. I must use a attack action or bonus action to reset the charge to proper levels before the weapon can be fired again. On a 3 or lower the weapon misfires. See Misfire for what happens.This property can only be used once per turn.",
                ]),
            },
            "railgun minigun": {
                name: "Railgun Minigun",
                description: desc([
                "I gain access to the Railgun Minigun's 'Automatic' Mastery feature",
                "When you make an attack with this weapon, you can choose to make two attacks instead. These attacks are always made with Disadvantage, regardless of circumstance. You can't replace these attacks. If this weapon has Ammunition, these attacks use twice the normal amount of ammunition.",
                ]),
            },
        },
        "critical shot": {
            name: "Critical Shot",
            source : ["VSoS", 93],
            minlevel: 2,
            description: desc([
                "My ranged firearm attacks score a critical hit on a roll of 19-20, increasing at 9th & 17th level.",
            ]),
            additional: levels.map(function (n) { return n < 2 ? "" : ("critical hit range: " + n < 9 ? "19-20" : n < 17 ? "18-20" : "17-20");}),
            calcChanges: {
                atkAdd: [
                    function (fields, v){
                        if ((/firearm/i.test(v.theWea.list) || /\bfirearm\b/i.test(fields.Description))){
                            fields.Description += (fields.Description == "" ? "" : "; ") + "crit on " + (classes.known.gunslinger.level < 9 ? "19-20" : classes.known.gunslinger.level < 17 ? "18-20" : "17-20");
                        }
                    }, "At 2nd level, my ranged firearm attacks score a crit on a roll of 19-20; at 9th level, 18-20; and at 17th level, 17-20."
                ]
            }
        },
        "risk" : {
            name: "Risk",
            source : ["VSoS", 93],
            minlevel: 2,
            description: desc([
                "I can spend Risk Dice to fuel Deeds once per turn (see third page) ",
                "My deed save DC is 8 + my proficiency bonus + my Dexterity modifier."
            ]),
            limfeaname: "Risk Dice",
            additional : levels.map(function (n) { return n < 2 ? "" : n < 10 ? "d8" : n < 18 ? "d10" : "d12"}),
            usages: levels.map(function (n) { return n < 2 ? 0 : n < 6 ? 4 : n < 14 ? 5 : 6}),
            recovery: "short rest",
            extraname: "Risk",
            "bitethebullet": {
                name: "Bite the Bullet",
                source: ["VSoS", 94],
                description: desc([
                    "As a bonus action, I can expend 1 risk die to gain temporary hit points equal to the roll + my Gunslinger level."
                ]),
                action: ["bonus action", ""],
            },
            "blindfire": {
                name: "Blindfire",
                source: ["VSoS", 94],
                description: desc([
                    "You can take a Bonus Action and expend one Risk Die to gain Blindsight with a range of 30 feet until the end of the current turn."
                ]),
                action: ["bonus action", ""],
            },
            "dodgeroll": {
                name: "Dodge Roll",
                source: ["VSoS", 94],
                description: desc([
                    "As a bonus action, I can spend a risk die to move up to 15 ft and reload any Rangded weapon I am holding. This movement doesn't provoke opportunity attacks, ignores difficult terrain."
                ]),
                action: ["bonus action", ""],
            },
            "grazingshot": {
                name: "Grazing Shot",
                source: ["VSoS", 94],
                description: desc([
                    "When you miss with a ranged attack roll using a weapon, you can expend one Risk Die (no action required) to deal damage to that creature equal to a roll of the die plus your Dexterity modifier (minimum of 1). This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier. You can only use this maneuver once per turn."
                ]),
            },
            "maverickspirit": {
                name: "Maverick Spirit",
                source: ["VSoS", 94],
                description: desc([
                    "When you fail an Intelligence, Wisdom, or Charisma ability check or saving throw, you can expend one Risk Die to add it to the roll, potentially turning it into a success. You can only use this maneuver once per turn."
                ]),
            },
            
            "skinofyourteeth": {
                name: "Skin of Your Teeth",
                source: ["VSoS", 94],
                description: desc([
                    "When a creature you can see hits you with an attack roll, you can take a Reaction and expend one Risk Die to dodge out of harm's way. Roll the die and add the number rolled to your AC against this attack, potentially causing it to miss."
                ]),
                action: ["reaction", ""],
            },
            
            autoSelectExtrachoices: [{
                extrachoice: "bitethebullet"
            }, {
                extrachoice: "blindfire"
            }, {
                extrachoice: "dodgeroll"
            }, {
                extrachoice: "grazingshot"
            }, {
                extrachoice: "maverickspirit"
            }, {
                extrachoice: "skinofyourteeth"
            }]
        },
        "subclassfeature3" : {
            name: "Gunslinger's Creed",
            minlevel: 3,
            source: ["VSoS", 93],
            description: desc(["Choose a Gunslinger's Creed and put it in the \"Class\" field."])
        },
        "gutshot": {
            name: "Gut Shot",
            minlevel: 5,
            source: ["VSoS", 94],
            description: desc([
                "Whenever you score a Critical Hit against a Large or smaller creature with a ranged attack using a weapon, the projectile lodges itself in the target. For 1 minute or until the target replaces one of its attacks with dislodging the projectile, its Speed is halved and it has Disadvantage on attack rolls."
            ])
        },
        "evasion": {
            name: "Evasion",
            minlevel: 7,
            source: ["VSoS", 94],
            description: desc([
                "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure. You don't benefit from this feature if you have the Incapacitated condition."
            ]),
            savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
        },
        "overkill": {
            name: "Overkill",
            minlevel: 11,
            source: ["VSoS", 94],
            description: desc([
                "When you deal damage with a Ranged weapon that doesn't add your ability modifier to the roll, you add your ability modifier nonetheless. If you already add your modifier to the damage roll, the target takes an extra 1d8 damage of the weapon's type. Note that weapons that have the Firearm property don't add your ability modifier to damage rolls."
            ]),
            calcChanges: {
                atkCalc: [
                    function (fields, v, output){
                        if ((/firearm/i.test(v.theWea.list) || /\bfirearm\b/i.test(fields.Description)) && !/\boff[ \-]+hand/i.test(v.WeaponTextName)){
                            output.modToDmg = true;
                        }
                    },  "I add my ability modifier to damage rolls of ranged firearm attacks I make using my action."
                ]
            }
        },
        "cheatdeath": {
            name: "Cheat Death",
            minlevel: 13,
            source: ["VSoS", 94],
            description: desc([
                "When you are reduced to 0 Hit Points and not killed outright, you can drop to 1 Hit Point instead, and you regain a number of Hit Points equal to your Gunslinger level. Once you use this feature, you can't use it again until you finish a Short or Long Rest."
            ]),
            usages: 1,
            recovery: "short rest"
        },
        "diregambit": {
            name: "Dire Gambit",
            minlevel: 15,
            source: ["VSoS", 94],
            description: desc("Whenever you roll Initiative or score a Critical Hit, you regain one expended Risk Die.")
        },
        "deftmaneuver": {
            name: "Deft Maneuver",
            minlevel: 18,
            source: ["VSoS", 94],
            description: desc([
                "You gain a special additional Bonus Action that you can take once on each of your turns. You can take this special Bonus Action only to use a maneuver."
            ]),
        },
        "epicboon": {
		  name: "Epic Boon",
		  source: [["P24", 53]],
		  minlevel: 19,
		  description: desc([
			"I gain an Epic Boon feat, or another feat of my choice for which I qualify. Boon of Irresistible Offense is recommended.",
		  ]),
		},
        "headshot": {
            name: "Head Shot",
            minlevel: 20,
            source: ["VSoS", 94],
            description: desc([
                "When you score a Critical Hit against a creature using a Ranged weapon, you can choose for it to be a Headshot. If the creature has less than 100 Hit Points, it dies. Otherwise, it takes an extra 10d10 damage of the weapon's type. Once you use this feature, you can't use it again until you finish a Short or Long Rest. You can also restore your use of it by expending three Risk Dice (no action required)."
            ]),
            usages: 1,
            recovery: "short rest"
        }
    }
}

// Gun Tank subclass
AddSubClass(
    "gunslinger",
    "gun tank",
    {
        regExpSearch: /\bgun tank\b/i,
        subname: "Gun Tank",
        source: ["VSoS", 95],
        abilitySave: 1,
        features: {
            "heavygunner": {
                name: "Heavy Gunner",
                source: [["VSoS", 95]],
                minlevel: 3,
                description: desc([
                    "You can lug around massive guns and shrug off incoming bullets, granting you the following benefits. You gain training with Medium and Heavy armor You can use Strength, rather than Dexterity, for attack and damage rolls using Ranged weapons. You can also add your Strength, instead of Dexterity, to your Maneuver save DC."
                ]),
                calcChanges: {
                    atkAdd: [
                        function(fields, v){
                            if (v.isRangedWeapon){
                                fields.Mod = v.StrDex;
                            }
                        }, "I can use Strength instead of Dexterity for attack & damage rolls using heavy firearms."
                    ]
                },
                armorProfs: [true, true, true, false],
		    },
            "walkingturret": {
                name: "Walking Turret",
                source: [["VSoS", 95]],
                minlevel: 3,
                description: desc([
                    "Your experience with mounted weapons grants you the following benefits. While you are holding a Ranged weapon whose mastery property you can use, you can use the Mounted mastery property with that weapon. While a weapon is mounted in a fixed position, its damage dice increase by one step (d4 -> d6 -> d8 -> d10 -> d12, to a maximum of d12s).",
                    "You can move a weapon with the Mounted mastery property that is in a fixed position. While moving with such a weapon, every foot of movement costs 1 extra foot.",
                    "Mounted: You can use a Bonus Action to mount this weapon in a fixed position until the end of your turn. A damage value in parentheses appears with this property. While mounted, the weapon deals that damage when used to make a ranged attack, and the weapon can't be moved."
                ]),
                action: ["bonus action", "Mounted"],
		    },
            "thickskulled": {
                name: "Thick-Skulled",
                minlevel: 6,
                source: ["VSoS", 95],
                description: desc([
                    "You have Advantage on saving throws you make to avoid or end the Charmed, Frightened, and Stunned conditions."
                ]),
                savetxt: { adv_vs : ["charmed, frightened, sutnned"] }
            },
            "bulletproof": {
                name: "Bulletproof",
                minlevel: 10,
                source: ["VSoS", 95],
                description: desc([
                    "When you use your Bite the Bullet maneuver, you have Resistance to Bludgeoning, Piercing, and Slashing damage until the end of your next turn."
                ]),
                dmgres : [["Bludgeoning", "Bludgeoning. (manuever use)"], ["Piercing", "Piercing (manuever use)"], ["Slashing", "Slashing (manuever use)"]],
            },
            "gatlingshot": {
                name: "Gatling Shot",
                minlevel: 14,
                source: ["VSoS", 95],
                description: desc([
                    "Once on each of your turns, when you hit an enemy with a ranged attack using a weapon, you can make another attack with the weapon against the same target. This attack is always made with Disadvantage, regardless of circumstance. If this attack hits, you can make another attack against the same target. You can repeat this attack until you miss or make a total of five attacks against the target."
                ]),
            }
        }
    }
)

FeatsList["marksman's luck"] = {
    name: "Marksman's Luck",
    source: [["HB", 0]],
    regExpSearch: /^(?=.*marksman's)(?=.*luck).*$/i,
    scores: [0, 1, 0, 0, 0, 0],
    description: "+1 Dex. Once per turn, when you roll for damage with a Ranged weapon, you can flip one of the damage dice over and use the number on the bottom. If I score a Crit the target's Speed is 0 until the end of its next turn.",  
    descriptionFull: desc([
      "You gain the following benefits",
      "Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 20.",
      "Flip Die: Once per turn, when you roll for damage with a Ranged weapon, you can flip one of the damage dice over and use the number on the bottom. You can't use this ability on d4s. Note that for a balanced die, the top and bottom numbers add up to one more than the die's largest number.",
      "Enhanced Critical: When you score a Critical Hit with a Ranged weapon, the target's Speed is 0 until the end of its next turn.",
    ]),
    prerequisite: "Level 4 and Dexterity 13 or higher",
    prereqeval: function (v) {
      return v.characterLevel >= 4 && What('Dex') >= 13;
    },
  };

FeatsList["earthen dunamancy"] = {
    name: "Earthen Dunamancy",
    source: [["HB", 0]],
    regExpSearch: /^(?=.*earthen)(?=.*dunamancy).*$/i,
    description: "you found some dunamantic notes. it is not a very well known school of magic. despite this you were able to learn the dunamancy spell Fortune's favor",  
    descriptionFull: desc([
      "you found some dunamantic notes. it is not a very well known school of magic. despite this you were able to learn the dunamancy spell Fortune's favor",
    ]),
    usages: 1,
    recovery: "long rest",
    spellcastingBonus : [{

	    spells : ["fortune's favor"],

	    name : "Earthen Dunamancy",

        spellcastingAbility : "class",

    }],

  };