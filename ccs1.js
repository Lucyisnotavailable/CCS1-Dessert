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



//flavor change
const flavorButtons = document.querySelectorAll(".flavor-button");


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


};





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


























document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.querySelector('.search input[type="text"]');
  var searchResultsBox = document.getElementById('searchResults');

  // 监听搜索框的输入事件
  searchInput.addEventListener('input', function () {
      // 显示结果框
      searchResultsBox.style.display = 'block';
  });

  // 监听页面的点击事件
  document.addEventListener('click', function (event) {
      // 如果点击事件不是来自搜索框或结果框，则隐藏结果框
      if (!searchResultsBox.contains(event.target) && event.target !== searchInput) {
          searchResultsBox.style.display = 'none';
      }
  });

  // 阻止结果框点击事件冒泡，以防止被点击时隐藏
  searchResultsBox.addEventListener('click', function (event) {
      event.stopPropagation();
  });

  // 监听搜索框的失去焦点事件
  searchInput.addEventListener('blur', function () {
      // 延迟一小段时间后隐藏结果框，以允许点击事件触发
      setTimeout(function () {
          searchResultsBox.style.display = 'none';
      }, 200);
  });
});