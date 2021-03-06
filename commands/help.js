const config = require("../config.json");
const pointscheme = require("../pointscheme.json");
const buildinfo = require("../buildinfo.json");
const logPrinter = require("../logPrinter.js");

exports.run = (client, message, args) => {
    //get sports listed
    var jsonstring = JSON.stringify(pointscheme)
    var objectValue = JSON.parse(jsonstring);
    var objectsFiltered = [];
    for (var key in objectValue) {
        if (objectValue.hasOwnProperty(key) && objectValue[key][0] === "SHOWN") {
            objectsFiltered.push(key);
      }
    }
    var objectValuesAsString = objectsFiltered.toString().split(",").join(", ");

    //print info
    message.reply(":wave: **Hi, I'm Protein!\n(Version: " + buildinfo.softwareVersion + ")**\n\nI keep track of your exercises and allow you to compete with others!\nI do this by giving you points for exercising, and I maintain a monthly and all time leaderboard so you can compete with other users to be the best!\n\nTo add exercise to your profile, do:\n" + config.prefix + "add [sport] [amount in units or minutes if applicable]\n\nThe current supported sports are: " + objectValuesAsString + ".\n(Want a sport thats not on here? Suggest it with " + config.prefix + "suggest!)\n\nYou can also view your score with " + config.prefix + "profile and the monthly leaderboard with " + config.prefix + "leaderboard.\nUse " + config.prefix + "commands to list all the other commands.");
    logPrinter.printUserRequestedHelp(client, message.author.id);
}