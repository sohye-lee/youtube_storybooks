class Channel {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    mostPopular() {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&channelType=any&maxResults=30&q=kids+storybooks+read&key=${this.key}&chart=mostPopular`, this.getRequestOptions)
        .then(response => response.json())
        .then(result => result.items)
    }

}

export default Channel;