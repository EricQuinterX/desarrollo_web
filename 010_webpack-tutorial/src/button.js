const Button = {
    html: `<button id="myButton">Click Aqui</button>`,
    action: () => {
        //debugger;
        document.getElementById('myButton').addEventListener('click', () => {console.log('clicked')});
    }
};

export default Button;