"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var warframes = [
            { id: 0, name: 'Rhino Prime', loadout: 'Solo' },
            { id: 1, name: 'Excalibur', loadout: 'Melee' },
            { id: 2, name: 'Nova Prime', loadout: 'CC' },
            { id: 3, name: 'Nyx Prime', loadout: 'CC' },
            { id: 4, name: 'Ash Prime', loadout: 'Stealth' },
            { id: 5, name: 'Oberon Prime', loadout: 'Support' },
            { id: 6, name: 'Trinity Prime', loadout: 'Support' },
            { id: 7, name: 'Equinox', loadout: 'Nuke' },
            { id: 8, name: 'Limbo', loadout: 'Nuke' },
        ];
        return { warframes: warframes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map