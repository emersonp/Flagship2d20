import { FLAGSHIP2D20 } from "../helpers/config.mjs";
import { onManageActiveEffect, prepareActiveEffectCategories } from "../helpers/effects.mjs";
import { FlagshipActorSheet } from "./actor-sheet.mjs";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends { FlagshipActorSheet }
 */
export class FlagshipVehicleSheet extends FlagshipActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["flagship2d20", "sheet", "actor"],
            template: "systems/flagship2d20rpg/templates/actor/vehicle-sheet.html",
            width: 550,
            height: 550,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "abilities" }]
        });
    }
}
