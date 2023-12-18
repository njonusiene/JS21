const base_URL = "https://sophisticated-humane-dandelion.glitch.me"

const loadData = async () => {
  try {
    const res = await fetch(base_URL);
    const data = await res.json() 
  } catch (error) {
    console.error("Klaida:", error)
  }
}

const addProduct = async (imageUrl, title, price) => {
    const response = await fetch(base_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageUrl, title, price }),
    })

    if (response.ok) {
      alert("Produktas sėkmingai pridėtas į sąrašą!")
      window.open("homepage.html", "_blank")
    } else {
      console.error("Klaida:", response.statusText)
    }
}

loadData()

document.getElementById("addProductForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const imageUrl = document.getElementById("imageUrl").value
  const title = document.getElementById("title").value
  const price = document.getElementById("price").value
  addProduct(imageUrl, title, price)
})



