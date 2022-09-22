//모듈화 - 리터럴한것을 객체화
const root = document.getElementById("root");
const api_key = "aa4324761ba6a434a3d2fe2c585e03b4";

const kobis_url = {
  movieUrl:
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?",

  weeklyUrl:
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?",
};

const movieCd = "20194376"; // 박스오피스에서 검색한 탑건 매버릭의 moviecd항목 이것을 집어넣어 검색한다.
const movieCdKr = "20209343"; // 한산 용의 출현

function movieInfo() {
  const kobis_url = `${kobis_url.movieUrl}key=${api_key}&movieCd=${movieCdKr}`;
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
}
movieInfo();

//주간/주말 박스 오피스
function weekmovie() {
  const date = `20220904`;
  const url = `${kobis_url.weeklyUrl}key=${api_key}&targetDt=${date}`;

  const request = new XMLHttpRequest();
  request.open("GET", url);
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
      let values = Object.values(apiDat.boxOfficeResult.weeklyBoxOfficeList[i]);

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
}
weekmovie();

// 영화인 목록 끌고 오기
//이름이랑 작품 찍기
function actorInfo() {
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${aa4324761ba6a434a3d2fe2c585e03b4}&peopleNm=${peopleNm}`;
}
