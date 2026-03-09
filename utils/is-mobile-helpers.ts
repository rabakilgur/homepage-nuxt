/**
 * Checks if the user agent is from a mobile device.
 *
 * Is `true` if the user is accessing the website from a mobile device (Android, webOS, iPhone, iPad, iPod, BlackBerry, or Windows Phone), and `false` otherwise.
 */
export const isMobile =
  window?.navigator &&
  (window.navigator.userAgent.match(/Android/i) ||
    window.navigator.userAgent.match(/webOS/i) ||
    window.navigator.userAgent.match(/iPhone/i) ||
    window.navigator.userAgent.match(/iPad/i) ||
    window.navigator.userAgent.match(/iPod/i) ||
    window.navigator.userAgent.match(/BlackBerry/i) ||
    window.navigator.userAgent.match(/Windows Phone/i));

export const isMobileSafari =
  window?.navigator &&
  (window.navigator.userAgent.match(/iPhone/i) ||
    window.navigator.userAgent.match(/iPad/i) ||
    window.navigator.userAgent.match(/iPod/i));
