const download = (url) => {
    return new Promise((resolve, reject) => {
      resolve(`Downloading from ${url}....`);
    });
  };
  
  const url1 = 'https://brachio.site/download';
  const url2 = 'https://trex.site/download';
  const url3 = 'https://stego.site/download';
  
  Promise.all([download(url1), download(url2), download(url3)]).then((result) => {
    for (let downloadInfo of result) {
      console.log(downloadInfo);
    }
    console.log('Download Complete');
  });