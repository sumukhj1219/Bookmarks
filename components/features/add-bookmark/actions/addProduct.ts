"use server"


export async function addProduct(formData: FormData) {
    const url = formData.get('url') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;


    if (!url) {
        throw new Error("URL is required");
    }

    const newProduct = {
        title: title, 
        description: description,
        category: category,
        images: ["/placeholder.png"],
        rating: 0,
    };

    const response = await fetch('https://dummyjson.com/products/add', {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
            title: newProduct.title,
            description: newProduct.description,
            category: newProduct.category,
            images: newProduct.images,
            rating: newProduct.rating
        })
    })
    const data = await response.json()
    console.log(data)

    return data
}