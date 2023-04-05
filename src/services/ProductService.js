import axios from "axios";

const BASE_API = "http://localhost:9000/api/products" ;

class ProductService{

   getProducts(){
    return axios.get(BASE_API + "/all")
;

   }


   insertProduct(product){
      return axios.post(BASE_API + "/insert" , product)
  ;
  
     }

     getProductsById(id){

      return axios.get(BASE_API + "/find/" + id)
     }

     updateProduct(id, product){
      return axios.put(BASE_API + "/update/" + id,product)
     }

}

 export default new ProductService();