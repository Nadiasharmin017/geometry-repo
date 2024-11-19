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