function solution(id_list, report, k) {
  let answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {};

  id_list.map(user => {
    return report_list[user] = [];
  });

  report.map(user => {
    const [reporter, reported] = user.split(" ");

    if (!report_list[reported].includes(reporter)) {
      report_list[reported].push(reporter);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map(user => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}

// ToDo result [2,1,1,0]

console.log(solution(
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3,
));
