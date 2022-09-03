// CLOSE THE COOKIE MESSAGE WHEN THE USER CLICKS ON THE "THAT'S FINE" BUTTON
document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
  // CALL THE SETCOOKIE() FUNCTION
    setCookie("cookie", true, 30);
  })
  
  // CREATES A COOKIE (EXPIRES IN 30 DAYS)
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
  
  // GRAB THE VALUE OF THE COOKIE
  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
  }
  
  // CHECK IF A COOKIE EXISTS
  function cookieMessage() {
  // IF A COOKIE DOESN'T EXIST THEN DISPLAY THE COOKIE MESSAGE
    if (!getCookie("cookie"))
      document.querySelector("#cookies").style.display = "block";
  }
  
  // CALL THE COOKIEMESSAGE() FUNCTION ON PAGE LOAD
  window.addEventListener("load", cookieMessage);
  