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

var iFileName = "CoolShield.js";

RequiredSheetVersion("13.2.0");

MagicItemsList["Shield of the Fallen"] = { 
	name : "Shield of the Fallen",
	source : [["HB", 0]],
	type : "wondrous item",
    rarity : "Very Rare",
	attunement : true,
	prerequisite : "Requires attunement by a paladin",
	prereqeval : function(v) {
		return classes.known.paladin ? true : false;
	},
	description : "I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells. Once per dawn, it allows me to use my Channel Divinity feature without expending one of the feature's uses. One target who fails Champions challenge is also compelled dueled. Heal 17 HP with Turn the Tide",
	descriptionFull : desc([
        "I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells. Once per long rest, it allows me to use my Channel Divinity feature without expending one of the feature's uses.",
        "when using your channel divinity you choose to gain resistance to one damage type of your choice (you have this resistence for 1d4+1 rounds)",
	    "When you use your channel divinity champion's challenge choose one individual and if that individual is under the effect of the channel divinity they are now additionally under the effect of compelled duel (with the additional stipulation of the spell breaking if any ally targets the individual compelled)",
        "If using turn the tide channel divinity, they gain hp equal to the maxium possible rolled doubling the dice."
    ]),
	weight : 1, // as amulet holy symbol
	usages : 1,
	recovery : "long rest",
	additional : "Channel Divinity",
    calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 1;
				},
				"While wearing the Amulet of the Devout, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
			]
		},
}