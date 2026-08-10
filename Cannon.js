/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things that have already been filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: (), {}, [], "", ''.
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use (online) code checking software like https://jshint.com

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Weapon (including natural attacks, attack cantrips, etc.)

	Effect:		This is the syntax for adding a new weapon to the sheet.
				This is used in the Attack section of the sheet, and
				can thus include things like attack cantrips.

	Remarks:	This syntax is also used for objects in the 'weaponOptions' attribute found in '_common attributes.js'.
				For the 'weaponOptions', you can disregard the object name and WeaponsList variable.
				Note that if you want a class feature, race, racial trait, feat, background, or magic item to
				add a weapon/attack, you should be using the 'weaponOptions' attribute.

	Sheet:		v13.2.0 and newer
*/

var iFileName = "Cannon.js";
/* 	iFileName // OPTIONAL //
	TYPE:	string
	USE:	how the file will be named in the sheet if you import it as a file

	Note that this is a variable called 'iFileName'.
	Variables invoked inside an import script will not be available after importing.
	However, if you invoke the variable without the 'var', it will be available after importing.

	This doesn't have to be the same as the actual name of the file.
	This doesn't need to have the .js file extension.
	Only the first occurrence of this variable will be used.
*/

RequiredSheetVersion("13.2.0");
/*	RequiredSheetVersion // OPTIONAL //
	TYPE:	function call with one variable, a string or number
	USE:	the minimum version of the sheet required for the import script to work

	If this script is imported into a sheet with an earlier version than given here, the player will be given a warning.

	The variable you input can be a the full semantic version of the sheet as a string (e.g. "13.0.6" or "13.1.0-beta1+201209").
	Alternatively, you can input a number, which the sheet will translate to a semantic version.
	For example:
		FUNCTION CALL						REQUIRED MINIMUM VERSION
		`RequiredSheetVersion(13);`			13.0.0
		`RequiredSheetVersion(13.1);`		13.1.0

	You can find the full semantic version of the sheet at the bottom of every page,
	or look at the "Get Latest Version" bookmark, which lists the version number,
	or go to File >> Properties >> Description, where the version is part of the document title.
*/

WeaponsList["cannon"] = {
	name : "Cannon",
	infoname: "Cannon [1500 gp]",
	source : [["HB", 0]],
	defaultExcluded : true,
	regExpSearch : /cannon/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : false,
	damage : [2, 8, "fire"],
	range : "Range, 100/400 ft",
	description : "Ammunition (Cannonball), Firearm, Heavy, Loading, Two-Handed; Explode",
	list : "firearm",
	weight : 225,	
	ammo : "cannonball",
	selectNow : true,
};
WeaponsList["railgun"] = {
	name : "Railgun",
	infoname: "Railgun [300 gp]",
	source : [["HB", 0]],
	defaultExcluded : true,
	regExpSearch : /railgun/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : false,
	damage : [2, 10, "force"],
	range : "Range, 400/1000 ft",
	description : "Ammunition (Tungsten Bolt), Firearm, Heavy, Loading, Two-Handed, Misfire 2; Scoped",
	list : "firearm",
	weight : 100,	
	ammo : "tungsten bolt",
	selectNow : true,
};
WeaponsList["railgun minigun"] = {
	name : "Railgun Minigun",
	infoname: "Railgun Minigun [300 gp]",
	source : [["HB", 0]],
	defaultExcluded : true,
	regExpSearch : /^(?=.*railgun)(?=.*minigun).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : false,
	damage : [2, 8, "force"],
	range : "Range, 100/400 ft",
	description : "Ammunition (Tungsten Bolt), Firearm, Heavy, Reload(80), Two-Handed, Recoil; Automatic",
	list : "firearm",
	weight : 100,	
	ammo : "tungsten bolt",
	selectNow : true,
};
WeaponsList["2011"] = {
	name: "2011",
	infoname: "2011 [1 sp]",
	source: [["HB", 0]],
	regExpSearch: /2011/i,
	type: "Martial",
	ability: 2,
	abilitytodamage: false,
	damage: [2, 6, "piercing"],
	range: "Range, 60/150",
	description: "Ammunition (Bullet), Firearm, Reload(15); Vex",
	list: "firearm",
	weight: 3,
	ammo: "bullets, firearm",
	monkweapon: false,
  };
AmmoList["cannonball"] = {
    name: "Cannonball",
    infoname: "Cannonball [25 gp]",
    source: [["HB", 0]],
    icon: "Bullets",
    invName: "Cannonball",
    weight: 10,
};
AmmoList["tungsten_bolt"] = {
    name: "Tungsten Bolt",
    infoname: "Tungsten Bolt [25 gp]",
    source: [["HB", 0]],
    icon: "Bullets",
    invName: "Tungsten Bolt",
    weight: 5,
};
MagicItemsList["ADATSv3"] = {
  name : "ADATSv3",
  source : [["HB", 0]],
  type : "weapon",
  rarity : "rare",
  usages : 4,
  additional : "regains 1d4",
  recovery : "dawn",
  limfeaname : "Get Crushed",
  action : [
	["action", "Get Crushed"]
  ],
  description : "the 3rd iteration of the ADATS platform, it has access to the graviturgic shot and Get Crushed features. Additionally, it has all the features of a reapeating shot weapon",
  descriptionFull : desc([
  		"This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the Loading property if it has it.\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.",
		"\n Graviturgic shot: the dunamancy infused within this weapon speeds the projectiles fired from this weapon beyond normal means. You ignore the firearm property of this weapon",
		"\n Get Crushed: As an action you can cause the gravity in a 10-foot-radius sphere centered on a point you can see within the weapons short range to increase for a moment. Each creature in the sphere must make a Constitution saving throw versus your Gunslinger DC. On a failed save, a creature takes force damage equals to 3 rolls of your Gunslinger dice, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed.4 charges and regains 1d4 expended charges daily at dawn"
  ]),
  attunement : true,
  chooseGear : {
	type : "weapon",
	prefixOrSuffix : "suffix",
	descriptionChange : ["replace", "weapon"],
	excludeCheck : function (inObjKey, inObj) {
	  return !(/ammunition/i).test(inObj.description);
	}
  },

  calcChanges : {
	atkAdd : [
	  function (fields, v) {
		if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText)) {
		  v.theWea.isMagicWeapon = true;
		  fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '').replace(/(;|,)? ?loading/i, '');
		}
	  },
	  'If I include the words "Repeating Shot" in the name of a weapon with the ammunition property, it will be treated as the magic weapon Repeating Shot. It has +1 to hit and damage and produces its own ammunition, thus its loading property is removed if it has it.'
	],
	atkCalc : [
	  function (fields, v, output) {
		if ((/^(?=.*railgun minigun)(?=.*ammunition).*$/i).test(v.WeaponText) && !v.isSpell) {
		  output.magic = v.thisWeapon[1] + 2;
		  output.modToDmg = true;
		}
	  }, ''
	]
  }
};