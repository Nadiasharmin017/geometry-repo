function parallelAreaCalculation(){
    const parallelogramInputId = document.getElementById('parallalogram-base');
    const parallalogramBase =parseFloat(parallelogramInputId.value);
    console.log(parallalogramBase);


    const parallelogramInputId2 = document.getElementById('parallalogram-height');
    const parallalogramHeight =parseFloat(parallelogramInputId2.value);
    console.log(parallalogramHeight);

    // calculation
    const parallalogramArea = parallalogramBase * parallalogramHeight;
    // console.log(parallalogramArea);

    const parallalogramCalculationSpan = document.getElementById('parallelogram-calculation');
    parallalogramCalculationSpan.innerText = parallalogramArea;

    
}