const debounceReload = debounce(() => window.location.reload(), 100)
export function registerSettings() {
    game.settings.register('flagship2d20', 'partyMomentum', {
        name: 'Party Momentum',
        scope: 'world',
        config: false,
        default: 0,
        type: Number,
    });
    game.settings.register('flagship2d20', 'gmMomentum', {
        name: 'GM Momentum',
        scope: 'world',
        config: false,
        default: 0,
        type: Number,
    });
    game.settings.register('flagship2d20', 'maxMomentum', {
        name: 'Max Momentum',
        scope: 'world',
        config: false,
        default: 6,
        type: Number,
    });
    game.settings.register('flagship2d20', 'gmMomentumShowToPlayers', {
        name: 'Show GM Momentum To Players',
        hint: "Shows the GM momentum window to everyone. Requires refresh on players side.",
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('flagship2d20', 'maxAppShowToPlayers', {
        name: 'Players Can Setup Max App',
        hint: "Allows players to settup the Party's MAX AP. Requires refresh on players side.",
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('flagship2d20', 'compendium-skills', {
        name: 'Skills Compendium',
        scope: 'world',
        config: true,
        default: "flagship2d20rpg.skills",
        type: String,
    });
    game.settings.register('flagship2d20', "hoversJsonLocation",{
		name: "Mouse Hover JSON file",
        hint: "Location of the json file containing the text for qualities and damage effects.",
		scope: "world",
		config: true,
		default: "systems/flagship2d20rpg/assets/hovers.json",		
		type: String,
        filePicker: true,
        restricted: true,
        onChange: debounceReload
	});
}