const site = window.location.hostname;
console.log(window.document.querySelector('h1'))
const headlineElement= window.document.querySelector('h1.title');
const currentHeadline = headlineElement.textContent;

const buttonElement = document.querySelector(".button-poet");


let newHeadline="";
async function well(Headline) {
    try {
        const response = await fetch('https://rhymer-shivank.onrender.com/rhyme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ headline: Headline })
        });
        const data = await response.json();
        newHeadline = data.rhyme;
       
    } catch (error) {
        console.error('Error generating rhyme:', error);
    }
    return { cancel: true };
  }

  const userConfirmation = confirm("Do you want to Rhyme the Headline?");

  if (userConfirmation) {
     well(currentHeadline).then(() => {
         
         headlineElement.textContent=newHeadline;
         alert("Rhymed the Headline ");
     });
  } else {
     alert("Rhyme operation cancelled by user");
  }