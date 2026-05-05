const solution = (genres, plays) => {
  const dic = {};

  genres.forEach((genre, i) => {
    dic[genre] = dic[genre] ? dic[genre] + plays[i] : plays[i];
  });

  const duplicatedDic = {};

  const answer = genres
    .map((genre, i) => {
      return {
        index: i,
        genres: genre,
        plays: plays[i],
      };
    })
    .sort((a, b) => {
      if (a.genres !== b.genres) return dic[b.genres] - dic[a.genres];
      if (a.plays !== b.plays) return b.plays - a.plays;
      return a.index - b.index;
    })
    .filter((item, _) => {
      if (duplicatedDic[item.genres] >= 2) return false;
      duplicatedDic[item.genres] = duplicatedDic[item.genres] ? duplicatedDic[item.genres] + 1 : 1;
      return true;
    })
    .map((item, _) => item.index);

  return answer;
};

test('run', () => {
  expect(
    solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]),
  ).toEqual([4, 1, 3, 0]);
});
