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
        comic_image:null,

    });
     }
     async handleregistersubmit(e)
     {
      toast("Please Wait until we create your comic !!");
      e.preventDefault();
      let str=this.state.text1;
      const apikey="VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";
      str+=" ";
      str+=this.state.text2;    str+=" "; str+=this.state.text3;    str+=" ";str+=this.state.text4;    str+=" ";
      str+=this.state.text5;    str+=" "; str+=this.state.text6;    str+=" ";
      str+=this.state.text7;    str+=" "; str+=this.state.text8;    str+=" "; 
      str+=this.state.text9;    str+=" "; str+=this.state.text10;
      console.log(str);
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: { 
            "Accept": "image/png",
            "Authorization": `Bearer ${apikey}`, 
            "Content-Type": "application/json" 
          },
          method: "POST",
 
          body: JSON.stringify({"inputs": str}),
        }
      );
      if(!response.ok) alert("Please build the comic story correctly and try again !!");
      else
      { 
        alert("done");
        console.log("hogya");

      const result = await response.blob();
      this.setState({
        comic_image:result,
        form_filled: true,
      });

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
                    <img  src={URL.createObjectURL(this.state.comic_image)} />
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
  