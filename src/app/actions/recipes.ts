"use server";

export async function getRecipes(name: string) {
  const endpoint = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${encodeURIComponent(name)}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return { error: "Failed to fetch recipe." };
  }
}

export async function getRecipe(id: string) {
  const endpoint = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return { error: "Failed to fetch recipe." };
  }
}
