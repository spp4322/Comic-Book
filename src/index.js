import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Comics extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  
  class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          form_filled: false,
          text1:'',
          text2:'',
          text3:'',
          text4:'',
          text5:'',
          text6:'',
          text7:'',
          text8:'',
          text9:'',
          text10:'',
          comic_image:null,

        };
      }
      handlechange(e){
        let  feild=e.target.name;
        let  value=e.target.value;
         this.setState({
             [feild]:value,
         });
     }
     handlerecreate(e){
      this.setState({
        form_filled: false,
        text1:'',
        text2:'',
        text3:'',
        text4:'',
        text5:'',
        text6:'',
        text7:'',
        text8:'',
        text9:'',
        text10:'',
        comic_image1:'',
        comic_image2:'',
        comic_image3:'',
        comic_image4:'',
        comic_image5:'',
        comic_image6:'',
        comic_image7:'',
        comic_image8:'',
        comic_image9:'',
        comic_image10:'',
    });
     }
     async handleregistersubmit(e)
     {
      toast("Please Wait until we create your comic !!");
      e.preventDefault();
      
      const apikey="VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";
      let imgg=new Array(10);
      let string_ar=[this.state.text1,this.state.text2,this.state.text3,this.state.text4,this.state.text5,this.state.text6,this.state.text7,this.state.text8,this.state.text9,this.state.text10]
      
      let cnt=0;
      for(let i=0;i<10;i++)
      {
        let ch="text";
        let numm=i+1;
        ch+=numm.toString();
        let str=this.state.ch;
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: { 
            "Accept": "image/png",
            "Authorization": `Bearer ${apikey}`, 
            "Content-Type": "application/json" 
          },
          method: "POST",
 
          body: JSON.stringify({"inputs": string_ar[i]}),
        }
      );
      if(!response.ok) continue;
      else
      { 
       cnt++;
        console.log("hogya");

      const result = await response.blob();
      imgg[i]=result;
      }
    }
    if(cnt==10){
      alert("done");
    this.setState({
      form_filled: true,
      comic_image1:imgg[0],
      comic_image2: imgg[1],
      comic_image3: imgg[2],
      comic_image4: imgg[3],
      comic_image5:imgg[4],
      comic_image6:imgg[5],
      comic_image7:imgg[6],
      comic_image8:imgg[7],
      comic_image9:imgg[8],
      comic_image10:imgg[9],
  });
}
else
{
   alert("Please build the comic story correctly and try again !!");
}
     }
    render() {
    
        if(this.state.form_filled==false){
      return (
        <div className="mainpage">
        <div className="heading">
            <h1>Comic book</h1>
        </div>
          
           <div  className="form" onSubmit={(e)=> this.handleregistersubmit(e)}>
          
        
           <form>
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your comic!</div>
      <div class="subtitle">Enter your story in paragraphs to create your Comic Book !!</div>

      <div class="input-container ic2">
        <input required name='text1' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Paragraph 1</label>
      </div>
      <div class="input-container ic2">
        <input required name='text2' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Paragraph 2</label>
      </div>
      <div class="input-container ic2">
        <input required name='text3' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 3</label>
      </div>
      <div class="input-container ic2">
        <input required name='text4' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 4</label>
      </div>
      <div class="input-container ic2">
        <input  required name='text5' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 5</label>
      </div>
      <div class="input-container ic2">
        <input required name='text6' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 6</label>
      </div>
      <div class="input-container ic2">
        <input required name='text7' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 7</label>
      </div>
      <div class="input-container ic2">
        <input required name='text8' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 8</label>
      </div>
      <div class="input-container ic2">
        <input  required name='text9' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 9</label>
      </div>
      <div class="input-container ic2">
        <input  required name='text10' onChange={(e)=>this.handlechange(e)} class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Paragraph 10</label>
      </div>
      <button type="text" class="submit" onClick={(e)=> this.handlerecreate(e)}>Submit</button>
      </form>
    </div>
    <ToastContainer/>
  </div>

        
       
      );
        }
        if(this.state.form_filled==true)
        {
            return (
                <div className="mainpage">
                <div className="heading">
            <h1>Comic book</h1>
            </div>
                
                  <div className="image-blob">
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image1)} />
                    <h3>1</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image2)} />
                    <h3>2</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image3)} />
                    <h3>3</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image4)} />
                    <h3>4</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image5)} />
                    <h3>5</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image6)} />
                    <h3>6</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image7)} />
                    <h3>7</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image8)} />
                    <h3>8</h3>
                    </div>
                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image9)} />
                    <h3>9</h3>
                    </div>

                    <div>
                    <img  src={URL.createObjectURL(this.state.comic_image10)} />
                    <h3>10</h3>
                    </div>


                    <button type="text" class="submit" onClick={(e)=> this.handlerecreate(e)} >Recreate Comic</button>
                    </div>
                  </div>
            
              );
        }
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  