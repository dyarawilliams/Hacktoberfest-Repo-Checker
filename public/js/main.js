const themeTogglerButton = document.querySelectorAll(".theme-toggler-button");
const themeTogglerIcon = document.querySelector(".theme-toggler-icon");

// if (theme) {
//   if (theme === "dark") {
//     toggleClasses();
//   }
// }
themeTogglerButton.forEach(btn => {
  btn.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    console.log(`THEME START: ${theme}`)
    if (theme) {
      if (theme === "dark") {
        toggleClasses();
      } else {
        console.log(`Theme should equal to light`)
      }
    }
  });
});

function saveToLocalStorage(value) {
  localStorage.setItem("theme", value);
}

function toggleClasses() {
  const darkMainLogo = `<svg
  width="224"
  height="224"
  viewBox="0 0 224 224"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="globe"
  >
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M208.979 167.991C178.056 221.55 109.569 239.901 56.0093 208.979C2.44951 178.056 -15.9014 109.569 15.0213 56.0093C45.9441 2.44951 114.431 -15.9014 167.991 15.0213C221.55 45.9441 239.901 114.431 208.979 167.991ZM35.7052 184.154C29.9638 169.391 29.0031 150.536 32.8872 130.242C27.1675 124.879 22.1166 119.513 17.8303 114.256C13.7802 109.289 10.372 104.37 7.72571 99.5969C4.09083 130.28 14.2172 161.451 35.7052 184.154ZM9.90682 87.4222C12.1098 94.0693 16.6206 101.697 23.2545 109.833C26.5697 113.899 30.385 118.055 34.6529 122.24C36.1532 116.23 38.0655 110.127 40.3916 103.997C40.7446 104.505 41.144 104.984 41.5871 105.427C42.9061 106.746 44.54 107.677 46.3122 108.149C43.8773 114.783 41.9565 121.355 40.5414 127.772C44.3205 131.18 48.3839 134.589 52.706 137.966C52.5773 138.623 52.5099 139.302 52.5099 139.996L52.5099 146.628C47.7391 143.053 43.2338 139.422 39.0245 135.773C37.8976 142.897 37.4188 149.77 37.5754 156.255C38.0817 177.226 45.1093 193.053 57.0257 201.341L66.7935 184.423C67.2401 186.297 68.1979 188.028 69.5823 189.413C70.0861 189.916 70.6359 190.364 71.2218 190.75L63.1432 204.743C76.1431 210.356 92.9488 208.368 110.887 198.581C116.582 195.474 122.294 191.623 127.9 187.085C119.38 184.139 110.515 180.496 101.502 176.193L101.502 168.415C112.744 173.95 123.734 178.421 134.07 181.772C135.235 180.707 136.392 179.613 137.541 178.49L146.994 178.49C147.108 178.49 147.222 178.488 147.335 178.484C145.517 180.427 143.672 182.301 141.806 184.105C147.564 185.708 153.071 186.935 158.25 187.773C168.612 189.45 177.473 189.542 184.331 188.127C191.46 181.348 197.749 173.444 202.917 164.491C210.279 151.741 214.662 138.088 216.282 124.339C210.834 124.431 204.88 123.939 198.565 122.917C186.197 120.915 172.201 116.841 157.492 110.864L157.492 103.291C165.012 106.447 172.329 109.09 179.315 111.201C184.411 95.8738 186.745 80.9994 186.425 67.7456C185.932 47.317 179.25 31.769 167.889 23.3173L157.472 41.3604C157.314 38.8141 156.232 36.4037 154.418 34.5892C154.183 34.3546 153.938 34.1322 153.685 33.9225L161.884 19.7204C148.749 13.5443 131.528 15.3721 113.113 25.419C104.109 30.3316 95.0597 37.105 86.4577 45.5119L77.0058 45.5119C76.8917 45.5119 76.7778 45.5138 76.6641 45.5175C95.3136 25.5891 116.731 12.8676 136.34 9.84974C108.271 3.14963 78.794 8.44328 54.9537 23.8428C57.3791 28.3235 60.6378 33.1012 64.6879 38.0683C66.9857 40.8864 69.5239 43.748 72.2865 46.6325C71.2958 47.131 70.3814 47.7879 69.5825 48.5867C68.6777 49.4915 67.9552 50.5445 67.4384 51.6886C64.4707 48.6007 61.7396 45.5277 59.2637 42.4911C55.221 37.5331 51.8179 32.6229 49.1737 27.8584C38.0763 36.1362 28.444 46.7582 21.0825 59.5088C15.9137 68.4614 12.2134 77.8588 9.90682 87.4222ZM174.878 196.103C150.123 214.592 118.066 221.408 87.6611 214.15C103.317 211.741 120.126 203.146 135.759 189.635C143.263 191.907 150.436 193.598 157.132 194.682C163.458 195.706 169.422 196.198 174.878 196.103ZM216.87 117.325C211.777 117.465 206.01 117.032 199.683 116.008C195.356 115.308 190.799 114.336 186.058 113.1C195.131 85.6334 195.829 59.2182 188.295 39.8466C208.132 60.8047 218.286 88.9795 216.87 117.325Z"
    fill="url(#paint0_linear_1_287)"
  ></path>
  <defs>
    <linearGradient
      id="paint0_linear_1_287"
      x1="30.1538"
      y1="30.1538"
      x2="110.165"
      y2="227.733"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FFE27D"></stop>
      <stop offset="0.505208" stop-color="#64E3FF"></stop>
      <stop offset="1" stop-color="#9192FF"></stop>
    </linearGradient>
  </defs>
  </svg>
  <svg
  width="113"
  height="124"
  viewBox="0 0 113 124"
  fill="#fff"
  xmlns="http://www.w3.org/2000/svg"
  class="h"
  >
  <path
    d="M0.846191 49.8003L0.846202 38.2416L0.846964 37.5231H13.2913L13.2913 49.8001H2.10096L0.846191 49.8003Z"
    fill="#e5e1e6"
  ></path>
  <path
    d="M13.2913 29.2604L13.2913 37.5231H25.7357L25.7357 86.6309H13.2913V91.5501L13.2906 98.908H24.5256L25.7357 98.9078V99.6507L25.735 106.835L25.7357 123.462H38.18V86.6308H50.6244V74.3542L75.5131 74.3539V111.185H87.9575V98.9078H97.7151L100.401 98.908L100.402 86.6309H105.388L112.463 86.6311L112.846 86.6309V74.3539L100.402 74.3539L100.402 86.6309L87.9575 86.6308L87.9575 0.692383L75.5131 0.692383V12.9693L63.0687 12.9693V25.2462H50.6244V28.9521L50.6237 36.4003L50.6244 37.5231H52.3251L63.0679 37.5234L63.0687 25.2462L75.3832 25.2462L75.5124 25.2464L75.5124 37.3024L75.5131 37.5231V44.1068L75.5124 51.0645L75.5131 62.077H50.6244V74.3542L38.18 74.3539V12.9693L25.7357 12.9693L25.735 17.3027L25.7357 25.2462H13.2913V29.2604Z"
    fill="#e5e1e6"
  ></path>
  </svg>`;
  const lightMainLogo = `
  <svg width="2018" class="globe" height="1939" viewBox="0 0 2018 1939" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1882.68 1454.17C1604.09 1917.79 987.1 2076.64 504.584 1808.97C22.0671 1541.3 -143.255 948.457 135.326 484.831C413.907 21.2034 1030.9 -137.646 1513.42 130.028C1995.93 397.704 2161.25 990.543 1882.68 1454.17ZM321.666 1594.08C269.942 1466.29 261.287 1303.08 296.278 1127.41C244.75 1080.98 199.247 1034.53 160.632 989.028C124.145 946.033 93.4411 903.453 69.6001 862.136C36.8541 1127.74 128.082 1397.56 321.666 1594.08ZM89.2501 756.748C109.096 814.287 149.734 880.315 209.498 950.742C239.365 985.938 273.736 1021.91 312.186 1058.14C325.702 1006.12 342.929 953.287 363.885 900.224C367.065 904.621 370.663 908.768 374.655 912.602C386.538 924.02 401.258 932.079 417.223 936.165C395.287 993.59 377.983 1050.48 365.235 1106.03C399.28 1135.53 435.887 1165.04 474.825 1194.27C473.665 1199.96 473.058 1205.83 473.058 1211.84V1269.25C430.078 1238.3 389.49 1206.87 351.569 1175.28C341.417 1236.95 337.103 1296.45 338.514 1352.58C343.075 1534.11 406.386 1671.12 513.74 1742.86L601.738 1596.41C605.761 1612.63 614.39 1627.62 626.862 1639.61C631.401 1643.96 636.354 1647.84 641.632 1651.18L568.853 1772.31C685.968 1820.89 837.37 1803.69 998.97 1718.97C1050.28 1692.07 1101.74 1658.74 1152.24 1619.45C1075.49 1593.95 995.62 1562.42 914.42 1525.17V1457.84C1015.7 1505.75 1114.71 1544.46 1207.83 1573.46C1218.32 1564.24 1228.75 1554.78 1239.1 1545.05H1324.26C1325.29 1545.05 1326.31 1545.04 1327.33 1545C1310.95 1561.82 1294.33 1578.04 1277.52 1593.66C1329.39 1607.53 1379.01 1618.16 1425.66 1625.41C1519.01 1639.93 1598.84 1640.72 1660.62 1628.47C1724.85 1569.79 1781.51 1501.37 1828.06 1423.88C1894.39 1313.51 1933.87 1195.32 1948.47 1076.31C1899.39 1077.11 1845.75 1072.85 1788.86 1064C1677.44 1046.67 1551.35 1011.4 1418.83 959.666V894.113C1486.58 921.432 1552.5 944.31 1615.44 962.584C1661.35 829.908 1682.37 701.151 1679.49 586.423C1675.05 409.588 1614.85 275 1512.5 201.84L1418.65 358.026C1417.23 335.985 1407.48 315.12 1391.14 299.413C1389.02 297.382 1386.82 295.457 1384.54 293.642L1458.4 170.705C1340.07 117.243 1184.93 133.065 1019.03 220.033C937.91 262.558 856.39 321.19 778.891 393.962H693.74C692.712 393.962 691.686 393.979 690.661 394.011C858.67 221.506 1051.62 111.385 1228.28 85.2616C975.41 27.2638 709.85 73.087 495.074 206.389C516.924 245.175 546.282 286.532 582.769 329.529C603.469 353.923 626.336 378.694 651.224 403.663C642.299 407.978 634.061 413.664 626.864 420.579C618.712 428.411 612.204 437.526 607.548 447.429C580.812 420.7 556.208 394.099 533.902 367.814C497.482 324.896 466.824 282.392 443.002 241.149C343.027 312.804 256.25 404.751 189.931 515.123C143.365 592.619 110.03 673.965 89.2501 756.748ZM1575.46 1697.52C1352.45 1857.56 1063.65 1916.56 789.733 1853.74C930.78 1832.88 1082.21 1758.48 1223.04 1641.53C1290.65 1661.19 1355.27 1675.83 1415.59 1685.22C1472.58 1694.08 1526.31 1698.34 1575.46 1697.52ZM1953.77 1015.59C1907.88 1016.81 1855.93 1013.06 1798.93 1004.19C1759.95 998.135 1718.89 989.721 1676.18 979.022C1757.92 741.264 1764.21 512.608 1696.34 344.922C1875.05 526.341 1966.52 770.229 1953.77 1015.59Z" fill="url(#paint0_linear_1108_5)"/>
  <defs>
  <linearGradient id="paint0_linear_1108_5" x1="271.653" y1="261.019" x2="944.41" y2="1990.01" gradientUnits="userSpaceOnUse">
  <stop stop-color="#0128B0"/>
  <stop offset="0.505208" stop-color="#C42502"/>
  <stop offset="1" stop-color="#A2A100"/>
  </linearGradient>
  </defs>
  </svg>
  
  <svg class="h" width="1034" height="1055" viewBox="0 0 1034 1055" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.802734 422.319V323.138L0.809753 316.973H115.562V422.317H12.3727L0.802734 422.319Z" fill="#231616"/>
  <path d="M115.562 246.073V316.973H230.315V738.35H115.562V780.56L115.556 843.69H219.156H230.315V850.07L230.308 911.71L230.315 1054.38H345.067V738.35H459.82V633.01L689.32 633V949.04H804.08V843.69H894.05H918.82L918.83 738.35H964.81H1030.05H1033.58V633H918.83V738.35H804.08V0.941406H689.32V106.285H574.57V211.629H459.82V243.428L459.81 307.338L459.82 316.973H475.5L574.56 316.975L574.57 211.629H688.13L689.32 211.631V315.079V316.973V373.465V433.167V527.661H459.82V633.01L345.067 633V106.285H230.315L230.308 143.469L230.315 211.629H115.562V246.073Z" fill="#231616"/>
  </svg>
  `;
  const body = document.body;
  const searchButton = document.querySelector(".custom-search-button");
  const heroLogo = document.querySelector(".hacktoberfest-logo");
  const mainLogo = document.querySelector(".mainLogo");
  const navBarTogler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".custom-link");
  const navbar = document.querySelector(".custom-nav");
  const modalContent = document.querySelectorAll(".modal-content");
  const modalLogo = document.querySelector(".model-logo");
  const modalCloseButton = document.querySelectorAll(".button-close");
  const modalCloseButton2 = document.querySelectorAll(".btn-close");
  const copyRight = document.querySelector(".copyright");
  const reposContent = document.querySelector(".repo-content");
  const cards = document.querySelectorAll(".card");
  const modalTitle = document.querySelectorAll(".modal-title");

  copyRight.classList.toggle("copyright-light")
  copyRight.classList.toggle("copyright-dark")
  modalContent.forEach(content => {
    content.classList.toggle("bg-light");
    content.classList.toggle("bg-dark");
  })
  modalCloseButton.forEach(closeBtn => {
    closeBtn.classList.toggle("theme-primary-black");
    closeBtn.classList.toggle("theme-primary-bg-dark");
  })
  modalCloseButton2.forEach(closeBtn => {
    closeBtn.classList.toggle("btn-close-white")
  })
  body.classList.toggle("bg-light");
  body.classList.toggle("bg-dark");
  navLinks.forEach((navLink) => {
    navLink.classList.toggle("theme-primary-black-link");
    navLink.classList.toggle("theme-primary-bg-dark-link");
  });
  themeTogglerButton.forEach(btn => {
    btn.classList.toggle("theme-primary-bg-light");
    btn.classList.toggle("theme-dark-orange");
  })
  navBarTogler.classList.toggle("nav-light")
  navBarTogler.classList.toggle("nav-dark")
  navbar.classList.toggle("bg-light");
  navbar.classList.toggle("bg-dark");

  if (searchButton !== null) {
    searchButton.classList.toggle("theme-primary-black");
    searchButton.classList.toggle("theme-primary-bg-dark");
  }

  if (reposContent != null) {
    reposContent.classList.toggle("bg-dark");
    reposContent.classList.toggle("bg-light");
  }

  modalTitle.forEach(title => {
    title.classList.toggle("theme-primary-black-link");
    title.classList.toggle("theme-primary-bg-dark-link");
  })

  cards.forEach((card) => {
    card.classList.toggle("bg-light")
  })

  let currentMainTheme = mainLogo.dataset.theme;
  let currentTheme;

  if (currentMainTheme !== null) {
    if (currentMainTheme === "light") {
      mainLogo.dataset.theme = "dark"
      mainLogo.innerHTML = darkMainLogo;
    } else {
      mainLogo.dataset.theme = "light"
      mainLogo.innerHTML = lightMainLogo;
    }
  }

  if (heroLogo !== null) {
    currentTheme = heroLogo.dataset.theme;

    if (currentTheme === "light") {
      heroLogo.dataset.theme = "dark";
      heroLogo.src = "horizontal_beige.svg";
    } else {
      heroLogo.dataset.theme = "light";
      heroLogo.src = "horizontal_dark_green.svg";
    }
  }

  if (modalLogo !== null) {
    if (modalLogo.dataset.theme == "light") {
      modalLogo.dataset.theme = "dark";
      modalLogo.src = "svg/vertical_dark_green.svg"
    } else {
      modalLogo.dataset.theme = "light";
      modalLogo.src = "svg/vertical_dark_green.svg"
    }
  }

}

// Preloader
setTimeout(() => {
  document.querySelector(".preloader").classList.toggle("d-block");
  document.querySelector(".preloader").classList.toggle("d-none");
}, 1000);
