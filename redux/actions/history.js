export function saveInj(siteAndTime) {
    return {
        type: 'history-save-injection',
        item: siteAndTime
    };
}

export function resetHistory() {
    return {
        type: 'history-reset-defaults'
    };
}

export function updateSyncStatus() {
  return {
    type: 'history-sync-status'
  };
}
