app.common = {
    mainInit: () => {
        let text = 'ES6 is working';
        console.log(text)
    }
}

$(function() {
    $(document).ready(() => {
        app.common.mainInit();
    })
});
