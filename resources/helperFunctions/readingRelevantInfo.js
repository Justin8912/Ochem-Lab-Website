export default function readingRelevantInfo (file) {
  let info = {labs: [], moreInformation: []};
  let splitInfo = file.split('\n\n');

  let splitLine, labName, link, obj, firstElem;
  for (let i = 0; i < splitInfo.length; i++) {
    let dataLine = splitInfo[i];
    if (dataLine.includes('\n') && dataLine.includes('Lab:') && dataLine.includes('Link:')) {
      splitLine = splitInfo[i].split('\n');
      labName = splitLine[0].split('Lab:')[1].trim();
      link = splitLine[1].split('Link:')[1].trim();
      obj = {}
      obj[labName] = link

      info.labs.push({lab: labName, link: link})
    } else {
      if (splitInfo[i].includes('<br/>')) {
        splitLine = splitInfo[i].split('<br/>');
        obj = {};
        obj['info'] = [firstElem];
        for (let i = 0 ; i < splitLine.length; i++) {
          obj['info'].push(splitLine[i].trim());
        }
        info.moreInformation.push(obj)
      } else {
        info.moreInformation.push(splitInfo[i].trim());
      }
    }
  }

  return info;
}