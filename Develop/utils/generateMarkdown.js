// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributor)
  * [Test](#test)
  * [Questions](#question) 
  
   ## Description
   ${data.Description}

   ## Installation
   ${data.Installation}

   ## Usage
   ${data.Usage}

   ## License
   ${data.license}

   ## Contributor
   ${data.Contributor}

   ## Test
   ${data.Test}

   ## Questions
  Contact:

  Github:[${data.Username}](JWilliams0204)

  Email:[${data.Email}](jarrett0204@gmail.com)
`;
}


module.exports = generateMarkdown;
