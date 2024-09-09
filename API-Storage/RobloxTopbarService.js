import { RandomTopbarID } from './Random.js';
import { version } from './Version.js';
import { throwNewError } from './Console.js';
import { topbarInsetDIV } from './ScreenAPI.js';
import { makeGoodSignal } from './GoodSignal.js';
import { makeStyleForRobloxTopbar } from './Styles.js';


let did = 0;


const container = [];

export class RobloxTopbar {
    constructor(version) {
        this.version = version;
        this.topbarButtons = [];
    }

    load = function() {

    }

    addModernTopbarButton = function(name, unibarParent, toolTip) {
        try {
            if (!(name || typeof name == 'string')) {
                throw new Error(`arg #1 (string exspected, got ${typeof name})`)
                return
            }


            const [topbar, id] = topbarInsetDIV('F9229D89DE');

            
            const Module = {};



            if (!(document.getElementById('style-20dsysdiy27dsyhdsysdgsdu277ds77s87sd7ysdyds782789e'))) {
                makeStyleForRobloxTopbar(id);
            }

            const signalForSelected = makeGoodSignal();
            const signalForDeselected = makeGoodSignal();
            const signalForClick = makeGoodSignal();


            Module.selected = signalForSelected.signal;
            Module.deselected = signalForDeselected.signal;
            Module.click = signalForClick.signal;



            const robloxTriggerPoint = document.createElement('div');
            robloxTriggerPoint.innerHTML = name;
            robloxTriggerPoint.style.width = '44px';
            robloxTriggerPoint.style.height = '44px';
            robloxTriggerPoint.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            robloxTriggerPoint.style.color = `rgb(255, 255, 255)`;
            robloxTriggerPoint.style.borderRadius = `100%`;
            robloxTriggerPoint.style.alignItems = 'center';
            robloxTriggerPoint.style.alignContent = 'center';
            robloxTriggerPoint.style.zIndex = 1001;


            const overlayButton = document.createElement('button');
            overlayButton.style.height = `100%`;
            overlayButton.style.width = `100%`;
            overlayButton.style.backgroundColor = `rgba(0, 0, 0, 0)`;
            overlayButton.textContent = '';
            overlayButton.style.alignItems = 'center';
            overlayButton.style.position = `relative`;

            if (did > 0 && !(name.includes('<svg'))) {
                overlayButton.style.top = `-40%`;
            } else {
                overlayButton.style.top = '-108%';
            }
            overlayButton.style.border = 'none';
            overlayButton.style.borderRadius = `100%`;
            overlayButton.style.cursor = `pointer`;


            overlayButton.addEventListener('click', function() {
                signalForClick.fireConnections();
                console.log('Should fired all Detectors for Click!')
            })


            function createTooltip(text) {
                if (!(overlayButton.querySelector('#ToolTip'))) {
                    return `
                    <svg id="Tooltip-caret" width="16" height="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" style="transform: rotate(0deg); top: 103%; position: relative;">
                        <!-- Caret shape -->
                        <polygon points="0,8 8,0 16,8" fill="rgb(101, 102, 104)"/>
                    </svg>
                    <div id="ToolTip" style='right: 4px; bottom: 7px; height: auto; width: 101px; max-width: 101px; background-color: rgb(101, 102, 104); border-radius: 8px; color: rgb(255, 255, 255); font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; align-items: center; top: 95%; position: relative; display: flex; flex-wrap: wrap; word-wrap: break-word; font-size: 16px;'>${text || 'No tool TIP!'}</div>`
                } else {
                    return '';
                }
            }


            function removeTooltip() {
                const tooltip = overlayButton.querySelector('#ToolTip');
                const tooltipCaret = overlayButton.querySelector('#Tooltip-caret');

                if (tooltip) {
                    tooltip.remove();
                    tooltipCaret.remove();
                }
            }


            const enterThen = robloxTriggerPoint.querySelector('#Index #ChangeMiddle');

        

            overlayButton.addEventListener('mouseenter', function() {
                robloxTriggerPoint.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;

                if (enterThen) {
                    console.log(enterThen.style.fill)
                    enterThen.style.fill = `rgba(0, 0, 0, 0.7)`;
                }
            });
            overlayButton.addEventListener('mouseout', function() {
                robloxTriggerPoint.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;

                if (enterThen) {
                    enterThen.style.fill = `rgba(0, 0, 0, 0.8)`;
                }
            });


            overlayButton.addEventListener('mouseover', function() {
                overlayButton.innerHTML += createTooltip(toolTip);
            })

            overlayButton.addEventListener('mouseleave', function() {
                removeTooltip();
            })



            if (unibarParent) {
                unibarParent.appendChild(robloxTriggerPoint)
            } else {
                topbar.appendChild(robloxTriggerPoint);
            }

            // topbar.appendChild(robloxTriggerPoint);
            robloxTriggerPoint.appendChild(overlayButton);


            did++;

            return Module;
        } catch (error) {
            throwNewError(error.message)
        }
    }
}