//실행부에 import를 해준다 (html 파일에 연결된 부분에 import를 해서 가져온다)
import movieInfo from "./movieInfo.js";

//모듈화 - 리터럴한것을 객체화
// 리터럴한부분은  전역변수로 빼서 매개변수로 쓴다
//공통된 기능적인 부분은 하나로 묶어서 메서드화 해준다

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
const date = `20220904`;

//함수 실행 부분
movieInfo.movieInfo_function(kobis_url.movieUrl, api_key, movieCdKr);
movieInfo.weeklyMovie(kobis_url.weeklyUrl, api_key, date);

// 영화인 목록 끌고 오기
//이름이랑 작품 찍기
function actorInfo() {
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${aa4324761ba6a434a3d2fe2c585e03b4}&peopleNm=${peopleNm}`;
}
