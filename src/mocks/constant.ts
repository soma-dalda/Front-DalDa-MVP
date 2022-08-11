export const FEED_RESPONSE = Array(10)
  .fill(0)
  .map((__, i) => {
    return {
      id: `${Math.floor(Math.random() * 250 + 250)}`,
      key: Math.floor(Math.random() * 250 + 250 + i),
      user: { profile: { nickName: '닉네임', profileImg: 'https://i.pravatar.cc/210' } },
      like: Math.floor(Math.random() * 999),
      description: `Cake ~${i}`,
      images: [`https://picsum.photos/450/${Math.floor(Math.random() * 250 + 250 + i)}`],
      comments: [
        {
          comment: '코멘트~~',
          user: {
            profile: {
              nickName: '닉네임',
              profileImg: 'https://i.pravatar.cc/212',
            },
          },
        },
        {
          comment: '코멘트~~',
          user: {
            profile: {
              nickName: '닉네임',
              profileImg: 'https://i.pravatar.cc/212',
            },
          },
        },
        {
          comment: '코멘트~~',
          user: {
            profile: {
              nickName: '닉네임',
              profileImg: 'https://i.pravatar.cc/212',
            },
          },
        },
      ],
    }
  })
