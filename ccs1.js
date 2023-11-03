//sidebar
document.getElementById('arrow').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '30px') 
  {
    sidebar.style.left = '-800px'; 
  } else {
    sidebar.style.left = '30px'; 
  }
});



//flavor

const flavorButtons = document.querySelectorAll(".flavor-button");

// 获取要更新的元素
const dessertTitle = document.querySelector(".dessertstitle2");
const dessertImage = document.querySelector(".flimg");
const dessertDescription = document.querySelector(".dessert-description2");
const dessertReviews=document.querySelector(".user-info")

// 定义不同色块对应的信息
const flavors = {
    flavorbutter: {
        title: "Silvannas (Butter)",
        imageSrc: "silvanasbutterr.jpg",
        description: "Price: ₱ 310.00<br>-Crunchy and creamy frozen cookies, layered with butter cream sandwiched between two cashew-meringue wafers, coated with cookie crumbs. It is best described as the cookie version of a Sans Rival."

    },
    flavorchoco: {
        title: "Silvannas (Chocolate)",
        imageSrc: "silvannaschocolate.jpg",
        description: "Price: ₱ 310.00<br>-Although plain versions are the most common, silvanas occasionally come in various flavors such as chocolate, strawberry, mocha, or mango. Popular throughout the country, these cookies have to be refrigerated and are best served well-chilled or frozen."
    },
    // more
};


// 为每个色块添加点击事件处理程序
flavorButtons.forEach(button => {
    button.addEventListener("click", function() {

        const flavorID = button.id;
        
        dessertTitle.textContent = flavors[flavorID].title;
        dessertImage.src = flavors[flavorID].imageSrc;
        dessertDescription.innerHTML = flavors[flavorID].description;
    });
});
