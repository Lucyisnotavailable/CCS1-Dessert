document.getElementById('arrow').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '30px') 
  {
    sidebar.style.left = '-800px'; 
  } else {
    sidebar.style.left = '30px'; 
  }
});