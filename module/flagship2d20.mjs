// Import document classes.
import { FlagshipActor } from "./documents/actor.mjs";
import { FlagshipItem } from "./documents/item.mjs";
// Import sheet classes.
//import { FlagshipActorSheet } from "./sheets/actor-sheet.mjs";
import { FlagshipNPCSheet } from "./sheets/npc-sheet.mjs";
import { FlagshipVehicleSheet } from "./sheets/vehicle-sheet.mjs";
import { FlagshipItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
import { FLAGSHIP2D20 } from "./helpers/config.mjs";
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { registerHandlebarsHelpers } from "./helpers/handlebars.mjs"
//Import Roll2D20
import { Roller2D20 } from "./roller/flagship2d20-roller.mjs"
import { Dialog2d20 } from './roller/dialog2d20.js'
//import { DialogD6 } from './roller/dialogD6.js'
//import DieACChallenge from './roller/challengeDie.js'
//Settings
import { registerSettings } from './settings.js';
// Text Enrichers
import { registerEnrichers } from './enrichers.mjs';
//Momentum
import { MomentumTracker } from './app/momentum-tracker.mjs'

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */
registerHandlebarsHelpers();


Hooks.once('init', async function () {
    // Add utility classes to the global game object so that they're more easily
    // accessible in global contexts.

    game.flagship2d20 = {
        FlagshipActor: FlagshipActor,
        FlagshipItem: FlagshipItem,
        Roller2D20,
        Dialog2d20,
        DialogD6,
        MomentumTracker
    };

    // Add custom constants for configuration.
    CONFIG.FLAGSHIP2D20 = FLAGSHIP2D20;

    /**
   * Set an initiative formula for the system
   * @type {String}
   */
    CONFIG.Combat.initiative = {
        formula: "1",
        decimals: 0
    };

    // Define custom Document classes
    CONFIG.Actor.documentClass = FlagshipActor;
    CONFIG.Item.documentClass = FlagshipItem;
    CONFIG.Dice.terms["s"] = DieACChallenge;

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("flagship2d20", FlagshipActorSheet, { types: ["character"], makeDefault: true });
    Actors.registerSheet("flagship2d20", FlagshipNPCSheet, { types: ["npc"], makeDefault: true });
    Actors.registerSheet("flagship2d20", FlagshipVehicleSheet, { types: ["vehicle"], makeDefault: true });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("flagship2d20", FlagshipItemSheet, { makeDefault: true });

    // Register custom system settings
    registerSettings();

	// Register text enrichers.
	registerEnrichers();

    return preloadHandlebarsTemplates();
});

Hooks.on('ready', async () => {
    const listLocation = await game.settings.get('flagship2d20', 'hoversJsonLocation')
    const jsonFile = await fetch(listLocation)
    const content = await jsonFile.json();
    CONFIG.FLAGSHIP2D20.WEAPONS.effects = content.effects;
    CONFIG.FLAGSHIP2D20.WEAPONS.qualities = content.qualities;

    for await (const key of Object.keys(content.effects)){       
        let qEnriched = await TextEditor.enrichHTML(content.effects[key], {async: true});
        content.effects[key] = qEnriched.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    }

    for await (const key of Object.keys(content.qualities)){
        let qEnriched = await TextEditor.enrichHTML(content.qualities[key], {async: true});
        content.qualities[key] = qEnriched.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    }
})


Hooks.on('renderChatMessage', (message, html, data) => {
    let rrlBtn = html.find('.reroll-button');
    if (rrlBtn.length > 0) {
        rrlBtn[0].setAttribute('data-messageId', message.id);
        rrlBtn.click((el) => {
            //let selectedDiceForReroll = $(el.currentTarget).parent().find('.dice-selected');
            let selectedDiceForReroll = html.find('.dice-selected');
            let rerollIndex = [];
            for (let d of selectedDiceForReroll) {
                rerollIndex.push($(d).data('index'));
            }
            if (!rerollIndex.length) {
                ui.notifications.notify('Select Dice you want to Reroll');
            }
            else {
                let flagship2d20Roll = message.flags.flagship2d20roll;
                if (flagship2d20Roll.diceFace == "d20") {
                    Roller2D20.rerollD20({
                        rollname: flagship2d20Roll.rollname,
                        rerollIndexes: rerollIndex,
                        successTreshold: flagship2d20Roll.successTreshold,
                        critTreshold: flagship2d20Roll.critTreshold,
                        complicationTreshold: flagship2d20Roll.complicationTreshold,
                        dicesRolled: flagship2d20Roll.dicesRolled
                    });
                } else if (flagship2d20Roll.diceFace == "d6") {
                    Roller2D20.rerollD6({
                        rollname: flagship2d20Roll.rollname,
                        rerollIndexes: rerollIndex,
                        dicesRolled: flagship2d20Roll.dicesRolled,
                        itemId: message.flags.itemId,
                        actorId: message.flags.actorId,
                    });
                } else {
                    ui.notifications.notify('No dice face reckognized');
                }

            }
        })
    }
    html.find('.dice-icon').click((el) => {
        //if ($(el.currentTarget).hasClass('reroll'))
        //return;
        if ($(el.currentTarget).hasClass('dice-selected')) {
            $(el.currentTarget).removeClass('dice-selected');
        } else {
            $(el.currentTarget).addClass('dice-selected')
        }
    });
    let addBtn = html.find('.add-button');
    if (addBtn.length > 0) {
        addBtn[0].setAttribute('data-messageId', message.id);
        addBtn.click((ev) => {
            let flagship2d20Roll = message.flags.flagship2d20roll;
            let itemId = message.flags.itemId;
            let actorId = message.flags.actorId;
            game.flagship2d20.DialogD6.createDialog({ rollname: flagship2d20Roll.rollname, diceNum: 1, flagship2d20Roll: flagship2d20Roll, itemId: itemId, actorId: actorId })
        });
    }

});



/* -------------------------------------------- */
/*  DICE SO NICE                                */
/* -------------------------------------------- */

Hooks.once("diceSoNiceReady", (dice3d) => {
    dice3d.addSystem(
        { id: "flagship", name: "Flagship 2d20" },
        true
    );

    dice3d.addColorset(
        {
            name: "flagship2d20",
            description: "Flagship 2d20",
            category: "Colors",
            foreground: "#000000",
            background: "#000000",
            outline: "#000000",
            texture: "none",
        }
    );

    dice3d.addDicePreset({
        type: "ds",
        labels: [
            "systems/flagship2d20rpg/assets/dice/d1.webp",
            "systems/flagship2d20rpg/assets/dice/d2.webp",
            "systems/flagship2d20rpg/assets/dice/d3.webp",
            "systems/flagship2d20rpg/assets/dice/d4.webp",
            "systems/flagship2d20rpg/assets/dice/d5.webp",
            "systems/flagship2d20rpg/assets/dice/d6.webp",
        ],
        system: "flagship2d20",
        colorset: "flagship2d20"
    });
});