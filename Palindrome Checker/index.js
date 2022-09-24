const btn = document.querySelector(".btn");


const palindrome = document.querySelector(".palindrome");


function checkPalindrome() {
    const input = document.getElementById("input");
    var left = 0;
    var str = input.value;
    var right = str.length - 1;
    var flag = false;
    if (!input.value) palindrome.innerHTML = "Please Write Something";
    else {
        
        while (left < right) {
            if (str[left] !== str[right]) {
                flag = true;
                break;
            }
            left++;
            right--;
        }
        if (flag) palindrome.innerHTML = `${str} is Not Palindrome`;
        else palindrome.innerHTML = `${str} is a Palindrome`;
        // input.value = null;
    }

}



btn.addEventListener("click", checkPalindrome);

