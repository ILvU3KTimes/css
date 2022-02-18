let wbLoading = document.querySelector('.wb-loading');
for(let wbloadingI = 0; wbloadingI < 5; wbloadingI ++) {
  let wbloadingDiv = document.createElement("div");
  wbloadingDiv.setAttribute('class', 'dot');
  wbLoading.append(wbloadingDiv);
}