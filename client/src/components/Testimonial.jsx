import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      
      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KuKmTTi8sMS7tZhtTGj5caGV2qnme6_hHg&usqp=CAU"
          alt="Avatar"
          style={{ width: 90 }}
        />
        <p>
          <span>Chris Fox.</span> <br /> 
          <p> Authentic Buyer</p>
        </p>
        <p>Love the The material and the over all quality of the product.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero earum possimus repudiandae odit facere obcaecati eum aperiam commodi voluptatibus soluta dolorum maxime, rerum officia. Possimus repellendus optio consectetur nulla veniam non fuga iusto, officiis velit necessitatibus, culpa asperiores, rem incidunt fugiat sapiente inventore quia dolorum. Incidunt, aliquid quas nostrum aliquam modi reiciendis, delectus natus voluptate dolorum quo culpa error itaque alias cum! Aspernatur.
        </p>
      </div>
      <div className="container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/589fdb35e3df28dd5f16ee99/1572396263343-N6TUSGSWE3LAUGP2U6MB/Cindy%2BFANTACI%2Bcopywriting%2Btestimonial"
          alt="Avatar"
          style={{ width: 90 }}
        />
        <p>
          <span>Rebecca Flex.</span>
          <br /> CEO at Company.
        </p>
        <p>Best quality ever it just make me feel like i'm in my childhood</p>
      </div>
    </>
  );
};
export default Testimonial;
