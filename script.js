$(document).ready(function(){ /*Переделай имена*/
    
    /*Массив игрового поля*/
    let playField=[
            ["A1","A2","A3","A4","A5","A6","A7","A8"],
            ["B1","B2","B3","B4","B5","B6","B7","B8"],
            ["C1","C2","C3","C4","C5","C6","C7","C8"],
            ["D1","D2","D3","D4","D5","D6","D7","D8"],
            ["E1","E2","E3","E4","E5","E6","E7","E8"],
            ["F1","F2","F3","F4","F5","F6","F7","F8"],
            ["G1","G2","G3","G4","G5","G6","G7","G8"],
            ["H1","H2","H3","H4","H5","H6","H7","H8"],
        ];
    
    let x=0; 
    let y=0;
    let arrSteps = []; /*Массив с возможными вариантами хода*/
    
    $('#moves').click(function() {
        
       let i=0;
       let search=0; /*Переменная исходного положения*/
       
       /*Считывание значения исходного положения фигуры*/    
       let initPosition = $('#initial_position').val();
        
           
       /*Поиск координат на игровом поле, исходя из начального положения*/ 
       for(i=0;i<playField.length;i++){
           search=playField[i].indexOf(initPosition);
           if(search!=-1) break; 
       }; 

        /*Массивы "x" и "y" координат возможного движения фигуры*/
        let arrY = [2, 1, -1, -2, 2, 1, -1, -2];
        let arrX = [1, 2, 2, 1, -1, -2, -2, -1];
        
        /*Формирование массива с возможными вариантами хода в цикле*/
        for(let j=0;j<arrY.length;j++){

            y=i+arrY[j];
            x=search+arrX[j];
            
            provisionCondition();
        };           
        
       alert("Возможные варианты хода: \n\n" + arrSteps.join(" "));
    });
    
    /*Функция проверки условия, чтобы не выйти за пределы поля(массива)*/
    function provisionCondition() {
        let step;
        
        if((y<8 && y>=0) && (x<8 && x>=0)) {
            step=playField[y][x];
            arrSteps.push(step);
        };
        y=x=0;
    };
});