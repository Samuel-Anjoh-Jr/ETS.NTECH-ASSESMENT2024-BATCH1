async function includeHTML(elementId, file) {
    const response = await fetch(file);
    const htmlContent = await response.text();
    document.getElementById(elementId).innerHTML = htmlContent;
  }
  
  includeHTML('samuel','./pages/samuel_page.html');
  includeHTML('pride','./pages/pride_page.html');
  includeHTML('prince','./pages/prince_page.html');