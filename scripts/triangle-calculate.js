function triangleCalculation(){
    const triangleId = document.getElementById("triangle-base");
    // console.log(triangleId)
    const triangleBase =parseFloat(triangleId.value);
    console.log(triangleBase)

    // triangle height
    const triangleHeightId = document.getElementById('triangle-height');
    const triangleHeight =parseFloat(triangleHeightId.value);
    console.log(triangleHeight)

    // calculate area
    const area = 0.5 * triangleBase * triangleHeight ;
    // console.log('area:', area);

    //display triangle area
    const areaspan = document.getElementById("triangle-area");
    areaspan.innerText = area;
    
}

// 2nd part reactiangle

function areaCalculation2(){
    // console.log('somthing');
    const widthId = document.getElementById("width-id");
    const widthValue = parseFloat(widthId.value) ;
    console.log(widthValue);

    // length part
    const lengthId = document.getElementById("length-id");
    const lengthValue = parseFloat(lengthId.value);
    console.log(lengthValue);

    // area calculation reactiangle
    const reactiangleArea = widthValue * lengthValue;
    // console.log(reactiangleArea);
    const rectangleCalculationSpan = document.getElementById("rectangle-calculation");
    rectangleCalculationSpan.innerText = reactiangleArea;
    console.log(rectangleCalculationSpan);
}