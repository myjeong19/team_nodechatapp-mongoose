const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    // 소스 실행환경이, 개발 환경인 경우 디버깅 가능하게 설정
    mongoose.set("debug", true);
  }

  //몽고DB연결정보를 설정합니다.
  mongoose.connect(
    "mongodb+srv://a01022883839:tjddnjs12@moduchat.vwrixtq.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "modu_chat",
    },
    (error) => {
      if (error) {
        console.log("몽고디비 연결 에러", error);
      } else {
        console.log("몽고디비 연결 성공");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("몽고디비 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
  connect();
});

//회원정보 콜렉션 모델을 참조합니다.

//채널정보 컬렉션 모델을 참조합니다.
require("./channel.js");
require("./member.js");

module.exports = connect;
