new Vue({
    el: '#app',
    data() {
        return {
            info: [],
            show: false
        };
    },
    mounted() {
        axios
            .get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal')
            .then(response => (this.info = response.data.player));
    },
    computed: {
        sortedArray: function() {
            function compare(a, b) {
                if (a.strPlayer < b.strPlayer)
                    return -1;
                if (a.strPlayer > b.strPlayer)
                    return 1;
                return 0;
            }
            if (this.show) {return this.info.slice(0,10).sort(compare)} else {return this.info}
        }
    }
});
