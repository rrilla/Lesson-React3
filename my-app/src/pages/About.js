import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    fetch(
      "	http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101",
    )
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (res) {
        console.log(res);
      });
  }, []);
  return (
    <div>
      <h1>About</h1>
      <hr />
    </div>
  );
};

export default About;
