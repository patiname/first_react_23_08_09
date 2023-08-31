// import "../css/con_style.css";

const cons = [
  {
    id: 0,
    imgUrl:
      "https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg",
    title: "Title 01",
    desc: "환경권의 내용과 행사에 관하여는 법률로 정한다. 누구든지 체포 또는 구속 ",
  },
  {
    id: 1,
    imgUrl:
      "https://media.istockphoto.com/id/1291199071/vector/warm-to-cool-abstract-layered-wavy-background.jpg?s=612x612&w=0&k=20&c=ntRPfcqWkNjIu6XeeNyGxSNZb1Bo4rwYiiFM1NAEAE0=",
    title: "Title 02",
    desc: "을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다.  ",
  },
  {
    id: 2,
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/002/037/924/original/abstract-blue-background-with-beautiful-fluid-shapes-free-vector.jpg",
    title: "Title 03",
    desc: "자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다.",
  },
];

export const ContentEx = () => {
  return (
    <div className="con_wrap">
      {cons.map((con) => (
        <div className="con" key={con.id}>
          <div
            className="bg"
            style={{
              background: `url(${con.imgUrl}) no-repeat center / cover`,
            }}
          />
          <h3>{con.title}</h3>
          <p>{con.desc}</p>
        </div>
      ))}
    </div>
  );
};
