const base_URL = "https://sophisticated-humane-dandelion.glitch.me"
const fetchAndDisplayProducts = async () => {
  try {
    const response = await fetch(base_URL)
    const products = await response.json()

    const productsContainer = document.querySelector(".products")
    products.forEach((product, index) => {
      const productElement = document.createElement("div")
      productElement.className = "product"
      productElement.id = `product-${product.id}`
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <p>${product.title}</p>
        <span>€${product.price.toFixed(2)}</span>
        <button onclick="deleteProduct(${product.id})">Ištrinti</button>
      `
      productsContainer.appendChild(productElement)
    })
  } catch (error) {
    console.error("Klaida:", error)
  }
}

const deleteProduct = async (productId) => {
    const response = await fetch(`${base_URL}/${productId}`, {
      method: "DELETE",
    })

    if (response.ok) {
      console.log(`Product with ID ${productId} deleted successfully.`)

      const deletedProduct = document.getElementById(`product-${productId}`)
      deletedProduct.parentNode.removeChild(deletedProduct);
    } else {
      console.error("Klaida:", response.statusText)
    }
}

fetchAndDisplayProducts()
