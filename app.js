new Vue({
    el: '#app',
    data: {
        quotes: [],
        quote: {},
        colors: ["#fff", "#3B5A69", "#FF5A5F", "#00E6B5", "#FA9A94", "#4381F6"],
        color: ""
    },
    created() {
        this.$http.get('./quotes.json').then(response => {
            this.quotes = response.body; // or response.data
            this.quote = this.getRandomQuote();
            this.color = this.getRandomColor();
        }, response => {
            alert("Sorry! Could not get quotes.");
        });
    },
    methods: {
        changeQuote() {
            let tempQuote = {};
            do { tempQuote = this.getRandomQuote() } while(tempQuote.text === this.quote.text);
            this.quote = tempQuote;
            console.log('Quote: ' + this.quote.text);
            this.changeColor();
        },
        getRandomQuote() {
            return this.quotes[Math.floor(Math.random() * this.quotes.length)];
        },
        changeColor() {
            let tempColor = "";
            do { tempColor = this.getRandomColor() } while(tempColor === this.color);
            this.color = tempColor;
            console.log('Color: ' + tempColor);
        },
        getRandomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        }
    }
});