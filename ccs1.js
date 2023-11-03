
document.getElementById('toggle-sidebar').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '10px') 
  {
    sidebar.style.left = '-800px'; 
  } else {
    sidebar.style.left = '10px'; 
  }
});
