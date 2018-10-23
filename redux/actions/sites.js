export function nextInjSite() {
  return {
    type: 'sites-next-injection-site'
  };
}
export function prevInjSite() {
  return {
    type: 'sites-previous-injection-site'
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
