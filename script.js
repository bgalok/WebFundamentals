   window.onload=function(){
        var myDate=new Date();
        document.getElementById("greeting").innerHTML=getGreeting(myDate);
         };


 var getGreeting=function(myDate){

     var timeOfDay=myDate.getHours();
     if(timeOfDay<  12 && timeOfDay>=6){
          return "Good morning!";   
      }else if(timeOfDay>=12 && timeOfDay<  18 ){
          return "Good afternoon!";
   }else if (timeOfDay>=18 && timeOfDay<  23){
          return "Good evening!";   
   }else{
        return "Welcome!";
   }
};
