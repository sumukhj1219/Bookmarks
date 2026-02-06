"use server"

export async function addCategory(formData:FormData) {
    const slug = formData.get("slug")
    const name = formData.get("name")

    if(!slug || !name) {
        throw new Error("Invalid inputs")
    }

    const newCategory = {
        slug: slug,
        name: name
    }

    //api call

    console.log(newCategory)
}