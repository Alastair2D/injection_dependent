export function saveInj(siteAndTime) {
    return {
        type: 'tasks-save-injection',
        item: siteAndTime
    };
}

export function nextInjSite() {
    return {
        type: 'tasks-next-injection-site'
    };
}

export function resetDefaults() {
    return {
        type: 'tasks-reset-defaults'
    };
}
