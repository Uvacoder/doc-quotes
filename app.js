new Vue({
    el: '#app',
    data: {
        quotes: [],
        quote: {},
        colors: ["#fff", "#3B5A69", "#FF5A5F", "#00E6B5", "FA9A94", "4381F6"],
        color: ""
    },
    created() {
        this.$http.get('./quotes.json').then(response => {
            this.quotes = response.body; // or response.data
            this.quote = this.getRandom();
            this.color = this.randomColor();
        }, response => {
            alert("Sorry! Could not get quotes.");
        });
    },
    methods: {
        changeQuote() {
            let tempQuote = {};
            do { tempQuote = this.getRandom() } while(tempQuote.text === this.quote.text);
            this.quote = tempQuote;
            console.log('Quote: ' + this.quote.text);
            this.color = this.randomColor();
        },
        getRandom() {
            return this.quotes[Math.floor(Math.random() * this.quotes.length)];
        },
        randomColor() {
            let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            console.log('Color: ' + randomColor);
            return randomColor;
        }
    }
});