const Footer =({mode})=>{
    const newyear =new Date().getFullYear();
    return(
        <div className={mode?"container-fluid copyrightdark":"container-fluid copyright"}>COPYRIGHT <i className="fa fa-copyright" aria-hidden="true"></i> 2022-{newyear} | Satya Prakash</div>
    )
}

export default Footer;