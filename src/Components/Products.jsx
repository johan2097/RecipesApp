import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import pimage3 from '../images/s3.png';

function Products() {
  return (
    <div id="products">
       <h1>Nuevas Recetas</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit omnis, provident laudantium deleniti nisi magnam! Cum expedita natus tenetur, quasi recusandae numquam, ea deserunt, 
        ex molestias illo doloribus aut!</p>
        <div className='a-container'>
           <Productbox image={pimage1} title="Productos1"/>
           <Productbox image={pimage2} title="Productos2"/>
           <Productbox image={pimage3} title="Productos3"/>
           <Productbox image={pimage1} title="Productos4"/>
        </div>
    </div>
  )
}

export default Products