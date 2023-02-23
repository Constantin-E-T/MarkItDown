
  // It takes a license name as a parameter and returns a URL for a badge that corresponds to that
  // license
  // param license - The license you want to use.
  // returns A URL for a badge that corresponds to the license that was selected.
 
function generateBadgeURL(license) {
    switch (license) {
      case 'MIT':
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      case 'Apache 2.0':
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      case 'GPL 3.0':
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      case 'BSD 2-Clause':
        return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
      case 'ISC':
        return 'https://img.shields.io/badge/License-ISC-blue.svg';
      case 'MPL 2.0':
        return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
      case 'EPL 1.0':
        return 'https://img.shields.io/badge/License-EPL%201.0-red.svg';
      case 'CC0':
        return 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg';
      case 'Unlicense':
        return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      default:
        return '';
    }
  }
  
  /* Exporting the function so that it can be used in other files. */
  module.exports = generateBadgeURL;
  