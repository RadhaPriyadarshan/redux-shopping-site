import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateProductQuantity, deleteProduct } from '../redux/productActions';

export default function Cart() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [products]);

  const handleQuantityChange = (e, productId) => {
    const { value } = e.target;
    dispatch(updateProductQuantity(productId, parseInt(value)));
  };

  const handleDeleteProduct = productId => {
    dispatch(deleteProduct(productId));
  };

  const calculateTotal = () => {
    let subtotalValue = 0;
    products.forEach(product => {
      const quantity = product.quantity || 1;
      subtotalValue += product.price * quantity;
    });
    const shipping = 0;
    const totalValue = subtotalValue + shipping;
    setSubtotal(subtotalValue);
    setTotal(totalValue);
  };

  return (
    <div className="cart ">
            <h2 >Cart</h2>
            
            <div className="container row justify-content-center " style={{ maxHeight: "90vh", overflowY: "auto" }}>
                {products.map((product)=>(<>
                 <div className="row " key={product.id}>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-5" >
                                <img src="https://m.media-amazon.com/images/I/4105IiC5tDL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                            </div>
                            <div className="col-7  " >
                                <h1>{product.title}</h1>
                                
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Details & Care
                                    </button>
                                    </h2>
                                    <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample" 
                                    >
                                    <div className="accordion-body">{product.description}</div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Sustainability
                                    </button>
                                    </h2>
                                    <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample" 
                                    >
                                    <div className="accordion-body">Rating: {product.rating}/5</div>
                                    </div>
                                    </div>
                                    </div>
                                    
                            </div>

                        </div> 
                        <div className="row">

                        </div>
                    </div>  
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="row justify-content-end">
                            <div className="col-md-6">
                            <select
                                            value={product.quantity} // Use value instead of defaultValue
                                            className="form-select quantity_changer"
                                            onChange={(e) => handleQuantityChange(e, product.id)}
                                        >
                                            {[1, 2, 3, 4, 5].map(value => (
                                                <option key={value} value={value}>{value}</option>
                                            ))}
                                        </select>
                            </div>
                            <div className="col-md-6">
                                <h5>${product.price}</h5>
                            </div>
                            </div>
                            <div className="row justify-content-end">
                            <div className="col-md-6"></div>
                            <div className="col-md-6 align-self-end" >
                                <button type="submit" className="btn btn-link" onClick={() => handleDeleteProduct(product.id)}>
                                DELETE
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </>))}
               
            
            </div>

            
           <div className="py-5 cart-bottom">
            <div className="row mb-3"> 
                <div className="col-6 text-start"><b>Sub-total:</b></div> <div className="col-6  d-flex justify-content-end" ><p>${subtotal}</p></div>
                <div className="col-6 text-start"><b>shipping:</b></div> <div className="col-6  d-flex justify-content-end"><p>free</p></div>
                <div className="col-6 text-start"><b>Total:</b></div> <div className="col-6  d-flex justify-content-end"><p>${total}</p></div>
            </div>      
          </div>

            </div>
  );
}
