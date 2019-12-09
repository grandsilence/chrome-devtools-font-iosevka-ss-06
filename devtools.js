chrome.devtools.panels.applyStyleSheet(`
:host-context(.platform-windows) .monospace,
:host-context(.platform-windows) .source-code,
.platform-windows .monospace,
.platform-windows .source-code
{
    font-family: "Iosevka SS06", Consolas, monospace !important;
}

::shadow :host-context(.platform-windows) .monospace,
::shadow :host-context(.platform-windows) .source-code,
::shadow .platform-windows .monospace,
::shadow .platform-windows .source-code {
    font-family: "Iosevka SS06", Consolas, monospace !important;
}
`);