/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    "systems/flagship2d20/templates/actor/parts/actor-header.html",
    "systems/flagship2d20/templates/actor/parts/actor-abilities.html",
    "systems/flagship2d20/templates/actor/parts/actor-talents.html",
    "systems/flagship2d20/templates/actor/parts/actor-spells.html",
    "systems/flagship2d20/templates/actor/parts/actor-weapons.html",
    "systems/flagship2d20/templates/actor/parts/actor-armor.html",
    "systems/flagship2d20/templates/actor/parts/actor-skillkit.html",
    "systems/flagship2d20/templates/actor/parts/actor-equipment.html",
    "systems/flagship2d20/templates/actor/parts/actor-encumbrance.html",
    "systems/flagship2d20/templates/actor/parts/actor-effects.html",
    "systems/flagship2d20/templates/actor/parts/npc-abilities.html",
    "systems/flagship2d20/templates/actor/parts/npc-header.html",
    "systems/flagship2d20/templates/actor/parts/vehicle-header.html",
    "systems/flagship2d20/templates/actor/parts/vehicle-abilities.html",
    "systems/flagship2d20/templates/item/parts/item-header.html",
    "systems/flagship2d20/templates/item/parts/item-effects.html",
    "systems/flagship2d20/templates/actor/parts/simple-expandable-item.html"
  ]);
};
