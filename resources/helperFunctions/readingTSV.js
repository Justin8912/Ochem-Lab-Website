export default function readingTSV(file) {
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
      sections: sections
    }

    if (sections.includes('128K')) {
      result['128K'].push(TA);
    }

    if (sections.includes('128L')) {
      result['128L'].push(TA);
    }

    if (sections.includes('220C')) {
      result['220C'].push(TA);
    }

  }

  return result;
}