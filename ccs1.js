//sidebar
document.getElementById('arrow').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '30px') 
  {
    sidebar.style.left = '-800px'; 
  } 
  else {
    sidebar.style.left = '30px'; 
  }
});

//顶部底部
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTop");
  var scrollToBottomButton = document.getElementById("scrollToBottom");

  window.onscroll = function () {
    // Show or hide the buttons based on the scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }

    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      // We are at the bottom of the page
      scrollToBottomButton.style.display = "none";
    } else {
      scrollToBottomButton.style.display = "block";
    }
  };

  // Scroll to top function with smooth scrolling
  scrollToTopButton.onclick = function () {
    smoothScrollTo(0);
  };

  // Scroll to bottom function with smooth scrolling
  scrollToBottomButton.onclick = function () {
    smoothScrollTo(document.body.scrollHeight);
  };

  // Smooth scroll function
  function smoothScrollTo(targetPosition) {
    var currentPosition = window.scrollY || document.documentElement.scrollTop;

    function scroll() {
      currentPosition = currentPosition + (targetPosition - currentPosition) / 10;

      // Check if we've reached the target position
      if (Math.abs(currentPosition - targetPosition) < 1) {
        window.scrollTo(0, targetPosition);
      } else {
        window.scrollTo(0, currentPosition);
        requestAnimationFrame(scroll);
      }
    }

    scroll();
  }
});


















//flavor change
const flavorButtons = document.querySelectorAll(".flavor-button");

//设定一下元素
const dessertTitle        = document.querySelector(".dessertstitle2");
var dessertImage        = document.querySelector(".flimg");
let dessertDescription  = document.querySelector(".dessert-description2");
const dessertReview1      = document.querySelector(".javatext1");
var dessertReview2      = document.querySelector(".javatext2");



flavorButtons.forEach(button =>
  {
      button.addEventListener("click", function() {
  
          const flavorID = button.id;
          
          dessertTitle.textContent      = flavors[flavorID].title;
          dessertImage.src              = flavors[flavorID].imageSrc;
          dessertDescription.innerHTML  = flavors[flavorID].description;
          dessertReview1.innerHTML      = flavors[flavorID].reviews1;
          dessertReview2.innerHTML      = flavors[flavorID].reviews2;
      });
  });

//yeah the more easy part copy paste
const flavors = {
    flavorbutter: {
        title: "Silvanas (Butter)",
        imageSrc: "silvanasbutterr.jpg",
        description: "Price: ₱ 310.00<br>-Crunchy and creamy frozen cookies, layered with butter cream sandwiched between two cashew-meringue wafers, coated with cookie crumbs. It is best described as the cookie version of a Sans Rival.",
        reviews1:"★★★★☆<br>It's delicious, but it's too sweet, and you also can't eat too much of it. However, it has a rich flavor and a special texture.",
        reviews2:"★★★★★<br>Excellent! This dessert is my childhood fav, this is a bit sweet, cold but so good!",
     },

    flavorchoco: {
        title: "Silvanas (Chocolate)",
        imageSrc: "silvannaschocolate.jpg",
        description: "Price: ₱ 330.00<br>-Chocolate Silvanas are a delectable Filipino dessert that consists of layers of chocolate meringue wafers, creamy chocolate buttercream, and a coating of finely crushed cashew nuts.",
        reviews1:"★★★☆☆<br>I'm very picky about chocolate, and this is not good enough for me.",
        reviews2:"★★★★★<br>I am not fond of chocolate stuff, but this taste good! ",
      },

    flavorsta: {
        title: "Silvanas (Strawberry)",
        imageSrc: "silvannasstrawberryy.jpg",
        description: "Price: ₱ 325.00<br>-These sweet treats feature layers of strawberry-flavored meringue wafers sandwiched between a luscious strawberry buttercream filling.Strawberry Silvanas provide a refreshing and summery take on this beloved dessert.",
        reviews1:"★★★☆☆<br>Artificial strawberry flavor, I think it's average",
        reviews2:"★★★★★<br>My nephew loves this so much, he keeps requesting for this. This is not so sweet nor so bland.",
      },

    flavorpanda: {
        title: "Silvanas (Pandan)",
        imageSrc: "silvannaspandann.jpg",
        description: "Price: ₱ 325.00<br>-Buko Pandan meringue rounds with buttercream icing coated with soft cake crumbs. melt-in-your-mouth meringue encases a luscious buttercream icing,creating a dessert that's a perfect balance of textures and flavors.",
        reviews1:"★★★★☆<br>This one's okay",
        reviews2:"★★★★★<br>I don’t like Pandan flavors, but when my mum recommended, thinkin’ bout’ buying again next time. Perfect amount of sweetness.",
      },

    flavortaro: {
        title: "Silvanas (Ube)",
        imageSrc: "silvanasube.jpg",
        description: "Price: ₱ 325.00<br>-A frozen cookie that is crunchy, creamy and delicious with burst of Ube (Purple yam) flavor. Made with cashew meringue wafer with flavored signature buttercream and coated with cake crumbs.",
        reviews1:"★★★★☆<br>Too sweet, but is good.",
        reviews2:"★★★★★<br>A bit sweeter than the other flavors but can’t resist the temptation of ube silvanas!",
      },


};//end of my life





/*Contact box*/ 
function appendMessage(message) {
  var chatHistory = document.getElementById("chat-history");
  var messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatHistory.appendChild(messageElement);
}

function replyWithThanks(answer) {
  // 显示问题的回答
  appendMessage(answer);

  // 清空输入框
  document.getElementById("reply-box").value = ""; 
}

document.getElementById("reply-box").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    replyWithThanks('If you have had a different experience with our desserts, we would love to hear from you. Please share your thoughts with us via email.'); // 回复
  }
});






/*Search*/
    function searchDesserts() {
        // 获取文本
        var searchTerm = document.getElementById("searchBox").value.toLowerCase();

        // 获取甜点元素
        var dessertTitles = document.querySelectorAll('.dessertstitle, .dessertstitle2');

        // 遍历所有标题，查找匹配的甜点
        for (var i = 0; i < dessertTitles.length; i++) {
            var titleText = dessertTitles[i].innerText.toLowerCase();

            // 检查标题
            if (titleText.includes(searchTerm)) {
                // 找到匹配,滚
                dessertTitles[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                break; 
                //hate my life
            }
        }
    }
