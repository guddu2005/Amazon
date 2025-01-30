import React ,{useEffect , useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const  shufflearray = (arr) =>{
  for(let i=arr.length-1 ;i>0 ;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j] ,arr[i]];
  }
}

export default function Product({ product }) {
  const shuffleProducts = shufflearray(product);
  
  

  return (
    <div className='md:mr-3' >
      {product.map((item, idx) => (
        <div key={idx}  >
          <Link to={`/view/${item._id}`} className='flex mt-5 '>

            <div className='bg-slate-200 md:py-4  md:px-8   rounded-l-lg'>
              {item.images && item.images.length > 0 && (
                <img
                  src={item.images[0].image_url}
                  alt={item.images[0].alt_text}
                  className='md:h-80 md:w-52'
                />
              )}
            </div>
            <div className="md:px-5 border border-gray-300 w-3/4 rounded-r-md">
              <ul className='md:mt-3 md:mb-5'>
                <li className='text-xl font-semibold'>{item.name}</li>
                <li className='text-lg '>{item.description}</li>
                <hr className='md:my-5' />
                <img src="data:image/png;base64,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" alt="" className='h-10 w-24' />
                <li className=' font-semibold flex text-2xl '>
                  {/* Convert $numberDecimal to a string or number */}
                  <sup className='md:mt-5'>₹</sup>{item.price?.$numberDecimal?.toString() || item.price}
                  <p className=' text-sm ml-2 mt-2' >M.R.P. : ${item.price?.$numberDecimal?.toString() || item.price} (54% off)</p>
                </li>
                <li className='text-lg text-orange-500'>&#9733;&#9733;&#9733;&#9733;&#9733;</li>
                <li>
                  <b className='text-yellow-600'>&#x2713;</b>
                  <b className="text-blue-400">Prime</b>
                </li>
                <li>Free Delivery</li>
                <button className='rounded-xl py-1 px-2 border text-sm bg-yellow-400'  >
                  Add to cart
                </button>
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
