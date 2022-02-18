let wbLoading = document.querySelector('.wb-loading');
if (wbLoading) {
  for(let wbloadingI = 0; wbloadingI < 5; wbloadingI ++) {
    let wbloadingDiv = document.createElement("div");
    wbloadingDiv.setAttribute('class', 'dot');
    wbLoading.append(wbloadingDiv);
  }
}
let wbSnow = document.querySelector('.wb-snow');
if (wbSnow) {
  for(let wbSnowI = 0; wbSnowI < 98; wbSnowI ++) {
    let wbSnowDiv = document.createElement("div");
    wbSnowDiv.setAttribute('class', 'snow');
    wbSnow.append(wbSnowDiv);
  }
}
