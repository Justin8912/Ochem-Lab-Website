export default function startDateReader (file) {
  let startInfoModified = {}
  let splitStart = file.split('\n\n')
  for (let i = 0; i < splitStart.length; i++) {
    let curr = splitStart[i]

    if (curr.includes('\n')) {
      let splitSplit = curr.split('\n');
      for (let y = 0; y < splitSplit.length; y++) {
        if (y === 0) {
          startInfoModified[splitSplit[0]] = [];
        } else {
          startInfoModified[splitSplit[0]].push(splitSplit[y]);
        }
      }
    } else {
      startInfoModified['heading'] = curr;
    }
  }

  return startInfoModified;
}