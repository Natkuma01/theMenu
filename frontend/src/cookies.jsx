import Cookies from "universal-cookie";

const cookies = new Cookies()

class App extends React.Component{
    constructor(props) {
    super(props)
    this.state= {
        username: "",
        password: "",
        error: "",
        isauthenticated: false,
        }
    } 

    componentDidMount = () => {
        this.getSession();
    }
    getSession = () =>{
        fetch("/api/session", 
        {credentials: "same-origin"})
        .then((res)=>res.json())
        .then((data)=>{console.log(data);
            if(DataTransfer.isauthenticated){
                this.setState({isauthenticated: true})
            } else{
                this.setState({isauthenticated: false})
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    whoami = () => {
        fetch("/api/whoami/", {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("You are logged in as: " + data.username);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    // change password 
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
      }
    // change username
    handleUserNameChange = (event) => {
        this.setState({username: event.target.value});
      }
      // make sure the response is ok
      isResponseOk(response) {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      }
      // Login Method
      login = (event) => {
        event.preventDefault();
        fetch("/api/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": cookies.get("csrftoken"),
            },
            credentials: "same-origin",
            body: JSON.stringify({username: this.state.username, password: this.state.password}),
          })
          .then(this.isResponseOk)
          .then((data) => {
            console.log(data);
            this.setState({isAuthenticated: true, username: "", password: "", error: ""});
          })
          .catch((err) => {
            console.log(err);
            this.setState({error: "Invalid username or password."});
          });
        } 
}
