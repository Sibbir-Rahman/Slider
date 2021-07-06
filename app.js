
const next = document.getElementById('next');


function changSlide() {
    
   const item = document.getElementsByClassName('item');


    if(item[0].classList.contains("active")){
        item[1].classList.add("active");
        item[0].classList.remove("active");

    }else if(item[1].classList.contains("active")){
        item[2].classList.add("active");
        item[1].classList.remove("active");

    } else if(item[2].classList.contains("active")){
        item[3].classList.add("active");
        item[2].classList.remove("active");
    } else if(item[3].classList.contains("active")){
        item[4].classList.add("active");
        item[3].classList.remove("active");

    } else if(item[4].classList.contains("active")){
        item[5].classList.add("active");
        item[4].classList.remove("active");
    } else if(item[5].classList.contains("active")){
        item[6].classList.add("active");
        item[5].classList.remove("active");

    } else if(item[6].classList.contains("active")){
        item[7].classList.add("active");
        item[6].classList.remove("active");
    } else if(item[7].classList.contains("active")){
        item[8].classList.add("active");
        item[7].classList.remove("active");

    } else if(item[8].classList.contains("active")){
        item[9].classList.add("active");
        item[8].classList.remove("active");
    } else if(item[9].classList.contains("active")){
        item[10].classList.add("active");
        item[9].classList.remove("active");

    } else if(item[10].classList.contains("active")){
        item[11].classList.add("active");
        item[10].classList.remove("active");
    } else if(item[11].classList.contains("active")){
        item[12].classList.add("active");
        item[11].classList.remove("active");

    } else if(item[12].classList.contains("active")){
        item[13].classList.add("active");
        item[12].classList.remove("active");

    } else if(item[13].classList.contains("active")){
        item[14].classList.add("active");
        item[13].classList.remove("active");

    } else if(item[14].classList.contains("active")){
        item[15].classList.add("active");
        item[14].classList.remove("active");

    } else if(item[15].classList.contains("active")){
        item[0].classList.add("active");
        item[15].classList.remove("active");
    }

};


setInterval(changSlide,1000)