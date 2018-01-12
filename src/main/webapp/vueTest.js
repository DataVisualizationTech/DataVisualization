
var book_list = new Vue({
    el: "#book_list",
    data: {
        coordinates: [],
        sequences :{}
    },
    methods:{
        bookView:function(){
            var _this = this;
            console.log(" ---------- 执行网络请求");
            //Vue.source插件，目前已经被axios代替
            axios.get('http://localhost:8080/book/getBookByAuthorId?authorId=2659')
                .then(function(res){
                    alert(res.status)
                    alert(res.data)
                    result = res.data;
                    data.coordinates = result['coordinates'];
                    data.sequences = result['sequences']
                }).catch(function(error){
                //执行失败的处理情况
                console.log(error);
            });
        }
    }
});