import { Link,useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const {idbarang} = useParams();
  const produk = products.find((produk)=>produk.id === idbarang)
  console.log(produk)
  const {image,name} = produk;
  return (
    <section className='section product'>
        <img src={image} alt={name} />
        <h5>{name}</h5>
      <Link to={'/barang'} className='btn'>Back</Link>
    </section>
  );
};

export default SingleProduct;
