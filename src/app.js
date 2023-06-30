import './styles.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const addDropDown = () => {

    const buttons = document.getElementsByClassName('button');
    console.log(buttons)

    const valueArray = new Array(buttons.length);

    // initializes the array.
    for (let i = 0; i < buttons.length; i++){
        valueArray[i] = false;
    }

    for (let i = 0; i < buttons.length; i++){
        console.log(valueArray);
        buttons[i].addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            if(valueArray[i] === false){
                e.target.nextElementSibling.style.display = 'block';
                valueArray[i] = true;
                console.log(`is clicked: ${valueArray[i]}`);
            }
            else {
                e.target.nextElementSibling.style.display = 'none';
                valueArray[i] = false;
                console.log(`is clicked: ${valueArray[i]}`);
            }
            
            console.log(e.target.nextElementSibling);
        });
        console.log('finished loop');
    }

}




const addImgSlider = () => { 
    const pictureArea = document.querySelector('.pictures');
    const previousImgButt = document.querySelector('.previous');
    const nextImgButt = document.querySelector('.next');
    const imgArray = []
    let arrIndex = 0;
    // absolute value for accessing the array elements when clicking 'backwards'.
    let indexAbsoluteVal = 0;

    const myImg1 = new Image(200, 200);
    const myImg2 = new Image(200, 200);
    const myImg3 = new Image(200, 200);
    myImg1.src = img1;
    myImg2.src = img2;
    myImg3.src = img3;

    myImg1.style.display = 'block' 
    myImg2.style.display = 'none' 
    myImg3.style.display = 'none' 


    imgArray.push(myImg1, myImg2,  myImg3);
    console.log(imgArray);

    previousImgButt.addEventListener('click', () => {
        imgArray.forEach(img => {img.style.display = 'none'})
        if(arrIndex === 0){
            arrIndex = 2;
            indexAbsoluteVal = 2;
            imgArray[indexAbsoluteVal].style.display = 'block';
            console.log(arrIndex);
            console.log(indexAbsoluteVal);
        }
        else{
            arrIndex = (arrIndex - 1)%3;
            indexAbsoluteVal = Math.abs(arrIndex);
            imgArray[indexAbsoluteVal].style.display = 'block';
            console.log(arrIndex);
            console.log(indexAbsoluteVal);
        }
    })
    nextImgButt.addEventListener('click', () => {
        if (arrIndex < 0){
            arrIndex = Math.abs(arrIndex);
        }

        imgArray.forEach(img => {img.style.display = 'none'})
        arrIndex = (arrIndex + 1)%3;

        imgArray[arrIndex].style.display = 'block';
        console.log(arrIndex);   
    })


    // circles.
    const circleArray = document.getElementsByClassName('circle');
    console.log(circleArray);
    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].addEventListener('click', () => {
            imgArray.forEach(img => {img.style.display = 'none'})
            arrIndex = i;
            imgArray[arrIndex].style.display = 'block';
        })
    }




    pictureArea.appendChild(myImg1);
    pictureArea.appendChild(myImg2);
    pictureArea.appendChild(myImg3);

}





addDropDown();
addImgSlider();
