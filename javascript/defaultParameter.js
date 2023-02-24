const sendMessage = (dinoName, message = 'How are you?') => {
    console.log(`Hi ${dinoName}, ${message}`);
};

const dinoName = 'Brachio';

sendMessage(dinoName); // Hi Brachio, How are you?