import './styles.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const addDropDown = () => {

  const buttons = document.getElementsByClassName('button');
  console.log(buttons);

  const valueArray = new Array(buttons.length);

  // initializes the array.
  for (let i = 0; i < buttons.length; i++){
    valueArray[i] = false;
  }

  for (let i = 0; i < buttons.length; i++){
    console.log(valueArray);
    buttons[i].addEventListener('click', (e) => {
      e.stopImmediatePropagation();
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

};




const addImgSlider = () => { 
  const pictureArea = document.querySelector('.pictures');
  const previousImgButt = document.querySelector('.previous');
  const nextImgButt = document.querySelector('.next');
  const imgArray = [];
  let arrIndex = 0;
  // absolute value for accessing the array elements when clicking 'backwards'.
  let indexAbsoluteVal = 0;

  const myImg1 = new Image(200, 200);
  const myImg2 = new Image(200, 200);
  const myImg3 = new Image(200, 200);
  myImg1.src = img1;
  myImg2.src = img2;
  myImg3.src = img3;

  myImg1.style.display = 'block'; 
  myImg2.style.display = 'none'; 
  myImg3.style.display = 'none'; 


  imgArray.push(myImg1, myImg2, myImg3);
  console.log(imgArray);

  previousImgButt.addEventListener('click', () => {
    const circleCollection = document.getElementsByClassName('circle');
    for (let i = 0; i < circleCollection.length; i++){
      circleCollection[i].classList.remove('clickedCircle');
    }

    imgArray.forEach(img => {img.style.display = 'none';});
    if(arrIndex === 0){
      arrIndex = 2;
      indexAbsoluteVal = 2;
      imgArray[indexAbsoluteVal].style.display = 'block';
      circleCollection[indexAbsoluteVal].classList.add('clickedCircle');
      console.log(arrIndex);
      console.log(indexAbsoluteVal);
    }
    else{
      arrIndex = (arrIndex - 1)%3;
      indexAbsoluteVal = Math.abs(arrIndex);
      imgArray[indexAbsoluteVal].style.display = 'block';
      circleCollection[indexAbsoluteVal].classList.add('clickedCircle');
      console.log(arrIndex);
      console.log(indexAbsoluteVal);
    }
  });
  nextImgButt.addEventListener('click', () => {
    const circleCollection = document.getElementsByClassName('circle');
    if (arrIndex < 0){
      arrIndex = Math.abs(arrIndex);
    }
    // clears all filled circles.
    for (let i = 0; i < circleCollection.length; i++){
      circleCollection[i].classList.remove('clickedCircle');
    }
    // clears slider display
    imgArray.forEach(img => {img.style.display = 'none';});
    arrIndex = (arrIndex + 1)%3;

    imgArray[arrIndex].style.display = 'block';
    circleCollection[arrIndex].classList.add('clickedCircle');
    console.log(arrIndex);   
  });


  // circles.
  const circleCollection = document.getElementsByClassName('circle');
  console.log(circleCollection);
  for (let i = 0; i < circleCollection.length; i++){
    circleCollection[i].addEventListener('click', () => {
      // removes all filled circle css classes.
      for (let i = 0; i < circleCollection.length; i++){
        circleCollection[i].classList.remove('clickedCircle');
      }
        
      imgArray.forEach(img => {img.style.display = 'none';});
      arrIndex = i;
      imgArray[arrIndex].style.display = 'block';
      circleCollection[i].classList.add('clickedCircle');
    });
  }




  pictureArea.appendChild(myImg1);
  pictureArea.appendChild(myImg2);
  pictureArea.appendChild(myImg3);


  
  setInterval(()=>{
    const circleCollection = document.getElementsByClassName('circle');
    if (arrIndex < 0){
      arrIndex = Math.abs(arrIndex);
    }
    // clears all filled circles.
    for (let i = 0; i < circleCollection.length; i++){
      circleCollection[i].classList.remove('clickedCircle');
    }
    // clears slider display
    imgArray.forEach(img => {img.style.display = 'none';});
    arrIndex = (arrIndex + 1)%3;
  
    imgArray[arrIndex].style.display = 'block';
    circleCollection[arrIndex].classList.add('clickedCircle');
    console.log('every 5 seconds!');   
  
  }, 5000);
  



};







addDropDown();
addImgSlider();
