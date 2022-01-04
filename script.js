const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault(); // Prevents page reload

        coupon.select(); // Selecting text in Coupon input field
        coupon.setSelectionRange(0, 999999); // setSelecttionRange sets the starts and end positions of the input text
        document.execCommand("copy"); // 'execCommand - copy' copies text in input field to clipboard

        btn.textContent = "Copied!";
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 3000); // SetTimeout function maintains "Copied!" string for 3secs (3000ms) and returns back to orignal text.
};

btn.addEventListener("click", copyText);