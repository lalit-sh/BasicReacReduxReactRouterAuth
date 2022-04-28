import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AuthenticateUser } from "../../Redux/actions/identity.action";

const Login = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                        <>
                            <h1>Login</h1>
                            <button 
                                className="btn btn-warning" 
                                onClick={() => props.AuthenticateUser()}
                            >
                                Login
                            </button>
                        </>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    AuthenticateUser
}, dispatch)

const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Login);