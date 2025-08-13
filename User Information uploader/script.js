document.getElementById('userInfoForm').addEventListener('submit', function(e) 
{
    e.preventDefault();
    let formData = new FormData(this);
    let userData = {};
    for (let [key, value] of formData.entries()) {
        userData[key] = value;
    }
    console.log(userData); // You can process the user data here (send to server, display, etc.)
    alert('User data submitted successfully!');
});
    
    // In the above code, we have attached a submit event listener to the form element with the ID  userInfoForm . When the form is submitted, the event listener is triggered, and the form data is collected using the  FormData  constructor. 
    // We then iterate over the form data using the  entries()  method and store the key-value pairs in an object called  userData . Finally, we log the user data to the console and display an alert message to the user. 
    // Conclusion 
    // In this article, we have covered how to use the FormData API to work with form data in JavaScript. We have discussed how to create a new FormData object, append data to it, and retrieve form data. We have also seen how to send form data to the server using the fetch API and how to process form data using JavaScript. 
    // The FormData API is a powerful tool for working with form data in JavaScript. It provides a simple and efficient way to collect, manipulate, and send form data to the server. By using the FormData API, you can easily handle form data in your web applications and build interactive user interfaces. 
    // If you are interested in learning more about JavaScript, check out our collection of  JavaScript tutorials.
