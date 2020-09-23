const changeColor = () => {
    const red = document.querySelector("#red");
    const green = document.querySelector("#green");
    const blue = document.querySelector("#blue");

    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;
    
    

    if (redValue >255 || greenValue >255 || blueValue > 255)
    {
        alert("number can't be higher than 255")
    } else if (redValue < 0 || greenValue <0 || blueValue <0)
        {
        alert("number must  be higher or equal 0")
    } else 
    {
       rgbColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
    }

    document.querySelector('#wrapper').style.background = rgbColor;
    document.querySelector('#text').innerHTML= rgbColor;
}