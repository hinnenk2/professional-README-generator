const licenseBadgeLinks = require("./licenseBadges");

function generateMarkdown(data) {

  // set url for license badge
  data.licenseBadge = licenseBadgeLinks[data.license];  //acquires the license badge based on the license selected by the user.

  return `# ${data.title}
${data.licenseBadge}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install the required dependencies, run the following:
\`
${data.installation}
\`

## Usage
${data.usage}

## License
This repository is operating under the ${data.license} license.

## Contributing
${data.contribute}

## Tests
For running tests, enter the following:
\`
${data.tests}
\`

## Questions
For questions about this repository, please reach out at [${data.email}](mailto:${data.email}) or see more of my work in GitHub at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;