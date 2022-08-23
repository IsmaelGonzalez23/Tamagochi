//Your pets hunger!
function updateHealth(healthBar,value) {
    const healthBarFill = healthBar.querySelector(".health-bar-fill");

const stages = healthBarFill.dataset.stages
    .split(",")
    .map((stage) => stage.split(":"));

    stages.sort((stageA, stageB) => {
        return stageA[0] - stageB[0]
    });

    healthBarFill.style.width = `${value}%`;
}

    updateHealth(document.getElementById("myHealthBar"), 0);
   
    const lftButton = document.getElementById("leftButton");
    lftButton.addEventListener("click", function addhealth(){
        document.querySelector(".health-bar-fill").style.width = `${100}%`;
    })
    


    //Your pets happiness!
    function updateHappy(happyBar,value) {
        const happyBarFill = happyBar.querySelector(".happy-bar-fill");
    
    const stages = happyBarFill.dataset.stages
        .split(",")
        .map((stage) => stage.split(":"));
    
        stages.sort((stageA, stageB) => {
            return stageA[0] - stageB[0]
        });
    
        happyBarFill.style.width = `${value}%`;
    }
    
        updateHappy(document.getElementById("myHappyBar"), 0);

        const rghtButton = document.getElementById("rightButton");
        rghtButton.addEventListener("click", function addhealth(){
            document.querySelector(".happy-bar-fill").style.width = `${100}%`;
        })



        
