fetch('https://spazeloomz.vercel.app/assets/index-DFmPWp6R.js')
  .then(res => res.text())
  .then(text => {
    const regex = /["'](\/[^"']*\.(?:png|jpe?g|svg|webp))["']/gi;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    console.log(Array.from(new Set(matches)).join('\n'));
  });
