document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.querySelector('.message-input');
    const sendButton = document.querySelector('.send-button');
    const messageList = document.querySelector('.message-list');

    function addMessageToChat(message, sender) {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message');
        messageItem.classList.add(sender === 'outgoing' ? 'outgoing' : 'incoming');

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.innerHTML = `<p>${message}</p>`;

        messageItem.appendChild(messageContent);
        messageList.appendChild(messageItem);

        if (sender === 'outgoing') {
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('info-container');

            const tickIcon = document.createElement('span');
            tickIcon.classList.add('tick-icon');
            tickIcon.innerHTML = '&#10003;&#10003;';
            tickIcon.style.color = 'blue';

            const timestamp = document.createElement('div');
            timestamp.classList.add('timestamp');
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timestamp.innerHTML = time;
            timestamp.style.color = 'gray';

            infoContainer.appendChild(tickIcon);
            infoContainer.appendChild(timestamp);

            messageItem.appendChild(infoContainer);
        }

        scrollToBottom();
    }

    sendButton.addEventListener('click', function () {
        const message = messageInput.value.trim();
        if (message !== '') {
            addMessageToChat(message, 'outgoing');
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message !== '') {
                addMessageToChat(message, 'outgoing');
                messageInput.value = '';
            }
        }
    });

    function scrollToBottom() {
        messageList.scrollTop = messageList.scrollHeight;
    }
});
