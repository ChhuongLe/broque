export default function Footer() {
  return (
    <footer className="bottom-0 bg-[#395e66] ">
      <div className="flex flex-row justify-around items-center">
        <div>
          <h2 className="flex flex-col text-xl lg:text-2xl font-bold">Explore</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Affiliates</p>
        </div>
        <div>
          <h2 className="flex flex-col text-xl lg:text-2xl font-bold">Services</h2>
          <p>Delivery</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>
        <div>
          <h2 className="flex flex-col text-xl lg:text-2xl font-bold">House Of Broque</h2>
          <p>Broque Fan Club</p>
          <p>Broque Blog</p>
          <p>The life of a Broquer</p>
        </div>
      </div>
      <div className="flex flex-col items-center pt-[20px]">
        <p>Privacy Policy</p>
        <p>Terms and conditions</p>
        <p>© 2024 Broque Americans For More Money Please</p>
      </div>
    </footer>
  )
}