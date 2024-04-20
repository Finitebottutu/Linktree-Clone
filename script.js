const linkButton = document.querySelectorAll(".fa-solid");

linkButton.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("links");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

    alert("Link has been copied to clipboard");
  })
})


document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Social Links | Jomon Joy";
        $("#favicon").attr("href","images/logo.png");
    }
    else {
        document.title = "Come Back To Social Links";
        
    }
});
