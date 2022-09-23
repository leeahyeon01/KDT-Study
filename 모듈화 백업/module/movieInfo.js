//객체안에 함수를 담으면 => 메서드가 된다
//함수를 객체안에 넣어줬다
//영화정보

const movieInfo = {
  movieInfo_function: (url, api_key, movieCd) => {
    const kobis_url = `${url}key=${api_key}&movieCd=${movieCd}`;
    const request = new XMLHttpRequest();
    request.open("GET", kobis_url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", () => {
      const apiDat = request.response;
      console.log(`영화 정보 : `);

      console.log(apiDat);

      //객체 끌고오기
      console.log(apiDat.movieInfoResult.movieInfo["movieNm"]);
    });
  },

  //주간/주말 박스 오피스
  weeklyMovie: (url, api_key, date) => {
    const kobis_url = `${url}key=${api_key}&targetDt=${date}`;

    const request = new XMLHttpRequest();
    request.open("GET", kobis_url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", () => {
      const apiDat = request.response;

      console.log("주간영화");
      console.log(apiDat);

      //for 문 돌려서
      console.log("aaaa");

      const weekArray = [];

      for (let i = 0; i < 10; i++) {
        // console.log(apiDat.boxOfficeResult.weeklyBoxOfficeList[i].movieNm);
        // Object.Values()객체의 Value값들만 뽑아서 배열로 리턴
        // Object.keys() -객체의 key값들만 뽑아서 배열로 리턴
        let values = Object.values(
          apiDat.boxOfficeResult.weeklyBoxOfficeList[i]
        );

        weekArray.push(`<div>${values[5]}</div>`);

        console.log(values[5]);
      }
      weekArray.unshift("<div id='flex_div'>");
      weekArray.push("</div>");

      console.log(weekArray);
      root.innerHTML = weekArray.join("");

      let flex_div = document.getElementById("flex_div");
      console.dir(flex_div);
      flex_div.style.flex = "";
      flex_div.style.background = "yellow";
    });
  },
};

export default movieInfo;
