const WebUrl = {
    headlines: `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP__GNEWS_API_KEY}&lang=en&max=2&in=title&q=english+premier+league`,
    search: `https://gnews.io/api/v4/search?token=${process.env.REACT_APP__GNEWS_API_KEY2}&lang=en&max=2&in=title&in=description&q=`,
    favourites: `https://gnews.io/api/v4/search?token=${process.env.REACT_APP__GNEWS_API_KEY3}&lang=en&max=2&in=title&q=manchester+united`,
    highlights: 'https://www.scorebat.com/video-api/v1/'
}

export default WebUrl