
function forgotPassword(email : string) : Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email === "test@mail.com"){
        reject("ไม่พบอีเมลนี้ในระบบ");
      }
      // have email
      if(email === "complete@mail.com"){
        resolve();
      }
      reject("เกิดข้อผิดพลาด");
    }, 10000);
    
  });
}

export default forgotPassword;