const switchImage = (event) => {
    const mainImage = document.getElementById('preview-img');
    const oldImageSrc = mainImage.src;
    const newImage = event.target;

    mainImage.src = newImage.src;
    newImage.src = oldImageSrc;
};

document.getElementById('preview-1').addEventListener('click', switchImage);
document.getElementById('preview-2').addEventListener('click', switchImage);