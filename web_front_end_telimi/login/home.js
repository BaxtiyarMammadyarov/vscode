const newWindow = window.open('#');
if (newWindow) {
  newWindow.addEventListener('load', () => {
    newWindow.document.open();
    newWindow.document.write(request.responseText);
    newWindow.document.close();
    newWindow.stop();
  }, true)
}