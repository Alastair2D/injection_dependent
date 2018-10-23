export function nextInjSite() {
  return {
    type: 'sites-next-injection-site'
  };
}

export function rotateNSites(n) {
  return {
    type: 'sites-rotate-n-sites',
    number: n
  }
}

export function resetSites() {
  return {
    type: 'sites-reset-defaults'
  };
}

export function checkSites(part, previousCheckedStatus) {
  return {
    type: 'sites-checked',
    part: part,
    previousCheckedStatus: previousCheckedStatus
  };
}
