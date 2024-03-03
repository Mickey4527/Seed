const REX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const EmailValidate = (email: string, setError: (error: string) => void) => {
    if(email === ""){
        setError("กรุณากรอกอีเมล");
        return false;
    }
    if(!email.match(REX_EMAIL)){
        setError("รูปแบบอีเมลไม่ถูกต้อง");
        return false;
    }

    setError("");
    return true;

}


export default EmailValidate;