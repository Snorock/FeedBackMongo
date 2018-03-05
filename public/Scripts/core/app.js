// IIFE - Immediately Invoked Function Expression
// sometimes called a self-excuting anonymous function
(function(){
   


    function Start() {
        console.log("application starting");
        Main();
    }

    function Main() {
        console.log("App Started");
    }

    window.onload = Start;
})();