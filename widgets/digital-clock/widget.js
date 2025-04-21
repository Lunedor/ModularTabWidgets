/**
 * Digital Clock Widget (HH:MM with blinking colon)
 */

let clockIntervalId = null;
let clockElements = null;

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function updateTime() {
    if (!clockElements) return;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Update DOM
    clockElements.hours.textContent = padZero(hours);
    clockElements.minutes.textContent = padZero(minutes);

    // Blink colon every second
    const showColon = now.getSeconds() % 2 === 0;
    clockElements.colon.style.opacity = showColon ? '1' : '0.3';
}

export function render(settings) {
    console.log("DigitalClock: Rendering...");

    const clockElement = document.createElement('div');
    clockElement.className = 'widget widget-digital-clock'; // Specific class

    const hoursSpan = document.createElement('span');
    hoursSpan.className = 'digital-hours';

    const minutesSpan = document.createElement('span');
    minutesSpan.className = 'digital-minutes';

    const colonSpan = document.createElement('span');
    colonSpan.className = 'digital-colon';
    colonSpan.textContent = ':';

    clockElement.appendChild(hoursSpan);
    clockElement.appendChild(colonSpan);
    clockElement.appendChild(minutesSpan);

    clockElements = {
        hours: hoursSpan,
        minutes: minutesSpan,
        colon: colonSpan
    };

    updateTime(); // Initial display

    if (clockIntervalId) {
        clearInterval(clockIntervalId);
    }
    clockIntervalId = setInterval(updateTime, 1000); // Update every second for blink

    console.log("DigitalClock: Rendered and interval started.");
    return clockElement;
}

export function clear(element) {
    if (clockIntervalId) {
        clearInterval(clockIntervalId);
        clockIntervalId = null;
        clockElements = null;
        console.log("DigitalClock: Update interval cleared.");
    }
}
