const imagesArray = [
  {
    src: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/420092142_6979913335460839_5222481077081615617_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4fvE9aj15agQ7kNvgFlUGbO&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=Ao6fDCf7fQA7dsOQ5B1ZorO&oh=00_AYAR_vrgN2Fcf2c6j0_V1Wnixiuzr774sij_V5GEhOMEjQ&oe=676206C8",
    alt: "A scenic view of a mountain",
  },
  {
    src: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/301474516_5301603073291882_8516139224372732391_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4w2hNTbKgu4Q7kNvgHL7BE-&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=ALLXrbq4WKRIJp2JFvA5TIt&oh=00_AYB87LNdy4rr2YybQFh6MDONmKN_8noE4p4-lWGKbkQWmQ&oe=6761F72C",
    alt: "A beautiful scenic mountains",
  },
  {
    src: "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/467401834_8596557750463048_295271518548298389_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-iRXuY4OfBMQ7kNvgEUtPPV&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=ABKm3Bvbkz8JHhDvx-iYb2D&oh=00_AYBApEqsEBwvtDSA1wpXxBpm6LhWreByela8vDcz-D3QUw&oe=6764F00A",
    alt: "A beautiful old serene cottage",
  },
  {
    src: "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/420061874_6979913325460840_3221354891956473293_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sBFklUloGQgQ7kNvgFNGENX&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=Ax92Sb2RmMSX4K5EUQNOlcM&oh=00_AYAZQdOfqDkAjLr4vzqRbVhI3522t2RDIxay3g3IArA5zA&oe=6764EB2A",
    alt: "A serene lake surrounded by trees and mountains with a bench and a girl sitting on it",
  },
];

const thumbnailContainer = document.getElementById("thumbnailContainer");
const largeImageContainer = document.getElementById("largeImageContainer");

function createThumbnails(imagesArray) {
  imagesArray.forEach(function (image) {
    const thumbnail = document.createElement("img");

    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.className = "thumbnail";

    thumbnail.addEventListener("click", function () {
      createLargeImage(image);
    });

    thumbnailContainer.appendChild(thumbnail);
  });
}

createThumbnails(imagesArray);

function createLargeImage(image) {
  const existingLargeImage = largeImageContainer.querySelector("img");
  if (existingLargeImage) {
    largeImageContainer.removeChild(existingLargeImage);
  }

  const largeImage = document.createElement("img");

  largeImage.src = image.src;
  largeImage.alt = image.alt;
  largeImage.className = "large-image";

  largeImageContainer.appendChild(largeImage);
}
