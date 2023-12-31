import bot from './assets/robot1.svg';
import user from './assets/user1.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');
const deployed_backend_url = "https://ai-assistant-qdtj.onrender.com/"

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = ''; 
    }
  }, 300)
}


function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }

  }, 20)
}

function generateUniqueId() {
  const timeStamp = Date.now();
  const randomNum = Math.random();
  const randomStr = randomNum.toString(16);

  return `id-${timeStamp}-${randomStr}`;
}

function chatStripe (isAi, value, uniqueId) {
  return (
    `
      <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
          <div class="profile">
            <img 
              src="${isAi ? bot : user}"
              alt="${isAi ? 'bot' : 'user'}"
            />
          </div>

          <div class="message" id=${uniqueId}>
            ${value}
          </div>
        </div>
      </div>
    `
  )
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  //user stripe
  chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

  //loader
  form.reset();

  //bot stripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true,  "", uniqueId);

  chatContainer.scrollTop = chatContainer.scrollHeight;
  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv);

  // fetch data from server -> bot response

  const response = await fetch(deployed_backend_url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      prompt: data.get('prompt')
    })
  })
  clearInterval(loadInterval);
  messageDiv.innerHTML = '';

  if(response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim();

    console.log(parsedData);

    typeText(messageDiv, parsedData);
  } else {
    const err = await response.text();
    messageDiv.innerHTML = "Something went wrong...";
    alert(err);
  }

}



form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }

});