import { useNavigate } from "react-router-dom";
import * as authService from "../../Utils/utils";

const Login = () =>{
    const navigate = useNavigate();

    const onSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        let {email, password} = Object.fromEntries(formData);
        const userData = {email, password};
        authService.login()
        .then(data => {
           
            const user = Object.values(data).filter(name => name.email === userData.email);
            
            if (user.length>0) {
                localStorage.setItem('user',user[0].email);
                e.target.reset();

                navigate('/');
            }else{
                navigate('/login');
                e.target.reset();

            }


        })
        
    }
    return (
<form
      style={{ maxWidth: "450px", paddingLeft: "100px", marginTop: "15px" }}
      onSubmit={onSubmit}
    >
      {/* <div className="col-lg-3 col-md-6" style={{ paddingLeft: "100px" }}>
        <h4 className="text-white mb-3">Register</h4> */}
      <h2>Login</h2>

      <div className="position-relative mx-auto" style={{ minWidth: "400px" }}>
        <label htmlFor="email">
            {/* {!isValid && <span style={{color: 'red'}}>Please enter valid email</span>} */}
            </label>
        <input
          className="form-control border-primary w-100 py-3 ps-4 pe-5"
          type="email"
          name="email"
          defaultValue="Your email"
        //   onChange={onChangeHandler}
        />
        <label htmlFor="password"></label>
        <input
          className="form-control border-primary w-100 py-3 ps-4 pe-5"
          type="password"
          name="password"
          defaultValue="Enter password"
        />
        <label htmlFor="remember" style={{margin: '5px'}}>Remeber me</label>
        <input type="checkbox" name="remember" style={{margin: '15px'}} 
        // checked={isChecked} onChange={onIsChecked}
        ></input>
        <button className="btn btn-primary py-2 position-relative top-0 end-0 mt-2 me-2">
          Login
        </button>
      </div>
      {/* </div> */}
    </form>
    )
};
export default Login;
