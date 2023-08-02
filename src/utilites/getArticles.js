

export const getArticles = async() => {
    
       
        try {
            
        const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            const relevantData = data.map(article => {
                
                return {
                    price: article.price,
                    id: article.id,
                    price: article.price,
                    title: article.title,
                    img: article.image,
        
                }
                
            })
            return relevantData
        
        }catch {
            return false
        }
       
  
  
}


