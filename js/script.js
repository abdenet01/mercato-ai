async function loadProducts(){

    try {

        const response = await fetch(
            "http://localhost:5000/products"
        );


        const products = await response.json();


        console.log("Products from backend:");

        console.log(products);


    } catch(error){

        console.log("Backend connection error:", error);

    }

}


loadProducts();
