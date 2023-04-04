import React, {useState} from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  
  function openBtn(){
    // if(open === true){
      setOpen(true)
    // }
    console.log('up');
    // return 'container show-nav'
    // console.log('opn');
  }
  function closeBtn(){
    setOpen(false)
    // return 'container show-nav'
    // console.log('close');
  }
  return (
    
    <div className="app">
      <div
        style={{
          backgroundColor: '#fafafa',
          transformOrigin: 'top left',
          transition: 'transform 0.5s linear',
          width: '100%',
          minHeight: '100vh',
          padding: '50px',
          transform: open ? 'rotate(-20deg)': 'rotate(0deg)'
      }}
      // onClick={() => setOpen()}
      >
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={closeBtn}>
            <i className="fas fa-times"></i>
          </button>
          <button id="open" onClick={openBtn}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="content">
        <h1>Amazing Blog Post</h1>
        <small>Asish George</small>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt est eaque ab possimus repellat debitis deserunt nulla itaque quisquam, earum at laborum cum. Iusto soluta voluptatibus quibusdam a totam odio reiciendis vitae perferendis, excepturi reprehenderit. Vero molestiae quae iure expedita quia non aspernatur. Quod, sit tempore dolores voluptatibus minima repudiandae, inventore tempora cumque enim illo dignissimos. Totam aliquam nulla hic, nesciunt velit optio? Odit, quod corrupti sed quo assumenda ducimus numquam! Nemo quos iusto consectetur ducimus et voluptas, optio praesentium esse libero exercitationem quod quam corrupti amet, quaerat ex eaque inventore porro autem harum debitis necessitatibus iste. Quam, itaque modi cumque tenetur obcaecati asperiores, maiores eum quasi commodi repellendus recusandae rerum repudiandae nisi mollitia accusantium dolorum laudantium dolor saepe expedita ipsam doloremque nulla aut. Dolorum blanditiis itaque perferendis, dolores vitae doloribus fuga deleniti nulla assumenda! Quis recusandae ex, nam quia necessitatibus rerum ducimus cupiditate, perferendis vero tempore non inventore rem optio sequi reprehenderit praesentium commodi expedita facere! Quo similique qui facilis architecto magni tenetur ad, provident laboriosam animi soluta! Temporibus odit nulla dignissimos modi optio, rem eligendi eius! Voluptate, eius accusamus optio tenetur ullam blanditiis totam, facilis praesentium quis amet veniam, aliquam quaerat repellat. Quaerat quasi iusto voluptas enim dolorum omnis cum minima obcaecati optio harum rerum quod dolores, amet libero voluptatibus quas natus, illo qui officia est nesciunt? Ducimus quam iure quis consequatur vitae exercitationem ullam cum aperiam quos magni enim at eligendi veniam similique, in ratione nulla expedita architecto velit laboriosam maiores repellendus. Alias corrupti in necessitatibus aut.</p>

        <h1>Amazing Blog Post</h1>
        <small>Asish George</small>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt est eaque ab possimus repellat debitis deserunt nulla itaque quisquam, earum at laborum cum. Iusto soluta voluptatibus quibusdam a totam odio reiciendis vitae perferendis, excepturi reprehenderit. Vero molestiae quae iure expedita quia non aspernatur. Quod, sit tempore dolores voluptatibus minima repudiandae, inventore tempora cumque enim illo dignissimos. Totam aliquam nulla hic, nesciunt velit optio? Odit, quod corrupti sed quo assumenda ducimus numquam! Nemo quos iusto consectetur ducimus et voluptas, optio praesentium esse libero exercitationem quod quam corrupti amet, quaerat ex eaque inventore porro autem harum debitis necessitatibus iste. Quam, itaque modi cumque tenetur obcaecati asperiores, maiores eum quasi commodi repellendus recusandae rerum repudiandae nisi mollitia accusantium dolorum laudantium dolor saepe expedita ipsam doloremque nulla aut. Dolorum blanditiis itaque perferendis, dolores vitae doloribus fuga deleniti nulla assumenda! Quis recusandae ex, nam quia necessitatibus rerum ducimus cupiditate, perferendis vero tempore non inventore rem optio sequi reprehenderit praesentium commodi expedita facere! Quo similique qui facilis architecto magni tenetur ad, provident laboriosam animi soluta! Temporibus odit nulla dignissimos modi optio, rem eligendi eius! Voluptate, eius accusamus optio tenetur ullam blanditiis totam, facilis praesentium quis amet veniam, aliquam quaerat repellat. Quaerat quasi iusto voluptas enim dolorum omnis cum minima obcaecati optio harum rerum quod dolores, amet libero voluptatibus quas natus, illo qui officia est nesciunt? Ducimus quam iure quis consequatur vitae exercitationem ullam cum aperiam quos magni enim at eligendi veniam similique, in ratione nulla expedita architecto velit laboriosam maiores repellendus. Alias corrupti in necessitatibus aut.</p>

      </div>
    </div><nav>
        <ul>
          <li><i className="fas fa-home"></i>Home</li>
          <li><i className="fas fa-user-alt"></i>About</li>
          <li><i className="fas fa-envelope"></i>Contact</li>

        </ul>
      </nav>
      
    </div>
  );
}

export default App;
