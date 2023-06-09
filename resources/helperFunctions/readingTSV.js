const fs = require('fs');
const path = require('path')

function readingTSV(file) {

  let splitFile = file.split('\n');
  let result = {'128K': [], '128L': [], '220C': []};

  for (let i = 0; i < splitFile.length; i++) {
    let splitLine = splitFile[i].split('\t');
    splitLine = splitLine.filter((x) => {
      return x !== '';
    })

    if (splitLine[0] === 'TA' && splitLine[1] === 'Email' || splitLine.length < 3) {
      continue;
    }

    let name = splitLine[0];
    let email = splitLine[1];
    let sections = splitLine[2];
    let TA = {
      name: name,
      email: email,
      sections: ''
    }

    let parseSections = (course) => {
      sections = sections.split(course);
      let holder = sections.splice(0, 1).join('').trim();
      sections = sections.join('');
      if (sections[0] === ',') {
        sections = sections.slice(1, sections.length).trim();
      }
      return holder;
    }
    if (sections.includes('128K')) {
      result['128K'].push({
        name: name,
        email: email,
        sections: parseSections('(128K)')
      });
    }
    if (sections.includes('128L')) {
      result['128L'].push({
        name: name,
        email: email,
        sections: parseSections('(128L)')
      });
    }
    if (sections.includes('220C')) {
      result['220C'].push({
        name: name,
        email: email,
        sections: parseSections('(220C)')
      });
    }

  }

  result = JSON.stringify(result);
  fs.writeFile(path.resolve(__dirname + '/../OfficeHours/renderedInfo.json'), result, (err) => {
    if (err) {
      console.log('There was an error while parsing through the email / TA information document. For more information about this error, please look at the following message: ')
      throw err;
    } else {
      console.log('TA information updated correctly.');
    }
  });
}
fs.readFile(path.resolve(__dirname, '../OfficeHours/OH.tsv'), (err, data)=>{

  if (err) {
    console.log('There was an error when trying to retrieve the TA information from the file. \
Please make sure that the file name listed in resources/helperFunctions/readingTSV.js on \
line 53 matches with what you named your TSV file. If you are not using a TSV file, this \
may also be the issue.')
  } else {
    readingTSV(data.toString())

  }
});
// readingTSV(fileInfo);