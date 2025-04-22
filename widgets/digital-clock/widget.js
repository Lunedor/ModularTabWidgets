// GitHub Reposu -> /widgets/digital-clock/widget.js

/**
 * Digital Clock Widget (HH:MM with blinking colon)
 * - Exports itself to window.currentWidgetModuleExports for sandbox loading.
 */

let clockIntervalId = null;
let clockElements = null;

function padZero(num) { /* ... */ }

function updateTime() { /* ... */ }

function render(settings) {
    console.log("DigitalClock (Sandboxed): Rendering..."); // Logu güncelle
    const clockElement = document.createElement('div');
    clockElement.className = 'widget widget-digital-clock';
    // ... (Diğer elementleri oluşturma) ...
    clockElement.appendChild(hoursSpan);
    clockElement.appendChild(colonSpan);
    clockElement.appendChild(minutesSpan);
    clockElements = { /* ... */ };
    updateTime();
    if (clockIntervalId) clearInterval(clockIntervalId);
    clockIntervalId = setInterval(updateTime, 1000);
    console.log("DigitalClock (Sandboxed): Rendered.");
    return clockElement;
}

function clear(element) {
    if (clockIntervalId) {
        clearInterval(clockIntervalId);
        clockIntervalId = null;
        clockElements = null;
        console.log("DigitalClock (Sandboxed): Cleared.");
    }
}

// *** YENİ: Sandbox'ın bulması için exportları globale ata ***
window.currentWidgetModuleExports = {
  render: render,
  clear: clear
  // Varsa update fonksiyonu da eklenebilir
};

