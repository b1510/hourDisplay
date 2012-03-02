
function updateCurrentTime() {
  var now = new Date();
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var str = '';
  var strIcon = '';
  if (hh % 12 == 0) {
    str += '12';
  } else {
    str += (hh % 12);
  }
  str += ':';
  if (mm >= 10) {
    str += mm;
  } else {
    str += '0' + mm;
  }
  strIcon = str;
  str += ':';
  if (ss >= 10) {
    str += ss;
  } else {
    str += '0' + ss;
  }
  if (hh >= 12) {
    str += " PM";
  } else {
    str += " AM";
  }

  // Set le tooltip du plugin
  chrome.browserAction.setTitle({title:str});

  // Set le badge
  chrome.browserAction.setBadgeText({text:String(strIcon)}); 

}

window.setInterval("updateCurrentTime()",1000);
