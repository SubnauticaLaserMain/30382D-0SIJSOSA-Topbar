import { RobloxTopbar } from './API-Storage/RobloxTopbarService.js';


const topbar = new RobloxTopbar();

const GroupTopbar = topbar.addModernTopbarButton(`<svg width="44px" height="44px" viewBox="0 0 24 24" id="Index">
    <!-- White rectangle (background) -->
    <rect x="6" y="6" width="12" height="12" fill="#FFFFFF" transform="rotate(110 12 12)"/>
    <!-- Black rectangle (center, smaller, rotated) -->
    <rect x="10.3" y="10.3" width="3.5" height="3.5" fill="rgba(0, 0, 0, 0.8)" transform="rotate(-160 12 12)" id="ChangeMiddle"/>
</svg>`, null, 'Join The ADL Roblox Group!');

const TeamsTopbar = topbar.addModernTopbarButton(`Teams`, null, 'Open Microsoft Teams in the Browser');


TeamsTopbar.click.connect(function() {
    window.open('https://teams.microsoft.com');
})


GroupTopbar.click.connect(function() {
    window.open('https://www.roblox.com/groups/34835864/ADL-Group-School#!/about', '_blank');
})