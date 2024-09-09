import { version } from './Version.js';


export const makeStyleForRobloxTopbar = function(i) {
    const style = document.createElement('style');


    style.innerHTML = `
.${i} .RobloxTopbarAPP-${version.replace('.', '-').substring(version.length - 6, version.length - 4)} {
    backgroundColor: rgba(0, 0, 0, 0.7);
    height: 33px;
    width: 33px;
}

.${i} .RobloxTopbarAPP-${version.replace('.', '-').substring(version.length - 6, version.length - 4)}:hover {
    backgroundColor: rgba(0, 0, 0, 0.6);
}
    `;

    style.id = `style-20dsysdiy27dsyhdsysdgsdu277ds77s87sd7ysdyds782789e`;

    document.head.appendChild(style);
}