class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular() {
       const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kids+storybook+read&type=video&key=${this.key}&chart=mostPopular`, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=${this.key}&q=kids+storybook+${query}&chart=mostPopular`, this.getRequestOptions);
        const result = await response.json();
        result = result.items.map(item => ({ ...item, id: item.id.videoId}))
        return result 
    }

}

export default Youtube;